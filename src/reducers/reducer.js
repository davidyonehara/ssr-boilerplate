import {
    INCREMENT_COUNT,
    DECREMENT_COUNT
} from '../actions/action'

let initialState = {
    count: 0
}

export default function( state = initialState, action ) {
    switch ( action.type ) {
    case INCREMENT_COUNT:
    case DECREMENT_COUNT: {
        return Object.assign({}, state, { count: state.count + action.value })
    }
    default:
        return state
    }
}
