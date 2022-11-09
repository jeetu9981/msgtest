var confirmPassword;

            function validateRegistor(){
                var name=validateName();
                var email=validateEmail();
                var pass=validatePassword();

                if(pass&&name && email)
                    return true;
                return false;
            }
            
            

            function validateName(){
                var status=true;
                var name=document.getElementById("eName").value;
                var errMsg=document.getElementById("userName");
                if(name=="")
                {
                    status=false;
                    errMsg.innerHTML="Please enter a name";
                    errMsg.style.color="red";
                }
                else if(!nameMycode(name))
                {
                    status=false;
                    errMsg.innerHTML="Please enter a valid name";
                    errMsg.style.color="red";
                }   
                else
                    errMsg.innerHTML="";

                return status;
            }
            
            function validateEmail(){
                var status = true;
                var email  = document.getElementById("email").value;
                var emailError = document.getElementById("emailErr");
                if(email == ""){
                    status = false;
                    emailError.innerHTML = "please enter email id";
                    emailError.style.color = "red";
                } 
                else if(!emailMycode(email)){
                    status = false;
                    emailError.innerHTML = "Invalid email id";
                    emailError.style.color = "red";
                }
                else
                 emailError.innerHTML = "";
                return status;
            }

            
            function validatePassword(){
                var status = true;
                var email  = document.getElementById("password").value;
                var passErr = document.getElementById("passErr");
                console.log("length :"+email.length);
                if(email == ""){
                    status = false;
                    passErr.innerHTML = "please enter password ";
                    passErr.style.color = "red";
                } 
                else if(!(passwordMycode(email)))
                {
                    status = false;
                    passErr.innerHTML = "Number and other symbol are not allowed";
                    passErr.style.color = "red";
                }
                else if((email.length>15))
                {
                    status = false;
                    passErr.innerHTML = "password limit is 15 characters";
                    passErr.style.color = "red";
                }
                else
                    passErr.innerHTML = "";

                confirmPassword=email;
                return status;
            }
