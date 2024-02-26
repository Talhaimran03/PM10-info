async function getStationsCoordinates() {

    let json = await get_stations_coordinates();

    var map = L.map('map').setView([45.4, 11], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mappa di base &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    json.forEach(function(item) {
        var marker = L.marker([item.lat, item.lon]).addTo(map);
        marker.bindPopup(item.nome);
    });
}