const userPassword = prompt('Please enter the password.');

function checkPassword(userPassword) {
  if (userPassword === 'myPassword1!') {
    return alert('the password is correct!');
  }
}

checkPassword(userPassword);
