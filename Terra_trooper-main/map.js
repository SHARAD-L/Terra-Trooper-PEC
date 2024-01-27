var map = L.map('map').setView([34.1525, 77.5771], 6);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
});
osm.addTo(map);

if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!");
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition);
    }, 1000);
}

function getPosition(position){
    console.log(position);
}

// var latitude = map.getCenter().lat;
// var longitude = map.getCenter().lng;

// var output1 = document.getElementById("output1");
// var output2 = document.getElementById("output2");

// output1.textContent = latitude;
// output2.textContent = longitude;

var marker, circle;
var boundsSet = false; // Initialize a flag to track if bounds have been set

function getPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
    }

    if (circle) {
        map.removeLayer(circle);
    }

    marker = L.marker([lat, long]);
    circle = L.circle([lat, long], { radius: accuracy });

    var featureGroup = L.featureGroup([marker, circle]).addTo(map);

    // Check if bounds have been set, and only fitBounds on the first addition
    if (!boundsSet) {
        map.fitBounds(featureGroup.getBounds());
        boundsSet = true; // Set the flag to true after setting bounds
    }

    // Display latitude and longitude in the spans
    document.getElementById("output1").textContent = lat;
    document.getElementById("output2").textContent = long;

    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy);
}

