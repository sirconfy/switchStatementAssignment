let ussd = prompt("Enter your Fidelity Bank USSD Code");

switch (true) {
  case ussd == "*770#":
    let option = prompt(`Selet menu
                  1. Check Balance
                  2. Transfer
                  3. Airtime
                  4. Others`);

    switch (true) {
      case option == 1:
        prompt("Enter your account Number");
        let pin = prompt("Enter your pin");
        confirm(`please confirm pin ${pin}`);
        alert("your balance will be sent to you shortly");
        break;

      case option == 2:
        let transfer = Number(prompt("Enter amount"));
        let accountNumber = Number(prompt("Enter Beneficiary Account Number"));
        switch (true) {
          case accountNumber < 10:
            alert("incorrect account number");
            break;
        }

        confirm(`you are about to transfer ${transfer} to Mr. Kayode Buhari`);
        prompt("Enter your four digit pin");
        confirm(`confirm the amount you are about to send ${transfer}`);
        alert("Transfer was successful");

        break;

      case option == 3:
        let airtime = prompt(`1. Self \n 2. Others`);
        switch (true) {
          case airtime == 1:
            let airtimeSelf = prompt("Enter amount");
            confirm(`confirm the airtime amount ${airtimeSelf}`);
            prompt("Enter your four digit pin");
            alert("airtime successfully purchased");

            break;
          case airtime == 2:
            let airtimeOthers = prompt("Enter amount");
            let number = prompt("Enter phone number");
            confirm(`confirm the airtime amount ${airtimeOthers} to ${number}`);
            prompt("Enter your four digit pin");
            alert("airtime successfully purchased");
            break;
        }
        break;

      case option == 4:
        alert("still undergoing system maintainance");

        break;
    }

    break;

  default:
    alert("please enter fidelity bank ussd");
    break;
}
