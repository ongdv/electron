const { app, BrowserWindow, Menu, shell, ipcMain } = require('electron');
const path = require('path');
const menuItems = [
  {
    label: 'About',
    submenu: [
      {
        label: 'About',
      },
    ],
  },
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Camera',
        click: async () => {
          const win2 = new BrowserWindow({
            width: 800,
            height: 500,
            show: false,
            webPreferences: {
              preload: path.join(__dirname, 'cameraPreload.js'),
            },
          });
          // win2.webContents.openDevTools();
          ipcMain.on('close-window2', () => {
            win2.close();
          });
          win2.loadFile('camera.html');
          // win2.loadURL('https://github.com');
          win2.once('ready-to-show', () => win2.show());
        },
      },
      {
        label: 'Learn More',
        click: async () => {
          await shell.openExternal('https://github.com');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'Exit',

        click: () => app.quit(),
      },
      {
        role: 'close',
      },
    ],
  },
  {
    label: 'window',
    submenu: [
      {
        role: 'minimize',
      },
      {
        role: 'close',
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  ipcMain.on('set-image', (event, data) => {
    // console.log(data);
    win.webContents.send('get-image', data);
  });

  // win.webContents.openDevTools();

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
