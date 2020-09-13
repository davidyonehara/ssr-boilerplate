export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
// import axios from 'axios'

// Point start-dev to express server so we can do quick front-end changes without rebuilding and use genuine data.
// const axiosInstance = ( typeof window === 'object' ) ? axios.create({ baseURL: window.location.origin.replace('localhost:3000', 'localhost:8080') }) : axios

export function decrementCount( value = -1 ) {
    return { type: DECREMENT_COUNT, value }
}

export function incrementCount( value = 1 ) {
    return { type: DECREMENT_COUNT, value }
}