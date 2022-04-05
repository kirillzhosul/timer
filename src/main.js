/*
    Timer application build with Electron JS.
    Author: Kirill Zhosul.
*/

const {app, BrowserWindow} = require("electron");

const createWindow = () => {
    /// @description Creating Electron browser window.
    const window = new BrowserWindow({
        width: 350,
        height: 350,
        center: true,
        title: "Timer",
        autoHideMenuBar: true,
        resizable: false
    });


    window.loadFile("./app/index.html");

    return window;
}

// Entry point.
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});

// Close handler.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin"){
        app.quit();
    }
});