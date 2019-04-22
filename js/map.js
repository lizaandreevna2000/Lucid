function initMap(){
    var pos={lat:25.764056,lng: -80.189381};

    var opt={
        center:pos,
        zoom:17
    }

    var  map = new google.maps.Map(document.getElementById('map'),opt);

    var  marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "Lucid"
    });
}