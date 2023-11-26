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
});
/* Wiring up the Darken/Lighten button */
// declare a boolean to let the web page know if the picture is darkened or not
let picDarken = false;
btn.addEventListener('click', function () {
    // if the picDarken boolean is false when the button is clicked,
    // this will darken the picture and will change the boolean to true
  if (!picDarken) {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    picDarken = true;
    // else if the picdarken is true and the button is clicked,
    // this will brighten the picture and set picDarken to false
  } else {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    picDarken = false;
  }
});