let attempts = 0;

// while (attempts < 3) {
//   let userPassword = prompt('Please enter the password.');
//   if (userPassword === 'myPassword1!') {
//     alert('Your secret name is: pigeon');
//     break;
//   } else {
//     ++attempts;
//     alert('the password is incorrect!');
//   }
// }

function authenticateUser() {
  while (attempts < 3) {
    let userPassword = prompt('Please enter the password.');
    if (userPassword === 'myPassword1!') {
      return true;
    } else {
      ++attempts;
    }
  }
  return false;
}

let isLoggedIn = authenticateUser();
if (isLoggedIn) {
  console.log('your secret name is Mr Pigeon');
}
