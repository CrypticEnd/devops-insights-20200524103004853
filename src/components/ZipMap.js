import React from 'react';
import google from 'googlemaps';

function ZipMap(props) {
    var map;
    const mapScrip = document.createElement('script');
    mapScrip.src = 'https://maps.googleapis.com/maps/api/js?key=6b7b471967dd0851d0010cdecf28f829&callback=initMap';
    mapScrip.defer = true;
    mapScrip.async = true;

    function intiMap() {
        new google.maps.Map(document.getElementsByClassName('map'), {
            center: {lat: -39.824778, lng: 174.983245},
            zoom: 7
        });
    }
    document.head.appendChild(mapScrip);

    return (
        <div className="map" onLoad={intiMap()}>t</div>
    )
}

export default ZipMap