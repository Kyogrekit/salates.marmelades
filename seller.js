const cardContainer = document.querySelector('.container');

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);


const url = `https://my-json-server.typicode.com/Kyogrekit/salates.marmelades/users/${id}`;

addmarmalade(url);
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
				<img src="https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg" alt="" class="teammate_img">
				<div class="shop_item_info">
					<p class="name">Денис</p>
					<p>Главный режисёр</p>
				</div>
			</div>
    </div>
    
    
    
    
    
    
    `;

    cardContainer.insertAdjacentHTML( 'beforeend', template );
}
