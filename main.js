const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
        },
    });

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:5173'); 
    } else {
        win.loadFile(path.join(__dirname, 'src/pages/index.html'));
    }
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })