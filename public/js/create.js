  accounts = [];

  function createUser(){
  
  let username = document.querySelector('#username').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  let user = [{
    username: username,
    email: email,
    password: password
  }];

  accounts.push(user);
  console.log(accounts);
  let jns = JSON.stringify(accounts);
  localStorage.setItem('accounts', jns);
  sessionStorage.setItem('accounts', jns);
  let jns_retrieve = JSON.parse(localStorage.getItem('accounts'));
  console.log(jns_retrieve);
  alert('Succesfully Created!');
  }

