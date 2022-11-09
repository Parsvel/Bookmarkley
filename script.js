//Inject Menu
document.body.innerHTML = document.body.innerHTML +`<span id='bkVCPControlPanel'><style>.revokeallcss { all: none; }</style><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 999 !important;position: absolute;max-width:325px;width: 325px; height: relative; position: fixed; top: 0; left: 5%;background-color: black;padding: 15px;"><iframe src="scriptgui.html" sandbox="allow-scripts allow-popups allow-same-origin" height="500" width="320" title="Iframe Example"></iframe></div></span>`

//Menu Controller
let menu = 0
document.getElementById('bkVCPOptionsButton').onclick = function () {
  if (menu == 0) {
    menu = 1
    document.getElementById('bkVCPOptionsMenu').style.display = 'block'
    document.getElementById('bkVCPTricksMenu').style.display = 'none'
  } else {
    menu = 1
    document.getElementById('bkVCPOptionsMenu').style.display = 'block'
    document.getElementById('bkVCPTricksMenu').style.display = 'none'
  }
}
document.getElementById('bkVCPTricksButton').onclick = function () {
  if (menu == 0) {
    menu = 1
    document.getElementById('bkVCPOptionsMenu').style.display = 'none'
    document.getElementById('bkVCPTricksMenu').style.display = 'block'
  } else if (menu == 1) {
    menu = 1
    document.getElementById('bkVCPOptionsMenu').style.display = 'none'
    document.getElementById('bkVCPTricksMenu').style.display = 'block'
  } else {
    menu = 2
    document.getElementById('bkVCPOptionsMenu').style.display = 'none'
    document.getElementById('bkVCPTricksMenu').style.display = 'block'
  }
}

//Trick Variables
let OgTabName = document.title

//Tricks Controller
//Tab Renamer
document.getElementById('bkVCPTrickTabRenamer').onclick = function () {
  document.getElementById('bkVCPTrickTabRenameMenu').style.display = 'block'
}
document.getElementById('bkVCPTrickTabRename').onclick = function () {
  let NewTabName = prompt("New Tab Name");
  document.title = NewTabName
}
document.getElementById('bkVCPTrickTabRenameOg').onclick = function () {
  document.title = OgTabName
}

//Hide Button
document.getElementById('bkVCPHideButton').onclick = function () {
  if (confirm("Are you sure you want to hide Bookmarkley?") == true) {
    document.getElementById('bkVCPControlPanel').style.display = 'none'
  }
}