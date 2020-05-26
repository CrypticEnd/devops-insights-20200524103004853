import React from 'react';

function ZipMap(props) {
    var map;
    const google = window.google;
    const mapScrip = document.createElement('script');
    mapScrip.src = 'https://maps.googleapis.com/maps/api/js?key=6b7b471967dd0851d0010cdecf28f829&callback=initMap';
    mapScrip.defer = true;
    mapScrip.async = true;
    document.head.appendChild(mapScrip);

    window.onloadend(function () {
        map = new google.maps.Map(document.getElementsByClassName('map'), {
            center: {lat: -39.824778, lng: 174.983245},
            zoom: 7
        });
    });

    return (
        <div className="map"></div>
    )
}

export default ZipMap