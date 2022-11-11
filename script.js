//Inject Menu
if (document.getElementById('bkVCPControlPanel') == undefined) {
  document.body.innerHTML = document.body.innerHTML + `<span id='bkVCPControlPanel'><style>.revokeallcss { all: none; }</style><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 999 !important;position: absolute;max-width:325px;width: 325px; height: relative; position: fixed; top: 0; left: 5%;background-color: black;"><iframe id="bkVCPiFrame" src="https://bookmarkley.netlify.app/scriptgui.html" sandbox="allow-scripts allow-popups allow-same-origin" height="500" width="325" title="Iframe Example"></iframe></div></span>`
} else {
  document.getElementById('bkVCPControlPanel').style.display = 'block'
}

function startTabBrowser (url) {
  if (url == undefined) {
    document.body.innerHTML = '<iframe id="bkVCPiFrame" src="https://void.clevercarpet.repl.co" sandbox="allow-scripts allow-popups allow-same-origin" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Iframe Example"></iframe>'
  } else {
    document.body.innerHTML = '<iframe id="bkVCPiFrame" src="https://void.clevercarpet.repl.co/proxy/'+url+'" sandbox="allow-scripts allow-popups allow-same-origin" style="position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;" title="Iframe Example"></iframe>'
  }
}

let iseditmode = false

function editMode () {
  if (document.body.contentEditable == 'true') {
    document.body.contentEditable = 'false'; document.designMode = 'off'; void 
    document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|editmode|false', '*');
  } else {
    document.body.contentEditable = 'true'; document.designMode = 'on'; void 0
    document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|editmode|true', '*');
  }
}

window.onmessage = function (e) {
  let command = e.data.split('|')
  if (command[0] == 'trick') {
    if (command[1] == 'tabcloak') {
      document.title = command[2]
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('trick|tabcloak', '*');
    } else if (command[1] == 'tabbrowser') {
      startTabBrowser()
    } else if (command[1] == 'unblock') {
      startTabBrowser(command[2])
    } else if (command[1] == 'editmode') {
      startTabBrowser(command[2])
    }
  } else if (command[0] == 'rqdata') {
    if (command[1] == 'tabtitle') {
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('rqdata|tabtitle|'+document.title, '*');
    } else if (command[1] == 'taburl') {
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('rqdata|taburl|' + document.location, '*');
    }
  } else if (command[0] == 'option') {
    if (command[1] == 'exit') {
      document.getElementById('bkVCPControlPanel').style.display = 'none'
    }
  }
};