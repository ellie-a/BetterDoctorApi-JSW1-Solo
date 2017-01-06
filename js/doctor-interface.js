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

        doctors.forEach(function(doctor){
          var name = doctor.profile.first_name + " " + doctor.profile.last_name + " " + doctor.profile.title;
          var image = doctor.profile.image_url;
          var bio = doctor.profile.bio;
          $('.doctors').append("<li>" + name, "<img src=" + image + "/>", bio + "</li>");
        });


    })
    .fail(function(error){
    console.log("fail");
  });
    });
});
