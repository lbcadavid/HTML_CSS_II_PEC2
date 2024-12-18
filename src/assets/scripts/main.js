/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import validator from "validator";

/**
 * Write any other JavaScript below
 */

+(function () {

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(message) {
      message.remove();
    });

    let isValid = true;

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const secondLastName = document.getElementById('second-last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!validator.isAlpha(firstName, 'es-ES', { ignore: ' ' })) {
      isValid = false;
      showError('first-name', 'El nombre solo puede contener letras');
    }

    if (!validator.isAlpha(lastName, 'es-ES', { ignore: ' ' })) {
      isValid = false;
      showError('last-name', 'El apellido solo puede contener letras');
    }

    if (!validator.isAlpha(secondLastName, 'es-ES', { ignore: ' ' })) {
      isValid = false;
      showError('second-last-name', 'El segundo apellido solo puede contener letras');
    }

    if (!validator.isEmail(email)) {
      isValid = false;
      showError('email', 'Por favor ingresa un correo electrónico válido');
    }

    if (validator.isEmpty(message)) {
      isValid = false;
      showError('message', 'El mensaje no puede estar vacío');
    }

    if(isValid) {
      console.log("Envio Correcto")
      this.submit();
    }
  });

  function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.style.color = 'red';
    errorElement.textContent = errorMessage;
    field.insertAdjacentElement('afterend', errorElement);
  }
})();
