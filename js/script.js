function calculate() {
    const numSalesTax = 0.07;
    const numShippingCost = 1.19;
    const numTcgSellerFee = 0.125;
    const numEbaySellerFee = 0.1325;
    const numWhatnotSellerFee = 0.11;

    let numActualPrice = parseFloat(document.getElementById("numActualPrice").value);
    let numMarketPrice = parseFloat(document.getElementById("numMarketPrice").value);
    let numPercentBelowMarket = Math.round(((numMarketPrice - numActualPrice) / numMarketPrice) * 100 * 100) / 100;

    let numSalesTaxRounded = Math.round(numActualPrice * numSalesTax * 100) / 100;
    let numAcquiredCost = numActualPrice + numSalesTaxRounded;

    let numProfitBeforeSellerFees = numMarketPrice - numAcquiredCost - numShippingCost;
    let numTcgSellerFeeCalc = Math.round(numMarketPrice * numTcgSellerFee) / 100;
    let numEbaySellerFeeCalc = Math.round(numMarketPrice * numEbaySellerFee) / 100;
    let numWhatnotSellerFeeCalc = Math.round(numMarketPrice * numWhatnotSellerFee) / 100;

    let numTcgProfit = Math.round(numProfitBeforeSellerFees - numTcgSellerFeeCalc * 100) / 100;
    let numEbayProfit = Math.round(numProfitBeforeSellerFees - numEbaySellerFeeCalc * 100) / 100;
    let numWhatnotProfit = Math.round(numProfitBeforeSellerFees - numWhatnotSellerFeeCalc * 100) / 100;

    document.getElementById("txtActualPrice").textContent = `Cost: \$${numActualPrice}`;
    document.getElementById("txtMarketPrice").textContent = `Market Price: \$${numMarketPrice}`;
    document.getElementById("txtPercentBelowMarket").textContent = `${numPercentBelowMarket}% Below Market`;

    document.getElementById("txtSalesTax").textContent = `Sales Tax: \$${numSalesTaxRounded}`;
    document.getElementById("txtAcquiredCost").textContent = `Acquired Cost: \$${numAcquiredCost}`;

    document.getElementById("txtTcgFee").textContent = `\$${numTcgSellerFeeCalc}`;
    document.getElementById("txtTcgProfit").textContent = `\$${numTcgProfit}`;
    document.getElementById("txtTcgTotalProfit").textContent = `placeholder`;
    document.getElementById("txtEbayFee").textContent = `\$${numEbaySellerFeeCalc}`;
    document.getElementById("txtEbayProfit").textContent = `\$${numEbayProfit}`;
    document.getElementById("txtEbayTotalProfit").textContent = `placeholder`;
    document.getElementById("txtWhatnotFee").textContent = `\$${numWhatnotSellerFeeCalc}`;
    document.getElementById("txtWhatnotProfit").textContent = `\$${numWhatnotProfit}`;
    document.getElementById("txtWhatnotTotalProfit").textContent = `placeholder`;
    
    
    
}