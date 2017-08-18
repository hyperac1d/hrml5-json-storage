function isLogin(){
        let input_username = document.querySelector('#username').value;
        let input_password= document.querySelector('#password').value;
        let account = JSON.parse(localStorage.getItem("json_names"));
        let html=``;
        let result = false

        console.log(account);
        console.log("length of json: "+account.length)

        try{
            for(var i = 0; i < account.length; i++){
                if(account[i].username == input_username && account[i].password == input_password){
                    result = true
                }
                
            }
            if(result){
                alert("Welcome to Echo!")
                window.open("/list")
            }
        }

        catch(TypeError){
            alert("Invalid Username or Password");
        }
        
}