import {  SET_PRODUCTS, SET_SEARCH, CHANGE_PRODUCT_IN_CART } from "../Constants/actions-types";

const initialState = {
  Products: [],
  ShoppingCart: [],
  Search: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
        return {...state, Products: action.payload};

    case SET_SEARCH:
        return {...state, Search: action.payload};

    case CHANGE_PRODUCT_IN_CART:
      return {...state, ShoppingCart: action.payload}

    default:
      return state;
  }
};

export default rootReducer;
