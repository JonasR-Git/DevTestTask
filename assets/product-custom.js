document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = Array.from(document.querySelectorAll('.product-custom__thumbnail img'));
    const prevButton = document.querySelector('.product-custom__arrow--prev');
    const nextButton = document.querySelector('.product-custom__arrow--next');
    const thumbnailsContainer = document.querySelector('.product-custom__thumbnails-container');
    const mainImage = document.querySelector('.product-custom__main-image');
    const mainImageLink = document.querySelector('.product-custom__main-image-container a');

    prevButton.addEventListener('click', () =>{
        thumbnails.unshift(thumbnails.pop()); // Moves the last element to the start
    });

    nextButton.addEventListener('click', () =>{
        thumbnails.push(thumbnails.shift()); // Moves the first element to the end
    });

    function updateImages(){
        //set huge image for lightbox
        mainImageLink.href = thumbnails[0].CDATA_SECTION_NODE.hugeSrc;
        // set src to large to be displayed big. Main Image is the first one in the thumbnails array
        mainImage.src = thumbnails[0].CDATA_SECTION_NODE.largeSrc;
        mainImage.alt = thumbnails[0].alt;

        
    }
}