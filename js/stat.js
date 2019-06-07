'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var barHeight = 130;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  if (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.lenght; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  renderText(ctx, CLOUD_X + GAP, 30, 'Ура вы победили!', '#000');
  renderText(ctx, CLOUD_X + GAP, 50, 'Список результатов:', '#000');

  var maxTime = getMaxElement(times);
  console.log(maxTime);

  for (var i = 0; i < names.length; i++) {
    renderText(ctx, CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, 80, Math.round(times[i]), '#000');
    ctx.fillStyle = 'rgba(0, 0, 255, 0.8)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, 100, BAR_WIDTH, (barHeight * Math.round(times[i])) / maxTime);
    renderText(ctx, CLOUD_X + GAP * 2 + (BAR_WIDTH + BAR_GAP) * i, 240, names[i], '#000');
  }
};
