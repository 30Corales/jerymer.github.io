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

var product6 = document.getElementById("product6");
var qty6 = document.getElementById("qty6");
var price6 = document.getElementById("price6");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    var orders = "";
    var totalAmount = 0;

    if (parseFloat(qty1.value) > 0) {
        var order1 = qty1.value + " pc/s x " + price1.textContent + " - " + product1.textContent + " - Php " + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + "\n";
        orders += order1;
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }

    if (parseFloat(qty2.value) > 0) {
        var order2 = qty2.value + " pc/s x " + price2.textContent + " - " + product2.textContent + " - Php " + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + "\n";
        orders += order2;
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }

    if (parseFloat(qty3.value) > 0) {
        var order3 = qty3.value + " pc/s x " + price3.textContent + " - " + product3.textContent + " - Php " + (parseFloat(qty3.value) * parseFloat(price3.textContent)).toFixed(2) + "\n";
        orders += order3;
        totalAmount += parseFloat(qty3.value) * parseFloat(price3.textContent);
    }

    if (parseFloat(qty4.value) > 0) {
        var order4 = qty4.value + " pc/s x " + price4.textContent + " - " + product4.textContent + " - Php " + (parseFloat(qty4.value) * parseFloat(price4.textContent)).toFixed(2) + "\n";
        orders += order4;
        totalAmount += parseFloat(qty4.value) * parseFloat(price4.textContent);
    }

    if (parseFloat(qty5.value) > 0) {
        var order5 = qty5.value + " pc/s x " + price5.textContent + " - " + product5.textContent + " - Php " + (parseFloat(qty5.value) * parseFloat(price5.textContent)).toFixed(2) + "\n";
        orders += order5;
        totalAmount += parseFloat(qty5.value) * parseFloat(price5.textContent);
    }

    if (parseFloat(qty6.value) > 0) {
        var order6 = qty6.value + " pc/s x " + price6.textContent + " - " + product6.textContent + " - Php " + (parseFloat(qty6.value) * parseFloat(price6.textContent)).toFixed(2) + "\n";
        orders += order6;
        totalAmount += parseFloat(qty6.value) * parseFloat(price6.textContent);
    }

    carts.textContent = orders;
    total.value = "Php " + totalAmount.toFixed(2);
    calculateChange(); // Update change whenever order is added
}

function calculateChange() {
    var totalAmount = parseFloat(total.value.replace("Php ", ""));
    var cashAmount = parseFloat(cash.value);
    if (cashAmount >= totalAmount) {
        change.value = "Php " + (cashAmount - totalAmount).toFixed(2);
    } else {
        change.value = "Insufficient Cash";
    }
}

function resetFields() {
    qty1.value = "";
    qty2.value = "";
    qty3.value = "";
    qty4.value = "";
    qty5.value = "";
    qty6.value = "";
}

function finishOrder() {
    var totalAmount = parseFloat(total.value.replace("Php ", ""));
    var cashAmount = parseFloat(cash.value);

    if (cashAmount >= totalAmount && totalAmount > 0) {
        alert("Order Successful!\n\n" + "Products Purchased:\n" + carts.textContent + "\nHAVE A GOOD DAY!");
        carts.textContent = "";
        total.value = "";
        cash.value = "";
        change.value = "";
        resetFields();
    } else if (totalAmount == 0) {
        alert("Please add items to your order.");
    } else {
        alert("Insufficient Cash.");
    }
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
qty3.addEventListener("keyup", addOrder);
qty4.addEventListener("keyup", addOrder);
qty5.addEventListener("keyup", addOrder);
qty6.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateChange);
