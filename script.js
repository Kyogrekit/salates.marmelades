const cardContainer = document.querySelector('.container');

const url = 'product.json';
let marmaladers = [];

async function fetchMarmaladeList(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.products);
    return data.products;
    
}

async function fetchPokemon(url) {
    const response = await fetch(url);

    return response.json();
}

async function loadMarmalades() {
    const marmaladeList = await fetchMarmaladeList( url );
    
    marmalades = await Promise.all(marmaladeList);
    marmalades.forEach( addmarmalade );
}


function addmarmalade( marmaladeObject ) {
    const {
        id,
        name,
        img,
        price
    } = marmaladeObject;

    const template = `
    <div class="card">
        <h2 class="card__name">${name}</h2>
        <img src="${img}" alt="${name}" class="card__img">
        
        <span class="card__price">${price}</span>
    </div>

    `;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}

loadMarmalades()