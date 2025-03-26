$(document).ready(function () {
    $("#btnHide").click(function () {
        $("#paragraf").hide();
    })

    $("#btnShow").click(function () {
        $("#paragraf").show();
    })

    $("#btnFadeIn").click(function () {
        $("#paragraf").hide();
        $("#paragraf").fadeIn(1000);
    })

    $("#btnToggle").click(function () {
        $("#paragraf").toggle();
    })

    $("#btnText").click(function () {
        var text = $("#paragraf").text();
        $("#resultat").text(text);
    })

    $("#btnVal").click(function (){
        var val = $("#inputText").val();
        $("#resultat").text(val);
    })

    $("#btnAttr").click(function (){
        var attr = $("#link").attr("href");
        $("#resultat").text(attr);
    })




})