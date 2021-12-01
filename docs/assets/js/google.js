// // Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAlO8IvBSzg5zrhv4xlFve_BjtWEDyV3Y0&libraries=places&callback=initMap';
// script.async = true;

// // Attach your callback function to the `window` object
// window.initMap = function() {
//   // JS API is loaded and available
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);

// var getMap = function () {
//   fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyAlO8IvBSzg5zrhv4xlFve_BjtWEDyV3Y0&libraries=places&callback=initMap")
//   console.log("working?")
// }
var mapContainerEl= document.querySelector("#map");

function initMap() {
  var options = {     
      zoom: 10,
      center: { lat: 33.933241, lng: -84.340288 }
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
      position: { lat: 33.933241, lng: -84.340288 },
      map: map
  
    });
    mapContainerEl.appendChild(marker)
}


initMap();