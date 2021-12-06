$("#pdfDown").on('click',function(){
    let element = $("#article");    // ���domԪ����Ҫ����pdf��div����
    let w = element.width();    // ��ø������Ŀ�
    let h = element.height();    // ��ø������ĸ�
    let offsetTop = element.offset().top;    // ��ø��������ĵ������ľ���
    let offsetLeft = element.offset().left;    // ��ø��������ĵ�����ľ���
    let canvas = document.createElement("canvas");
    canvas.width = w * 2;    // ��������&&�߷Ŵ�����
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
        //һҳpdf��ʾhtmlҳ�����ɵ�canvas�߶�;
        let pageHeight = contentWidth / 592.28 * 841.89;
        //δ����pdf��htmlҳ��߶�
        let leftHeight = contentHeight;
        //ҳ��ƫ��
        let position = 0;
        //a4ֽ�ĳߴ�[595.28,841.89]��htmlҳ�����ɵ�canvas��pdf��ͼƬ�Ŀ��
        let imgWidth = 595.28;
        let imgHeight = 592.28 / contentWidth * contentHeight;

        let pageData = canvas.toDataURL('image/jpeg', 1.0);
        //   let oCanvas = document.getElementById("print");
        // Canvas2Image.saveAsJPEG(oCanvas);
        let pdf = new jsPDF('', 'pt', 'a4');

        //�������߶���Ҫ���֣�һ����htmlҳ���ʵ�ʸ߶ȣ�������pdf��ҳ��߶�(841.89)
        //������δ����pdfһҳ��ʾ�ķ�Χ�������ҳ
        if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        } else {    // ��ҳ
            while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //������ӿհ�ҳ
                if (leftHeight > 0) {
                    pdf.addPage();
                }
            }
        }
        pdf.save('���ۺ�ͬ.pdf');
    })
})