var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

var doctors = [];


$(document).ready(function(){
    $('#findDoctors').submit(function() {
      event.preventDefault();
      var medicalIssue = $('#issue').val();
      console.log(medicalIssue);
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
      .then(function(result) {
    console.log(result);
        var doctors = result.data;
        console.log(doctors);
        // for (i = 0; i <= doctors.length; i++) {
        //   var name = doctors[i].name;
          $('.doctors').append("<li>" + doctors + "</li>");
        // }
    })
    .fail(function(error){
    console.log("fail");
  });
    });
});
