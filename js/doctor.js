var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue) {
  this.issue = medicalIssue;
}

Doctor.prototype.findDoctor = function(medicalIssue){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
console.log(result);

    var doctors = result.data;

    doctors.forEach(function(doctor){
      var name = doctor.profile.first_name + " " + doctor.profile.last_name + " " + doctor.profile.title;
      var image = doctor.profile.image_url;
      var bio = doctor.profile.bio;
      //needs to be in interface?
      $('.doctors').append("<div class='doctorResult'>" + "<h3>" + name + "</h3>" + "<img src=" + image + "/>" + "<p>" + bio + "</p>" + "</div>");
    });
  });
  // .fail(function(error){
  //   console.log("fail");
  // });
};
exports.doctorModule = Doctor;
