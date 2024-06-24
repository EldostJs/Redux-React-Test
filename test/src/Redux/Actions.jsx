export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });
export const deleteProduct = (id) => ({ type: DELETE_PRODUCT, payload: id });
