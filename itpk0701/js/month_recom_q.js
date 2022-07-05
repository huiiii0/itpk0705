$(function () {
    /*이달의 책 슬라이드*/
    function moslide() {
        $(".moslide").stop().animate({ marginLeft: -441 }, function () {
            $(".moslide li:first").appendTo(".moslide");
            $(".moslide").css({ marginLeft: 0 });
        });
    }

    function monext() {
        $(".moslide").stop().animate({ marginLeft: -441 }, function () {
            $(".moslide li:first").appendTo(".moslide");
            $(".moslide").css({ marginLeft: 0 });
        });
    }

    function moprev() {
        $(".moslide li:last").prependTo(".moslide");
        $(".moslide").css({ marginLeft: -441 });
        $(".moslide").stop().animate({ marginLeft: -0 });
    }

    setInterval(moslide, 7000);

    $("#month .monthRec .box1 .mprev").click(function () {
        moprev();
    });

    $("#month .monthRec .box1 .mnext").click(function () {
        monext();
    });
    /*이달의 책 특가,정가할인 멀티페이지*/
    var i = 0;
    $("#month #booklist li").click(function () {
        i = ($(this).index()) + 1
        $("#month .section > article").hide()

        $("#month .section > article:nth-of-type" + "(" + i + ")").stop().fadeIn("fast")
    })

    $("#month #booklist li").eq(0).click(function () {
        $(this).css({ "border": "1px solid #000", "border-bottom": "none" });
        $("#month #booklist li").eq(1).css({ "border": "none", "border-bottom": "1px solid #000" });
    });

    $("#month #booklist li").eq(1).click(function () {
        $(this).css({ "border": "1px solid #000", "border-bottom": "none" });
        $("#month #booklist li").eq(0).css({ "border": "none", "border-bottom": "1px solid #000" });
    });

});