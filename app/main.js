const { app, BrowserWindow, Menu } = require('electron');

//Set Environment
process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production' ? true : false; 
const isWin = process.platform === 'win32' ? true : false;

let mainWindow; 
let aboutWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        icon: `${__dirname}/assets/icons/256icon.png`,
        width: 500,
        width: 500, 
        height: 600,
        resizable: isDev,
        backgroundColor: 'white',
    });
    mainWindow.loadURL(`${__dirname}/app/index.html`);
}
function createAboutWindow() {
    aboutWindow = new BrowserWindow({
      title: 'About ImageShrink',
      icon: `${__dirname}/assets/icons/256icon.png`,
        width: 300, 
        height: 300,
        resizable: isDev,
        backgroundColor: 'white',
    })

    aboutWindow.loadURL(`${__dirname}/app/about.html`)
}

app.on('ready', () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(mainMenu)

  mainWindow.on('closed', () => mainWindow = null)
});

const menu = [
  ...(!isWin ? [ 
    {
        label: 'ImageShrink', 
        submenu: [
          {
            label: 'About',
            click: createAboutWindow,
          }
      ],
    }] :  
    []),
  
  {
    role: 'fileMenu',

  },

   ...(isWin ? [
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: createAboutWindow,
        }
      ]
    }
  ] : []),
  
  ...(isDev
    ? [
      {
        label: 'Developer',
        submenu: [
          {role: 'reload'},
          {role: 'forcereload'},
          {type: 'separator'},
          {role: 'toggledevtools'},
        ],
      },
    ] : []
  ),
]

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })

app.on('window-all-closed', () => {
  if (!isWin) {
    app.quit()
  }
})

app.on('ready', createMainWindow);
app.allowRendererProcessReuse = true;