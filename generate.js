generate = () => {
  var otp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  document.getElementById('otp').value = otp;
}
showHide = () => {
  let passwordFields = document.querySelectorAll('input[class=pw]');
  passwordFields.forEach(passwordField => {
    let state = passwordField.type == "password" ? "text" : "password";
    passwordField.type = state;
  });
}
validate = () => {
  let userOTP = document.getElementById('user-otp').value;
  let serverOTP = document.getElementById('otp').value;
  let isValid = userOTP == serverOTP;
  alert(`OTP  Validity => ${isValid}`);
}


