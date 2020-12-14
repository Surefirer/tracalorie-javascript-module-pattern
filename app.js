// storage controller

// item controller
const ItemCtrl = (function () {
  // item constructor
  const item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structure / state
  const data = {
    items: [
      { id: 0, name: 'name 1', calories: 10 },
      { id: 1, name: 'name 2', calories: 20 },
      { id: 2, name: 'name 3', calories: 30 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// ui controller
const UICtrl = (function () {
  const UISelector = {
    itemList: 'item-list',
  };
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i></a>
            </li>`;
      });
      document.getElementById(UISelector.itemList).innerHTML = html;
    },
  };
})();

// main app controller
const AppCtrl = (function () {
  return {
    init: function () {
      console.log('Initializing App...');

      const items = ItemCtrl.getItems();

      UICtrl.populateItemList(items);
    },
  };
})();

AppCtrl.init();
