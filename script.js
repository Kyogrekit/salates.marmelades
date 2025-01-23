const url = 'product.json',
      cardContainer = document.querySelector('.container');
;

fetch(url)
.then(async response => {
    const data = await response.json();
    console.log(data.products[0]);

    addmarmalade(data.products[0]);
})
.catch(error => {
    alert("Pokemon with this name or id does not exist.")
});


function fetchmarmalade( url ) {
    const response = awaitfetch( url );

    return response.json();
}

async function loadPokemons() {
    const marmaladeList     = await fetchmarmaladeList( url ),
    marmalade = marmaladeList.map( marmalade => fetchmarmalade( marmalade.url ) );
    
    marmalade = await Promise.all(marmaladePromises );
    marmalade.forEach( addmarmalade );
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
        <h2 class="card__name"></h2>
        <img src="${img}" alt="${name}" class="card__img">
        
        <span class="card__price">${price}</span>
    </div>

    `;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}