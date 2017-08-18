function isLogin(){
        let input_username = document.querySelector('#username').value;
        let input_password= document.querySelector('#password').value;
        let account = JSON.parse(localStorage.getItem("json_names"));
        let html=``;

        console.log(account);

        try{
            for(var i = 0; i < account.length; i++){
                if(account == null){
                    alert("Invalid Username or Password");
                }
                
                else if(account[i].username == input_username && account[i].password == input_password){
                    console.log(account[i].username);
                    console.log(account[i].password);
                    window.open("/list");
                    break;
                }

                else{
                    alert("Invalid Username or Password");
                    break;
                }
                
            }
        }

        catch(TypeError){
            alert("Invalid Username or Password");
        }
        
}