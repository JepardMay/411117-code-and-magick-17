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

  wizardCoat.addEventListener('click', function () {
    var coatColor = getRandomData(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    wizardCoatInput.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = getRandomData(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    wizardEyesInput.value = eyesColor;
  });

  setupFireball.addEventListener('click', function () {
    var fireballColor = getRandomData(FIREBALL_COLORS);
    setupFireball.style.backgroundColor = fireballColor;
    setupFireballInput.value = fireballColor;
  });

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getRandomData = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

})();
