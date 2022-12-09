import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function Chart() {
  return (
    <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme={Themes.DARK}
    locale="fr"
    autosize
  />
  );
}
export default Chart;
