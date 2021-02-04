const initialState = {
    ann: [{
    }]
};

export function annReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_ANN':
            return { ann: action.allAnn };

        // case 'UPDATE_ANN':
        //     return { ...state, ann: state.ann.push(action.) };

        default:
            return state
    }
}