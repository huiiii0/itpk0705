$(function () {
    /*미디어추천 슬라이드*/
    function mslide() {
        $(".mslide").stop().animate({ marginLeft: -340 }, function () {
            $(".mslide li:first").appendTo(".mslide");
            $(".mslide").css({ marginLeft: 0 });
        });
    }

    function mnext() {
        $(".mslide").stop().animate({ marginLeft: -340 }, function () {
            $(".mslide li:first").appendTo(".mslide");
            $(".mslide").css({ marginLeft: 0 });
        });
    }

    function mprev() {
        $(".mslide li:last").prependTo(".mslide");
        $(".mslide").css({ marginLeft: -340 });
        $(".mslide").stop().animate({ marginLeft: 0 })
    }

    setInterval(mslide, 8000);

    $("#choiceWrap .box2 .prev").click(function () {
        mprev();
    });

    $("#choiceWrap .box2 .next").click(function () {
        mnext();
    });

});

$(function () {
    /*이책어때 슬라이드*/
    function hnext() {
        $(".hslide").stop().animate({ marginLeft: -195 }, function () {
            $(".hslide li:first").appendTo(".hslide");
            $(".hslide").css({ marginLeft: 0 });
        });
    }

    function hprev() {
        $(".hslide li:last").prependTo(".hslide");
        $(".hslide").css({ marginLeft: -195 });
        $(".hslide").stop().animate({ marginLeft: 0 });
    }

    $("#choice .box3 .hnext").click(function () {
        hnext();
    });

    $("#choice .box3 .hprev").click(function () {
        hprev();
    });
})