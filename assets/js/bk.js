// Initialize the map
const map = L.map('map').setView([9.0267, 7.6074], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to fetch initial markers (if using an API)
async function fetchMarkers() {
    const response = await fetch('http://localhost:3000/markers'); // Adjust to your API
    const markers = await response.json();
    
    markers.forEach(marker => {
        L.marker(marker.position)
            .addTo(map)
            .bindPopup(marker.description);
    });
}

// Function to add a new marker from the form
function addMarker(e) {
    e.preventDefault();

    const locationName = document.getElementById('locationName').value;
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const message = document.getElementById('message').value;

    const newMarker = L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`${locationName}<br>${message}`);
    
    // Optionally, you can send the new marker data to your backend here

    // Reset the form
    document.getElementById('locationForm').reset();
}

// Event listener for form submission
document.getElementById('locationForm').addEventListener('submit', addMarker);

// Call fetchMarkers to load initial markers
fetchMarkers();
