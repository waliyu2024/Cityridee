// Initialize the map
// document.addEventListener('DOMContentLoaded', () => {
//     const map = L.map('map').setView([51.505, -0.09], 13); // Coordinates for London

    // Add a tile layer to the map
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // Add a marker to the map
//     L.marker([51.5, -0.09]).addTo(map)
//         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//         .openPopup();
// });
// Initialize the map
document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([9.0267, 7.6074], 13); // Coordinates for London

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([9.0267, 7.6074]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
});


document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([9.0267, 7.6074], 13); // Coordinates for London

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([9.0267, 7.6074]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    // Sidebar toggle
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    // Scissors toggle (for example, toggle widgets visibility)
    const scissors = document.getElementById('scissors');
    const widgets = document.getElementById('widgets');

    scissors.addEventListener('click', () => {
        widgets.classList.toggle('hidden');
    });
});





document.getElementById("click").addEventListener("click", function(){
    window.alert("Are You Sure You Want To Go Live?")

    document.querySelector("#click").classList.toggle("active")

    setTimeout(() => {

        document.querySelector(".request").classList.toggle("active")
    }, 2000);
  
})











