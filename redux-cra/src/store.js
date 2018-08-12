import { createStore } from 'redux'

var defaultState = {
    originAmount: '0.00',
    rightIsOpen: false,
    displayRight: "none",
    myJSONid: "01",
    category: "Filter By Category"
};

//reducer
function reducerStore(state = defaultState, action) {

    if (action.type === 'TOGGLE_RIGHT_IS_OPEN') {
        var rightOpen = !state.rightIsOpen;
        var displayRightString = (rightOpen) ? "table-column" : "none";
        var myJSONid = state.myJSONid;


        return {
            ...state,
            rightIsOpen: rightOpen,
            displayRight: displayRightString,
            myJSONid: myJSONid
        }
    }
    else if(action.type === 'SHOW_CARD'){

        if(state.rightIsOpen===false){
            rightOpen = !state.rightIsOpen;
            displayRightString = (rightOpen) ? "table-column" : "none";
            myJSONid = action.data.myJSONid;
        }else{
            myJSONid = action.data.myJSONid;
            rightOpen = state.rightIsOpen;
        }
        return {
            ...state,
            rightIsOpen: rightOpen,
            displayRight: displayRightString,
            myJSONid: myJSONid
        }
    }else if (action.type === 'FILTER_BY_CATEGORY') {
        var category = action.data.category;
        var idsWithCategory = action.data.idsWithCategory;

        return {
            ...state,
            category: category,
            idsWithCategory: idsWithCategory,
        }
    }
    else {
        return state;
    }
}

var store = createStore(reducerStore);

export default store;
