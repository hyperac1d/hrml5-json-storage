let json_names = [];
function createUser(){
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    

    let newName = {
        username: username,
        email: email,
        password: password
    };
    json_names.push(newName);

    

    console.log(json_names);
    let jns = JSON.stringify(json_names);
    localStorage.setItem('json_names',jns); 

    let jns_retrieve = JSON.parse(localStorage.getItem('json_names'));


    alert("Successfully Registered!");
  }