//슬라이드 밑 배너
$.ajax({

    url: "./js/sub/sub_event.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;                
                var txt1 = data[i].txt1;
                var txt2 = data[i].txt2;

                $("#bookInfo .slideWrap .eventslide li .imgbox").eq(i).append('<a href="#"><img src="'+data[i].url+'"></h1>');                
                $("#bookInfo .slideWrap .eventslide li .boxTxt").eq(i).append('<h4>'+data[i].txt1+'</h4>');
                $("#bookInfo .slideWrap .eventslide li .boxTxt").eq(i).append('<p>'+data[i].txt2+'</p>');
            }

        }

    }

});