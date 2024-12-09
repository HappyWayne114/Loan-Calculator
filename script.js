function calculateLoan() {
    const amount = parseFloat(document.getElementById("amount").value);
    const loanType = document.getElementById("loanType").value;
    let interestRate;

    if (loanType === "First") {
        interestRate = 0.15;
    } else if (loanType === "Second") {
        interestRate = 0.10;
    } else if (loanType === "Third") {
        interestRate = 0.07;
    }

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid loan amount.";
        return;
    }

    const interest = amount * interestRate;
    const totalAmount = amount + interest;

    document.getElementById("result").textContent = `Loan Amount: €${amount.toFixed(2)}, Interest: €${interest.toFixed(2)}, Total Payable: €${totalAmount.toFixed(2)}.`;
}
