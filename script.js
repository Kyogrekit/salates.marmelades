async function loadProducts() {
    const url = 'db.json'; // URL или путь к вашему JSON-файлу

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status} ${response.statusText}`);
        }

        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Ошибка:", error);
        document.getElementById('products-container').innerHTML = `
            <p style="color: red;">Ошибка загрузки данных. Попробуйте позже.</p>
        `;
    }
}

function renderProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Очистка контейнера перед добавлением данных

    if (products.length === 0) {
        container.innerHTML = '<p>Нет доступных продуктов.</p>';
        return;
    }

    products.forEach(product => {
        const { id, name, price, img } = product; // Деструктуризация данных продукта
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${img}" alt="${name}" />
            <h3>${name}</h3>
            <p>Цена: ${price} руб.</p>
            <p>ID: ${id}</p>
        `;

        container.appendChild(productDiv);
    });
}

// Вызов функции для загрузки продуктов
loadProducts();