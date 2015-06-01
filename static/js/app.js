var nekrasovoApp = angular.module('NekrasovoApp', [], function () {
    'use strict';

    function initialize() {
        var lat = new google.maps.LatLng(56.754511, 35.645149);
        var mapOptions = {
            zoom: 12,
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