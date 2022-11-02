var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js';document.body.appendChild(script);
document.body.innerHTML = document.body.innerHTML+`<span id='vcpControlPanel'><link href="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.css" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/jspanel4@4.12.0/dist/jspanel.js"></script><div style="z-index: 80;width: relative; height: 10%; position: fixed; bottom: 0; left: 0;background-color: black;padding: 1%;"><button type="button" class="vcpStyle btn" style="margin-right: 5px;" id="vcpExitButton" >Exit</button><button type="button" class="vcpStyle btn" style="margin-right: 5px;" id="vcpOptionsButton" onclick="">Options</button><button type="button" class="vcpStyle btn" style="margin-right: 5px;" id="vcpTricksButton" onclick="">Tricks</button></div></span>`
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
