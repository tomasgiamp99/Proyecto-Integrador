window.onload = function(){

// Api's
// GENEROSSSSSSS
console.log("äsofihjaks0daosj");
fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c0e01d0df95b98b689dcb3af16007742&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var div = document.querySelector(".generos_container");
  var gnre = datos.genres;

  for (var i=0; i<gnre.length; i++){
    div.innerHTML += '<li><a href="series_xgenero.html?id='+ datos.genres[i].id +'">'+  datos.genres[i].name + '</a></li>'
  }
})





















}
