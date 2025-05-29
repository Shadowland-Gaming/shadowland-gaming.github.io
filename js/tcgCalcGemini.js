
// Function to format numbers as currency
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

// Function to display error messages in a modal
function showErrorModal(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('errorModal').classList.remove('hidden');
}

// Close modal
document.getElementById('closeModalButton').addEventListener('click', () => {
    document.getElementById('errorModal').classList.add('hidden');
});

document.getElementById('goBackButton').addEventListener('click', function () {
    window.location.href = "index.html";
});


// Main calculation logic
document.getElementById('calculateButton').addEventListener('click', function () {
    // --- Get Input Values ---
    const acquisitionPrice = parseFloat(document.getElementById('acquisitionPrice').value);
    const salePrice = parseFloat(document.getElementById('salePrice').value);
    const shippingCharged = parseFloat(document.getElementById('shippingCharged').value);
    const actualShippingCost = parseFloat(document.getElementById('actualShippingCost').value);
    const packagingCost = parseFloat(document.getElementById('packagingCost').value);
    const tcgCommissionRate = parseFloat(document.getElementById('tcgCommissionRate').value); // Percentage
    const paymentProcessingRate = parseFloat(document.getElementById('paymentProcessingRate').value); // Percentage
    const paymentProcessingFixedFee = parseFloat(document.getElementById('paymentProcessingFixedFee').value);

    // --- Input Validation ---
    const inputs = [
        { value: acquisitionPrice, name: "Acquisition Price" },
        { value: salePrice, name: "Sale Price" },
        { value: shippingCharged, name: "Shipping Charged" },
        { value: actualShippingCost, name: "Actual Shipping Cost" },
        { value: packagingCost, name: "Packaging Cost" },
        { value: tcgCommissionRate, name: "TCGPlayer Commission Rate" },
        { value: paymentProcessingRate, name: "Payment Processing Rate" },
        { value: paymentProcessingFixedFee, name: "Payment Processing Fixed Fee" }
    ];

    for (const input of inputs) {
        if (isNaN(input.value)) {
            showErrorModal(`Please enter a valid number for ${input.name}.`);
            return;
        }
        if (input.value < 0) {
            showErrorModal(`${input.name} cannot be negative.`);
            return;
        }
    }
    if (salePrice <= 0) {
        showErrorModal(`Sale Price must be greater than zero.`);
        return;
    }


    // --- Calculations ---
    // Gross Revenue
    const grossRevenue = salePrice + shippingCharged;

    // TCGPlayer Commission Fee (on Sale Price)
    const tcgCommissionFee = salePrice * (tcgCommissionRate / 100);

    // Payment Processing Fee (on Sale Price + Shipping Charged)
    const totalForPaymentProcessing = salePrice + shippingCharged;
    const paymentProcessingFee = (totalForPaymentProcessing * (paymentProcessingRate / 100)) + paymentProcessingFixedFee;

    // Total TCGPlayer Fees
    const totalTcgFees = tcgCommissionFee + paymentProcessingFee;

    // Total Expenses
    const totalExpenses = acquisitionPrice + actualShippingCost + packagingCost + totalTcgFees;

    // Net Profit
    const netProfit = grossRevenue - totalExpenses;

    // --- Display Results ---
    document.getElementById('resultsArea').classList.remove('hidden');

    document.getElementById('grossRevenueResult').textContent = formatCurrency(grossRevenue);

    document.getElementById('tcgCommissionFeeResult').textContent = formatCurrency(tcgCommissionFee);
    document.getElementById('paymentProcessingFeeResult').textContent = formatCurrency(paymentProcessingFee);
    document.getElementById('totalTcgFeesResult').textContent = formatCurrency(totalTcgFees);

    document.getElementById('expenseAcquisitionResult').textContent = formatCurrency(acquisitionPrice);
    document.getElementById('expenseShippingResult').textContent = formatCurrency(actualShippingCost);
    document.getElementById('expensePackagingResult').textContent = formatCurrency(packagingCost);
    document.getElementById('expenseTcgFeesResult').textContent = formatCurrency(totalTcgFees);
    document.getElementById('totalExpensesResult').textContent = formatCurrency(totalExpenses);

    const netProfitElement = document.getElementById('netProfitResult');
    netProfitElement.textContent = formatCurrency(netProfit);
    if (netProfit >= 0) {
        netProfitElement.className = 'profit text-2xl font-bold mt-1'; // Green for profit
    } else {
        netProfitElement.className = 'loss text-2xl font-bold mt-1'; // Red for loss
    }
});

// Reset form fields and results
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('profitCalculatorForm').reset();
    document.getElementById('resultsArea').classList.add('hidden');
    // Reset default fee values explicitly if needed, as form.reset() might not trigger value attributes for dynamically set defaults
    document.getElementById('shippingCharged').value = "0.99";
    document.getElementById('tcgCommissionRate').value = "10.25";
    document.getElementById('paymentProcessingRate').value = "2.99";
    document.getElementById('paymentProcessingFixedFee').value = "0.30";
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();