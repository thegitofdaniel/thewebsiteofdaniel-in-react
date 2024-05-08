# Resume Website

This repository contains the code for my personal resume website, showcasing my work experience, skills, and projects. This website is built using HTML, CSS, and possibly some JavaScript.

## Table of Contents

-   [About](#about)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## About

This website serves as an interactive resume to highlight my professional experience, education, skills, and projects. It provides an easy way for recruiters, potential employers, or anyone interested to get an overview of my background and expertise.

## Features

-   **Home Page:** The landing page.
-   **Past Experience:** Details my past work experience in value-adding projects to clients all over the world.
-   **Stack:** Details academic degrees, industry certifications, programming languages, and spoken languages.
-   **About-Us:** Offers a summary, and various ways to get in touch with me.

## Usage

### Local

1. Clone this repository: `git clone https://github.com/thegitofdaniel/thewebsiteofdaniel.git`
2. Navigate to the project directory.
3. Open `index.html` in your web browser to view the website locally.

When you open index.html directly in a browser, some features, especially those involving JavaScript, might not work properly due to the browser's CORS (Cross-Origin Resource Sharing) policy. To fully test your website as it would appear online, it's recommended to simulate a server environment locally. Run:

```bash
py -3 -m http.server
```

Then, open [http://localhost:8000](http://localhost:8000) in your browser.

### Codespaces

This repo is configured with a [.devocntainer file](.devcontainer/devcontainer.json). When creating Codespace with GitHub, the necessary extensions will be installed. Launch the Codespace and then use the `Browser Preview` to see the webpage. This is great for interactive development.

## Linting

This project is linted with `HTMLHint` and `pre-commit`.

Run the following commands before commiting code to origin:

```bash
htmlhint .
pre-commit run -a
```

## Contributing

Contributions are welcome! If you find any bugs, typos, or have suggestions for improvement, please open an issue or create a pull request. Your feedback is valuable in enhancing this resume website.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Setting up Strato
This website is deployed to Strato. [Here](https://www.schminkel.de/articles/2022-04-04_github-pages-with-strato) you will find instructions on how to set up GitHub Pages and Strato.

## GitHub Pages
This website is deployed with GitHub Pages. [Here](https://blog.logrocket.com/deploying-react-apps-github-pages/) you will find instructions on how to do this deployment.

## Thank-You

A big thank you to all developers posting amazing open-source content out there. A special thanks to [Lyle Okoth](https://github.com/twyle) that published the original template of this website.

---

Thank you for visiting my repository! If you have any questions or inquiries, feel free to contact me.

---

[![build status](https://github.com/pre-commit/pre-commit/actions/workflows/main.yml/badge.svg)](https://github.com/pre-commit/pre-commit/actions/workflows/main.yml)

[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/pre-commit/pre-commit/main.svg)](https://results.pre-commit.ci/latest/github/pre-commit/pre-commit/main)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
