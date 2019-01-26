styles: [ // styles property is an array of objects
    {
        stylers: [ // stylers property holds array of objects
            { hue: "#00ff6f" }, // Overall map colors
            { saturation: -50 } // Overall map saturation
        ]
    }, { 
        featureType: "road", // Road features
        elementType: "geometry", // Their geometry (lines)
        stylers: [
            { lightness: 100 }, // Lightness of roads
            { visibility: "simplified" } // Level of road detail
        ]
    }, { 
        featureType: "transit", // Public transport features
        elementType: "geometry", // Their geometry (lines)
        stylers: [
            { hue: "#ff6600" }, // Color of public transport
            { saturation: +80 } // Saturation of public transport
        ]
    }, {
        featureType: "transit", // Public transport features
        elementType: "labels", // Their labels
        stylers: [
            { hue: "#ff0066" }, // Label color
            { saturation: +80 } // Label saturation
        ]
    } // More stylers shown in the code download
] 

var pinLocation = new google.maps.LatLng(40.782710, -73.965310);

var startPosition = new google.maps.Marker({ // Create new marker
    position: pinLocation, // Set its position
    map: venueMap, // Specify the map
    icon: "img/go.png" // Path to image from HTML
});