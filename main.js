const { app, BrowserWindow } = require('electron');

let mainWindow; 

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        icon: `${__dirname}/assets/icons/256icon.png`,
        width: 500,
        height: 600,
    });
    mainWindow.loadURL(`${__dirname}/app/index.html`);
}

app.on('ready', createMainWindow);
