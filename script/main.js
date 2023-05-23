const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("https://filecoin-hyperspace.chainstacklabs.com/rpc/v1"));

web3.eth.getBalance("0x9f5C6eA403DE73171DD66e01cFC1f321D48C5c61", function(err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log(web3.utils.fromWei(result, "ether") + " FIL")
	}
});
