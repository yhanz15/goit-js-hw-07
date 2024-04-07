import { galleryItems } from "./gallery-items.js";
// Change code below this line

// This line imports the galleryItems array from a separate module named "./gallery-items.js". This array likely contains objects representing items in a gallery, each with properties like preview, original, and description

let gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  let li = `
        <li class="gallery__item">
            <a class="gallery__link" href="javascript:void(0)">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </li>
        `;
  gallery.innerHTML += li;
});
    /* This code iterates over each item in the galleryItems array using forEach.
    For each item, it constructs an HTML string (li) representing a gallery item with an anchor (a) tag containing an image (img) tag.
    It uses template literals to dynamically insert properties like preview, original, and description into the HTML string.
    It then appends this HTML string to the innerHTML property of the gallery element.*/


//EVENT DELEGATION
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let bigImage = e.target.getAttribute("data-source");
    let instance = basicLightbox.create(
      `<img src="${bigImage}" width="800" height="600"/>`
    );
    instance.show();

    window.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        console.log("esc key is pressed");
        instance.close();
      }
    });
  }
});

    /* This code sets up an event listener on the gallery element to listen for click events.
    When a click event occurs, it checks if the clicked element (e.target) is an image (<img>).
    If the clicked element is an image, it retrieves the value of the data-source attribute, which holds the URL of the original image.
    It then creates a new instance of basicLightbox with the original image and displays it.
    Additionally, it sets up another event listener to listen for keyup events on the window. If the Escape key is pressed, it closes the lightbox instance.*/

// Overall, this code dynamically generates the HTML markup for a gallery based on the galleryItems array, inserts it into the DOM, and sets up event delegation to handle clicks on the gallery images, displaying them in a lightbox when clicked.