// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
let map = L.map('mapid').setView([38.6270, -90.1994], 5);

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6214, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// Skill Drill: airline route from SFO to JFK w/ stops
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [38.6270, -90.1994],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline (dash) using the line coordinates and make the line blue.
L.polyline(line, {
  color: "blue"
}).addTo(map);




// We create the tile layer that will be the background of our map. (standard)
// let view = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map. (satellite view)
let view = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


view.addTo(map);