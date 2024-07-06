var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
  carts.textContent = "";
  var totalValue = 0;
  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------PHP ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }
  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------PHP ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }
  if (parseFloat(qty3.value) > 0) {
    var order = qty3.value.toString() + ' pc/s x ' + price3.textContent + '------' + product3.textContent + '------PHP ' + (parseFloat(qty3.value) * parseFloat(price3.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty3.value) * parseFloat(price3.textContent);
  }
  if (parseFloat(qty4.value) > 0) {
    var order = qty4.value.toString() + ' pc/s x ' + price4.textContent + '------' + product4.textContent + '------PHP ' + (parseFloat(qty4.value) * parseFloat(price4.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty4.value) * parseFloat(price4.textContent);
  }
  if (parseFloat(qty5.value) > 0) {
    var order = qty5.value.toString() + ' pc/s x ' + price5.textContent + '------' + product5.textContent + '------PHP ' + (parseFloat(qty5.value) * parseFloat(price5.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty5.value) * parseFloat(price5.textContent);
  }
  total.value = "Total: PHP " + totalValue.toFixed(5);
}

function calculateChange() {
  var cashValue = parseFloat(cash.value);
  var changeValue;
  if (cashValue >= totalValue) {
    changeValue = cashValue - totalValue;
  } else {
    changeValue = "Insufficient funds";
  }
  change.value = "Change: PHP " + changeValue.toFixed(5);
}

qty1.addEventListener("input", addOrder);
qty2.addEventListener("input", addOrder)
qty3.addEventListener("input", addOrder);
qty4.addEventListener("input", addOrder);
qty5.addEventListener("input", addOrder);

cash.addEventListener("input", calculateChange);
