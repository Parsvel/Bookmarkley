//Inject Menu
document.body.innerHTML = document.body.innerHTML +`<span id='bkVCPControlPanel'><style>.revokeallcss { all: none; }</style><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 999 !important;position: absolute;max-width:325px;width: 325px; height: relative; position: fixed; top: 0; left: 5%;background-color: black;padding: 15px;"><iframe id="bkVCPiFrame" src="https://bookmarkley.netlify.app/scriptgui.html" sandbox="allow-scripts allow-popups allow-same-origin" height="500" width="320" title="Iframe Example"></iframe></div></span>`

window.onmessage = function (e) {
  let command = e.data.split('|')
  if (command[0] == 'trick') {
    if (command[1] == 'tabcloak') {
      document.title = command[2]
    }
  } else if (command[0] == 'rqdata') {
    if (command[1] == 'tabtitle') {
      document.getElementById('bkVCPiFrame').contentWindow.postMessage('rqdata|tabtitle|'+document.title, '*');
    }
  }
};