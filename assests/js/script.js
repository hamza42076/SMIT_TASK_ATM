 import{signOut,auth , deleteUser,onAuthStateChanged} from "./config.js";
// initian Amount;
let initalAmount = 10000;

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("signup.html");
  }
});

let addAmountBtn = document.querySelector("#addAmount");
let Withdrawbtn = document.querySelector("#Withdraw");
let showbalance = document.querySelector("#showBalance");
let showAmountBtn = document.querySelector("#showAmount");
let showHistoryBtn = document.querySelector("#showHistoryBtn");
let delhistory = document.querySelector("#delhistory");
let historyDiv = document.querySelector("#history");
let logoutBtn = document.querySelector("#logout");

let TransectionHistory = [];

// DepositAmount
let DepositAmount =()=>{
  let InputVal = Number(document.querySelector("#Inputvalue").value);
  initalAmount += InputVal;
  TransectionHistory.push(`Deposit Rs: ${InputVal} !! Current Balance Rs: ${initalAmount}`);
  document.querySelector("#Inputvalue").value = "";
  console.log(initalAmount);
  
}
addAmountBtn.addEventListener("click",DepositAmount)

// WithDrawAmount
let WithdrawAmount =()=>{
  let InputVal = Number(document.querySelector("#Inputvalue").value);
  if (InputVal > initalAmount) {
    alert("You do not have sufficient funds in your account.")
    return
  }
else{
  initalAmount -= InputVal;
    TransectionHistory.push(`Withdraw Rs: ${InputVal} !! Current Balance Rs: ${initalAmount}`);
    document.querySelector("#Inputvalue").value = "";
    console.log(initalAmount);
}
}
Withdrawbtn.addEventListener("click",WithdrawAmount)


// CheckBalance
let checkBalance =()=>{
  showbalance.innerText = `${initalAmount}`
}
showAmountBtn.addEventListener("click",checkBalance);

let checkHistory= ()=>{
  if (TransectionHistory.length === 0) {
    historyDiv.innerText =`No transactions yet.`
    return
  }
  // add in history div for display history section
  let html = "<ul>";
  TransectionHistory.forEach((item)=>{
    html += `<li>${item}</li>`
  })
  html += "</ul>";
  historyDiv.innerHTML = html;
}
showHistoryBtn.addEventListener("click",checkHistory);

// deleteHistory
let deletehistory =()=>{
  TransectionHistory = [];
  historyDiv.innerHTML = "";
}
delhistory.addEventListener("click",deletehistory);


let deleteUsers =async ()=>{
  const user = auth.currentUser;
  if(!user){
    console.log("No user is currently signed in.");
    return;
  }
  try {
    await deleteUser(user);
    console.log("user deleted");

    await signOut(auth);
    console.log("Sign-out successfully.");
    window.location.replace("index.html")
  
  } catch (error) {
    console.log(error);
    
  }
}

 

logoutBtn.addEventListener("click",deleteUsers);

