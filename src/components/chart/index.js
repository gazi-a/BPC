import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { Box } from "@chakra-ui/react";
function Chart() {
  return (
    <Box py={5}>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="fr"
        height="600px"
        width="100%"
      />
    </Box>
  );
}
export default Chart;
