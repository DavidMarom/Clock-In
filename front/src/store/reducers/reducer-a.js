const initialState = {
    counter_a: 1
}

const reducer_A = (state = initialState, action) => {
    
    switch (action.type) {
        case 'INC_A':
            return {
                ...state,
                counter_a: state.counter_a + 1
            }
        case 'DEC_A':
            return {
                ...state,
                counter_a: state.counter_a - 1
            }

        default:
            return state
    }
}

export default reducer_A;