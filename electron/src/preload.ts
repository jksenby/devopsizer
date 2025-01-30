require('./rt/electron-rt');
const { Client } = require('ssh2')
const { readFileSync } = require('fs')
const {ipcMain} = require('electron');
const { contextBridge, ipcRenderer } = require('electron');
//////////////////////////////
// User Defined Preload scripts below
console.log('User Preload!');

contextBridge.exposeInMainWorld('electronAPI', {
    connectSSH: (sshConfig: any, formValue: any) => ipcRenderer.send('connect-ssh', { sshConfig, formValue }),
    closeSSH: () => ipcRenderer.send('close-ssh'),
    onSSHStatus: (callback: Function) => {
        ipcRenderer.on('ssh-status', (event, status) => callback(status));
      },
});  