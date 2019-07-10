'use strict';
(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (startEvt) {
    if (startEvt.target.tagName.toLowerCase() === 'img') {
      draggedItem = startEvt.target;
      EventTarget.dataTransfer.setData('text/plain', startEvt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (overEvt) {
    overEvt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (dropEvt) {
    dropEvt.target.style.backgroundColor = '';
    dropEvt.target.appendChild(draggedItem);
  });

  artifactsElement.addEventListener('dragenter', function (enterEvt) {
    enterEvt.target.style.backgroundColor = 'yellow';
    enterEvt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (leaveEvt) {
    leaveEvt.target.style.backgroundColor = '';
    leaveEvt.preventDefault();
  });
})();
