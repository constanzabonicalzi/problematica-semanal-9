var validations = document.querySelector('.validationsFuntions');
var validResult = "Validation results";

var formExists= function() {
  if (document.querySelector('.registerForm')) {
      validations.append(validResult + " " + 'Form is found' + " ");
  }
  else {
      validations.append(validResult + " " + 'Form is not found' + " ");
  }
}
formExists();

var requiredInputs = function () {
  var inputs = document.querySelectorAll('.infoInput').required;
    if (inputs = true) {
        validations.append(validResult + " " + 'All fields are required' + " ");
    }
    else {
        validations.append(validResult + " " + 'Required attributes missing' + " ");
    }
}
requiredInputs();

var inputsQuantity = function () {
  var inputs = document.querySelectorAll('input');
  var inputsLength = inputs.length;
    if (inputsLength = 4) {
        validations.append(validResult + " " + 'Input fields are correct' + " ");
    }
    else {
        validations.append(validResult + " " + 'Input fields missing' + " ");
    }
}
inputsQuantity();

var labels = function () {
  var inputs = document.querySelectorAll('.infoInput').name;
  var labels = document.querySelectorAll('labels').for;
    if (inputs === labels) {
      validations.append(validResult + " " + 'Each input has its label' + " ");
    }
    else {
      validations.append(validResult + " " + 'Input labels missing' + " ");
    }
}
labels();

var validAnchor = function (){
  var anchor = document.querySelectorAll('submit').href;
  var validAnchor = "login.html";
    if (anchor = validAnchor) {
      validations.append(validResult + " " + 'Valid anchor' + " ");
    }
    else {
      validations.append(validResult + " " + 'Invalid anchor' + " ");
    }
}
validAnchor ();

var validBtns = function() {
  var submitBtn = document.querySelector('.submitBtn').nodeValue;
  var resetBtn = document.querySelector('.resetBtn').nodeValue;
  var submitValue = 'Submit';
  var resetValue = 'Reset';
    if ((submitBtn = submitValue) && (resetBtn = resetValue)) {
      validations.append(validResult + " " + 'Button content is correct' + " ");
    }
    else {
      validations.append(validResult + " " + 'Button content is invalid' + " ");
    }
}
validBtns();