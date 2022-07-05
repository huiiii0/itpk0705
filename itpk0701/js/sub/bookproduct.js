//슬라이드 밑 배너
$.ajax({

    url: "./js/sub/bookproduct.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                

                $("#bookInfo .bookproduct .box1 .book .imgbox").eq(i).append('<a href="#"><img src="'+data[i].url+'"></h1>');
                $("#bigViewWrap .imgbox").eq(i).append('<a href="#"><img src="'+data[i].url+'"></h1>');
                $("#bigViewWrap .boxTxt").eq(i).append('<h1>'+data[i].txt1+'</h1>');
                $("#bigViewWrap .boxTxt").eq(i).append('<p>'+data[i].txt2+'</p>');
            }

        }

    }

});