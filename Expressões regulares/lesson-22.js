let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2}\d*$|^[a-zA-Z]{1}\d{2,}$|^[a-zA-Z]{1}[a-zA-Z]+\d*$/; // Altere esta linha
let result = userCheck.test(username);