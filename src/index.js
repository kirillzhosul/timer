/*
    Timer application build with Electron JS.
    Author: Kirill Zhosul.
*/

const {app, BrowserWindow} = require("electron");

const createWindow = () => {
    /// @description Creating Electron browser window.
    const window = new BrowserWindow({
        width: 800,
        height: 600
    });

    window.loadFile("index.html");

    return window;
}

// Entry point.
app.whenReady().then(() => {
    createWindow();
});