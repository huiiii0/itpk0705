//슬라이드 밑 배너
$.ajax({

    url: "./js/sub/livebook.json",

    dataType: "json",

    success : function(data){

        if(data.length>0){


            for(var i in data){
                var url = data[i].url;
                

                $("#liveBody .liveslide li").eq(i).append('<img src="'+data[i].url+'">');                
                $("#liveBody .box2 .imgboxWrap .imgbox").eq(i).append('<img src="'+data[i].url+'">');                
            }

        }

    }

});