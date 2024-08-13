// electron/preload.js

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  // Expose any APIs here
});
