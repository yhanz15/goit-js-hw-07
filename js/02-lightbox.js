// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryList = document.querySelector("ul.gallery");

// const createGallery = (el) => {
//   return el
//     .map(({ preview, original, description }) => {
//       return `
// <li class="gallery__item">
//    <a class="gallery__link" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//    </a>
// </li>
// `;
//     })
//     .join("");
// };

// const photosMarkup = createGallery(galleryItems);
// galleryList.insertAdjacentHTML("beforeend", photosMarkup);

// // --------------------------------------------------------------
// const gallery = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });

// gallery.on("show.simplelightbox");

import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", () => {
  const galleryList = document.querySelector(".gallery");

  // Create and render markup
  const createGallery = (element) => {
    return element
      .map(({ preview, original, description }) => {
        return `
                <li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </li>`;
      })
      .join("");
  };

  const photosMarkup = createGallery(galleryItems);
  galleryList.insertAdjacentHTML("beforeend", photosMarkup);

  // Initialize SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionsPosition: "bottom",
  });
});
