//저자,역자소개
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"일본문학2" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $("#introAuthor .authorBody .boxBody2 .box").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");        
            $("#introAuthor .authorBody .boxBody2 .box").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');            
        }
              

             

             
              

        
    });