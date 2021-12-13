const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  const getTotalPrice = (arr) => {
    return +arr.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);
  };
  const getTotalCount = (arr) => {
    return arr.reduce((count, item) => count + item.count, 0);
  };
  const items = state.items;
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItem = action.payload;
      if (items.length > 0) {
        let itemIdx = null;
        let itemFound = false;
        for (let i = 0; i < items.length; i++) {
          if (
            newItem.id === items[i].id &&
            newItem.size === items[i].size &&
            newItem.type === items[i].type
          ) {
            itemIdx = i;
            itemFound = true;
            break;
          }
        }
        if (itemFound) {
          ++items[itemIdx].count;
          items[itemIdx].totalPrice = +(items[itemIdx].count * items[itemIdx].price).toFixed(2);
        } else {
          items.push(newItem);
        }
      } else {
        items.push(newItem);
      }
      return {
        ...state,
        items: items,
        totalPrice: getTotalPrice(items),
        totalCount: getTotalCount(items),
      };
    }

    case 'REMOVE_CART_ITEM': {
      const removePizza = action.payload;
      if (items.length === 1) {
        return {
          items: [],
          totalPrice: 0,
          totalCount: 0,
        };
      }
      for (let i = 0; i < items.length; i++) {
        if (
          items[i].id === removePizza.id &&
          items[i].size === removePizza.size &&
          items[i].type === removePizza.type
        ) {
          i !== 0 ? items.splice(i, i) : items.shift();
          break;
        }
      }
      return {
        ...state,
        items,
        totalPrice: getTotalPrice(items),
        totalCount: getTotalCount(items),
      };
    }

    case 'PLUS_CART_ITEM': {
      const pizza = action.payload;
      for (let i = 0; i < items.length; i++) {
        if (
          items[i].id === pizza.id &&
          items[i].size === pizza.size &&
          items[i].type === pizza.type
        ) {
          ++items[i].count;
          items[i].totalPrice += items[i].price;
          break;
        }
      }
      return {
        ...state,
        items,
        totalPrice: getTotalPrice(items),
        totalCount: getTotalCount(items),
      };
    }

    case 'MINUS_CART_ITEM': {
      const pizza = action.payload;
      for (let i = 0; i < items.length; i++) {
        if (
          items[i].id === pizza.id &&
          items[i].size === pizza.size &&
          items[i].type === pizza.type
        ) {
          if (items[i].count > 1) {
            --items[i].count;
            items[i].totalPrice -= items[i].price;
          }
          break;
        }
      }
      return {
        ...state,
        items,
        totalPrice: getTotalPrice(items),
        totalCount: getTotalCount(items),
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, items: [] };
    default:
      return state;
  }
};

export default cart;
