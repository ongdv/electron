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
      },
      {
        type: 'separator',
      },
      {
        label: 'Exit',
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);
