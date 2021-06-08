$(function() {
  generatorAllApps();
  generatorDoneApps();
});



var allApps = [
  { id: '1', name: '帮助中心', icon: '&#xe68d;', isDone: false },
  { id: '2', name: '非生产采购', icon: '&#xe68a;', isDone: false },
  { id: '3', name: 'Commercial policy', icon: '&#xe68b;', isDone: false },
  { id: '4', name: 'E-bonus', icon: '&#xe68c;', isDone: false },
  { id: '5', name: 'E-sample', icon: '&#xe68d;', isDone: false },
  { id: '6', name: '信用卡管理', icon: '&#xe68e;', isDone: false },
  { id: '7', name: '商务政策', icon: '&#xe68a;', isDone: false },
  { id: '8', name: 'HR系统', icon: '&#xe68b;', isDone: false },
  { id: '9', name: 'DP', icon: '&#xe68c;', isDone: false },
  { id: '10', name: 'base', icon: '&#xe68d;', isDone: false },
  { id: '11', name: '固资管理', icon: '&#xe68e;', isDone: false },
];

var doneApps = [];

function generatorAllApps() {
  var $allAppContainer = $('.category-content.all');
  generatorApps($allAppContainer, allApps);
}

function generatorDoneApps() {
  var $doneAppContainer = $('.category-content.done');
  generatorApps($doneAppContainer, doneApps);
}

function generatorApps($container, arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var $appItem = generatorAppItem(arr[len - 1 - i]);
    $container.prepend($appItem);
  }
}

function generatorAppItem(info) {
  var appItem = document.createElement('div');
  var $appItem = $(appItem);
  $appItem.attr('data-id', info.id);
  $appItem.addClass('app-item');

  var iconOperator = document.createElement('i');
  var $iconOperator = $(iconOperator);
  $iconOperator.addClass('iconfont');
  $iconOperator.addClass('operator');
  $iconOperator.addClass(info.isDone ? 'delete' : 'add');
  $iconOperator.html(info.isDone ? '&#xe613;' : '&#xe658;');

  $iconOperator.click(handleOperator);

  var icon = document.createElement('i');
  var $icon = $(icon);
  $icon.addClass('iconfont');
  $icon.addClass('icon');
  $icon.html(info.icon);

  var text = document.createElement('div');
  var $text = $(text);
  $text.addClass('text');
  $text.text(info.name);

  $appItem.append($iconOperator);
  $appItem.append($icon);
  $appItem.append($text);

  return $appItem;
}

function handleOperator() {
  var $self = $(this);
  var curId = $self.parent().attr('data-id');
  var doneItem = findArray(doneApps, function (item) {
    return item.id === curId;
  });

  if (doneItem) {
    doneItem.isDone = false;
    doneApps = filterArray(doneApps, function (item) {
      return item.id !== curId;
    });
  } else {
    var curApp = findArray(allApps, function (item) {
      return item.id === curId;
    });
    curApp.isDone = true;
    doneApps.push(curApp);
  }

  console.log(doneApps);
}
