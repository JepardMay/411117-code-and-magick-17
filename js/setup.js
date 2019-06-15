'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var userNameInput = setup.querySelector('.setup-user-name');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });
  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

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

setup.querySelector('.setup-similar').classList.remove('hidden');
