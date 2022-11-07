// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************

function getNet() {


    let net
    if (document.getElementById("xls").checked) net = "wss://xls20-sandbox.rippletest.net:51233"
    if (document.getElementById("tn").checked) net = "wss://s.altnet.rippletest.net:51233"
    if (document.getElementById("dn").checked) net = "wss://s.devnet.rippletest.net:51233"
    return net
} // End of getNet()
