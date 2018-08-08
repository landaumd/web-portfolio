import { createStore } from 'redux'

var defaultState = {
    originAmount: '0.00',
    rightIsOpen: false,
    displayRight: "none",
    myJSONid: "01",
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
            var rightOpen = !state.rightIsOpen;
            var displayRightString = (rightOpen) ? "table-column" : "none";
            var myJSONid = action.data.myJSONid;
        }else{
            var myJSONid = action.data.myJSONid;
            var rightOpen = state.rightIsOpen;
        }
        return {
            ...state,
            rightIsOpen: rightOpen,
            displayRight: displayRightString,
            myJSONid: myJSONid
        }
    }
    else {
        return state;
    }
}

var store = createStore(reducerStore);

export default store;
