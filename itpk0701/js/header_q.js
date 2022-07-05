$(function () {
    /*마이페이지/언어선택*/
    $(".login li").mouseover(function () {
        $(this).children(".sub").stop().show();
    });
    $(".login li").mouseout(function () {
        $(".sub").hide();
    });

    /*전체카테고리*/
    $("#categoryAll").click(function () {
        $(".categoryMenu").fadeToggle("fast");
    });

    /*탑배너*/
    $("#topBanner .box3").click(function () {
        $("#topBanner").css({ "display": "none" });
    });

    /*사이드로그인*/
    $(function () {
        $(".loginfixed > .nextbox").click(function () {
            if ($(".loginfixed").css("width") == "8px") {
                $(".loginfixed").stop().animate({
                    width: '145',
                })
                $(".prev").show()
                $(".next").hide()
            } else {
                $(".loginfixed").stop().animate({
                    width: '8',
                })
                $(".next").show()
                $(".prev").hide()
            }
        })
    })
});         