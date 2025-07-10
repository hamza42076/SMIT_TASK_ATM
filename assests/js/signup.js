import { auth, createUserWithEmailAndPassword } from "./config.js";

let submitBtn = document.querySelector("#signupBtn");
let signUp =async()=>{
 
   try {
      let email =  document.querySelector("#email").value;
      let username =  document.querySelector("#username").value;
      let usernameSapn =  document.querySelector("#usernameSapn");
      let password =  document.querySelector("#password").value;
      let confirmPassword =  document.querySelector("#confirmPassword").value;
      let confirmSpan =  document.querySelector("#confirmSpan");

      usernameSapn.innerText = "";
      confirmSpan.innerText = "";
      if (username.length <3) {
         usernameSapn.innerText = "enter the name correctly";
         return
      }
      if (password != confirmPassword) {
         confirmSpan.innerText = "Please re-enter the same password for confirmation.";
         return;
      }
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("user successfully added");
      window.location.replace("login.html")
      
    
   } catch (error) {
    console.log(error);
   }
}
  
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    signUp();


});