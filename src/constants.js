import Home from './views/Home'

export const SITE_CONFIG = {
    title : 'David James Yonehara',
    routes: [
        {
            path    : '/',
            exact   : true,
            title   : 'Home',
            template: Home
        }
    ]
}