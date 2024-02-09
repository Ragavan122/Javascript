

const form=document.querySelector("#form");
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');
const Success=true;



form.addEventListener('submit',(e)=>{

   
    if(!validateInputs()){
        e.preventDefault();   //if error comes dont submit the form so we use this
    }


})

    function validateInputs(){
       const usernameVal=username.value.trim();    //deleting the extra spaces while validating
       const emailVal=email.value.trim();
       const passwordVal=password.value.trim();
       const cpasswordVal=cpassword.value.trim();


       if(usernameVal===''){
        Success='false';
        setError (username,"username is required")
       }
       else{
        setSuccess(username)
       }


       if(emailval===''){
        Success='false';
        setError(email,"email is required")
       }
       else if(!validateEmail(emailVal)){
        Success='false';
        setError(email,"Please enter a valid email")
       }

       else{
        setSuccess(email)
       }

 
       if(passwordVal==""){
        Success='false';
        setError(password,"password is required")
       }
       else if(passwordVal.length<8){
        Success='false';
        setError(password,"password must be 8 characters")
       }
       else{
        setSuccess(passsword)
       }
     
      
     if(cpasswordVal===""){
        Success='false';
        setError(cpassword,"confirm password is required")
     }
     else if(cpasswordVal!==passwordVal){
        Success='false';
        setError(cpassword,"password is not matched")
     }
     else{
        setSuccess(cpassword)
     }
     return Success;

    }


    function setError(elemenent,message){    //element-password  message="password required"

     const inputGroup=elemenent.parentElement;
     const errorElement=inputGroup.querySelector(".error");
     errorElement.innerText=message;

     inputGroup.classList.add('error');
     inputGroup.classList.remove('success');

    }


    function setSuccess(elemenent){    //element-password  message="password required"

        const inputGroup=elemenent.parentElement;
        const errorElement=inputGroup.querySelector(".error");
        
        errorElement.innerText='';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    
    }



   const validateEmail=(email)=>{
     return String (email)
     .toLowerCase()
     .match(  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ );
        
    };