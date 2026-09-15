const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('sparkDesktop',{
 close:()=>ipcRenderer.send('close-popup'),
 hover:on=>ipcRenderer.send('popup-hover',!!on),
 showAnother:()=>ipcRenderer.send('show-another'),
 getInbox:()=>ipcRenderer.invoke('get-inbox'),
 getPrefs:()=>ipcRenderer.invoke('get-prefs'),
 savePrefs:p=>ipcRenderer.invoke('save-prefs',p),
 onRefresh:fn=>ipcRenderer.on('refresh-spark',()=>fn()),
 onDisplay:fn=>ipcRenderer.on('display-spark',(_e,item)=>fn(item))
});