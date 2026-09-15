const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('sparkDesktop',{
 close:()=>ipcRenderer.send('close-popup'),
 hover:on=>ipcRenderer.send('popup-hover',!!on),
 another:()=>ipcRenderer.invoke('next-spark'),
 later:()=>ipcRenderer.invoke('later-spark'),
 done:()=>ipcRenderer.invoke('done-spark'),
 importHistory:()=>ipcRenderer.invoke('import-history'),
 captureClipboard:()=>ipcRenderer.invoke('capture-clipboard'),
 stats:()=>ipcRenderer.invoke('stats'),
 onDisplay:fn=>ipcRenderer.on('display-spark',(_e,item)=>fn(item))
});