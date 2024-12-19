let totalPrice = 0;

function updatePrice() {
    const itemSelect = document.getElementById('itemName');
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('price').value = price;
}

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!itemName || isNaN(price) || isNaN(quantity) || quantity <= 0) {
        alert("Mohon isi semua field dengan benar!");
        return;
    }

    const total = price * quantity;
    totalPrice += total;

    const itemList = document.getElementById('itemList');
    itemList.innerHTML += `<p>${itemName}: ${quantity} x Rp ${price.toFixed(2)} = Rp ${total.toFixed(2)}</p>`;
    document.getElementById('totalPrice').innerText = `Total: Rp ${totalPrice.toFixed(2)}`;

    // Reset form
    document.getElementById('quantity').value = "";
}

function calculateChange() {
    const cashPaid = parseFloat(document.getElementById('cashPaid').value);

    if (isNaN(cashPaid)) {
        alert("Mohon masukkan jumlah uang yang valid!");
        return;
    }

    if (cashPaid < totalPrice) {
        alert("Uang yang dibayarkan kurang!");
        return;
    }

    const change = cashPaid - totalPrice;
    document.getElementById('change').innerText = `Kembalian: Rp ${change.toFixed(2)}`;
}