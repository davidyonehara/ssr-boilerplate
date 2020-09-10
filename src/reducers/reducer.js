// import {
//     DECREMENT_COUNT,
// } from '../actions/countAction'

let initialState = {
    count: 0
}

export default function( state = initialState, action ) {
    switch ( action.type ) {
    // case DECREMENT_COUNT: {
    //     return Object.assign({}, state, { count: --state.count })
    // }
    default:
        return state
    }
}
