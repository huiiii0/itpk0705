//추천도서1
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"소설" },
    headers:{Authorization: "KakaoAK 8838653f4f456f231674727fcaedabef"}
  })
    .done(function( msg ) {

        var lis = document.getElementsByTagName('li');

        console.log( msg.documents[0].title );
        console.log( msg.documents[0].thumbnail );

        for(var i=0; i<lis.length; i++){
            $("#recomBook .bBslide1 li").eq(i).append("<a href='#'><img src='"+msg.documents[i].thumbnail+"'/></a></div>");
            $("#recomBook .bBslide1 li").eq(i).append('<h3>'+msg.documents[i].title+'</h3>');            
        }
    });