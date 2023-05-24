const web3 = new Web3("https://filecoin-hyperspace.chainstacklabs.com/rpc/v1");
const abi = [
	{
		"inputs": [],
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
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fileFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "contractSize",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimumPriceIncrement",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "leverage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initialMargin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maintenanceMargin",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
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
			},
			{
				"internalType": "string",
				"name": "_expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_fileFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contractSize",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minimumPriceIncrement",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_leverage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_initialMargin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maintenanceMargin",
				"type": "uint256"
			}
		],
		"name": "setSpecs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "specs",
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
			},
			{
				"internalType": "string",
				"name": "expiryDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fileFormat",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "contractSize",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minimumPriceIncrement",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "leverage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initialMargin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maintenanceMargin",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}];

const contractAddress = "0x5B1cB45B5C20a68660315F9AC13D326C93C66964";
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
    specs = await contract.methods.getSpecs().call();
    document.getElementById("product-code").innerHTML = specs[0];
    console.log(specs[0]);
    document.getElementById("settlement-coin").innerHTML = specs[1];
    console.log(specs[1]);
    document.getElementById("quote-coin").innerHTML = specs[2];
    console.log(specs[2]);
    document.getElementById("expiry-date").innerHTML = specs[3];
    console.log(specs[3]);
    document.getElementById("file-format").innerHTML = specs[4];
    console.log(specs[4]);
    document.getElementById("contract-size").innerHTML = specs[5];
    console.log(specs[5]);
    document.getElementById("minimum-price-increment").innerHTML = specs[6];
    console.log(specs[6]);
    document.getElementById("leverage").innerHTML = specs[7];
    console.log(specs[7]);
    document.getElementById("initial-margin").innerHTML = specs[8];
    console.log(specs[8]);
    document.getElementById("maintenance-margin").innerHTML = specs[9];
    console.log(specs[9]);
	} else {
		console.log("No Wallet");
	}
}
