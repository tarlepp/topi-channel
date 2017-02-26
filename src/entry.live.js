'use strict';

const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');

require('electron-debug')({showDevTools: true});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let loadingScreen;

const windowParams = {
  width: 1000,
  height: 600,
  backgroundColor: '#2b2b2b',
  darkTheme: true,
  show: false,
};

function createWindow() {
  setTimeout(() => {
    // Create the browser window.
    mainWindow = new BrowserWindow(windowParams);

    mainWindow.setTitle('Topi Channel');

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
      pathname: 'localhost:4200',
      protocol: 'http:',
      slashes: true
    }));

    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show();

      if (loadingScreen) {
        let loadingScreenBounds = loadingScreen.getBounds();

        mainWindow.setBounds(loadingScreenBounds);
        loadingScreen.close();
      }
    });

    // Open the DevTools when in dev mode.
    if (process.env.NODE_ENV == 'development') {
      mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    });

    Menu.setApplicationMenu(null);
  }, 12000);
}

function createLoadingScreen() {
  loadingScreen = new BrowserWindow(Object.assign(windowParams, {parent: mainWindow}));
  loadingScreen.loadURL('file://' + __dirname + '/loading.html');
  loadingScreen.on('closed', () => loadingScreen = null);
  loadingScreen.webContents.on('did-finish-load', () => {
    loadingScreen.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createLoadingScreen();
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
