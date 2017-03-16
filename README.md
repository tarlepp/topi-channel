# topi-channel
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/tarlepp/topi-channel.png?branch=master)](https://travis-ci.org/tarlepp/topi-channel)
[![codecov](https://codecov.io/gh/tarlepp/topi-channel/branch/master/graph/badge.svg)](https://codecov.io/gh/tarlepp/topi-channel)
[![Dependency Status](https://david-dm.org/tarlepp/topi-channel.svg)](https://david-dm.org/tarlepp/topi-channel)
[![devDependency Status](https://david-dm.org/tarlepp/topi-channel/dev-status.svg)](https://david-dm.org/tarlepp/topi-channel#info=devDependencies)

## What is this?
Application to show videos from Topi's YouTube channel

This is built with Angular-CLI tool. Also note that there is a Electron support to build native applications for Windows, Linux and Mac.

## Used libraries, guides, etc.

### Libraries
 * [Angular](https://github.com/angular/angular)
 * [Material Design for Angular](https://github.com/angular/material2)
 * [Angular-CLI](https://github.com/angular/angular-cli)
 
### Guides
 * [Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### Other resources
 * [Material design](https://www.google.com/design/spec/material-design/)

## Installation, configure and usage
### Preconditions
First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 6+` is required. See following links to help you with installation:
* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
* [Node Version Manager](https://github.com/creationix/nvm#installation)

### Installation
First of all you have to install ```npm``` and ```node.js``` to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Note that ```node.js 6.x``` is required.

```bash
$ git clone https://github.com/tarlepp/topi-channel.git
$ cd topi-channel

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

## Development
To start developing in the project run:

```bash
$ npm start
```

Then head to `http://localhost:4200` in your browser or use application within native application that is opened also.

## Tests

### Unit tests
To run tests run:
```bash
$ npm test
```

### e2e tests
To run tests run:
```bash
$ npm run e2e
```

## Build
To build native application run:
```bash
$ npm run package:linux # For Linux environment
$ npm run package:mac # For Mac environment
$ npm run package:windows # For Windows environment
$ npm run package:all # For all environments
```

## Author
Tarmo Leppänen

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Tarmo Leppänen
