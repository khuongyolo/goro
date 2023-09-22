let map;
let marker;
let circle;
let searchInput;
let zoomInterval;
const zoomStart = 10;
const zoomEnd = 12;
const zoomIncrement = 3;

var markerPositions = [];

function generateRandomLandCoordinates() {
  // Phạm vi đất liền của ba tỉnh này:
  const tokyoRange = {
    minLat: 35.2, 
    maxLat: 35.9, 
    minLng: 138.8, 
    maxLng: 140.8,
  };
  const saitamaRange = {
    minLat: 35.6,
    maxLat: 36.3, 
    minLng: 138.9, 
    maxLng: 139.9,
  };
  const kanagawaRange = {
    minLat: 35.1, 
    maxLat: 35.7, 
    minLng: 139.1, 
    maxLng: 139.9, 
  };

  // Chọn ngẫu nhiên một trong ba tỉnh
  const randomProvince = Math.floor(Math.random() * 3);

  let selectedRange;

  if (randomProvince === 0) {
    selectedRange = tokyoRange;
  } else if (randomProvince === 1) {
    selectedRange = saitamaRange;
  } else {
    selectedRange = kanagawaRange;
  }

  const lat = Math.random() * (selectedRange.maxLat - selectedRange.minLat) + selectedRange.minLat;
  const lng = Math.random() * (selectedRange.maxLng - selectedRange.minLng) + selectedRange.minLng;

  return { lat, lng };
}

// Thêm 100 điểm ngẫu nhiên trên đất liền của Tokyo, Saitama và Kanagawa vào mảng markerPositions
for (let i = 0; i < 100; i++) {
  const randomCoordinate = generateRandomLandCoordinates();
  markerPositions.push(randomCoordinate);
}



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: zoomStart,
    center: { lat: 35.6894, lng: 139.692 },
    mapTypeControl: false,
    mapId: "e670dc860b95d0c5",
  });

  searchInput = document.getElementById("search-input");
  // const searchButton = document.getElementById("search-button");
  const clearButton = document.getElementById("clear-button");

  // searchButton.addEventListener("click", searchLocation);
  clearButton.addEventListener("click", clear);

  // Enter search
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchLocation();
    }
  });

  var customIcon = {
    url: 'pin.png',
    scaledSize: new google.maps.Size(60, 60),
  };

  for (var i = 0; i < markerPositions.length; i++) {
    var marker = new google.maps.Marker({
      position: markerPositions[i],
      map: map,
      icon: customIcon,
      title: "Marker " + (i + 1),
    });
  }

  clear();
}

function clear() {
  if (marker) {
    marker.setMap(null);
  }
  if (circle) {
    circle.setMap(null);
  }
}

function searchLocation() {
  clear();
  const location = searchInput.value;

  if (!location) {
    alert("Please enter a location.");
    return;
  }

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: location }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK && results[0]) {
      const locationLatLng = results[0].geometry.location;

      clearInterval(zoomInterval);

      map.setZoom(zoomStart);

      $("html, body").animate(
        {
          scrollTop: $("#map").offset().top,
        },
        1000
      );

      if (!marker) {
        marker = new google.maps.Marker({
          position: locationLatLng,
          map: map,
        });
      } else {
        marker.setPosition(locationLatLng);
        marker.setMap(map);
      }

      if (!circle) {
        circle = new google.maps.Circle({
          strokeColor: "#8FBC8F",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#8FBC8F",
          fillOpacity: 0.1,
          map: map,
          center: locationLatLng,
          radius: 5000,
        });
      } else {
        circle.setCenter(locationLatLng);
        circle.setMap(map);
      }

      map.panTo(locationLatLng);

      zoomInterval = setInterval(function () {
        if (map.getZoom() < zoomEnd) {
          map.setZoom(map.getZoom() + zoomIncrement);
        } else {
          clearInterval(zoomInterval);
        }
      }, 500);
    } else {
      alert("Geocoding was not successful for the following reason: " + status);
    }
  });
}

window.initMap = initMap;
