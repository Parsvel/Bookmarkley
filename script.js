document.body.innerHTML = document.body.innerHTML +`<span id='vcpControlPanel'><style>.revokeallcss { all: none; }</style><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 999;width: relative; height: 20px; position: fixed; top: 0; left: 5%;background-color: black;padding: 1%;"><button type="button" class="revokeallcss" style="margin-right: 5px;" id="vcpOptionsButton" onclick="">Options</button><button type="button" class="revokeallcss" style="margin-right: 5px;" id="vcpTricksButton" onclick="">Tricks</button></div></span>`
var cloakEnabled
function toggleCloak () {
if (cloakEnabled == true) { 
  cloakEnabled = false
document.getElementById("vcpTabCloakTitle").disabled = true }
else { document.getElementById("vcpTabCloakTitle").disabled = false 
 cloakEnabled = true
}
}
function updateTitle () {
  document.title = document.getElementById("vcpTabCloakTitle").value
}
