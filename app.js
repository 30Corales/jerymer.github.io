var products = [
    { id: "product1", name: "jordan brand", price: 1695.00, qtyId: "qty1" },
    { id: "product2", name: "nike sportwear", price: 2195.00, qtyId: "qty2" },
    { id: "product3", name: "zion", price: 1795.00, qtyId: "qty3" },
    { id: "product4", name: "nike dri fit huv hyverse", price: 1695.00, qtyId: "qty4" },
    { id: "product5", name: "nike acg", price: 1795.00, qtyId: "qty5" }
];

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    var orders = "";
    var totalAmount = 0;

    products.forEach(function(product) {
        var qty = document.getElementById(product.qtyId).value;
        if (parseFloat(qty) > 0) {
            var order = qty + " pc/s x " + product.price + " - " + product.name + " - Php " + (parseFloat(qty) * parseFloat(product.price)).toFixed(2) + "\n";
            orders += order;
            totalAmount += parseFloat(qty) * parseFloat(product.price);
        }
    });

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
    products.forEach(function(product) {
        document.getElementById(product.qtyId).value = "";
    });
}

function finishOrder() {
    var totalAmount = parseFloat(total.value.replace("Php ", ""));
    var cashAmount = parseFloat(cash.value);

    if (cashAmount >= totalAmount && totalAmount > 0) {
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

products.forEach(function(product) {
    document.getElementById(product.qtyId).addEventListener("keyup", addOrder);
});

cash.addEventListener("keyup", calculateChange);
