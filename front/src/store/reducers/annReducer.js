const initialState = {
    ann: []
};

export function annReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_ANN':

            return { ann: action.allAnn };

        case 'ADD_ANN':
            // return { ...state, ann: [...state.ann, action] }
            // return { ...state, ann: state.ann.map(ann => (action._ann._id === ann._id) ? action._ann : ann) }
            return { ...state, ann: [...state.ann, state.ann.map(ann => (action._ann._id === ann._id) ? action._ann : ann)] }

        case 'REMOVE_ANN':
            return  { ...state, ann: state.ann.filter(ann => ann._id !== action.annId) };



        default:
            return state
    }
}