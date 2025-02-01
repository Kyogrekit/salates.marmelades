const cardContainer = document.querySelector('.container');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);


const url = `https://my-json-server.typicode.com/Kyogrekit/salates.marmelades/users/${id}`;
console.log(url);

fetch(url)
.then(async response => {
    const data = await response.json();
    console.log(data);

    addmarmalade(data);
});

function addmarmalade( marmaladeObject ) {
    const {
        id,
        username,
        img,
        surname
    } = marmaladeObject;

    const template = `
    <div class="card">
			<div class="teammate">
				<img src="${img}" alt="" class="teammate_img">
				<div class="shop_item_info">
					<p class="name">${username}</p>
					<p class="name">${surname}</p>
				</div>
			</div>
    </div>
    `;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}
