import { auth, signInWithEmailAndPassword } from "./config.js";

let loginUsers = document.querySelector("#loginUsers");
let loginUser =async()=>{
 
   try {
      let email =  document.querySelector("#email").value;
      let password =  document.querySelector("#password").value;
      console.log(`email ${email} password : ${password}`);
      

      await signInWithEmailAndPassword(auth, email, password);
      console.log("user successfully signIn");
      window.location.replace("password.html")

      
    
   } catch (error) {
    console.log(error);
   }
}
  
loginUsers.addEventListener("click",(e)=>{
    e.preventDefault();
    loginUser();


});