generate = () => {
  var otp = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  document.getElementById('otp').value = otp;
}
showHide = () => {
  var passwordFields = document.querySelectorAll('input[type=password]');
  passwordFields.forEach(passwordField => {
    var state = passwordField.type == "password" ? "text" : "password";
    passwordField.type = state;
  });
}
validate = () => {
  let userOTP = document.getElementById('user-otp').value
  let isValid = otp === userOTP;
  alert(`OTP  ${isValid}`);
}
