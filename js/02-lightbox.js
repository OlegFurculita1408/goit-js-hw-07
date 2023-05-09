import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector('.gallery');

// const imgCard = createImgCard(galleryItems);

// galleryUl.insertAdjacentHTML('beforeend', imgCard);
// galleryUl.addEventListener('click', onImgCardClick);

// function createImgCard(galleryItems) {
//     return galleryItems.map(({preview, original, description}) => {
//         return `
//         <li class="gallery__item">
//             <a class="gallery__link" href='${original}'>
//             <img class="gallery__image" src='${preview}' alt='${description}' />
//             </a>
//         </li>`
//     }).join("");
// };

// function onImgCardClick(evt) {
//     evt.preventDefault();
//     if(!evt.target.classList.contains('gallery__image')) {
//         return;
//     }
// };
// const lightbox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: "250" });


function gallery(arr) {
    return arr.map((items) => markup(items));
  };
  function markup(items) {
    const {preview, original, description} = items;
    return `<li class="gallery__item">
    <a class='gallery__link' href='${original}'>
      <img
        class='gallery__image'
        src='${preview}'
        data-source='${original}'
        alt='${description}'
      />
    </a>
  </li>`;
  };
  
  function renderList() {
    gallery(galleryItems);
    galleryUl.innerHTML = gallery(galleryItems).join("");
  };
  renderList();
  
  new SimpleLightbox(".gallery a", {captionDelay: 250, overlayOpacity: 1, captionsData: "alt"});
