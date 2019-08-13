'use strict';
(function () {
  var SHOW_WIZARDS_NUMBER = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    similarList.innerHTML = '';

    data.slice(0, SHOW_WIZARDS_NUMBER).forEach(function (wizard) {
      similarList.appendChild(createWizard(wizard));
    });

    similar.classList.remove('hidden');
  };
})();
