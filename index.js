var customerName = "bob";
const leastFavoriteCustomer = "sue";

function upperCaseCustomerName(customerName) {
  return window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwritBestCustomer(newName) {
  window.bestCustomer = newName;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bill';
}
