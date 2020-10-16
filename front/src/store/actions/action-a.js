export function onInc_a() {
    return dispatch => {
        dispatch({ type: 'INC_A' })
    }
}

export function onDec_a() {
    return dispatch => {
        dispatch({ type: 'DEC_A' })
    }
}

