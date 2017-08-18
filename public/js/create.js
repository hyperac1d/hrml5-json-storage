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


