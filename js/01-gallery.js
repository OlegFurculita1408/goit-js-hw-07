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
// new render on window -------------------------------------

function renderList() {
    galleryUl.innerHTML = createImgCard(galleryItems);
  };
  renderList();
  
  let instance;
  
  function zoomIn(e) {
    e.preventDefault();
    if (e.target.nodeName === 'IMG') {
      const target = e.target.dataset.source;
      instance = 
                basicLightbox.create(`<img src="${target}" width="800" height="600">`,
        {
          onShow: () => window.addEventListener('keydown', zoomOut),
          onClose: () => window.removeEventListener('keydown', zoomOut),
        }
      );
      instance.show();
    };
  };
  
  function zoomOut(e) {
    if (e.key === "Escape" && instance) {
      instance.close();
    };
  };
  window.document.addEventListener('click', zoomIn);
  window.document.addEventListener('keydown', zoomOut);

// ----------------------------------------------------------------------------

// const addGaleryMarckup = createImgCard(galleryItems);

// galleryUl.innerHTML = addGaleryMarckup;

// galleryUl.addEventListener('click', openImgOriginalClick);

// function openImgOriginalClick(e) {
//     blockstandartAction(e);
//     if(e.target.nodeName !== 'IMG') {
//         return;     
//     };
    
// const instance = basicLightbox.create(`
// 	<img src='${e.target.dataset.source}' width='800' height='600'>
// `);
// instance.show()

// galleryUl.addEventListener('keydown', (e) => {
//     if(e.code === 'Escape') {
//         instance.close()
//     }
// })
// };
// function blockstandartAction(e) {
//     e.preventDefault();
// };