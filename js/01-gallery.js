import { galleryItems } from './gallery-items.js';
// Change code below this line

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

/* galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(

    `<div class="modal">
        <img src="${event.target.dataset.source}"/>
    </div>`, {
      
    onShow: (instance) => {
      instance.element().querySelector('img').onclick = () => instance.close();
    }
  });
    
  instance.show();

  document.addEventListener('keydown', closeOnEscape);
});

function closeOnEscape(event) {
    if (event.key === 'Escape') {
      instance.close();

      document.removeEventListener('keydown', closeOnEscape);
    }  
} */


galleryContainer.addEventListener('click', imgShow);

const instance = basicLightbox.create(`<img src=""/>`,{

  onShow: () => {
    window.addEventListener('keydown', keydownEscape);
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownEscape);
  },
});

function keydownEscape(event) {
  console.log(event);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
}

function imgShow(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}
 






