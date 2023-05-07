let initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
    console.log("액션", action);
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1 };
        default:
            return { ...state };
    }
    // if(action.type === "INCREMENT"){
    //     return {...state, count: state.count + 1};
    // }

    // return { ...state };
}

export default reducer