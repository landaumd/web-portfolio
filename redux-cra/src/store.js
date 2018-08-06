// /*
//  * src/store.js
//  * No initialState
// */
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer.js';
//
// export default function configureStore() {
//     return createStore(
//         rootReducer,
//         applyMiddleware(thunk)
//     );
// }

import { createStore } from 'redux'

var defaultState = {
    originAmount: '0.00',
    rightIsOpen: false,
    displayRight: "none",
};

//reducer
function amount(state = defaultState, action) {
    console.log('state', state)
    if (action.type === 'CHANGE_ORIGIN_AMOUNT') {
        return {
            ...state,
            originAmount: action.data.newAmount
        }
    }

    if (action.type === 'TOGGLE_RIGHT_IS_OPEN') {
        var rightOpen = !state.rightIsOpen;
        var displayRightString = (rightOpen) ? "table-column" : "none";

        return {
            ...state,
            rightIsOpen: rightOpen,
            displayRight: displayRightString
        }
    }

    return state;
}

var store = createStore(amount);

export default store;
