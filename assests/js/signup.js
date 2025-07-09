import { auth, createUserWithEmailAndPassword } from "./config.js";

let submitBtn = document.querySelector("#signupBtn");
let signUp =async()=>{
 
   try {
      let email =  document.querySelector("#email").value;
      let password =  document.querySelector("#password").value;
      console.log(`email ${email} password : ${password}`);
      

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