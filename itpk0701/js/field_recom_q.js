$(function () {
    /*분야별추천 멀티페이지*/
    var i = 0;
    $("#field #booklist li").mouseenter(function () {
        i = ($(this).index()) + 1
        $("#field .section > article").hide()

        $("#field #booklist li").css({
            "border-bottom": "none",
            "color": "#000	"
        })

        $("#field #booklist li:hover").css({
            "border-bottom": "2px solid #e66a57",
            "color": "#e66a57"
        })

        $("#field .section > article:nth-of-type" + "(" + i + ")").stop().fadeIn("fast")
    })
});