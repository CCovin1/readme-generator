// Function to get the license badge based on the license passed in
function renderLicenseBadge(license) {
  if (license) {
    // Assuming the license badge image URLs, replace with actual image URLs if available
    const badges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      // Add more license badges here as needed
    };

    // Check if the provided license exists in the badges object
    if (badges[license]) {
      return badges[license];
    }
  }

  // If no license or invalid license is provided, return an empty string
  return '';
}
