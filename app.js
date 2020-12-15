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
      { id: 0, name: 'name 1', calories: 100 },
      { id: 1, name: 'name 2', calories: 200 },
      { id: 2, name: 'name 3', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let ID;

      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      const newItem = new item(ID, name, calories);

      data.items.push(newItem);
    },
    logData: function () {
      return data;
    },
  };
})();

// ui controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
  };
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fas fa-pencil-alt"></i></a>
    </li>`;

        document.querySelector(UISelectors.itemList).innerHTML = html;
      });
    },
    getFormInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

// app controller
const AppCtrl = (function () {
  // load event listeners
  const loadEventListeners = function () {
    const getSelectors = UICtrl.getSelectors();

    // add submit event
    document
      .querySelector(getSelectors.addBtn)
      .addEventListener('click', addItemSubmit);
  };

  // add item submit function
  const addItemSubmit = function (e) {
    e.preventDefault();

    const input = UICtrl.getFormInput();

    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }
  };
  return {
    init: function () {
      console.log('Initializing App...');

      const items = ItemCtrl.getItems();

      UICtrl.populateItemList(items);

      loadEventListeners();
    },
  };
})();

AppCtrl.init();
