import React, { Component } from 'react'
import Head from '../components/Head'
import './../styles/Home.scss'

class Home extends Component {

    render() {
        let SEO = {
            title      : 'David James Yonehara - Software Engineer',
            description: 'My name is David Yonehara. I am a software engineer experienced with single page page web apps, WordPress websites, business analytics, GTM, and more.',
            keywords   : 'David James Yonehara, Software Engineer, Software Developer, React Developer, React, Redux, PHP, Wordpress, Southern California, Los Angeles',
            image      : '/images/david-yonehara.jpg'
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
