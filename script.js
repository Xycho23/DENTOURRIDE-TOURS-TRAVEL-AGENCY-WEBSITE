function initMap() {
  // Specify the coordinates for San Vicente Long Beach
  var sanVicenteLongBeach = { lat: 10.5680, lng: 118.7557 };

  // Create a map centered at San Vicente Long Beach
  var map = new google.maps.Map(document.getElementById("map1"), {
    zoom: 12,
    center: sanVicenteLongBeach,
  });

  // Create a marker positioned at San Vicente Long Beach
  var marker = new google.maps.Marker({
    position: sanVicenteLongBeach,
    map: map,
  });
}

document.getElementById('bookingForm1').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name1').value;
  var email = document.getElementById('email1').value;
  var guests = document.getElementById('guests1').value;
  var notes = document.getElementById('notes1').value;
  var bookingId = document.getElementById('bookingId1').value;

  alert('Name: ' + name + '\nEmail: ' + email + '\nNumber of Guests: ' + guests +
    '\nAdditional Notes: ' + notes + '\nBooking ID: ' + bookingId);
});