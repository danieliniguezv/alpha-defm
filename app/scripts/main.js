const web3 = new Web3("https://filecoin-hyperspace.chainstacklabs.com/rpc/v1");
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_settlementCoin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quoteCoin",
				"type": "string"
			}
		],
		"name": "setSpecs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getSpecs",
		"outputs": [
			{
				"internalType": "string",
				"name": "productCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "settlementCoin",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "quoteCoin",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x3a92d1273f27b9101A3F182A9BAEC16e608C2D4d";
const contract = new web3.eth.Contract(abi, contractAddress);

async function connect() {
	if (window.ethereum) {
		await window.ethereum.request({ method: "eth_requestAccounts"});
		window.web3 = new Web3(window.ethereum);
		const account = web3.eth.accounts;
		const walletAddress = account.givenProvider.selectedAddress;
		console.log(`Wallet: ${walletAddress}`);
		document.getElementById("account").innerHTML = walletAddress;
		web3.eth.getBalance(walletAddress).then((balance) => {
			let _balance = web3.utils.fromWei(balance, "ether");
			document.getElementById("balance").innerHTML = _balance;
		});
    let specs = [];
    specs = await contract.methods.getSpecs(0).call();
    document.getElementById("product-code").innerHTML = specs[0];
    console.log(specs[0]);
	} else {
		console.log("No Wallet");
	}
}
