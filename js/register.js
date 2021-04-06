var validations = document.querySelector('.validationsFuntions');
var validResult = "Validation results";

function formExists () {
  if (document.querySelector('.registerForm')) {
      validations.append(validResult + " " + 'Form is found' + " ");
  }
  else {
      validations.append(validResult + " " + 'Form is not found' + " ");
  }
}
formExists();

function inputsRequest (inputs) {
  document.querySelectorAll('.infoInput').required;
    if (inputs = true) {
        validations.append(validResult + " " + 'All fields are required' + " ");
    }
    else {
        validations.append(validResult + " " + 'Required attributes missing' + " ");
    }
}
inputsRequest();

function inputsQuantity (inputs) {
  document.querySelectorAll('input');
    if (inputs.length = 4) {
        validations.append(validResult + " " + 'Input fields are correct' + " ");
    }
    else {
        validations.append(validResult + " " + 'Input fields missing' + " ");
    }
}
inputsQuantity();