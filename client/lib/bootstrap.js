// Generated by CoffeeScript 1.6.3
(function() {
  var constants, form, formElement;

  constants = require('./constants');

  form = require('./form');

  formElement = document.getElementById(constants.ids.form);

  if (formElement) {
    form.initialise(formElement);
  }

}).call(this);