import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGallery(arrayOfImages) {
  const newGalleryItems = arrayOfImages
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
 `;
    })
    .join("");
  return newGalleryItems;
}
gallery.innerHTML = createGallery(galleryItems);

let galleryBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
