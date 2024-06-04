function initMap() {
    var myLatLng = {lat: -6.1754, lng: 106.8272};

    var mapOptions = {
        zoom:10,
        center: myLatLng
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map : map,
        title : 'Lokasi Saya'
    });
}

