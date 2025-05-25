function calculate() {
    const numSalesTax = 0.07;
    const numShippingCost = 1.19;
    const numTcgSellerFee = 0.125;
    const numEbaySellerFee = 0.1325;
    const numWhatnotSellerFee = 0.11;

    const numActualPrice = Math.round((parseFloat(document.getElementById("numActualPrice").value)) * 100) / 100;
    const numMarketPrice = Math.round((parseFloat(document.getElementById("numMarketPrice").value)) * 100) / 100;
    const numPercentBelowMarket = Math.round((((numMarketPrice - numActualPrice) / numMarketPrice) * 100) * 100) / 100;

    const numSalesTaxCalc = Math.round((numActualPrice * numSalesTax) * 100) / 100;
    const numAcquiredCost = Math.round((numActualPrice + numSalesTaxCalc) * 100) / 100;
    const numProfitBeforeSellerFees = Math.round((numMarketPrice - numAcquiredCost - numShippingCost) * 100) / 100;
    
    const numTcgSellerFeeCalc = Math.round((numMarketPrice * numTcgSellerFee) * 100) / 100;
    const numEbaySellerFeeCalc = Math.round((numMarketPrice * numEbaySellerFee) * 100) / 100;
    const numWhatnotSellerFeeCalc = Math.round((numMarketPrice * numWhatnotSellerFee) * 100) / 100;
    const numTcgProfit = Math.round((numProfitBeforeSellerFees - numTcgSellerFeeCalc) * 100) / 100;
    const numEbayProfit = Math.round((numProfitBeforeSellerFees - numEbaySellerFeeCalc) * 100) / 100;
    const numWhatnotProfit = Math.round((numProfitBeforeSellerFees - numWhatnotSellerFeeCalc) * 100) / 100;

    document.getElementById("txtActualPrice").textContent = `Cost: \$${numActualPrice}`;
    document.getElementById("txtMarketPrice").textContent = `Market Price: \$${numMarketPrice}`;
    document.getElementById("txtPercentBelowMarket").textContent = `${numPercentBelowMarket}% Below Market`;

    document.getElementById("txtSalesTax").textContent = `Sales Tax: \$${numSalesTaxCalc}`;
    document.getElementById("txtAcquiredCost").textContent = `Acquired Cost: \$${numAcquiredCost}`;
    document.getElementById("txtProfitBeforeSellerFees").textContent = `Profit Before Seller Fees: \$${numProfitBeforeSellerFees}`;

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