import images from './gallery-items.js';
console.log(images);

console.log(createImagesCardsMarkup(images));

const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkup = createImagesCardsMarkup(images);

const openModal = document.querySelector('div.lightbox');
const openImageInModal = document.querySelector('.lightbox__image');

const buttonCloseModal = document.querySelector('.lightbox__button');

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);
buttonCloseModal.addEventListener('click', buttonCloseModalClick);

function createImagesCardsMarkup(images) {
  return images.map(({preview, original, description}) => {
    return `
   <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
  })
      .join('');
}
  
function onGalleryContainerClick(event) { 
  event.preventDefault();
  const isGalleryEl = event.target.classList.contains('js-gallery');
  if (!!isGalleryEl) {
    return;
  }
  
  console.log(event.target.dataset.source);
  

  onOpenModalClick();
  onAddModalImage(event);
};

function onOpenModalClick() {
  openModal.classList.add('is-open');
};

function onAddModalImage(event) {
  openImageInModal.src = event.target.dataset.source;
  openImageInModal.alt = event.target.alt;
};
 
function buttonCloseModalClick() {
  openModal.classList.remove('is-open');
  onClearModalImage()
};

 function onClearModalImage() {
  openImageInModal.src = ``;
  openImageInModal.alt = ``;
};