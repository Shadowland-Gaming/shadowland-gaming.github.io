function calculate() {
    const numShippingCost = 1.19;
    const numTcgSellerFees = 0.125;
    const numEbaySellerFees = 0.1325;
    const numWhatnotPayPalFees = 0.11;
    //const boolSalesTax = document.getElementById("boolSalesTax").checked;

    let numActualPrice = parseFloat(document.getElementById("numActualPrice").value);
    let numMarketPrice = parseFloat(document.getElementById("numMarketPrice").value);

    let numSalesTax = numActualPrice * 0.07;
    let numSalesTaxRounded = Math.round(numSalesTax * 100) / 100;

    let numTotalPrice = numActualPrice + numSalesTaxRounded;
    let numPercentBelowMarket = ((numMarketPrice - numActualPrice) / numMarketPrice) * 100;
    let numPercentBelowMarketRounded = Math.round(numPercentBelowMarket * 100) / 100;

    document.getElementById("txtActualPrice").textContent = "Cost: $" + numActualPrice;
    document.getElementById("txtMarketPrice").textContent = "Market Price: $" + numMarketPrice;
    document.getElementById("txtSalesTax").textContent = "Sales Tax: $" + numSalesTaxRounded;
}