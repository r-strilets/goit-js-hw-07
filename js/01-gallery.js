import { galleryItems } from "./gallery-items.js";

const bodyElement = document.querySelector("body");
const gallery = document.querySelector(".gallery");

function createGallery(arrayOfImages) {
  const newGalleryItems = arrayOfImages
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
  </a>
 </div>`;
    })
    .join("");
  return newGalleryItems;
}

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

gallery.addEventListener("click", onClickModalOpen);

function onClickModalOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `);
    instance.show();
    bodyElement.addEventListener("keydown", closeModal);
  }
}

function closeModal(e) {
  console.log(e);
  const modalOpenImage = document.querySelector(".basicLightbox");
  if (e.code === "Escape") {
    modalOpenImage.remove();
    bodyElement.removeEventListener("keydown", closeModal);
  }
  if (!modalOpenImage) {
    bodyElement.removeEventListener("keydown", closeModal);
  }
}
