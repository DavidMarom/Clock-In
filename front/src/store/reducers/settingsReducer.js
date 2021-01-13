const initialState = {
    img: 'bbb'
};

export function settingsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_SETTINGS':
            return { ...state, img: action.settings };

        default:
            return state
    }
}



