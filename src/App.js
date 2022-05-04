import React from 'react';
import HomeController from './controllers/Home'
import TradingView from './controllers/TradingView'

import './assets/scss/style.scss';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HomeController />
                {/* <TradingView></TradingView> */}
            </React.Fragment>
        )
    }
}


export default App