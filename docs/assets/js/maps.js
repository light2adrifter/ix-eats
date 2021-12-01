mapboxgl.accessToken = 'pk.eyJ1IjoiYWNtY2Fsdm8iLCJhIjoiY2twZDZ1aDM2MWNobDJwbXN5OXozaDVjdCJ9.W2iTrhPcA7mTvbxGlEcrww';
const map = new mapboxgl.Map({
container: 'map', // Container ID
style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
center: [-81.563873,  28.385233], // Starting position [lng, lat]
zoom: 12 // Starting zoom level
});
 
const marker = new mapboxgl.Marker() // Initialize a new marker
.setLngLat([-81.563873,  28.5384,]) // Marker [lng, lat] coordinates
.addTo(map); // Add the marker to the map
 
const geocoder = new MapboxGeocoder({
// Initialize the geocoder
accessToken: mapboxgl.accessToken, // Set the access token
mapboxgl: mapboxgl, // Set the mapbox-gl instance
marker: false, // Do not use the default marker style
placeholder: 'Search for places in Orlando', // Placeholder text for the search bar
bbox: [-81.663873, 28.385233, -81.463873, 29.885233], // Boundary for Berkeley
proximity: {
longitude: -81.563873,
latitude: 28.5384
} // Coordinates of Orlando, florida
});
 
// Add the geocoder to the map
map.addControl(geocoder);
 
// After the map style has loaded on the page,
// add a source layer and default styling for a single point
map.on('load', () => {
map.addSource('single-point', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': []
}
});
 
map.addLayer({
'id': 'point',
'source': 'single-point',
'type': 'circle',
'paint': {
'circle-radius': 10,
'circle-color': '#448ee4'
}
});
 
// Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
//  Add a marker at the result's coordinates
geocoder.on('result', (event) => {
map.getSource('single-point').setData(event.result.geometry);
});
});