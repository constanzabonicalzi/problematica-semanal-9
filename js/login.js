var validations = document.querySelector('.validationsFuntions');
var validResult = "Validation results";

function formExists () {
  if (document.querySelector('.loginForm')) {
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
    if (inputs.length = 2) {
        validations.append(validResult + " " + 'Input fields are correct' + " ");
    }
    else {
        validations.append(validResult + " " + 'Input fields missing' + " ");
    }
}
inputsQuantity();

function validLabels (inputs, labels) {
  document.querySelectorAll('.infoInput').name;
  document.querySelectorAll('labels').for;
    if (inputs === labels) {
      validations.append(validResult + " " + 'Each input has its label' + " ");
    }
    else {
      validations.append(validResult + " " + 'Input labels missing' + " ");
    }
}
validLabels();

function validAnchor (anchor, validAnchor){
  document.querySelectorAll('submit').href;
    if (anchor = validAnchor) {
      validations.append(validResult + " " + 'Valid anchor' + " ");
    }
    else {
      validations.append(validResult + " " + 'Invalid anchor' + " ");
    }
}
validAnchor ();

function validBtns (submitBtn, resetBtn, submitValue, resetValue) {
  document.querySelector('.submitBtn').nodeValue;
  document.querySelector('.resetBtn').nodeValue;
    if ((submitBtn = submitValue) && (resetBtn = resetValue)) {
      validations.append(validResult + " " + 'Button content is correct' + " ");
    }
    else {
      validations.append(validResult + " " + 'Button content is invalid' + " ");
    }
}
validBtns();