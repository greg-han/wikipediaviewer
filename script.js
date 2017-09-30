$(document).ready(function(){
 $('#search').on('click',function(event) {
   getSearch();
  });
 $('#random').on('click',function(event) {
   random();
  });
 $("#srch").keyup(function(event){
    if(event.keyCode == 13){
        getSearch();
      }
  });
});

var formDat = '';

function random(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}
                  
function getSearch(){
/*var formDat = $("srch").val();*/
formDat = document.getElementById("srch").value;
document.getElementById("srch").value = '';
$.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: { 
               action: 'query', 
               list: 'search', 
               srsearch: formDat, 
               format: 'json' },
               dataType: 'jsonp',
               success: function (data) {
             
               for (var i = 0; i <= 9; i++) {
		            var title = data.query.search[i].title;
		            var fixedtitle = title.replace(/ /g, "_");
                var snippet = data.query.search[i].snippet;
            
        var element = "<a href='https://en.wikipedia.org/wiki/" + fixedtitle +"'target='_blank'>" + title + "</a>" + "<br>" + snippet;
       document.getElementById("r" +i).innerHTML = element;
	          }
        }
        });
}



