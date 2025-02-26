// Function to apply the correct mask based on screen width
function applyMask() {
  const heroBackground = document.querySelector('.hero-background');
  
  if (window.innerWidth <= 750) {
    // Apply mask when the screen width is below 750px
    heroBackground.classList.add('masked');
  } else if (window.innerWidth > 977) {
    // Remove the mask when the screen width is above 977px
    heroBackground.classList.remove('masked');
  } else {
    // Default mask for widths between 750px and 977px
    heroBackground.classList.add('masked');
  }
}
