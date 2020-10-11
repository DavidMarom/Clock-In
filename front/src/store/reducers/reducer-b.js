const initialState = {
    counter_b: 5
}

const reducer_B = (state = initialState, action) => {

    switch (action.type) {
        case 'INC_B':
            return {
                ...state,
                counter_b: state.counter_b + 1
            }
        case 'DEC_B':
            return {
                ...state,
                counter_b: state.counter_b - 1
            }

        default:
            return state
    }
}

export default reducer_B;