'use strict';

/**
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 */
let mainWindow = null;
let loadingScreen = null;

require('./common')(mainWindow, loadingScreen, false);
