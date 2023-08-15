document.getElementById("btn-submit").addEventListener("click",function(){

    //email field
    const emailField=document.getElementById("user-email")
    const email=emailField.value;
   
    //password field
    const passwordField=document.getElementById("user-password");
    const password=passwordField.value;

    //validation
    if(email ==="meghlaparvin@gmail.com" && password==="meghla"){
        window.location.href="bank.html"
    }
    else{
      alert("invalid user")
    }
})