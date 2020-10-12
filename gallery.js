import images from './gallery-items.js';
console.log(images);

console.log(createImagesCardsMarkup(images));

const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkup = createImagesCardsMarkup(images);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

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
  
