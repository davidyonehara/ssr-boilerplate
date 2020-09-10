import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Head extends Component {

    render() {
        let { title, description, keywords, image, androidThemeColor } = this.props.SEO
        let themeColor = androidThemeColor || '#000'
        return (
            <Helmet>
                <title>{ title }</title>
                <meta
                    name="description"
                    property="og:description"
                    content={ description } />
                <meta
                    name="keywords"
                    content={ keywords } />
                <meta
                    property="og:image"
                    content={ image } />
                <meta name="theme-color" content={ themeColor } />
            </Helmet>
        )
    }
}

export default Head
