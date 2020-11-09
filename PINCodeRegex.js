const pinCodeRegex = RegExp("^\\d{6}$");

function testPinCode(pinCode) {
  if (pinCodeRegex.test(pinCode)) return true;
  else throw "Given Pin Code is in wrong format";
}

// Pin Code - UC1
console.log("UC1")
console.log(testPinCode("Check for 400088: "+400088));
console.log(testPinCode("Check for a400088: "+a400088));