window.onload = function() {
    var myLatlng = new google.maps.LatLng(42.338871,-71.08182);
    var myOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Hello World!'
    });

    marker.setMap(map);
}
