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
			<div class="teammate">
				<img src="${img}" alt="" class="teammate_img">
				<h2 class="name">${username}</h2>
				<h2 class="name">${surname}</h2>
			</div>
    `;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}