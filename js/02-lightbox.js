import { galleryItems } from "./gallery-items.js";

// Change code below this line
// This line imports the galleryItems array from a separate module named "./gallery-items.js". This array likely contains objects representing items in a gallery, each with properties like preview, original, and description.

const galleryContainer = document.querySelector("ul.gallery");

// This line selects the <ul> element with the class gallery from the HTML document and assigns it to the variable galleryContainer. This element will contain the gallery items.

function createGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
`;
    })
    .join("");
}

const photosMarkup = createGalleryItem(galleryItems);
//  This code defines a function createGalleryItem(array) that takes an array as input.
// Inside the function, it maps over each object in the array and creates HTML markup for each gallery item using template literals.
// It uses destructuring to extract preview, original, and description properties from each object.
// The resulting HTML strings for each gallery item are joined into a single string using the .join("") method.
// Finally, the function is called with the galleryItems array, and the resulting markup is stored in the photosMarkup variable.

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

// This line inserts the photosMarkup (which contains the HTML markup for all gallery items) into the galleryContainer element just before its end.
// --------------------------------------------------------------

const galleryHandler = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// This line inserts the photosMarkup (which contains the HTML markup for all gallery items) into the galleryContainer element just before its end.

galleryHandler.on("show.simplelightbox");

// This line sets up an event listener to handle the show.simplelightbox event. However, it seems incomplete as it doesn't specify what action to take when the event occurs.

// Overall, this code dynamically generates the HTML markup for a gallery based on the galleryItems array, inserts it into the DOM, and initializes a SimpleLightbox for the gallery items. However, the event handling part seems incomplete and may need further clarification or modification.
