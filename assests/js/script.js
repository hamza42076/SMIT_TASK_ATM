let initalAmount = 20000;

let addAmountBtn = document.querySelector("#addAmount");
let Withdrawbtn = document.querySelector("#Withdraw");
let showbalance = document.querySelector("#showBalance");
let showAmount = document.querySelector("#showAmount");
let showHistoryBtn = document.querySelector("#showHistoryBtn");
let historyDiv = document.querySelector("#history");

// ✅ Create a history array
let transactionHistory = [];

// ✅ Deposit function
let depositAmount = () => {
  let inputValue = Number(document.querySelector("#Inputvalue").value);
  if (inputValue > 0) {
    initalAmount += inputValue;

    transactionHistory.push(`Deposited Rs.${inputValue} | New Balance: Rs.${initalAmount}`);
    document.querySelector("#Inputvalue").value = "";
    console.log(initalAmount);
  } else {
    alert("Please enter a valid amount to deposit.");
  }
};
addAmountBtn.addEventListener("click", depositAmount);

// ✅ Show balance function
let showAmountBalance = () => {
  showbalance.innerText = `Rs. ${initalAmount}`;
};
showAmount.addEventListener("click", showAmountBalance);

// ✅ Withdraw function
let WithdrawAmount = () => {
  let inputValue = Number(document.querySelector("#Inputvalue").value);
  if (inputValue > 0 && inputValue <= initalAmount) {
    initalAmount -= inputValue;

    transactionHistory.push(`Withdrew Rs.${inputValue} | New Balance: Rs.${initalAmount}`);
    document.querySelector("#Inputvalue").value = "";
    console.log(initalAmount);
  } else {
    alert("Insufficient balance or invalid input.");
  }
};
Withdrawbtn.addEventListener("click", WithdrawAmount);

// ✅ Show transaction history
let showTransactionHistory = () => {
  if (transactionHistory.length === 0) {
    historyDiv.innerHTML = "<p>No transactions yet.</p>";
    return;
  }

  let html = "<ul>";
  transactionHistory.forEach((item) => {
    html += `<li>${item}</li>`;
  });
  html += "</ul>";
  historyDiv.innerHTML = html;
};
showHistoryBtn.addEventListener("click", showTransactionHistory);
