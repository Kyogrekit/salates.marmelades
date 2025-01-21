fetch('db.json')
.then(response => {
    if (!response.ok) {
        throw new Error("Ошибка загрузки JSON-файла");
    }
    return response.json();
})
.then(products => {
    const container = document.getElementById('products-container');

    // Генерация блоков для каждого элемента
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Цена: ${product.price}</p>
            <p>ID: ${product.id}</p>
        `;

        container.appendChild(productDiv);
    });
})
.catch(error => {
    console.error("Ошибка:", error);
    document.getElementById('products-container').innerHTML = "<p>Ошибка загрузки данных</p>";
});