'use strict';
(function () {
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.coatColor === window.myWizard.coatColor) {
      rank += 2;
    }
    if (wizard.eyesColor === window.myWizard.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var wizardsComparator = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  };

  var updateWizards = function () {
    window.render(wizards.sort(wizardsComparator));
  };

  window.myWizard.onChange = window.debounce(function () {
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data.map(function (it) {
      return new window.Wizard(it);
    });
    updateWizards();
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
