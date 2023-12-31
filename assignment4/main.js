// Rogel Sih
// Assignment 4 - Silly Stories
// INFT1206 - Web Development Fundamentals
// An HTML file to demostrate what we have learned in JavaScript.
// There is a button, where if you click, it will generate a random silly story from the text file

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// STORY TEMPLATE
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// ARRAYS TO BE RANDOMIZED
const insertX = 
  [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
  ];
  
const insertY = 
  [
    "the soup kitchen",
    "Disneyland",
    "the White House"
  ];
  
const insertZ =
   [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
  ];



// EVENT LISTENER
randomize.addEventListener('click', generateStory);

// Function to randomly choose one of the choices in the array
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  }

// FUNCTION TO CHANGE THE STORY
function generateStory() {
    let storyOutput = storyText;

    // Check if customName has a value in it
    if (customname.value !== '') {
        // if it does, change bob to the name in the textbox
        const NAME = customname.value;
        storyOutput = storyOutput.replaceAll('Bob', NAME);
    }
 
    // Check if they want the story in UK measurements
    if (document.getElementById('uk').checked){
        // Convert farenheight to celsius
        const tempToCelsius = Math.round((94 -32)*(5/9));
        // Convert pounds to kg
        const weightToKg = Math.round((300 * 0.45359237));

        // Replace with new numbers
        storyOutput = storyOutput.replaceAll('94 fahrenheit', `${tempToCelsius} degrees celsius`);
        storyOutput = storyOutput.replaceAll('300 pounds', `${weightToKg} kg`);
    }

    // Randomly choose one of the 3 choices in each array
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Once chosen replace insertx with what is chosen
    storyOutput = storyOutput.replaceAll(':insertx:', xItem);
    storyOutput = storyOutput.replaceAll(':inserty:', yItem);
    storyOutput = storyOutput.replaceAll(':insertz:', zItem);

    // Output
    story.textContent = storyOutput;
    story.style.visibility = 'visible';

}