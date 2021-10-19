import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from 'basiclightbox@5.0.4';

const galleryContainer = document.querySelector('.gallery');

const galleryItemsCollection = galleryItems.map(({preview, original, description}) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsCollection);

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  console.log(event.target)

  /* const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}"/>
    </div>
`)

instance.show() */
}) 






