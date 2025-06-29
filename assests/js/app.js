let password = 1340;
let submitBtn = document.querySelector("#submitBtn")

let checkPassword = ()=>{
    let passwordInp = Number(document.querySelector("#passwordInp").value);
    if (password === passwordInp) {
       window.location.replace("Atm.html");
    }
    else{
        alert("Enter the correct password")
    }

}
submitBtn.addEventListener("click",checkPassword)