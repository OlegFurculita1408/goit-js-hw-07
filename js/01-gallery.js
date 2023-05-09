import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery');

function createImgCard(items) {
    return items
    .map((item) => {
        return `
        <li class='gallery__item'>
        <a class='gallery__link' href='${item.original}'>
        <img
          class='gallery__image'
          src='${item.preview}'
          data-source='${item.original}'
          alt='${item.description}'
        />
      </a>
      </li>`
    }).join("");
};

const addGaleryMarckup = createImgCard(galleryItems);

galleryUl.innerHTML = addGaleryMarckup;

galleryUl.addEventListener('click', openImgOriginalClick);


function openImgOriginalClick(e) {
    blockstandartAction(e);
    if(e.target.nodeName !== 'IMG') {
        return;
        
    };
    
const instance = basicLightbox.create(`
	<img src='${e.target.dataset.source}' width='800' height='600'>
`);

instance.show()

galleryUl.addEventListener('keydown', (e) => {
    if(e.code === 'Escape') {
        instance.close()
    }
})
};

function blockstandartAction(e) {
    e.preventDefault();
};

