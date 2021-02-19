const initialState = {
    ann: []
};

export function annReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_ANN':
            return { ann: action.allAnn };

        case 'ADD_ANN':
            // return { ...state, ann: state.ann.push(action._ann) };
            return { ...state, ann: state.ann.map(ann => (action._ann._id === ann._id) ? action._ann : ann) }


        default:
            return state
    }
}