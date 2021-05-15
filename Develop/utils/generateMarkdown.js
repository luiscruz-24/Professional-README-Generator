// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None') {
    const lic = license.split('').filter(e => e.trim().length).join('');
    return `![GitHub license](https://img.shields.io/badge/license-${lic}-blue.svg)`;
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return "https://www.apache.org/licenses/LICENSE-2.0.txt"

    case 'MIT License':
      return "https://www.mit.edu/~amini/LICENSE.md"

    case 'IBM Public License Version 1.0':
      return "http://www.postfix.org/IBM-Public-License-1.0.txt"

    case 'Mozilla Public License 2.0':
      return "https://www.mozilla.org/media/MPL/2.0/index.815ca599c9df.txt"

    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None') {
    return [`*[License](#license)`,`## License [${license}](${renderLicenseLink(license)}) license.`];
  } else {
    return [``,``];
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  *[Contribution](#contribution)
  
  *[Questions](#questions)

  ## Installation
  
  To install, run the next command:

  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution} 

  ## Questions

  For further questions, please contact me at ${data.email}
  Visit my GitHub profile [${data.username}](https://github.com/${data.username}/)

`;
}

module.exports = generateMarkdown;
