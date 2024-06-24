import { combineReducers } from 'redux';
import { ADD_PRODUCT, DELETE_PRODUCT } from './Actions';

const initialProductState = [];

const productsReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    products: productsReducer,
});

export default rootReducer;
