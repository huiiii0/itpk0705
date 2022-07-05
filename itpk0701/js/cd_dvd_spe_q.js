$(function () {
    /*CD슬라이드*/
    function eslide1() {
        $(".eslide1").stop().animate({ marginLeft: -323.5 }, function () {
            $(".eslide1 li:first").appendTo(".eslide1");
            $(".eslide1").css({ marginLeft: 0 });
        });
    }

    function enext() {
        $(".eslide1").stop().animate({ marginLeft: -323.5 }, function () {
            $(".eslide1 li:first").appendTo(".eslide1");
            $(".eslide1").css({ marginLeft: 0 });
        });
    }

    function eprev() {
        $(".eslide1 li:last").prependTo(".eslide1");
        $(".eslide1").css({ marginLeft: -323.5 });
        $(".eslide1").stop().animate({ marginLeft: 0 });
    }

    setInterval(eslide1, 8000);

    $("#etc .eprev1").click(function () {
        eprev();
    });

    $("#etc .enext1").click(function () {
        enext();
    });

    /*DVD 슬라이드*/
    function eslide2() {
        $(".eslide2").stop().animate({ marginLeft: -323.5 }, function () {
            $(".eslide2 li:first").appendTo(".eslide2");
            $(".eslide2").css({ marginLeft: 0 });
        });
    }

    function enext2() {
        $(".eslide2").stop().animate({ marginLeft: -323.5 }, function () {
            $(".eslide2 li:first").appendTo(".eslide2");
            $(".eslide2").css({ marginLeft: 0 });
        });
    }

    function eprev2() {
        $(".eslide2 li:last").prependTo(".eslide2");
        $(".eslide2").css({ marginLeft: -323.5 });
        $(".eslide2").stop().animate({ marginLeft: 0 });
    }

    setInterval(eslide2, 8000);

    $("#etc .eprev2").click(function () {
        eprev2();
    });

    $("#etc .enext2").click(function () {
        enext2();
    });

    /*특별판 버튼클릭시 슬라이드*/
    function spnext() {
        $(".eslide3").stop().animate({ marginLeft: -323.5 }, function () {
            $(".eslide3 li:first").appendTo(".eslide3");
            $(".eslide3").css({ marginLeft: 0 });
        });
    }

    function spprev() {
        $(".eslide3 li:last").prependTo(".eslide3");
        $(".eslide3").css({ marginLeft: -323.5 });
        $(".eslide3").stop().animate({ marginLeft: 0 });
    }

    $("#etc .spprev").click(function () {
        spprev();
    });

    $("#etc .spnext").click(function () {
        spnext();
    });
});