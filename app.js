// storage controller

// item controller
const ItemCtrl = (function () {
  //item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structure / state
  const data = {
    items: [
      { id: 0, name: 'name 1', calories: 1200 },
      { id: 1, name: 'name 2', calories: 400 },
      { id: 2, name: 'name 3', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  return {
    logData: function () {
      return data;
    },
  };
})();

// ui controller
const UICtrl = (function () {})();

// main app controller
const AppCtrl = (function () {
  return {
    init: function () {
      console.log('Initializing App...');
    },
  };
})();

AppCtrl.init();
