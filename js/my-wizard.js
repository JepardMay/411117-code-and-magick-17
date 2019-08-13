'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('[name = coat-color]');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('[name = eyes-color]');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');
  var setupFireballInput = document.querySelector('[name = fireball-color]');
  var wizardName = setup.querySelector('.setup-user-name');

  var wizard = new window.Wizard({name: wizardName.value});

  wizardCoat.addEventListener('click', function () {
    var newColor = wizard.changeCoatColor();
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = wizard.changeEyesColor();
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
  });

  setupFireball.addEventListener('click', function () {
    var newColor = wizard.changeFireballColor();
    setupFireball.style.backgroundColor = newColor;
    setupFireballInput.value = newColor;
  });

  document.querySelector('.setup-wizard-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    var wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizardCoat.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyes.style.fill;

    var wizardBase64Right = window.svg2base64(wizardCopy);

    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');

    var wizardBase64Left = window.svg2base64(wizardCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left);
  });

  window.myWizard = wizard;
})();
