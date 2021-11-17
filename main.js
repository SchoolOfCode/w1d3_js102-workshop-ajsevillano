let attempts = 0;

while (attempts < 3) {
  let userPassword = prompt('Please enter the password.');
  if (userPassword === 'myPassword1!') {
    console.log('the password is correct!');
    break;
  } else {
    ++attempts;
    console.log('the password is incorrect!');
  }
}
