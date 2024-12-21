const namInput = document.getElementById('input1');
const priceInput = document.getElementById('input2');
const resultParagraph = document.getElementById('p');
const submitButton = document.getElementById('submit');


class Product {
    constructor(nam, price) {
        this.nam = nam;
        this.price = price;
    }

    displayProduct() {
        return `Product: ${this.nam}, Price: $${this.price}`;
    }
}


submitButton.onclick = function() {
    const nam = namInput.value;
    const price = parseFloat(priceInput.value);

    if (nam && !isNaN(price) && price >= 0) {
        const newProduct = new Product(nam, price);
        resultParagraph.textContent = newProduct.displayProduct();
    } else {
        resultParagraph.textContent = 'Please enter a valid product name and price.';
    }
};