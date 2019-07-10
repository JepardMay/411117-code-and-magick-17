'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('[name = coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('[name = eyes-color]');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupFireballInput = document.querySelector('[name = fireball-color]');

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    wizard.onEyesChange(newColor);
  });

  setupFireball.addEventListener('click', function () {
    var newColor = getRandomElement(FIREBALL_COLORS);
    setupFireball.style.backgroundColor = newColor;
    setupFireballInput.value = newColor;
  });

  window.wizard = wizard;
  return window.wizard;
})();
