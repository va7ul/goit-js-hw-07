import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryMarkup(items) {
    return items.map(item => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>`)
    .join('');
};

galleryEl.addEventListener('click', imageFullscreenOpener);

function imageFullscreenOpener(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    }

    openImageInModal(event);
};

function openImageInModal(event) {
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            instance.close();
        };
    }, { once: true });
};

console.log(galleryEl);