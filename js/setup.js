'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomData = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = [
  {
    name: (Math.floor(Math.random() * 2) ? getRandomData(WIZARD_SURNAMES) + ' ' + getRandomData(WIZARD_NAMES) : getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES)),
    coatColor: getRandomData(COAT_COLORS),
    eyesColor: getRandomData(EYES_COLORS)
  },
  {
    name: (Math.floor(Math.random() * 2) ? getRandomData(WIZARD_SURNAMES) + ' ' + getRandomData(WIZARD_NAMES) : getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES)),
    coatColor: getRandomData(COAT_COLORS),
    eyesColor: getRandomData(EYES_COLORS)
  },
  {
    name: (Math.floor(Math.random() * 2) ? getRandomData(WIZARD_SURNAMES) + ' ' + getRandomData(WIZARD_NAMES) : getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES)),
    coatColor: getRandomData(COAT_COLORS),
    eyesColor: getRandomData(EYES_COLORS)
  },
  {
    name: (Math.floor(Math.random() * 2) ? getRandomData(WIZARD_SURNAMES) + ' ' + getRandomData(WIZARD_NAMES) : getRandomData(WIZARD_NAMES) + ' ' + getRandomData(WIZARD_SURNAMES)),
    coatColor: getRandomData(COAT_COLORS),
    eyesColor: getRandomData(EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createElements = function (elements) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderWizard(elements[i]));
    similarListElement.appendChild(fragment);
  }
};

createElements(wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
