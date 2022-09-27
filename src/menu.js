const { Menu, app } = require('electron');

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
