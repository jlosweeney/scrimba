// JSWEENEY - Added javascript
$( function() {
    $( ".datepicker" ).datepicker({ minDate: '-100Y', maxDate: 0 });
  } );

function calcDays() {
  var dob = $('#dob').val();
  var birthDate = new Date(dob);
  var currentDate = new Date();
  var dateDiff = Math.floor((currentDate - birthDate) / (1000*60*60*24));

  if (dateDiff < 0) {
    alert('Please enter a date in the past');
  } else {
    $('#results').text(dateDiff + ' Days!');
  }
}
