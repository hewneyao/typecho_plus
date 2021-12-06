//在文章中查找title并填充到div AnchorContent中

$(function () {
    $(".post-content").find("h2,h3,h4,h5,h6").each(function (i, item) {
        let tag = $(item).get(0).localName;
        console.log(tag);
        $(item).attr("id", "nav" + i);
        $("#AnchorContent").append('<li> <a class="nav-' + tag + ' anchor-link" onclick="javascript:void(0)" href="#nav' + i + '">' + $(this).text() + '</a></li>');

        $(".nav-h2").css("margin-left", 0);
        $(".nav-h3").css("margin-left", 20);
        $(".nav-h4").css("margin-left", 40);
        $(".nav-h5").css("margin-left", 60);
        $(".nav-h6").css("margin-left", 80);
    });
})

$("#AnchorContentToggle").click(function () {
    let text = $(this).html();
    if (text == "目录[-]") {
        $(this).html("目录[+]");
        $(this).attr({"title": "展开"});
    } else {
        $(this).html("目录[-]");
        $(this).attr({"title": "收起"});
    }
    $("#AnchorContent").toggle();
});