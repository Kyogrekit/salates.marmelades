const cardContainer = document.querySelector('.container');

let marmaladeProducts = [];
    let cart = []; 

    async function loadMarmalades() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            marmaladeProducts = data.products;
            console.log('Дані завантажено!', marmaladeProducts);
        } catch (error) {
            console.error('Помилка завантаження:', error);
        }
    }

    function showHomePage() {
        const content = document.getElementById('content');
        
        if (!marmaladeProducts.length) {
            content.innerHTML = "<p>Завантаження товарів... 🍭</p>";
            return;
        }

        const productsHTML = marmaladeProducts.map(product => `
            <div class="product-card" onclick="showProduct(${product.id})">
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="price-tag">${product.price} грн • ${product.weight}</div>
                <button class="buy-button" onclick="addToCart(${product.id}, event)">Додати до кошика 🛒</button>
            </div>
        `).join('');

        content.innerHTML = `
            <h1 style="text-align: center; color: var(--primary-color); margin: 2rem 0;">🍭 Наші солодощі 🍭</h1>
            <div class="products-grid">${productsHTML}</div>
        `;
    }


    function showProduct(productId) {
        const product = marmaladeProducts.find(p => p.id === productId);
        const content = document.getElementById('content');
        
        content.innerHTML = `
            <button class="back-button" onclick="showHomePage()">← Назад до каталогу</button>
            <div class="product-detail">
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <h1>${product.name}</h1>
                <div class="price-tag">${product.price} грн • ${product.weight}</div>
                <p>${product.description}</p>
                
                <h3>🍇 Смаки:</h3>
                <div class="flavor-list">
                    ${product.flavors.map(flavor => `
                        <div class="flavor-tag">${flavor}</div>
                    `).join('')}
                </div>

                <button class="buy-button" onclick="addToCart(${product.id})">Додати до кошика 🛒</button>
            </div>
        `;
    }

    function addToCart(productId) {
        const product = marmaladeProducts.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCartDisplay();
        }
    }

    function updateCartDisplay() {
        document.getElementById('cart-count').textContent = cart.length;
        const cartPreview = document.getElementById('cart-preview');
        
        if (cart.length === 0) {
            cartPreview.innerHTML = "<p>Кошик порожній 🛒</p>";
        } else {
            cartPreview.innerHTML = `
                <h4>Ваші солодощі:</h4>
                ${cart.map(item => `
                    <p>🍬 ${item.name} - ${item.price} грн</p>
                `).join('')}
                <hr>
                <p>Всього: ${cart.reduce((sum, item) => sum + item.price, 0)} грн</p>
            `;
        }
    }

    function showCart() {
        document.getElementById('cart-preview').style.display = "block";
    }

    function hideCart() { 
        document.getElementById('cart-preview').style.display = "none";
    }

    window.onload = async () => {
        await loadMarmalades();
        showHomePage();
    };
    