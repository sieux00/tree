import React, { Fragment } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomeController from './controllers/Home'
import MarketMaker from './controllers/MarketMaker';
import './assets/scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/tree" exact element={<HomeController />} />
                    <Route path="/tree/marketmaker" exact element={<MarketMaker />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App