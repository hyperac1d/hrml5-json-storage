#A SIMPLE GUIDE TO LOCAL STORAGE OR SESSION STORAGE

[x] - validate username and password
[x] - insert register record to table

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


let json_names = [];

try{
    let tmp_accounts = JSON.parse(localStorage.getItem("json_names"));

    tmp_accounts.map((account)=>{
        console.log(account);
        json_names.push(account);
    });
 
}
catch(TypeError){
    localStorage.setItem('json_names',JSON.stringify(json_names));
}


function createUser(){
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let newName = {
        username: username,
        email: email,
        password: password
    }
    json_names.push(newName);
    let jns = JSON.stringify(json_names)
    localStorage.setItem('json_names', jns)
    let jns_retrive = JSON.parse(localStorage.getItem('json_names'))
    // localStorage.setItem('json_names',JSON.stringify(json_names));
}



