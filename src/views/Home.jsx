import React from 'react'
import Head from '../components/Head'
import './../styles/Home.scss'

import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount } from '../actions/action'

const Home = () => {

    let value = useSelector(state => state.count)
    const dispatch = useDispatch()
    let SEO = {
        title      : 'SSR Boilerplate',
        description: '',
        keywords   : '',
        image      : ''
    }

    return (
        <div className="Home">
            <Head SEO = { SEO } />
            <div>
                <h2>
                    { value }
                </h2>
                <button onClick={() => { dispatch(incrementCount())}}>++</button>
                <button onClick={() => { dispatch(decrementCount())}}>--</button>
            </div>
        </div>
    )
}

export default Home
