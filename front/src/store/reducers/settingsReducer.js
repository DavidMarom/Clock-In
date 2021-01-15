const initialState = {
    settings: [{
        img: ["https://res.cloudinary.com/dojmo7vcc/image/upload/v1610644266/clock/dag2gxscebwtsve9807g.png"]

    }]
};

export function settingsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_SETTINGS':
            return { settings: action.allSettings };

        case 'UPDATE_SET':
            return { settings: [action._set] };

        default:
            return state
    }
}