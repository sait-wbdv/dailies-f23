// A list of pre-selected image IDs from Lorem Picsum
const imgList = [40, 237, 433, 577, 582, 593, 659, 718, 783, 790, 837, 1024, 1025, 1074, 1084]; 

// Create an empty string variable where we will store the html that will eventually be printed to the page
let content = '';

// Loop through `imgList` using a `for...of` loop. 
for (const imgID of imgList) {
  content += `<img src="https://picsum.photos/id/${imgID}/200/300" alt="Random Lorem Picsum Animal">`;
  console.log(content);
}

// Using `document.querySelector()`, assign the .gallery element to a variable.
const gallery = document.querySelector('.gallery');

// Using element.innHTML, add the html img list to the .gallery variable you created earlier.
gallery.innerHTML = content;