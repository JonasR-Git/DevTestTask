document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = Array.from(document.querySelectorAll('.product-custom__thumbnail img'));
    const prevButton = document.querySelector('.product-custom__arrow--prev');
    const nextButton = document.querySelector('.product-custom__arrow--next');
    const thumbnailsContainer = document.querySelector('.product-custom__thumbnails-container');
    const mainImage = document.querySelector('.product-custom__main-image');
    const mainImageLink = document.querySelector('.product-custom__main-image-container a');

    let swiper = null;

    function initializeSwiper() {
        swiper = new Swiper('.product-custom__thumbnails-swiper-container', {
          centeredSlides: true,
          spaceBetween: 7,
          slidesPerView: 'auto',
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          breakpoints: {
            460: {
              spaceBetween: 7,
            },
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 40,
            },
            1200: {
              spaceBetween: 60,
            },
          }
        });
      }

    prevButton.addEventListener('click', () => {
        thumbnails.unshift(thumbnails.pop()); // Moves the last element to the start
        updateImages()
    });

    nextButton.addEventListener('click', () => {
        thumbnails.push(thumbnails.shift()); // Moves the first element to the end
        updateImages()
    });

    function updateImages(){
        //set huge image for lightbox
        mainImageLink.href = thumbnails[0].dataset.hugeSrc;
        // set src to large to be displayed big. Main Image is the first one in the thumbnails array
        mainImage.src = thumbnails[0].dataset.largeSrc;
        mainImage.alt = thumbnails[0].alt;

        // iterate throught the thumbnails and set display none for every one > index 4, so only main image + 4 small previews are visible
        thumbnails.forEach((img, index) => {
            if(index >= 1 && index <= 4) {
                // select the div from the image
                img.parentElement.parentElement.style.display = 'block';
                thumbnailsContainer.appendChild(img.parentElement.parentElement);
            } else {
                img.parentElement.parentElement.style.display = 'none'
            }
        });
    }

    // Check screen size and initialize or destroy the Swiper accordingly 
    function handleScreenSize() {
        
    }

    // Initial set the right display none and block
    updateImages();
});