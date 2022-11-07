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
// *******************************************************
// ************* Get Account *****************************
// *******************************************************


async function getAccount(type) {
    let net = getNet()
    const client = new xrpl.Client(net)
    results = 'Connecting to ' + getNet() + '....'
    const walletServer = net

    if (type == 'standby') {
        document.getElementById('standbyResultField').value = results
    } else {
        document.getElementById('operationalResultField').value = results
    }
}