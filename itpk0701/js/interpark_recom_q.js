$(function () {
    /*인터파크추천 슬라이드*/
    function slide1() {
        $(".bslide").stop().animate({ marginLeft: -510 }, function () {
            $(".bslide li:first").appendTo(".bslide");
            $(".bslide").css({ marginLeft: 0 });
        });
    }

    function anext() {
        $(".bslide").stop().animate({ marginLeft: -510 }, function () {
            $(".bslide li:first").appendTo(".bslide");
            $(".bslide").css({ marginLeft: 0 });
        });
    }

    function aprev() {
        $(".bslide li:last").prependTo(".bslide");
        $(".bslide").css({ marginLeft: -510 });
        $(".bslide").stop().animate({ marginLeft: 0 });
    }

    setInterval(slide1, 7000);

    $(".aprev").click(function () {
        aprev();
    });

    $(".anext").click(function () {
        anext();
    });

    //왼쪽 사이드 배너 슬라이드
    function sidenext() {
        $("#sideBanner .sideslide").stop().animate({ marginLeft: -100 }, function () {
            $("#sideBanner .sideslide li:first").appendTo("#sideBanner .sideslide");
            $("#sideBanner .sideslide").css({ marginLeft: 0 });
        });
    }

    function sideprev() {
        $("#sideBanner .sideslide li:last").prependTo("#sideBanner .sideslide");
        $("#sideBanner .sideslide").css({ marginLeft: -100 });
        $("#sideBanner .sideslide").stop().animate({ marginLeft: 0 });
    }

    $("#sideBanner .sidenext").click(function () {
        sidenext();
    });

    $("#sideBanner .sideprev").click(function () {
        sideprev();
    });
});