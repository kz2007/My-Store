import { SET_PRODUCTS, SET_SEARCH, CHANGE_PRODUCT_IN_CART } from "../Constants/actions-types";

export const setProducts = products => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const setSearch = product => {
    return {
        type: SET_SEARCH,
        payload: product
    }
}

export const changeProductInCart = product => {
    return {
        type: CHANGE_PRODUCT_IN_CART,
        payload: product
    }
}