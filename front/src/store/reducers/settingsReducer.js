const initialState = {
    settings: [{img: 'https://res.cloudinary.com/dojmo7vcc/image/upload/v1610603666/clock/fmh7yj58iny9vdx0j7ch.png'}]
};

export function settingsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_SETTINGS':
            return { ...state, settings: action.allSettings };

        case 'UPDATE_SET':
            return { ...state, settings: action._set };

        default:
            return state
    }
}