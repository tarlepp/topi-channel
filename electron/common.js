'use strict';
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

// Default window parameters
const windowParams = {
  width: 1000,
  height: 600,
  backgroundColor: '#2b2b2b',
  darkTheme: true,
  show: false,
};

// Application title
const applicationTitle = 'Topi Channel';

/**
 * Main logic to create Electron application.
 *
 * @param {Electron.BrowserWindow}  mainWindow
 * @param {Electron.BrowserWindow}  loadingScreen
 * @param {boolean}                 live
 */
module.exports = (mainWindow, loadingScreen, live) => {
  if (live) {
    require('electron-debug')({showDevTools: true});
  }

  /**
   * Function to create main window, note that we need to use setTimeout on live mode.
   *
   * @param {boolean} live
   */
  const createMainWindow = live => {
    live ? setTimeout(() => { createWindow(live); }, 12000) : createWindow(live);
  };

  /**
   * Function to create actual window, note that live parameter
   *
   * @param {boolean} live
   */
  const createWindow = live => {
    // Create the browser window.
    mainWindow = new BrowserWindow(windowParams);

    mainWindow.setTitle(applicationTitle);

    let urlParameters = {
      pathname: path.join(__dirname, '..', 'index.html'),
      protocol: 'file:',
      slashes: true,
    };

    if (live) {
      urlParameters = {
        pathname: 'localhost:4200',
        protocol: 'http:',
        slashes: true,
      };
    }

    // and load the index.html OR live web server of the app.
    mainWindow.loadURL(url.format(urlParameters));

    // And after we main application ready show it and hide possible loading window
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show();

      if (loadingScreen) {
        mainWindow.setBounds(loadingScreen.getBounds());

        loadingScreen.close();
      }
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      /**
       * Dereference the window object, usually you would store windows
       * in an array if your app supports multi windows, this is the time
       * when you should delete the corresponding element.
       */
      mainWindow = null
    });

    // Disable application menus
    Menu.setApplicationMenu(null);
  };

  // Function to create loading screen for application
  const createLoadingScreen = () => {
    loadingScreen = new BrowserWindow(Object.assign(windowParams, {parent: mainWindow}));
    loadingScreen.loadURL(url.format({
      pathname: path.join(__dirname, 'loading.html'),
      protocol: 'file:',
      slashes: true
    }));
    loadingScreen.on('closed', () => loadingScreen = null);
    loadingScreen.webContents.on('did-finish-load', () => {
      loadingScreen.show();
    });
  };

  /**
   * This method will be called when Electron has finished
   * initialization and is ready to create browser windows.
   * Some APIs can only be used after this event occurs.
   */
  app.on('ready', () => {
    createLoadingScreen();
    createMainWindow(live);
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    /**
     * On macOS it is common for applications and their menu bar
     * to stay active until the user quits explicitly with Cmd + Q
     */
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  /**
   * On macOS it's common to re-create a window in the app when the
   * dock icon is clicked and there are no other windows open.
   */
  app.on('activate', () => {
    if (mainWindow === null) {
      createMainWindow(live);
    }
  });
};
