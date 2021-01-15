const initialState = {
    ann: [{
    }]
};

export function annReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_ANN':
            return { ann: action.allAnn };

        // case 'UPDATE_SET':
        //     return { settings: [action._set] };

        default:
            return state
    }
}