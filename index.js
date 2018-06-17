var customerName = "bob";
const leastFavoriteCustomer = "sue";

function upperCaseCustomerName(customerName) {
  return customerName = customerName.toUpperCase();
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
