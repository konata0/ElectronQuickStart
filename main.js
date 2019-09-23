const {app, BrowserWindow} = require('electron');
const path = require('path');

// init
let mainWindow = null;
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  mainWindow.setMenu(null);
  mainWindow.loadFile('./main.html')
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin'){
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null){
    createWindow();
  }
})


