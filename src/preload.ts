// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld(
  'MY_APP_NAMESPACE', {
    openDialog() {
      return ipcRenderer.invoke('hey-open-my-dialog-now');
    }
});