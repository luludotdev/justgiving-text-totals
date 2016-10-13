/*
  JustGiving Text Totals
  By Jack Baron (me@jackbaron.com)
  Licensed under ISC License
*/

// Define imports
const {app, BrowserWindow, ipcMain, dialog} = require('electron')
const fs = require('fs')
const config = require(__dirname + '/config.js')
const JustGiving = require(__dirname + '/src/justGiving.js')
const jg = new JustGiving(config.appId)

// Once electron has initialised
app.on('ready', () => {
  // Define the main window
  // (don't show it yet)
  mainWindow = new BrowserWindow({
    width: 480,
    height: 640,
    minWidth: 360
  })

  // Load window and show
  mainWindow.loadURL('file://' + __dirname + '/app/index.html')
  mainWindow.setMenu(null)
  mainWindow.show()

  // DEV MODE
  mainWindow.openDevTools()

  console.log(jg.getEndpoint())
})

// Once all windows have closed
app.on('window-all-closed', () => {
  // END
  // THAT
  // PROCESS!
  app.quit()
})