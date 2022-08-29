import { galleryItems } from "./gallery-items.js";

// const bodyElement = document.querySelector("body");
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
let instance = null;
function onClickModalOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    instance = basicLightbox.create(
      `
    <img src="${e.target.dataset.source}">
    `,
      {
        onShow: () => {
          document.addEventListener("keydown", closeModal);
        },

        onClose: () => {
          document.removeEventListener("keydown", closeModal);
        },
      }
    );
    instance.show();
  }
}

function closeModal(e) {
  console.log(e);

  if (e.code === "Escape") {
    instance.close();
  }
}
