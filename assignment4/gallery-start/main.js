
// Rogel Sih
// Assignment 4b - Image Gallery
// INFT1206 - Web Development Fundamentals
// We are given html of a gallery of photos, we have to write a script so that when an image is clicked,
// it is made bigger and the focus of the webpage while having a gallery at the bottom of all the other
// pictures.


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
// change the alt based on the pic file
const altText = {
    pic1: 'Closeup of a human eye',
    pic2: 'Rocks that looks like waves',
    pic3: 'Purple and white pansies',
    pic4: 'Section of wall in pharaohs tomnb',
    pic5: 'Large moth on a leaf'
  };

/* Looping through images */
imageFiles.forEach((filename,index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    // index + 1 because indexes start at 0
    newImage.setAttribute('alt', altText[`pic${index+1}`]);
    thumbBar.appendChild(newImage);

    // EVENT LISTENER so that when a picture is clicked, then the displayed image is changed to what was clicked
    newImage.addEventListener('click', function () {
        // set what was the image and the alt of the picture that was clicked
        // onto the displayedImage
        displayedImage.setAttribute('src', `images/${filename}`);
        displayedImage.setAttribute('alt', altText[`pic${index + 1}`]);
      });
});
/* Wiring up the Darken/Lighten button */
// EVENT LISTENER to change the darken button when clicked
btn.addEventListener('click', function () {
    // get what attribute is given by the button in the 'class'
    let btnAttribute = btn.getAttribute('class');
  
    // if what the button has is dark
    if (btnAttribute === 'dark') {
      // change the class to light
      btn.setAttribute('class', 'light');
      // change the text attribute of the button
      btn.textContent = 'Lighten';
      // darken the picture
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    // iff what the button has is light
    } else {
      // then change class back to dark
      btn.setAttribute('class', 'dark');
      // change the text content of the button
      btn.textContent = 'Darken';
      // return it back to normal
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  });