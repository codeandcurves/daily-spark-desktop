const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('sparkDesktop',{
 close:()=>ipcRenderer.send('close-popup'), openUrl:u=>ipcRenderer.send('open-url',u),
 hover:on=>ipcRenderer.send('popup-hover',!!on), showAnother:()=>ipcRenderer.send('show-another'),
 getQuote:()=>ipcRenderer.invoke('get-internet-quote'), getPrefs:()=>ipcRenderer.invoke('get-prefs'),
 savePrefs:p=>ipcRenderer.invoke('save-prefs',p)
});