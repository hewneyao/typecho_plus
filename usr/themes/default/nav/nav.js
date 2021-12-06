//�������в���title����䵽div AnchorContent��

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
    if (text == "Ŀ¼[-]") {
        $(this).html("Ŀ¼[+]");
        $(this).attr({"title": "չ��"});
    } else {
        $(this).html("Ŀ¼[-]");
        $(this).attr({"title": "����"});
    }
    $("#AnchorContent").toggle();
});