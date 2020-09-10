import React, { Component } from 'react'
import Head from '../components/Head'
import './../styles/Home.scss'

class Home extends Component {

    render() {
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
                </div>
            </div>
        )
    }
}

export default Home
