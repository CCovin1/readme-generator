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
// Function to get the license link based on the license passed in
function renderLicenseLink(license) {
  if (license) {
    // Assuming the license URLs, replace with actual URLs if available
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
    };

    // Check if the provided license exists in the licenseLinks object
    if (licenseLinks[license]) {
      return licenseLinks[license];
    }
  }

  // If no license or invalid license is provided, return an empty string
  return '';
}

// Function to get the license section of README based on the license passed in
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license. See the [LICENSE](./LICENSE) file for details.`;
  }

  // If no license or invalid license is provided, return an empty string
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Contact

If you have any questions or concerns about this project, you can reach me at ${data.email}.`;

}

module.exports = generateMarkdown;
