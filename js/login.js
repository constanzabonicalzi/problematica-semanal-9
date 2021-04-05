var validations = document.querySelector('.validationsFuntions');
var validResult = "Validation results";

var formExists= function() {
  if (document.querySelector('.loginForm')) {
      validations.append(validResult + " " + 'Form is found' + " ");
  }
  else {
      validations.append(validResult + " " + 'Form is not found' + " ");
  }
}
formExists();