import React from 'react';
import HomeController from './controllers/Home'

import './assets/scss/style.scss';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HomeController />
            </React.Fragment>
        )
    }
}


export default App