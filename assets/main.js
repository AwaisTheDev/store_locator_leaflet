// initialize the map on the "map" div with a given center and zoom
const map = L.map("map", {
  center: [51.505, -0.09],
  zoom: 10,
});

const tileURL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const atttribution =
  "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
const tile = L.tileLayer(tileURL, { atttribution });

tile.addTo(map);
