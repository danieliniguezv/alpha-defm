const web3 = new Web3("https://filecoin-hyperspace.chainstacklabs.com/rpc/v1");
const futuresContractAbi = [
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

const futuresContractIssuerAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_futuresContractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "futuresContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
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
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFuturesContracts",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFuturesContractsFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const filecoinUSDCAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const filecoinUSDCContractAddress = "0x8A0C0417434a382604F0DD0aF3146dB6944331B7";
const filecoinUSDCContract = new web3.eth.Contract(filecoinUSDCAbi, filecoinUSDCContractAddress);

const futuresContractContractAddress = "0x5B1cB45B5C20a68660315F9AC13D326C93C66964";
const futuresContractContract = new web3.eth.Contract(futuresContractAbi, futuresContractContractAddress);

const futuresContractIssuerContractAddress = "0x6e823E1dF0Ae4f6eCad9734F88D96469A3A9BBDf";
const futuresContractIssuerContract = new web3.eth.Contract(futuresContractIssuerAbi, futuresContractIssuerContractAddress);

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

    let filecoinUSDCBalance;
    filecoinUSDCBalance = await filecoinUSDCContract.methods.balanceOf(walletAddress).call();
    filecoinUSDCBalance = filecoinUSDCBalance/1000000;
    document.getElementById("filecoin-usdc-balance").innerHTML = filecoinUSDCBalance;
    console.log(filecoinUSDCBalance);

    let specs = [];
    specs = await futuresContractContract.methods.getSpecs().call();
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

    let futuresContractBalance;
    futuresContractBalance = await futuresContractIssuerContract.methods.getBalance(walletAddress).call();
    document.getElementById("futures-contract-balance").innerHTML = futuresContractBalance;
    console.log(futuresContractBalance);
	} else {
		console.log("No Wallet");
	}
}
