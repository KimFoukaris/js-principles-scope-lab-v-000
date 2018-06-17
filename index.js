var customerName = "bob";
var leastFavoriteCustomer = "sue";

function upperCaseCustomerName(customerName) {
  window.customerName = window.customerName.toUpperCase();
  return window.customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return window.bestCustomer;
}

function overwritBestCustomer() {
  window.bestCustomer = 'maybe bob';
  return window.bestCustomer;
}

function changeLeastFavoriteCustomer() {
  window.leastFavoriteCustomer = 'bill';
  return window.leastFavoriteCustomer;
}
