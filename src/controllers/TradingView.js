import React, { useState } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

function TradingView(props) {
    return (
        <TradingViewWidget
            symbol="NASDAQ:AAPL"
            locale="fr"
        ></TradingViewWidget>
    );
}

export default TradingView;