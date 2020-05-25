import React from 'react';

function ZipMap(props) {
    var map;
    var mapScrip = document.createElement('script');
    mapScrip.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    mapScrip.defer = true;
    mapScrip.async = true;

    window.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
            }
        )};
    document.head.appendChild(mapScrip);

    return (
        <div className="map">
            <style jsx="true">{`
                        .map{
                        height:100%;
                        }
                    `}
            </style>
        </div>
    )
}

export default ZipMap