//html5 给typecho添加 复制代码 功能
let codeblocks = document.getElementsByTagName("pre")
//循环每个pre代码块，并添加 复制代码

for (let i = 0; i < codeblocks.length; i++) {
    //显示 复制代码 按钮
    currentCode = codeblocks[i]
    currentCode.style = "position: relative;"
    let copy = document.createElement("div")
    copy.style = "position: absolute;right: 4px;\
    top: 4px;background-color: white;padding: 2px 8px;\
    margin: 8px;border-radius: 4px;cursor: pointer;\
    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);"
    copy.innerHTML = "复制"
    currentCode.appendChild(copy)
    copy.style.visibility = "hidden"
}


for (let i = 0; i < codeblocks.length; i++) {
    !function (i) {

        codeblocks[i].onmouseover = function () {
            codeblocks[i].childNodes[1].style.visibility = "visible"
        }

        /**
         * 复制代码
         * @param event
         */
        function copyCode(event) {
            const range = document.createRange();

            //范围是 code，不包括刚才创建的div
            range.selectNode(codeblocks[i].childNodes[0]);

            const selection = window.getSelection();
            if (selection.rangeCount > 0) selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');

            codeblocks[i].childNodes[1].innerHTML = "复制成功"
            setTimeout(function () {
                codeblocks[i].childNodes[1].innerHTML = "复制"
            }, 1000);
            //清除选择区
            if (selection.rangeCount > 0) selection.removeAllRanges();
        }
        codeblocks[i].childNodes[1].addEventListener('click', copyCode, false);
    }(i);

    !function (i) {
        //鼠标从代码块移开 则不显示复制代码按钮
        codeblocks[i].onmouseout = function () {
            codeblocks[i].childNodes[1].style.visibility = "hidden"
        }
    }(i);
}