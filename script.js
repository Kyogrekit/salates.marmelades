const cardContainer = document.querySelector('.container');

const url = 'db.json';
let marmaladers = [];

async function fetchMarmaladeList(url) {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.products);
    return data.products;

}

async function fetchmarmalade(url) {
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
        <img> src="${img}" alt="${name}" class="card__img">
        <div class=".card__stats">
        <span class="card__price">${price}</span></div>
         <div class="card__stat">
                   <button><a href="https://www.youtube.com/watch?v=xm3YgoEiEDc&ab_channel=10Hours">купить</a></button>
                </div>
    </div>`
    
    
    
    
    
    
    ;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}

loadMarmalades()