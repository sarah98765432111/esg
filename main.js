// main.js

var map = L.map('map').setView([54.7023545, -3.2765753], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

fetch('C:\\Users\\Sarah.Withey\\Downloads\\geojsonuk3.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function(feature) {
        return {
          className: 'geojson-boundary', // Add the CSS class to the GeoJSON layer
        };
      },
    }).addTo(map);
  });
