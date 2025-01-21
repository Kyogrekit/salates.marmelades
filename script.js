
  fetch('db.json')
  .then(response => {
      if (!response.ok) {
          throw new Error("Ошибка загрузки db.json");
      }
      return response.json();
  })
  .then(products => {
      const container = document.getElementById('products-container');

     
      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product';

          productDiv.innerHTML = `
              <img src="${img}" alt="${name}">
              <h3>${name}</h3>
              <p>Цена: ${price}</p>
              <p>ID: ${id}</p>
          `;

          container.appendChild(productDiv);
      });
  })
  .catch(error => {
      console.error("Ошибка:", error);
      document.getElementById('products-container').innerHTML = "<p>Ошибка загрузки данных</p>";
  });