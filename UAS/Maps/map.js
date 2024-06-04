var map = L.map('map').setView([3.597031, 98.678513], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var places = [
    { name: 'Centre Point', location: [3.5918342233733758, 98.6811783329757], social: 'https://www.instagram.com/mallcentrepoint/', maps: 'https://www.google.com/maps?q=3.5918342233733758, 98.6811783329757' },
    { name: 'Delipark Medan', location: [3.5945690179952665, 98.6743651396712], social: 'https://www.instagram.com/deliparkmedan/', maps: 'https://www.google.com/maps?q=3.5945690179952665, 98.6743651396712' },
    { name: 'Plaza Medan Fair', location: [3.5924961723711935, 98.6631133305211], social: 'https://www.instagram.com/plazamedanfair/', maps: 'https://www.google.com/maps?q=3.5924961723711935, 98.6631133305211' },
    { name: 'Sun Plaza', location: [3.583579949976098, 98.67176341702553], social: 'https://www.instagram.com/official_sunplaza/', maps: 'https://www.google.com/maps?q=3.583579949976098, 98.67176341702553' }
];

places.forEach(function(place) {
    var popupContent = '<b>' + place.name + '</b><br>' +
        '<button onclick="viewSocial(\'' + place.social + '\')">Lihat Sosial Media</button>' +
        '<button onclick="viewMaps(\'' + place.maps + '\')">Lihat Lokasi</button>';
    L.marker(place.location).addTo(map)
        .bindPopup(popupContent);
});

function viewSocial(url) {
    window.open(url, '_blank');
}

function viewMaps(url) {
    window.open(url, '_blank');
}

// Modal script
var modal = document.getElementById("feedbackModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

