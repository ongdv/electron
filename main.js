const { app, BrowserWindow, Menu, shell } = require('electron');
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
