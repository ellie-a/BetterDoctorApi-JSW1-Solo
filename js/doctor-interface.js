var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function(){
    $('#findDoctors').submit(function() {

      event.preventDefault();

      var medicalIssue = $('#issue').val();
      console.log(medicalIssue);
      var doctor = new Doctor();
      doctor.findDoctor(medicalIssue);
    });
});
