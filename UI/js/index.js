window.onload = function() {
    var signIn = document.getElementById("signInButton");
    var signUp = document.getElementById("signUpButton");
    var admin = document.getElementById("adminButton");
    var submit = document.getElementById("submitButton");
    var submitButtonAdmin= document.getElementById("submitButtonAdmin");
        signIn.onmouseover = function(){
            this.style.backgroundColor = "#369b92e8";
        }

        signIn.onmouseout = function(){
        this.style.backgroundColor = "##369b92e8";
        }

        signUp.onmouseover = function(){
            this.style.backgroundColor = "#369b92e8";
        }

        signUp.onmouseout = function(){
        this.style.backgroundColor = "#369b92e8";
        }

        admin.onmouseover = function(){
            this.style.backgroundColor = "#369b92e8";
        }

        admin.onmouseout = function(){
        this.style.backgroundColor = "#369b92e8";
        }

        submit.onmouseover = function(){
            this.style.backgroundColor = "#369b92e8";
        } 
        
        submit.onmouseout = function(){
            this.style.backgroundColor = "#369b92e8";
        }
    
        /* On mouse Click */
        signIn.onclick = function(){
            this.style.backgroundColor = "#369b92e8";
            this.style.outline = "none";
        }

        signUp.onclick = function(){
        this.style.backgroundColor = "#369b92e8";
        this.style.outline = "none";
        }

        admin.onclick = function(){
            this.style.backgroundColor = "#369b92e8";
            this.style.outline = "none";
            }

        submit.onclick = function(){
        this.style.backgroundColor = "#369b92e8";
        this.style.outline = "none";
        }

        submitButtonAdmin.onclick = function(){
            this.style.backgroundColor = "#369b92e8";
            this.style.outline = "none";
        }

}
