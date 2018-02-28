# Ziektemeter

[![Greenkeeper badge](https://badges.greenkeeper.io/NooijenSolutions/Ziektemeter.svg)](https://greenkeeper.io/)

Developed by Nooijen Web Solutions for S&H Uitgeverij.

## Installation

This app requires [Node.js](https://nodejs.org/) to run.

```sh
$ yarn
```

or

```sh
$ npm install
```

to run the development server:

```sh
$ gulp
```

## Development notes

This project was made using the following stack:

* Handlebars (templating)
* SCSS (styling)
* jQuery/chart.js (dynamic parts of the website)
* Gulp (development server, task runner)

To install all dependencies and run the development server, please see the "Installation" section.

You can change all of the files in the `./src` and `./views` directories.

Try to write modular code using the Handlebars templating engine.

To change graph data, most of the data is located in the `./src/js/main.js` file, but there are also some variables in the `./variables.js` file.

Some variables are given in the `./variables.js` file, some are in the `./views/index.handlebars` file. Try to write modular code in a similar way.

## Production build

To create the production build, follow the following steps:

1. Make sure Gulp is not running
2. Open the Gulpfile.js file and *comment out* (not remove) all lines with `// Comment this line for production build` on the end.
3. Run the Gulp command. When the "default" task is done, you can quit Gulp
4. The production build files are in the `./dist` directory

## Development notes

* Please work with partials in Handlebars for all of the components
* For all fields that the client can edit, please add them to the variables.js file. Through Gulp they will be added to Handlebars, so use the same names for the partials in the Handlebars files
* For your styling, please use scss partials
* Please only work from the `src` and `views` folders
* For this project you can use jQuery, it is included in the project. But do use ES6/7/8 syntax!