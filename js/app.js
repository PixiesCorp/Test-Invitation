// funcion de mapa 1//
function iniciarMap(){
  var coord = {lat: 31.73968,lng: -106.42502};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });

  var coord2 = {lat: 31.68110,lng: -106.38955};
  var map2 = new google.maps.Map(document.getElementById('map2'),{
    zoom: 15,
    center: coord2,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });
  var marker2 = new google.maps.Marker({
    position: coord2,
    map: map2
  });
}