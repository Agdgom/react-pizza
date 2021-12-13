const initState = {
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
  category: null,
};
const filters = (state = initState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
