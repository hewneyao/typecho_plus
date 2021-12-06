$("#pdfDown").on('click',function(){
    let element = $("#article");    // 这个dom元素是要导出pdf的div容器
    let w = element.width();    // 获得该容器的宽
    let h = element.height();    // 获得该容器的高
    let offsetTop = element.offset().top;    // 获得该容器到文档顶部的距离
    let offsetLeft = element.offset().left;    // 获得该容器到文档最左的距离
    let canvas = document.createElement("canvas");
    canvas.width = w * 2;    // 将画布宽&&高放大两倍
    canvas.height = h * 2;
    let context = canvas.getContext("2d");
    let scale = 2;
    context.scale(2, 2);
    let opts = {
        scale: scale,
        canvas: canvas,
        width: w,
        height: h,
        useCORS: true,
        background: '#FFF'
    }
    console.log(opts);
    html2canvas(element, opts).then(function (canvas) {
        allowTaint: false;
        taintTest: false;
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        //一页pdf显示html页面生成的canvas高度;
        let pageHeight = contentWidth / 592.28 * 841.89;
        //未生成pdf的html页面高度
        let leftHeight = contentHeight;
        //页面偏移
        let position = 0;
        //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        let imgWidth = 595.28;
        let imgHeight = 592.28 / contentWidth * contentHeight;

        let pageData = canvas.toDataURL('image/jpeg', 1.0);
        //   let oCanvas = document.getElementById("print");
        // Canvas2Image.saveAsJPEG(oCanvas);
        let pdf = new jsPDF('', 'pt', 'a4');

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        } else {    // 分页
            while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if (leftHeight > 0) {
                    pdf.addPage();
                }
            }
        }
        pdf.save('销售合同.pdf');
    })
})