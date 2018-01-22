# Ziektemeter
Developed by Nooijen Web Solutions for S&H Uitgeverij.
## Installation
This app requires [Node.js](https://nodejs.org/) to run.
```sh
$ npm install
```
```sh
$ gulp
```

## Development notes
* Please work with partials in Handlebars for all of the components
* For all fields that the client can edit, please add them to the variables.js file. Through Gulp they will be added to Handlebars, so use the same names for the partials in the Handlebars files
* For your styling, please use scss partials
* Please only work from the `src` and `views` folders and before production, remove the Rick Ashley image from the images folder
* For this project you can use jQuery, it is included in the project. But do use ES6/7/8 syntax!

## Useful notes
Just a handful of useful notes I would recommend using when you work with this app.
* Don't add any files into the ./dist folder. Always put them in the ./src folder. All images and such will be copied so don't worry. (And otherwise you can always change the gulpfile.js to include the stuff you added if it's not there yet)
* This starter kit is not meant to be used as a NodeJS server during production, but rather as a development enviroment that will give you the files you can upload to your server (all of the stuff from the ./dist folder). If you are looking for a NodeJS Starter Kit, you can take a look at [my NodeJS Starter Kit](https://github.com/lucianonooijen/NodeJS-Starter-Kit).

## To do
* Add documentation for changing the HBS variables