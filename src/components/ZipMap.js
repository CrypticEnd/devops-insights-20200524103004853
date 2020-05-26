import React from 'react';

function ZipMap(props) {
    var map;
    const mapScrip = document.createElement('script');
    mapScrip.type = 'text/javascript';
    mapScrip.src = 'https://maps.googleapis.com/maps/api/js?key=6b7b471967dd0851d0010cdecf28f829&callback=initMap';
    // mapScrip.defer = true;
    // mapScrip.async = true;
    document.head.appendChild(mapScrip);

    function intiMap() {
        // new google.maps.Map(document.getElementsByClassName('map'), {
        //     center: {lat: -39.824778, lng: 174.983245},
        //     zoom: 7
        // });
    }

    //  function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8
    //         }
    //     )}


    return (
        <div ref="map" style="height: '500px', width: '500px'">
            t
        </div>
    )
}

export default ZipMap