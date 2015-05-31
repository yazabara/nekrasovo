var nekrasovoApp = angular.module('NekrasovoApp', [], function () {
    'use strict';

    function initialize() {
        var lat = new google.maps.LatLng(57.365002, 36.072368);
        var mapOptions = {
            zoom: 14,
            center: lat
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: lat,
            map: map,
            title: 'Коттеджные дома для вас'
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});