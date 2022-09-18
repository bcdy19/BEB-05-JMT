const TOKEN = {
	"contractName": "JMToken",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "address payable",
			"name": "treasury",
			"type": "address"
		  }
		],
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
		"inputs": [],
		"name": "FundsMoved",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "OwnerAction",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "_account",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "TokensBought",
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
		"name": "MAX_SUPPLY",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleItems",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleNFT",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "Router",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "TAX",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "owner",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "spender",
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
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
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
			"name": "account",
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
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "balancesToClaim",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "contributionsOf",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "decimals",
		"outputs": [
		  {
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "subtractedValue",
			"type": "uint256"
		  }
		],
		"name": "decreaseAllowance",
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
		"inputs": [],
		"name": "fundsAlreadyMoved",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "addedValue",
			"type": "uint256"
		  }
		],
		"name": "increaseAllowance",
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
		"inputs": [],
		"name": "isContractPaused",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "isTaxOn",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "isWhitelisted",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
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
		"type": "function",
		"constant": true
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
		"type": "function",
		"constant": true
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
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalContributed",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
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
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
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
			"name": "from",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
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
	  },
	  {
		"inputs": [],
		"name": "treasuryWallet",
		"outputs": [
		  {
			"internalType": "address payable",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_router",
			"type": "address"
		  }
		],
		"name": "setRouterAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleNft",
			"type": "address"
		  }
		],
		"name": "setMapleNFTAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleItems",
			"type": "address"
		  }
		],
		"name": "setMapleItemsAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function",
		"payable": true
	  },
	  {
		"inputs": [],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "togglePauseContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "toggleTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "addToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "marketBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		  },
		  {
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		  }
		],
		"name": "increaseContractAllowance",
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
			"internalType": "contract LiquidityPool",
			"name": "liquidityPool",
			"type": "address"
		  }
		],
		"name": "sendLiquidityToLPContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"FundsMoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"OwnerAction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleItems\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleNFT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TAX\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balancesToClaim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"contributionsOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsAlreadyMoved\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isContractPaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTaxOn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isWhitelisted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"marketBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"liquidityPool\",\"type\":\"address\"}],\"name\":\"sendLiquidityToLPContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleItems\",\"type\":\"address\"}],\"name\":\"setMapleItemsAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleNft\",\"type\":\"address\"}],\"name\":\"setMapleNFTAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_router\",\"type\":\"address\"}],\"name\":\"setRouterAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"togglePauseContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleTax\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JMToken.sol\":\"JMToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0xbeaa0189fdd72c2d46d4df95c5d60779549132a3f65581d398fb5aefc23c8455\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://e85d3f2180010bc8cf2699f84ac87221ab4f345bca0477a8a2839b9357afce4c\",\"dweb:/ipfs/QmbKFnECRPiTTEfLPqibTCMumDv3TPA7ZzUbhEDuWkogus\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xb6529a770d3743c036cc42f3fee1f7b5ee9c6d778843dd7288eb9662f65c35c5\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://5b5642023d86251f20b4d3ce31f6921bf312803d0499d55b7ed3e766b9dabb50\",\"dweb:/ipfs/QmRoyH4HtwqWoMvg2MqmHbpEjW4sQxPg3QXG1VJCSg3iKX\"]}},\"version\":1}",
	"bytecode": "0x60806040526001600760026101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040516200423b3803806200423b833981810160405281019062000052919062000424565b6040518060400160405280600981526020017f4a4d5420546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4a4d5400000000000000000000000000000000000000000000000000000000008152508160039081620000cf9190620006d0565b508060049081620000e19190620006d0565b505050620000f46200022f60201b60201c565b600a62000102919062000947565b620f424062000112919062000998565b6005819055506200012c306005546200023860201b60201c565b33600760036101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e6000600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000acf565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a19062000a44565b60405180910390fd5b620002be60008383620003b060201b60201c565b8060026000828254620002d2919062000a66565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000329919062000a66565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000390919062000ab2565b60405180910390a3620003ac60008383620003b560201b60201c565b5050565b505050565b505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003ec82620003bf565b9050919050565b620003fe81620003df565b81146200040a57600080fd5b50565b6000815190506200041e81620003f3565b92915050565b6000602082840312156200043d576200043c620003ba565b5b60006200044d848285016200040d565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004d857607f821691505b602082108103620004ee57620004ed62000490565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005587fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000519565b62000564868362000519565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620005b1620005ab620005a5846200057c565b62000586565b6200057c565b9050919050565b6000819050919050565b620005cd8362000590565b620005e5620005dc82620005b8565b84845462000526565b825550505050565b600090565b620005fc620005ed565b62000609818484620005c2565b505050565b5b81811015620006315762000625600082620005f2565b6001810190506200060f565b5050565b601f82111562000680576200064a81620004f4565b620006558462000509565b8101602085101562000665578190505b6200067d620006748562000509565b8301826200060e565b50505b505050565b600082821c905092915050565b6000620006a56000198460080262000685565b1980831691505092915050565b6000620006c0838362000692565b9150826002028217905092915050565b620006db8262000456565b67ffffffffffffffff811115620006f757620006f662000461565b5b620007038254620004bf565b6200071082828562000635565b600060209050601f83116001811462000748576000841562000733578287015190505b6200073f8582620006b2565b865550620007af565b601f1984166200075886620004f4565b60005b8281101562000782578489015182556001820191506020850194506020810190506200075b565b86831015620007a257848901516200079e601f89168262000692565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000845578086048111156200081d576200081c620007b7565b5b60018516156200082d5780820291505b80810290506200083d85620007e6565b9450620007fd565b94509492505050565b60008262000860576001905062000933565b8162000870576000905062000933565b81600181146200088957600281146200089457620008ca565b600191505062000933565b60ff841115620008a957620008a8620007b7565b5b8360020a915084821115620008c357620008c2620007b7565b5b5062000933565b5060208310610133831016604e8410600b8410161715620009045782820a905083811115620008fe57620008fd620007b7565b5b62000933565b620009138484846001620007f3565b925090508184048111156200092d576200092c620007b7565b5b81810290505b9392505050565b600060ff82169050919050565b600062000954826200057c565b915062000961836200093a565b9250620009907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200084e565b905092915050565b6000620009a5826200057c565b9150620009b2836200057c565b9250828202620009c2816200057c565b91508282048414831517620009dc57620009db620007b7565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000a2c601f83620009e3565b915062000a3982620009f4565b602082019050919050565b6000602082019050818103600083015262000a5f8162000a1d565b9050919050565b600062000a73826200057c565b915062000a80836200057c565b925082820190508082111562000a9b5762000a9a620007b7565b5b92915050565b62000aac816200057c565b82525050565b600060208201905062000ac9600083018462000aa1565b92915050565b61375c8062000adf6000396000f3fe6080604052600436106102255760003560e01c806368f58b0311610123578063b70f21c7116100ab578063dd62ed3e1161006f578063dd62ed3e14610800578063e43252d71461083d578063ec71ef8914610866578063f4ab29281461088f578063f6d7eade146108ba57610225565b8063b70f21c71461073a578063be07d17d14610777578063d1cabc35146107a2578063d7bb99ba146107b9578063d83a2bf3146107c357610225565b80638da5cb5b116100f25780638da5cb5b1461064157806395d89b411461066c5780639dc29fac14610697578063a457c2d7146106c0578063a9059cbb146106fd57610225565b806368f58b03146105855780636eefec11146105b057806370a08231146105db578063839254601461061857610225565b8063313ce567116101b157806340c10f191161017557806340c10f19146104c657806341cb87fc146104ef5780634626402b1461051857806348c54b9d1461054357806365acacfe1461055a57610225565b8063313ce567146103b957806332cb6b0c146103e4578063395093511461040f5780633af0dbc11461044c5780633af32abf1461048957610225565b80631690bb4e116101f85780631690bb4e146102d457806318160ddd146102fd5780631b9631fc146103285780631d057bd91461035357806323b872dd1461037c57610225565b8063023f41471461022a57806306fdde0314610255578063095ea7b31461028057806310bf6029146102bd575b600080fd5b34801561023657600080fd5b5061023f6108e5565b60405161024c9190612784565b60405180910390f35b34801561026157600080fd5b5061026a6108eb565b604051610277919061282f565b60405180910390f35b34801561028c57600080fd5b506102a760048036038101906102a291906128e0565b61097d565b6040516102b4919061293b565b60405180910390f35b3480156102c957600080fd5b506102d26109a0565b005b3480156102e057600080fd5b506102fb60048036038101906102f69190612994565b610a88565b005b34801561030957600080fd5b50610312610c7d565b60405161031f9190612784565b60405180910390f35b34801561033457600080fd5b5061033d610c87565b60405161034a91906129d0565b60405180910390f35b34801561035f57600080fd5b5061037a600480360381019061037591906128e0565b610cad565b005b34801561038857600080fd5b506103a3600480360381019061039e91906129eb565b610da3565b6040516103b0919061293b565b60405180910390f35b3480156103c557600080fd5b506103ce610dd2565b6040516103db9190612a5a565b60405180910390f35b3480156103f057600080fd5b506103f9610ddb565b6040516104069190612784565b60405180910390f35b34801561041b57600080fd5b50610436600480360381019061043191906128e0565b610de1565b604051610443919061293b565b60405180910390f35b34801561045857600080fd5b50610473600480360381019061046e9190612a75565b610e18565b6040516104809190612784565b60405180910390f35b34801561049557600080fd5b506104b060048036038101906104ab9190612a75565b610e30565b6040516104bd919061293b565b60405180910390f35b3480156104d257600080fd5b506104ed60048036038101906104e891906128e0565b610e50565b005b3480156104fb57600080fd5b5061051660048036038101906105119190612a75565b610fd2565b005b34801561052457600080fd5b5061052d611137565b60405161053a9190612ac3565b60405180910390f35b34801561054f57600080fd5b5061055861115d565b005b34801561056657600080fd5b5061056f611316565b60405161057c919061293b565b60405180910390f35b34801561059157600080fd5b5061059a611329565b6040516105a79190612784565b60405180910390f35b3480156105bc57600080fd5b506105c561132e565b6040516105d291906129d0565b60405180910390f35b3480156105e757600080fd5b5061060260048036038101906105fd9190612a75565b611354565b60405161060f9190612784565b60405180910390f35b34801561062457600080fd5b5061063f600480360381019061063a9190612a75565b61139c565b005b34801561064d57600080fd5b50610656611501565b60405161066391906129d0565b60405180910390f35b34801561067857600080fd5b50610681611527565b60405161068e919061282f565b60405180910390f35b3480156106a357600080fd5b506106be60048036038101906106b991906128e0565b6115b9565b005b3480156106cc57600080fd5b506106e760048036038101906106e291906128e0565b611675565b6040516106f4919061293b565b60405180910390f35b34801561070957600080fd5b50610724600480360381019061071f91906128e0565b6116ec565b604051610731919061293b565b60405180910390f35b34801561074657600080fd5b50610761600480360381019061075c9190612a75565b61170f565b60405161076e9190612784565b60405180910390f35b34801561078357600080fd5b5061078c611727565b604051610799919061293b565b60405180910390f35b3480156107ae57600080fd5b506107b761173a565b005b6107c1611822565b005b3480156107cf57600080fd5b506107ea60048036038101906107e591906129eb565b6119e9565b6040516107f7919061293b565b60405180910390f35b34801561080c57600080fd5b5061082760048036038101906108229190612ade565b611b55565b6040516108349190612784565b60405180910390f35b34801561084957600080fd5b50610864600480360381019061085f9190612a75565b611bdc565b005b34801561087257600080fd5b5061088d60048036038101906108889190612a75565b611cc7565b005b34801561089b57600080fd5b506108a4611e2c565b6040516108b1919061293b565b60405180910390f35b3480156108c657600080fd5b506108cf611e3f565b6040516108dc91906129d0565b60405180910390f35b60065481565b6060600380546108fa90612b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461092690612b4d565b80156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b5050505050905090565b600080610988611e65565b9050610995818585611e6d565b600191505092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790612bca565b60405180910390fd5b600760029054906101000a900460ff1615600760026101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0f90612bca565b60405180910390fd5b600760019054906101000a900460ff1615610b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5f90612c36565b60405180910390fd5b6001600760016101000a81548160ff02191690831515021790555060006064600654610b949190612c85565b9050610ba1308383612036565b8173ffffffffffffffffffffffffffffffffffffffff16636e553f6560065483306040518463ffffffff1660e01b8152600401610bdf929190612cc7565b6000604051808303818588803b158015610bf857600080fd5b505af1158015610c0c573d6000803e3d6000fd5b50505050508173ffffffffffffffffffffffffffffffffffffffff16632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c5957600080fd5b505af1158015610c6d573d6000803e3d6000fd5b50505050610c796122b5565b5050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610d565750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610d95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8c90612d3c565b60405180910390fd5b610d9f828261231e565b5050565b600080610dae611e65565b9050610dbb8582856124f4565b610dc6858585612580565b60019150509392505050565b60006012905090565b60055481565b600080610dec611e65565b9050610e0d818585610dfe8589611b55565b610e089190612d5c565b611e6d565b600191505092915050565b600d6020528060005260406000206000915090505481565b600e6020528060005260406000206000915054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ee0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed790612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4690612ddc565b60405180910390fd5b60055481610f5b610c7d565b610f659190612d5c565b1115610fa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9d90612e48565b60405180910390fd5b610fce82610fb2610dd2565b600a610fbe9190612f9b565b83610fc99190612c85565b612602565b5050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105990612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ea90613032565b60405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff16156111ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a49061309e565b60405180910390fd5b600760019054906101000a900460ff16156111fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f490612c36565b60405180910390fd5b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161127f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112769061310a565b60405180910390fd5b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611313303383612036565b50565b600760019054906101000a900460ff1681565b600181565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461142c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142390612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b490613032565b60405180910390fd5b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461153690612b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461156290612b4d565b80156115af5780601f10611584576101008083540402835291602001916115af565b820191906000526020600020905b81548152906001019060200180831161159257829003601f168201915b5050505050905090565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164090612bca565b60405180910390fd5b61167182611655610dd2565b600a6116619190612f9b565b8361166c9190612c85565b61231e565b5050565b600080611680611e65565b9050600061168e8286611b55565b9050838110156116d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ca9061319c565b60405180910390fd5b6116e08286868403611e6d565b60019250505092915050565b6000806116f7611e65565b9050611704818585612580565b600191505092915050565b600c6020528060005260406000206000915090505481565b600760029054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c190612bca565b60405180910390fd5b600760009054906101000a900460ff1615600760006101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760009054906101000a900460ff1615611872576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118699061309e565b60405180910390fd5b600760019054906101000a900460ff16156118c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b990612c36565b60405180910390fd5b60006064346118d19190612c85565b905080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119229190612d5c565b9250508190555034600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119789190612d5c565b9250508190555034600660008282546119919190612d5c565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a826040516119de9190612784565b60405180910390a250565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611a945750600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611aec5750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611b2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2290613208565b60405180910390fd5b611b4a848484611b3b3330611b55565b611b459190612d5c565b611e6d565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6390612bca565b60405180910390fd5b6001600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4e90612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611de8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ddf90613032565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760009054906101000a900460ff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611edc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ed39061329a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f429061332c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516120299190612784565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036120a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209c906133be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210b90613450565b60405180910390fd5b61211f838383612761565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161219c906134e2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546122389190612d5c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161229c9190612784565b60405180910390a36122af848484612766565b50505050565b60006122c030611354565b90506122ef30600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683612036565b7fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e160405160405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361238d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161238490613574565b60405180910390fd5b61239982600083612761565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561241f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161241690613606565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546124769190613626565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516124db9190612784565b60405180910390a36124ef83600084612766565b505050565b60006125008484611b55565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461257a578181101561256c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612563906136a6565b60405180910390fd5b6125798484848403611e6d565b5b50505050565b6000600760029054906101000a900460ff16156125b35760648260016125a69190612c85565b6125b091906136f5565b90505b600081836125c19190613626565b90506125ce858583612036565b6125fb85600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684612036565b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161266890612ddc565b60405180910390fd5b61267d60008383612761565b806002600082825461268f9190612d5c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546126e49190612d5c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516127499190612784565b60405180910390a361275d60008383612766565b5050565b505050565b505050565b6000819050919050565b61277e8161276b565b82525050565b60006020820190506127996000830184612775565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156127d95780820151818401526020810190506127be565b60008484015250505050565b6000601f19601f8301169050919050565b60006128018261279f565b61280b81856127aa565b935061281b8185602086016127bb565b612824816127e5565b840191505092915050565b6000602082019050818103600083015261284981846127f6565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061288182612856565b9050919050565b61289181612876565b811461289c57600080fd5b50565b6000813590506128ae81612888565b92915050565b6128bd8161276b565b81146128c857600080fd5b50565b6000813590506128da816128b4565b92915050565b600080604083850312156128f7576128f6612851565b5b60006129058582860161289f565b9250506020612916858286016128cb565b9150509250929050565b60008115159050919050565b61293581612920565b82525050565b6000602082019050612950600083018461292c565b92915050565b600061296182612876565b9050919050565b61297181612956565b811461297c57600080fd5b50565b60008135905061298e81612968565b92915050565b6000602082840312156129aa576129a9612851565b5b60006129b88482850161297f565b91505092915050565b6129ca81612876565b82525050565b60006020820190506129e560008301846129c1565b92915050565b600080600060608486031215612a0457612a03612851565b5b6000612a128682870161289f565b9350506020612a238682870161289f565b9250506040612a34868287016128cb565b9150509250925092565b600060ff82169050919050565b612a5481612a3e565b82525050565b6000602082019050612a6f6000830184612a4b565b92915050565b600060208284031215612a8b57612a8a612851565b5b6000612a998482850161289f565b91505092915050565b6000612aad82612856565b9050919050565b612abd81612aa2565b82525050565b6000602082019050612ad86000830184612ab4565b92915050565b60008060408385031215612af557612af4612851565b5b6000612b038582860161289f565b9250506020612b148582860161289f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612b6557607f821691505b602082108103612b7857612b77612b1e565b5b50919050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000612bb4600a836127aa565b9150612bbf82612b7e565b602082019050919050565b60006020820190508181036000830152612be381612ba7565b9050919050565b7f46554e44535f4d4f5645445f544f5f4c50000000000000000000000000000000600082015250565b6000612c206011836127aa565b9150612c2b82612bea565b602082019050919050565b60006020820190508181036000830152612c4f81612c13565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c908261276b565b9150612c9b8361276b565b9250828202612ca98161276b565b91508282048414831517612cc057612cbf612c56565b5b5092915050565b6000604082019050612cdc6000830185612775565b612ce960208301846129c1565b9392505050565b7f4d41504c454e46545f4f4e4c5900000000000000000000000000000000000000600082015250565b6000612d26600d836127aa565b9150612d3182612cf0565b602082019050919050565b60006020820190508181036000830152612d5581612d19565b9050919050565b6000612d678261276b565b9150612d728361276b565b9250828201905080821115612d8a57612d89612c56565b5b92915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612dc6601f836127aa565b9150612dd182612d90565b602082019050919050565b60006020820190508181036000830152612df581612db9565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b6000612e326010836127aa565b9150612e3d82612dfc565b602082019050919050565b60006020820190508181036000830152612e6181612e25565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115612ebf57808604811115612e9b57612e9a612c56565b5b6001851615612eaa5780820291505b8081029050612eb885612e68565b9450612e7f565b94509492505050565b600082612ed85760019050612f94565b81612ee65760009050612f94565b8160018114612efc5760028114612f0657612f35565b6001915050612f94565b60ff841115612f1857612f17612c56565b5b8360020a915084821115612f2f57612f2e612c56565b5b50612f94565b5060208310610133831016604e8410600b8410161715612f6a5782820a905083811115612f6557612f64612c56565b5b612f94565b612f778484846001612e75565b92509050818404811115612f8e57612f8d612c56565b5b81810290505b9392505050565b6000612fa68261276b565b9150612fb183612a3e565b9250612fde7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612ec8565b905092915050565b7f57524954455f4f4e434521000000000000000000000000000000000000000000600082015250565b600061301c600b836127aa565b915061302782612fe6565b602082019050919050565b6000602082019050818103600083015261304b8161300f565b9050919050565b7f434f4e54524143545f5041555345440000000000000000000000000000000000600082015250565b6000613088600f836127aa565b915061309382613052565b602082019050919050565b600060208201905081810360008301526130b78161307b565b9050919050565b7f4e4f5f415641494c41424c455f46554e44530000000000000000000000000000600082015250565b60006130f46012836127aa565b91506130ff826130be565b602082019050919050565b60006020820190508181036000830152613123816130e7565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006131866025836127aa565b91506131918261312a565b604082019050919050565b600060208201905081810360008301526131b581613179565b9050919050565b7f524f555445525f4f525f4d41504c455f4f4e4c59000000000000000000000000600082015250565b60006131f26014836127aa565b91506131fd826131bc565b602082019050919050565b60006020820190508181036000830152613221816131e5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006132846024836127aa565b915061328f82613228565b604082019050919050565b600060208201905081810360008301526132b381613277565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006133166022836127aa565b9150613321826132ba565b604082019050919050565b6000602082019050818103600083015261334581613309565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006133a86025836127aa565b91506133b38261334c565b604082019050919050565b600060208201905081810360008301526133d78161339b565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061343a6023836127aa565b9150613445826133de565b604082019050919050565b600060208201905081810360008301526134698161342d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006134cc6026836127aa565b91506134d782613470565b604082019050919050565b600060208201905081810360008301526134fb816134bf565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061355e6021836127aa565b915061356982613502565b604082019050919050565b6000602082019050818103600083015261358d81613551565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006135f06022836127aa565b91506135fb82613594565b604082019050919050565b6000602082019050818103600083015261361f816135e3565b9050919050565b60006136318261276b565b915061363c8361276b565b925082820390508181111561365457613653612c56565b5b92915050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000613690601d836127aa565b915061369b8261365a565b602082019050919050565b600060208201905081810360008301526136bf81613683565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006137008261276b565b915061370b8361276b565b92508261371b5761371a6136c6565b5b82820490509291505056fea264697066735822122061734bd2c25eb3204c8846c09a28a1d2fed2d18144275738cf7853444281ee5a64736f6c63430008110033",
	"deployedBytecode": "0x6080604052600436106102255760003560e01c806368f58b0311610123578063b70f21c7116100ab578063dd62ed3e1161006f578063dd62ed3e14610800578063e43252d71461083d578063ec71ef8914610866578063f4ab29281461088f578063f6d7eade146108ba57610225565b8063b70f21c71461073a578063be07d17d14610777578063d1cabc35146107a2578063d7bb99ba146107b9578063d83a2bf3146107c357610225565b80638da5cb5b116100f25780638da5cb5b1461064157806395d89b411461066c5780639dc29fac14610697578063a457c2d7146106c0578063a9059cbb146106fd57610225565b806368f58b03146105855780636eefec11146105b057806370a08231146105db578063839254601461061857610225565b8063313ce567116101b157806340c10f191161017557806340c10f19146104c657806341cb87fc146104ef5780634626402b1461051857806348c54b9d1461054357806365acacfe1461055a57610225565b8063313ce567146103b957806332cb6b0c146103e4578063395093511461040f5780633af0dbc11461044c5780633af32abf1461048957610225565b80631690bb4e116101f85780631690bb4e146102d457806318160ddd146102fd5780631b9631fc146103285780631d057bd91461035357806323b872dd1461037c57610225565b8063023f41471461022a57806306fdde0314610255578063095ea7b31461028057806310bf6029146102bd575b600080fd5b34801561023657600080fd5b5061023f6108e5565b60405161024c9190612784565b60405180910390f35b34801561026157600080fd5b5061026a6108eb565b604051610277919061282f565b60405180910390f35b34801561028c57600080fd5b506102a760048036038101906102a291906128e0565b61097d565b6040516102b4919061293b565b60405180910390f35b3480156102c957600080fd5b506102d26109a0565b005b3480156102e057600080fd5b506102fb60048036038101906102f69190612994565b610a88565b005b34801561030957600080fd5b50610312610c7d565b60405161031f9190612784565b60405180910390f35b34801561033457600080fd5b5061033d610c87565b60405161034a91906129d0565b60405180910390f35b34801561035f57600080fd5b5061037a600480360381019061037591906128e0565b610cad565b005b34801561038857600080fd5b506103a3600480360381019061039e91906129eb565b610da3565b6040516103b0919061293b565b60405180910390f35b3480156103c557600080fd5b506103ce610dd2565b6040516103db9190612a5a565b60405180910390f35b3480156103f057600080fd5b506103f9610ddb565b6040516104069190612784565b60405180910390f35b34801561041b57600080fd5b50610436600480360381019061043191906128e0565b610de1565b604051610443919061293b565b60405180910390f35b34801561045857600080fd5b50610473600480360381019061046e9190612a75565b610e18565b6040516104809190612784565b60405180910390f35b34801561049557600080fd5b506104b060048036038101906104ab9190612a75565b610e30565b6040516104bd919061293b565b60405180910390f35b3480156104d257600080fd5b506104ed60048036038101906104e891906128e0565b610e50565b005b3480156104fb57600080fd5b5061051660048036038101906105119190612a75565b610fd2565b005b34801561052457600080fd5b5061052d611137565b60405161053a9190612ac3565b60405180910390f35b34801561054f57600080fd5b5061055861115d565b005b34801561056657600080fd5b5061056f611316565b60405161057c919061293b565b60405180910390f35b34801561059157600080fd5b5061059a611329565b6040516105a79190612784565b60405180910390f35b3480156105bc57600080fd5b506105c561132e565b6040516105d291906129d0565b60405180910390f35b3480156105e757600080fd5b5061060260048036038101906105fd9190612a75565b611354565b60405161060f9190612784565b60405180910390f35b34801561062457600080fd5b5061063f600480360381019061063a9190612a75565b61139c565b005b34801561064d57600080fd5b50610656611501565b60405161066391906129d0565b60405180910390f35b34801561067857600080fd5b50610681611527565b60405161068e919061282f565b60405180910390f35b3480156106a357600080fd5b506106be60048036038101906106b991906128e0565b6115b9565b005b3480156106cc57600080fd5b506106e760048036038101906106e291906128e0565b611675565b6040516106f4919061293b565b60405180910390f35b34801561070957600080fd5b50610724600480360381019061071f91906128e0565b6116ec565b604051610731919061293b565b60405180910390f35b34801561074657600080fd5b50610761600480360381019061075c9190612a75565b61170f565b60405161076e9190612784565b60405180910390f35b34801561078357600080fd5b5061078c611727565b604051610799919061293b565b60405180910390f35b3480156107ae57600080fd5b506107b761173a565b005b6107c1611822565b005b3480156107cf57600080fd5b506107ea60048036038101906107e591906129eb565b6119e9565b6040516107f7919061293b565b60405180910390f35b34801561080c57600080fd5b5061082760048036038101906108229190612ade565b611b55565b6040516108349190612784565b60405180910390f35b34801561084957600080fd5b50610864600480360381019061085f9190612a75565b611bdc565b005b34801561087257600080fd5b5061088d60048036038101906108889190612a75565b611cc7565b005b34801561089b57600080fd5b506108a4611e2c565b6040516108b1919061293b565b60405180910390f35b3480156108c657600080fd5b506108cf611e3f565b6040516108dc91906129d0565b60405180910390f35b60065481565b6060600380546108fa90612b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461092690612b4d565b80156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b5050505050905090565b600080610988611e65565b9050610995818585611e6d565b600191505092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790612bca565b60405180910390fd5b600760029054906101000a900460ff1615600760026101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0f90612bca565b60405180910390fd5b600760019054906101000a900460ff1615610b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5f90612c36565b60405180910390fd5b6001600760016101000a81548160ff02191690831515021790555060006064600654610b949190612c85565b9050610ba1308383612036565b8173ffffffffffffffffffffffffffffffffffffffff16636e553f6560065483306040518463ffffffff1660e01b8152600401610bdf929190612cc7565b6000604051808303818588803b158015610bf857600080fd5b505af1158015610c0c573d6000803e3d6000fd5b50505050508173ffffffffffffffffffffffffffffffffffffffff16632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c5957600080fd5b505af1158015610c6d573d6000803e3d6000fd5b50505050610c796122b5565b5050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610d565750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610d95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8c90612d3c565b60405180910390fd5b610d9f828261231e565b5050565b600080610dae611e65565b9050610dbb8582856124f4565b610dc6858585612580565b60019150509392505050565b60006012905090565b60055481565b600080610dec611e65565b9050610e0d818585610dfe8589611b55565b610e089190612d5c565b611e6d565b600191505092915050565b600d6020528060005260406000206000915090505481565b600e6020528060005260406000206000915054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ee0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed790612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4690612ddc565b60405180910390fd5b60055481610f5b610c7d565b610f659190612d5c565b1115610fa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9d90612e48565b60405180910390fd5b610fce82610fb2610dd2565b600a610fbe9190612f9b565b83610fc99190612c85565b612602565b5050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105990612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110ea90613032565b60405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff16156111ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a49061309e565b60405180910390fd5b600760019054906101000a900460ff16156111fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f490612c36565b60405180910390fd5b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541161127f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112769061310a565b60405180910390fd5b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611313303383612036565b50565b600760019054906101000a900460ff1681565b600181565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461142c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142390612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b490613032565b60405180910390fd5b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461153690612b4d565b80601f016020809104026020016040519081016040528092919081815260200182805461156290612b4d565b80156115af5780601f10611584576101008083540402835291602001916115af565b820191906000526020600020905b81548152906001019060200180831161159257829003601f168201915b5050505050905090565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164090612bca565b60405180910390fd5b61167182611655610dd2565b600a6116619190612f9b565b8361166c9190612c85565b61231e565b5050565b600080611680611e65565b9050600061168e8286611b55565b9050838110156116d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ca9061319c565b60405180910390fd5b6116e08286868403611e6d565b60019250505092915050565b6000806116f7611e65565b9050611704818585612580565b600191505092915050565b600c6020528060005260406000206000915090505481565b600760029054906101000a900460ff1681565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c190612bca565b60405180910390fd5b600760009054906101000a900460ff1615600760006101000a81548160ff0219169083151502179055507fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d360405160405180910390a1565b600760009054906101000a900460ff1615611872576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118699061309e565b60405180910390fd5b600760019054906101000a900460ff16156118c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b990612c36565b60405180910390fd5b60006064346118d19190612c85565b905080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119229190612d5c565b9250508190555034600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119789190612d5c565b9250508190555034600660008282546119919190612d5c565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a826040516119de9190612784565b60405180910390a250565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611a945750600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611aec5750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611b2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2290613208565b60405180910390fd5b611b4a848484611b3b3330611b55565b611b459190612d5c565b611e6d565b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611c6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6390612bca565b60405180910390fd5b6001600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600760039054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611d57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4e90612bca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611de8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ddf90613032565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600760009054906101000a900460ff1681565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611edc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ed39061329a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f429061332c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516120299190612784565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036120a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161209c906133be565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210b90613450565b60405180910390fd5b61211f838383612761565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156121a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161219c906134e2565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546122389190612d5c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161229c9190612784565b60405180910390a36122af848484612766565b50505050565b60006122c030611354565b90506122ef30600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683612036565b7fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e160405160405180910390a150565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361238d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161238490613574565b60405180910390fd5b61239982600083612761565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561241f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161241690613606565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546124769190613626565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516124db9190612784565b60405180910390a36124ef83600084612766565b505050565b60006125008484611b55565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461257a578181101561256c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612563906136a6565b60405180910390fd5b6125798484848403611e6d565b5b50505050565b6000600760029054906101000a900460ff16156125b35760648260016125a69190612c85565b6125b091906136f5565b90505b600081836125c19190613626565b90506125ce858583612036565b6125fb85600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684612036565b5050505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612671576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161266890612ddc565b60405180910390fd5b61267d60008383612761565b806002600082825461268f9190612d5c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546126e49190612d5c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516127499190612784565b60405180910390a361275d60008383612766565b5050565b505050565b505050565b6000819050919050565b61277e8161276b565b82525050565b60006020820190506127996000830184612775565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156127d95780820151818401526020810190506127be565b60008484015250505050565b6000601f19601f8301169050919050565b60006128018261279f565b61280b81856127aa565b935061281b8185602086016127bb565b612824816127e5565b840191505092915050565b6000602082019050818103600083015261284981846127f6565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061288182612856565b9050919050565b61289181612876565b811461289c57600080fd5b50565b6000813590506128ae81612888565b92915050565b6128bd8161276b565b81146128c857600080fd5b50565b6000813590506128da816128b4565b92915050565b600080604083850312156128f7576128f6612851565b5b60006129058582860161289f565b9250506020612916858286016128cb565b9150509250929050565b60008115159050919050565b61293581612920565b82525050565b6000602082019050612950600083018461292c565b92915050565b600061296182612876565b9050919050565b61297181612956565b811461297c57600080fd5b50565b60008135905061298e81612968565b92915050565b6000602082840312156129aa576129a9612851565b5b60006129b88482850161297f565b91505092915050565b6129ca81612876565b82525050565b60006020820190506129e560008301846129c1565b92915050565b600080600060608486031215612a0457612a03612851565b5b6000612a128682870161289f565b9350506020612a238682870161289f565b9250506040612a34868287016128cb565b9150509250925092565b600060ff82169050919050565b612a5481612a3e565b82525050565b6000602082019050612a6f6000830184612a4b565b92915050565b600060208284031215612a8b57612a8a612851565b5b6000612a998482850161289f565b91505092915050565b6000612aad82612856565b9050919050565b612abd81612aa2565b82525050565b6000602082019050612ad86000830184612ab4565b92915050565b60008060408385031215612af557612af4612851565b5b6000612b038582860161289f565b9250506020612b148582860161289f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680612b6557607f821691505b602082108103612b7857612b77612b1e565b5b50919050565b7f4f574e45525f4f4e4c5900000000000000000000000000000000000000000000600082015250565b6000612bb4600a836127aa565b9150612bbf82612b7e565b602082019050919050565b60006020820190508181036000830152612be381612ba7565b9050919050565b7f46554e44535f4d4f5645445f544f5f4c50000000000000000000000000000000600082015250565b6000612c206011836127aa565b9150612c2b82612bea565b602082019050919050565b60006020820190508181036000830152612c4f81612c13565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c908261276b565b9150612c9b8361276b565b9250828202612ca98161276b565b91508282048414831517612cc057612cbf612c56565b5b5092915050565b6000604082019050612cdc6000830185612775565b612ce960208301846129c1565b9392505050565b7f4d41504c454e46545f4f4e4c5900000000000000000000000000000000000000600082015250565b6000612d26600d836127aa565b9150612d3182612cf0565b602082019050919050565b60006020820190508181036000830152612d5581612d19565b9050919050565b6000612d678261276b565b9150612d728361276b565b9250828201905080821115612d8a57612d89612c56565b5b92915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612dc6601f836127aa565b9150612dd182612d90565b602082019050919050565b60006020820190508181036000830152612df581612db9565b9050919050565b7f41424f56455f4d41585f535550504c5900000000000000000000000000000000600082015250565b6000612e326010836127aa565b9150612e3d82612dfc565b602082019050919050565b60006020820190508181036000830152612e6181612e25565b9050919050565b60008160011c9050919050565b6000808291508390505b6001851115612ebf57808604811115612e9b57612e9a612c56565b5b6001851615612eaa5780820291505b8081029050612eb885612e68565b9450612e7f565b94509492505050565b600082612ed85760019050612f94565b81612ee65760009050612f94565b8160018114612efc5760028114612f0657612f35565b6001915050612f94565b60ff841115612f1857612f17612c56565b5b8360020a915084821115612f2f57612f2e612c56565b5b50612f94565b5060208310610133831016604e8410600b8410161715612f6a5782820a905083811115612f6557612f64612c56565b5b612f94565b612f778484846001612e75565b92509050818404811115612f8e57612f8d612c56565b5b81810290505b9392505050565b6000612fa68261276b565b9150612fb183612a3e565b9250612fde7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612ec8565b905092915050565b7f57524954455f4f4e434521000000000000000000000000000000000000000000600082015250565b600061301c600b836127aa565b915061302782612fe6565b602082019050919050565b6000602082019050818103600083015261304b8161300f565b9050919050565b7f434f4e54524143545f5041555345440000000000000000000000000000000000600082015250565b6000613088600f836127aa565b915061309382613052565b602082019050919050565b600060208201905081810360008301526130b78161307b565b9050919050565b7f4e4f5f415641494c41424c455f46554e44530000000000000000000000000000600082015250565b60006130f46012836127aa565b91506130ff826130be565b602082019050919050565b60006020820190508181036000830152613123816130e7565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006131866025836127aa565b91506131918261312a565b604082019050919050565b600060208201905081810360008301526131b581613179565b9050919050565b7f524f555445525f4f525f4d41504c455f4f4e4c59000000000000000000000000600082015250565b60006131f26014836127aa565b91506131fd826131bc565b602082019050919050565b60006020820190508181036000830152613221816131e5565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006132846024836127aa565b915061328f82613228565b604082019050919050565b600060208201905081810360008301526132b381613277565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006133166022836127aa565b9150613321826132ba565b604082019050919050565b6000602082019050818103600083015261334581613309565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006133a86025836127aa565b91506133b38261334c565b604082019050919050565b600060208201905081810360008301526133d78161339b565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061343a6023836127aa565b9150613445826133de565b604082019050919050565b600060208201905081810360008301526134698161342d565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006134cc6026836127aa565b91506134d782613470565b604082019050919050565b600060208201905081810360008301526134fb816134bf565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061355e6021836127aa565b915061356982613502565b604082019050919050565b6000602082019050818103600083015261358d81613551565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b60006135f06022836127aa565b91506135fb82613594565b604082019050919050565b6000602082019050818103600083015261361f816135e3565b9050919050565b60006136318261276b565b915061363c8361276b565b925082820390508181111561365457613653612c56565b5b92915050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000613690601d836127aa565b915061369b8261365a565b602082019050919050565b600060208201905081810360008301526136bf81613683565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006137008261276b565b915061370b8361276b565b92508261371b5761371a6136c6565b5b82820490509291505056fea264697066735822122061734bd2c25eb3204c8846c09a28a1d2fed2d18144275738cf7853444281ee5a64736f6c63430008110033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:11212:32",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "47:35:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "57:19:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "73:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "67:5:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "67:9:32"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "57:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "40:6:32",
				  "type": ""
				}
			  ],
			  "src": "7:75:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "177:28:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "194:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "197:1:32",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "187:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "187:12:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "187:12:32"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "88:117:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "300:28:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "317:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "320:1:32",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "310:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "310:12:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "310:12:32"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "211:117:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "379:81:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "389:65:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "404:5:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "411:42:32",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "400:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "400:54:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "389:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "361:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "371:7:32",
				  "type": ""
				}
			  ],
			  "src": "334:126:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "519:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "529:35:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "558:5:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "540:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "540:24:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "529:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "501:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "511:7:32",
				  "type": ""
				}
			  ],
			  "src": "466:104:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "627:87:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "692:16:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "701:1:32",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "704:1:32",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "694:6:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "694:12:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "694:12:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "650:5:32"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "683:5:32"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address_payable",
								"nodeType": "YulIdentifier",
								"src": "657:25:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "657:32:32"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "647:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "647:43:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "640:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "640:51:32"
					},
					"nodeType": "YulIf",
					"src": "637:71:32"
				  }
				]
			  },
			  "name": "validator_revert_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "620:5:32",
				  "type": ""
				}
			  ],
			  "src": "576:138:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "791:88:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "801:22:32",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "816:6:32"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "810:5:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "810:13:32"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "801:5:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "867:5:32"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address_payable",
						"nodeType": "YulIdentifier",
						"src": "832:34:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "832:41:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "832:41:32"
				  }
				]
			  },
			  "name": "abi_decode_t_address_payable_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "769:6:32",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "777:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "785:5:32",
				  "type": ""
				}
			  ],
			  "src": "720:159:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "970:282:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1016:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "1018:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "1018:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1018:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "991:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1000:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "987:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "987:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1012:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "983:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "983:32:32"
					},
					"nodeType": "YulIf",
					"src": "980:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "1109:136:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "1124:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1138:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "1128:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1153:82:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1207:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1218:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1203:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1203:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1227:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address_payable_fromMemory",
							"nodeType": "YulIdentifier",
							"src": "1163:39:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1163:72:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1153:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address_payable_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "940:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "951:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "963:6:32",
				  "type": ""
				}
			  ],
			  "src": "885:367:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1317:40:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1328:22:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1344:5:32"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1338:5:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1338:12:32"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "1328:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_string_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1300:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1310:6:32",
				  "type": ""
				}
			  ],
			  "src": "1258:99:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1391:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1408:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1411:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1401:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1401:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1401:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1505:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1508:4:32",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1498:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1498:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1498:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1529:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1532:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1522:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1522:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1522:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1363:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1577:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1594:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1597:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1587:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1587:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1587:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1691:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1694:4:32",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1684:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1684:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1684:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1715:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1718:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1708:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1708:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1708:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1549:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1786:269:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1796:22:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "1810:4:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1816:1:32",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "1806:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1806:12:32"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "1796:6:32"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1827:38:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "1857:4:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1863:1:32",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "1853:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1853:12:32"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "1831:18:32",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1904:51:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "1918:27:32",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "1932:6:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1940:4:32",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "1928:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "1928:17:32"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1918:6:32"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "1884:18:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "1877:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1877:26:32"
					},
					"nodeType": "YulIf",
					"src": "1874:81:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2007:42:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "2021:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "2021:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2021:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "1971:18:32"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1994:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2002:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "1991:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1991:14:32"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "1968:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1968:38:32"
					},
					"nodeType": "YulIf",
					"src": "1965:84:32"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "1770:4:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1779:6:32",
				  "type": ""
				}
			  ],
			  "src": "1735:320:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2115:87:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2125:11:32",
					"value": {
					  "name": "ptr",
					  "nodeType": "YulIdentifier",
					  "src": "2133:3:32"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "2125:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2153:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "name": "ptr",
						  "nodeType": "YulIdentifier",
						  "src": "2156:3:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2146:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2146:14:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2146:14:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2169:26:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2187:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2190:4:32",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "keccak256",
						"nodeType": "YulIdentifier",
						"src": "2177:9:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2177:18:32"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "2169:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "array_dataslot_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "ptr",
				  "nodeType": "YulTypedName",
				  "src": "2102:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "2110:4:32",
				  "type": ""
				}
			  ],
			  "src": "2061:141:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2252:49:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2262:33:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2280:5:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2287:2:32",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2276:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2276:14:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2292:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "2272:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2272:23:32"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "2262:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "divide_by_32_ceil",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2235:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "2245:6:32",
				  "type": ""
				}
			  ],
			  "src": "2208:93:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2360:54:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2370:37:32",
					"value": {
					  "arguments": [
						{
						  "name": "bits",
						  "nodeType": "YulIdentifier",
						  "src": "2395:4:32"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2401:5:32"
						}
					  ],
					  "functionName": {
						"name": "shl",
						"nodeType": "YulIdentifier",
						"src": "2391:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2391:16:32"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "2370:8:32"
					  }
					]
				  }
				]
			  },
			  "name": "shift_left_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "bits",
				  "nodeType": "YulTypedName",
				  "src": "2335:4:32",
				  "type": ""
				},
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2341:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "2351:8:32",
				  "type": ""
				}
			  ],
			  "src": "2307:107:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2496:317:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2506:35:32",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBytes",
						  "nodeType": "YulIdentifier",
						  "src": "2527:10:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2539:1:32",
						  "type": "",
						  "value": "8"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "2523:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2523:18:32"
					},
					"variables": [
					  {
						"name": "shiftBits",
						"nodeType": "YulTypedName",
						"src": "2510:9:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2550:109:32",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBits",
						  "nodeType": "YulIdentifier",
						  "src": "2581:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2592:66:32",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "shift_left_dynamic",
						"nodeType": "YulIdentifier",
						"src": "2562:18:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2562:97:32"
					},
					"variables": [
					  {
						"name": "mask",
						"nodeType": "YulTypedName",
						"src": "2554:4:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2668:51:32",
					"value": {
					  "arguments": [
						{
						  "name": "shiftBits",
						  "nodeType": "YulIdentifier",
						  "src": "2699:9:32"
						},
						{
						  "name": "toInsert",
						  "nodeType": "YulIdentifier",
						  "src": "2710:8:32"
						}
					  ],
					  "functionName": {
						"name": "shift_left_dynamic",
						"nodeType": "YulIdentifier",
						"src": "2680:18:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2680:39:32"
					},
					"variableNames": [
					  {
						"name": "toInsert",
						"nodeType": "YulIdentifier",
						"src": "2668:8:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2728:30:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2741:5:32"
						},
						{
						  "arguments": [
							{
							  "name": "mask",
							  "nodeType": "YulIdentifier",
							  "src": "2752:4:32"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "2748:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2748:9:32"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "2737:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2737:21:32"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2728:5:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2767:40:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2780:5:32"
						},
						{
						  "arguments": [
							{
							  "name": "toInsert",
							  "nodeType": "YulIdentifier",
							  "src": "2791:8:32"
							},
							{
							  "name": "mask",
							  "nodeType": "YulIdentifier",
							  "src": "2801:4:32"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2787:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2787:19:32"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "2777:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2777:30:32"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "2767:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "update_byte_slice_dynamic32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2457:5:32",
				  "type": ""
				},
				{
				  "name": "shiftBytes",
				  "nodeType": "YulTypedName",
				  "src": "2464:10:32",
				  "type": ""
				},
				{
				  "name": "toInsert",
				  "nodeType": "YulTypedName",
				  "src": "2476:8:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "2489:6:32",
				  "type": ""
				}
			  ],
			  "src": "2420:393:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2864:32:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2874:16:32",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2885:5:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2874:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2846:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2856:7:32",
				  "type": ""
				}
			  ],
			  "src": "2819:77:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2934:28:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2944:12:32",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2951:5:32"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "2944:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "identity",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2920:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "2930:3:32",
				  "type": ""
				}
			  ],
			  "src": "2902:60:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3028:82:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3038:66:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "3096:5:32"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "3078:17:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3078:24:32"
							}
						  ],
						  "functionName": {
							"name": "identity",
							"nodeType": "YulIdentifier",
							"src": "3069:8:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3069:34:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3051:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3051:53:32"
					},
					"variableNames": [
					  {
						"name": "converted",
						"nodeType": "YulIdentifier",
						"src": "3038:9:32"
					  }
					]
				  }
				]
			  },
			  "name": "convert_t_uint256_to_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3008:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "converted",
				  "nodeType": "YulTypedName",
				  "src": "3018:9:32",
				  "type": ""
				}
			  ],
			  "src": "2968:142:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3163:28:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3173:12:32",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "3180:5:32"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "3173:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "prepare_store_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3149:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "3159:3:32",
				  "type": ""
				}
			  ],
			  "src": "3116:75:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3273:193:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3283:63:32",
					"value": {
					  "arguments": [
						{
						  "name": "value_0",
						  "nodeType": "YulIdentifier",
						  "src": "3338:7:32"
						}
					  ],
					  "functionName": {
						"name": "convert_t_uint256_to_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3307:30:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3307:39:32"
					},
					"variables": [
					  {
						"name": "convertedValue_0",
						"nodeType": "YulTypedName",
						"src": "3287:16:32",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "3362:4:32"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "slot",
								  "nodeType": "YulIdentifier",
								  "src": "3402:4:32"
								}
							  ],
							  "functionName": {
								"name": "sload",
								"nodeType": "YulIdentifier",
								"src": "3396:5:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3396:11:32"
							},
							{
							  "name": "offset",
							  "nodeType": "YulIdentifier",
							  "src": "3409:6:32"
							},
							{
							  "arguments": [
								{
								  "name": "convertedValue_0",
								  "nodeType": "YulIdentifier",
								  "src": "3441:16:32"
								}
							  ],
							  "functionName": {
								"name": "prepare_store_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "3417:23:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3417:41:32"
							}
						  ],
						  "functionName": {
							"name": "update_byte_slice_dynamic32",
							"nodeType": "YulIdentifier",
							"src": "3368:27:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3368:91:32"
						}
					  ],
					  "functionName": {
						"name": "sstore",
						"nodeType": "YulIdentifier",
						"src": "3355:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3355:105:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3355:105:32"
				  }
				]
			  },
			  "name": "update_storage_value_t_uint256_to_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "3250:4:32",
				  "type": ""
				},
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "3256:6:32",
				  "type": ""
				},
				{
				  "name": "value_0",
				  "nodeType": "YulTypedName",
				  "src": "3264:7:32",
				  "type": ""
				}
			  ],
			  "src": "3197:269:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3521:24:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3531:8:32",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "3538:1:32",
					  "type": "",
					  "value": "0"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "3531:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "zero_value_for_split_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "3517:3:32",
				  "type": ""
				}
			  ],
			  "src": "3472:73:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3604:136:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3614:46:32",
					"value": {
					  "arguments": [],
					  "functionName": {
						"name": "zero_value_for_split_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3628:30:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3628:32:32"
					},
					"variables": [
					  {
						"name": "zero_0",
						"nodeType": "YulTypedName",
						"src": "3618:6:32",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "3713:4:32"
						},
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "3719:6:32"
						},
						{
						  "name": "zero_0",
						  "nodeType": "YulIdentifier",
						  "src": "3727:6:32"
						}
					  ],
					  "functionName": {
						"name": "update_storage_value_t_uint256_to_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3669:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3669:65:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3669:65:32"
				  }
				]
			  },
			  "name": "storage_set_to_zero_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "3590:4:32",
				  "type": ""
				},
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "3596:6:32",
				  "type": ""
				}
			  ],
			  "src": "3551:189:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3796:136:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3863:63:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "3907:5:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3914:1:32",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "storage_set_to_zero_t_uint256",
							  "nodeType": "YulIdentifier",
							  "src": "3877:29:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "3877:39:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3877:39:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "start",
						  "nodeType": "YulIdentifier",
						  "src": "3816:5:32"
						},
						{
						  "name": "end",
						  "nodeType": "YulIdentifier",
						  "src": "3823:3:32"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "3813:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3813:14:32"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "3828:26:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3830:22:32",
						  "value": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "3843:5:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3850:1:32",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "3839:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "3839:13:32"
						  },
						  "variableNames": [
							{
							  "name": "start",
							  "nodeType": "YulIdentifier",
							  "src": "3830:5:32"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "3810:2:32",
					  "statements": []
					},
					"src": "3806:120:32"
				  }
				]
			  },
			  "name": "clear_storage_range_t_bytes1",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "start",
				  "nodeType": "YulTypedName",
				  "src": "3784:5:32",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "3791:3:32",
				  "type": ""
				}
			  ],
			  "src": "3746:186:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4017:464:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4043:431:32",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "4057:54:32",
						  "value": {
							"arguments": [
							  {
								"name": "array",
								"nodeType": "YulIdentifier",
								"src": "4105:5:32"
							  }
							],
							"functionName": {
							  "name": "array_dataslot_t_string_storage",
							  "nodeType": "YulIdentifier",
							  "src": "4073:31:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4073:38:32"
						  },
						  "variables": [
							{
							  "name": "dataArea",
							  "nodeType": "YulTypedName",
							  "src": "4061:8:32",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "4124:63:32",
						  "value": {
							"arguments": [
							  {
								"name": "dataArea",
								"nodeType": "YulIdentifier",
								"src": "4147:8:32"
							  },
							  {
								"arguments": [
								  {
									"name": "startIndex",
									"nodeType": "YulIdentifier",
									"src": "4175:10:32"
								  }
								],
								"functionName": {
								  "name": "divide_by_32_ceil",
								  "nodeType": "YulIdentifier",
								  "src": "4157:17:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "4157:29:32"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "4143:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4143:44:32"
						  },
						  "variables": [
							{
							  "name": "deleteStart",
							  "nodeType": "YulTypedName",
							  "src": "4128:11:32",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "4344:27:32",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "4346:23:32",
								"value": {
								  "name": "dataArea",
								  "nodeType": "YulIdentifier",
								  "src": "4361:8:32"
								},
								"variableNames": [
								  {
									"name": "deleteStart",
									"nodeType": "YulIdentifier",
									"src": "4346:11:32"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "startIndex",
								"nodeType": "YulIdentifier",
								"src": "4328:10:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4340:2:32",
								"type": "",
								"value": "32"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "4325:2:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4325:18:32"
						  },
						  "nodeType": "YulIf",
						  "src": "4322:49:32"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"name": "deleteStart",
								"nodeType": "YulIdentifier",
								"src": "4413:11:32"
							  },
							  {
								"arguments": [
								  {
									"name": "dataArea",
									"nodeType": "YulIdentifier",
									"src": "4430:8:32"
								  },
								  {
									"arguments": [
									  {
										"name": "len",
										"nodeType": "YulIdentifier",
										"src": "4458:3:32"
									  }
									],
									"functionName": {
									  "name": "divide_by_32_ceil",
									  "nodeType": "YulIdentifier",
									  "src": "4440:17:32"
									},
									"nodeType": "YulFunctionCall",
									"src": "4440:22:32"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "4426:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "4426:37:32"
							  }
							],
							"functionName": {
							  "name": "clear_storage_range_t_bytes1",
							  "nodeType": "YulIdentifier",
							  "src": "4384:28:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4384:80:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4384:80:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "4034:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4039:2:32",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "4031:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4031:11:32"
					},
					"nodeType": "YulIf",
					"src": "4028:446:32"
				  }
				]
			  },
			  "name": "clean_up_bytearray_end_slots_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "3993:5:32",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "4000:3:32",
				  "type": ""
				},
				{
				  "name": "startIndex",
				  "nodeType": "YulTypedName",
				  "src": "4005:10:32",
				  "type": ""
				}
			  ],
			  "src": "3938:543:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4550:54:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4560:37:32",
					"value": {
					  "arguments": [
						{
						  "name": "bits",
						  "nodeType": "YulIdentifier",
						  "src": "4585:4:32"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "4591:5:32"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "4581:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4581:16:32"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "4560:8:32"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_unsigned_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "bits",
				  "nodeType": "YulTypedName",
				  "src": "4525:4:32",
				  "type": ""
				},
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4531:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "4541:8:32",
				  "type": ""
				}
			  ],
			  "src": "4487:117:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4661:118:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4671:68:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4720:1:32",
								  "type": "",
								  "value": "8"
								},
								{
								  "name": "bytes",
								  "nodeType": "YulIdentifier",
								  "src": "4723:5:32"
								}
							  ],
							  "functionName": {
								"name": "mul",
								"nodeType": "YulIdentifier",
								"src": "4716:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4716:13:32"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4735:1:32",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "4731:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4731:6:32"
							}
						  ],
						  "functionName": {
							"name": "shift_right_unsigned_dynamic",
							"nodeType": "YulIdentifier",
							"src": "4687:28:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4687:51:32"
						}
					  ],
					  "functionName": {
						"name": "not",
						"nodeType": "YulIdentifier",
						"src": "4683:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4683:56:32"
					},
					"variables": [
					  {
						"name": "mask",
						"nodeType": "YulTypedName",
						"src": "4675:4:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4748:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "4762:4:32"
						},
						{
						  "name": "mask",
						  "nodeType": "YulIdentifier",
						  "src": "4768:4:32"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "4758:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4758:15:32"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "4748:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "mask_bytes_dynamic",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "4638:4:32",
				  "type": ""
				},
				{
				  "name": "bytes",
				  "nodeType": "YulTypedName",
				  "src": "4644:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "4654:6:32",
				  "type": ""
				}
			  ],
			  "src": "4610:169:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4865:214:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4998:37:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "5025:4:32"
						},
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "5031:3:32"
						}
					  ],
					  "functionName": {
						"name": "mask_bytes_dynamic",
						"nodeType": "YulIdentifier",
						"src": "5006:18:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5006:29:32"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "4998:4:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5044:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "5055:4:32"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5065:1:32",
							  "type": "",
							  "value": "2"
							},
							{
							  "name": "len",
							  "nodeType": "YulIdentifier",
							  "src": "5068:3:32"
							}
						  ],
						  "functionName": {
							"name": "mul",
							"nodeType": "YulIdentifier",
							"src": "5061:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5061:11:32"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "5052:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5052:21:32"
					},
					"variableNames": [
					  {
						"name": "used",
						"nodeType": "YulIdentifier",
						"src": "5044:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "extract_used_part_and_set_length_of_short_byte_array",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "4846:4:32",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "4852:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "used",
				  "nodeType": "YulTypedName",
				  "src": "4860:4:32",
				  "type": ""
				}
			  ],
			  "src": "4784:295:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5176:1303:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5187:51:32",
					"value": {
					  "arguments": [
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "5234:3:32"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "5201:32:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5201:37:32"
					},
					"variables": [
					  {
						"name": "newLen",
						"nodeType": "YulTypedName",
						"src": "5191:6:32",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5323:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "5325:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "5325:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5325:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5295:6:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5303:18:32",
						  "type": "",
						  "value": "0xffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5292:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5292:30:32"
					},
					"nodeType": "YulIf",
					"src": "5289:56:32"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5355:52:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "slot",
							  "nodeType": "YulIdentifier",
							  "src": "5401:4:32"
							}
						  ],
						  "functionName": {
							"name": "sload",
							"nodeType": "YulIdentifier",
							"src": "5395:5:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5395:11:32"
						}
					  ],
					  "functionName": {
						"name": "extract_byte_array_length",
						"nodeType": "YulIdentifier",
						"src": "5369:25:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5369:38:32"
					},
					"variables": [
					  {
						"name": "oldLen",
						"nodeType": "YulTypedName",
						"src": "5359:6:32",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "5500:4:32"
						},
						{
						  "name": "oldLen",
						  "nodeType": "YulIdentifier",
						  "src": "5506:6:32"
						},
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5514:6:32"
						}
					  ],
					  "functionName": {
						"name": "clean_up_bytearray_end_slots_t_string_storage",
						"nodeType": "YulIdentifier",
						"src": "5454:45:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5454:67:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5454:67:32"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "5531:18:32",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "5548:1:32",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "srcOffset",
						"nodeType": "YulTypedName",
						"src": "5535:9:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5559:17:32",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "5572:4:32",
					  "type": "",
					  "value": "0x20"
					},
					"variableNames": [
					  {
						"name": "srcOffset",
						"nodeType": "YulIdentifier",
						"src": "5559:9:32"
					  }
					]
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "5623:611:32",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5637:37:32",
							  "value": {
								"arguments": [
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "5656:6:32"
								  },
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "5668:4:32",
										"type": "",
										"value": "0x1f"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "5664:3:32"
									},
									"nodeType": "YulFunctionCall",
									"src": "5664:9:32"
								  }
								],
								"functionName": {
								  "name": "and",
								  "nodeType": "YulIdentifier",
								  "src": "5652:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "5652:22:32"
							  },
							  "variables": [
								{
								  "name": "loopEnd",
								  "nodeType": "YulTypedName",
								  "src": "5641:7:32",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5688:51:32",
							  "value": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "5734:4:32"
								  }
								],
								"functionName": {
								  "name": "array_dataslot_t_string_storage",
								  "nodeType": "YulIdentifier",
								  "src": "5702:31:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "5702:37:32"
							  },
							  "variables": [
								{
								  "name": "dstPtr",
								  "nodeType": "YulTypedName",
								  "src": "5692:6:32",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "5752:10:32",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "5761:1:32",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "i",
								  "nodeType": "YulTypedName",
								  "src": "5756:1:32",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "5820:163:32",
								"statements": [
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "5845:6:32"
										},
										{
										  "arguments": [
											{
											  "arguments": [
												{
												  "name": "src",
												  "nodeType": "YulIdentifier",
												  "src": "5863:3:32"
												},
												{
												  "name": "srcOffset",
												  "nodeType": "YulIdentifier",
												  "src": "5868:9:32"
												}
											  ],
											  "functionName": {
												"name": "add",
												"nodeType": "YulIdentifier",
												"src": "5859:3:32"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "5859:19:32"
											}
										  ],
										  "functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "5853:5:32"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "5853:26:32"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "5838:6:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5838:42:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "5838:42:32"
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "5897:24:32",
									"value": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "5911:6:32"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5919:1:32",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5907:3:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5907:14:32"
									},
									"variableNames": [
									  {
										"name": "dstPtr",
										"nodeType": "YulIdentifier",
										"src": "5897:6:32"
									  }
									]
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "5938:31:32",
									"value": {
									  "arguments": [
										{
										  "name": "srcOffset",
										  "nodeType": "YulIdentifier",
										  "src": "5955:9:32"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5966:2:32",
										  "type": "",
										  "value": "32"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5951:3:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5951:18:32"
									},
									"variableNames": [
									  {
										"name": "srcOffset",
										"nodeType": "YulIdentifier",
										"src": "5938:9:32"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "5786:1:32"
								  },
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "5789:7:32"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "5783:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "5783:14:32"
							  },
							  "nodeType": "YulForLoop",
							  "post": {
								"nodeType": "YulBlock",
								"src": "5798:21:32",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "5800:17:32",
									"value": {
									  "arguments": [
										{
										  "name": "i",
										  "nodeType": "YulIdentifier",
										  "src": "5809:1:32"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "5812:4:32",
										  "type": "",
										  "value": "0x20"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "5805:3:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "5805:12:32"
									},
									"variableNames": [
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "5800:1:32"
									  }
									]
								  }
								]
							  },
							  "pre": {
								"nodeType": "YulBlock",
								"src": "5779:3:32",
								"statements": []
							  },
							  "src": "5775:208:32"
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "6019:156:32",
								"statements": [
								  {
									"nodeType": "YulVariableDeclaration",
									"src": "6037:43:32",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "6064:3:32"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "6069:9:32"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "6060:3:32"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6060:19:32"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "6054:5:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6054:26:32"
									},
									"variables": [
									  {
										"name": "lastValue",
										"nodeType": "YulTypedName",
										"src": "6041:9:32",
										"type": ""
									  }
									]
								  },
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "6104:6:32"
										},
										{
										  "arguments": [
											{
											  "name": "lastValue",
											  "nodeType": "YulIdentifier",
											  "src": "6131:9:32"
											},
											{
											  "arguments": [
												{
												  "name": "newLen",
												  "nodeType": "YulIdentifier",
												  "src": "6146:6:32"
												},
												{
												  "kind": "number",
												  "nodeType": "YulLiteral",
												  "src": "6154:4:32",
												  "type": "",
												  "value": "0x1f"
												}
											  ],
											  "functionName": {
												"name": "and",
												"nodeType": "YulIdentifier",
												"src": "6142:3:32"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "6142:17:32"
											}
										  ],
										  "functionName": {
											"name": "mask_bytes_dynamic",
											"nodeType": "YulIdentifier",
											"src": "6112:18:32"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6112:48:32"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "6097:6:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6097:64:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "6097:64:32"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "6002:7:32"
								  },
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "6011:6:32"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "5999:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "5999:19:32"
							  },
							  "nodeType": "YulIf",
							  "src": "5996:179:32"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "6195:4:32"
								  },
								  {
									"arguments": [
									  {
										"arguments": [
										  {
											"name": "newLen",
											"nodeType": "YulIdentifier",
											"src": "6209:6:32"
										  },
										  {
											"kind": "number",
											"nodeType": "YulLiteral",
											"src": "6217:1:32",
											"type": "",
											"value": "2"
										  }
										],
										"functionName": {
										  "name": "mul",
										  "nodeType": "YulIdentifier",
										  "src": "6205:3:32"
										},
										"nodeType": "YulFunctionCall",
										"src": "6205:14:32"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "6221:1:32",
										"type": "",
										"value": "1"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "6201:3:32"
									},
									"nodeType": "YulFunctionCall",
									"src": "6201:22:32"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "6188:6:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "6188:36:32"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "6188:36:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "5616:618:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5621:1:32",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "6251:222:32",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "6265:14:32",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "6278:1:32",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "value",
								  "nodeType": "YulTypedName",
								  "src": "6269:5:32",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "6302:67:32",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "6320:35:32",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "6339:3:32"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "6344:9:32"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "6335:3:32"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "6335:19:32"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "6329:5:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "6329:26:32"
									},
									"variableNames": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "6320:5:32"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"name": "newLen",
								"nodeType": "YulIdentifier",
								"src": "6295:6:32"
							  },
							  "nodeType": "YulIf",
							  "src": "6292:77:32"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "6389:4:32"
								  },
								  {
									"arguments": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "6448:5:32"
									  },
									  {
										"name": "newLen",
										"nodeType": "YulIdentifier",
										"src": "6455:6:32"
									  }
									],
									"functionName": {
									  "name": "extract_used_part_and_set_length_of_short_byte_array",
									  "nodeType": "YulIdentifier",
									  "src": "6395:52:32"
									},
									"nodeType": "YulFunctionCall",
									"src": "6395:67:32"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "6382:6:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "6382:81:32"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "6382:81:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "6243:230:32",
						"value": "default"
					  }
					],
					"expression": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "5596:6:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5604:2:32",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5593:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5593:14:32"
					},
					"nodeType": "YulSwitch",
					"src": "5586:887:32"
				  }
				]
			  },
			  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "5165:4:32",
				  "type": ""
				},
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "5171:3:32",
				  "type": ""
				}
			  ],
			  "src": "5084:1395:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6513:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6530:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6533:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6523:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6523:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6523:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6627:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6630:4:32",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6620:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6620:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6620:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6651:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6654:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "6644:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6644:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6644:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "6485:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6722:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6732:34:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6757:1:32",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "6760:5:32"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "6753:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6753:13:32"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "6732:8:32"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_1_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6703:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "6713:8:32",
				  "type": ""
				}
			  ],
			  "src": "6671:102:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6852:775:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6862:15:32",
					"value": {
					  "name": "_power",
					  "nodeType": "YulIdentifier",
					  "src": "6871:6:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "6862:5:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6886:14:32",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "6895:5:32"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "6886:4:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6944:677:32",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7032:22:32",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "7034:16:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7034:18:32"
								},
								"nodeType": "YulExpressionStatement",
								"src": "7034:18:32"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7010:4:32"
							  },
							  {
								"arguments": [
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "7020:3:32"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "7025:4:32"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "7016:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "7016:14:32"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "7007:2:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7007:24:32"
						  },
						  "nodeType": "YulIf",
						  "src": "7004:50:32"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7099:419:32",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "7479:25:32",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "7492:5:32"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "7499:4:32"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "7488:3:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7488:16:32"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "7479:5:32"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7074:8:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7084:1:32",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "7070:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7070:16:32"
						  },
						  "nodeType": "YulIf",
						  "src": "7067:451:32"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7531:23:32",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7543:4:32"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7549:4:32"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "7539:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7539:15:32"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "7531:4:32"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7567:44:32",
						  "value": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7602:8:32"
							  }
							],
							"functionName": {
							  "name": "shift_right_1_unsigned",
							  "nodeType": "YulIdentifier",
							  "src": "7579:22:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7579:32:32"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "7567:8:32"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "6920:8:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6930:1:32",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "6917:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6917:15:32"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "6933:2:32",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "6913:3:32",
					  "statements": []
					},
					"src": "6909:712:32"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_power",
				  "nodeType": "YulTypedName",
				  "src": "6807:6:32",
				  "type": ""
				},
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "6815:5:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "6822:8:32",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "6832:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "6840:5:32",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "6847:4:32",
				  "type": ""
				}
			  ],
			  "src": "6779:848:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7693:1013:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7888:20:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7890:10:32",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7899:1:32",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7890:5:32"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7901:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "7878:8:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7871:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7871:16:32"
					},
					"nodeType": "YulIf",
					"src": "7868:40:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7933:20:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7935:10:32",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7944:1:32",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7935:5:32"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7946:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7927:4:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7920:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7920:12:32"
					},
					"nodeType": "YulIf",
					"src": "7917:36:32"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "8063:20:32",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "8065:10:32",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "8074:1:32",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "8065:5:32"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "8076:5:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "8056:27:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8061:1:32",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "8107:176:32",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "8142:22:32",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "8144:16:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "8144:18:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "8144:18:32"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "8127:8:32"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "8137:3:32",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "8124:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "8124:17:32"
							  },
							  "nodeType": "YulIf",
							  "src": "8121:43:32"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "8177:25:32",
							  "value": {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "8190:1:32",
									"type": "",
									"value": "2"
								  },
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "8193:8:32"
								  }
								],
								"functionName": {
								  "name": "exp",
								  "nodeType": "YulIdentifier",
								  "src": "8186:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "8186:16:32"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "8177:5:32"
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "8233:22:32",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "8235:16:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "8235:18:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "8235:18:32"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "8221:5:32"
								  },
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "8228:3:32"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "8218:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "8218:14:32"
							  },
							  "nodeType": "YulIf",
							  "src": "8215:40:32"
							},
							{
							  "nodeType": "YulLeave",
							  "src": "8268:5:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "8092:191:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8097:1:32",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "8013:4:32"
					},
					"nodeType": "YulSwitch",
					"src": "8006:277:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "8415:123:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "8429:28:32",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "8442:4:32"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "8448:8:32"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "8438:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "8438:19:32"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "8429:5:32"
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "8488:22:32",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "8490:16:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "8490:18:32"
								},
								"nodeType": "YulExpressionStatement",
								"src": "8490:18:32"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "power",
								"nodeType": "YulIdentifier",
								"src": "8476:5:32"
							  },
							  {
								"name": "max",
								"nodeType": "YulIdentifier",
								"src": "8483:3:32"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "8473:2:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "8473:14:32"
						  },
						  "nodeType": "YulIf",
						  "src": "8470:40:32"
						},
						{
						  "nodeType": "YulLeave",
						  "src": "8523:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "8318:4:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8324:2:32",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8315:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8315:12:32"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "8332:8:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8342:2:32",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8329:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8329:16:32"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "8311:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8311:35:32"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "8367:4:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8373:3:32",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8364:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8364:13:32"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "8382:8:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "8392:2:32",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "8379:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8379:16:32"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "8360:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8360:36:32"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "8295:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8295:111:32"
					},
					"nodeType": "YulIf",
					"src": "8292:246:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8548:57:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8582:1:32",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8585:4:32"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "8591:8:32"
						},
						{
						  "name": "max",
						  "nodeType": "YulIdentifier",
						  "src": "8601:3:32"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "8563:18:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8563:42:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8548:5:32"
					  },
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "8555:4:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "8644:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "8646:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "8646:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "8646:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "8621:5:32"
						},
						{
						  "arguments": [
							{
							  "name": "max",
							  "nodeType": "YulIdentifier",
							  "src": "8632:3:32"
							},
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "8637:4:32"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "8628:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8628:14:32"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "8618:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8618:25:32"
					},
					"nodeType": "YulIf",
					"src": "8615:51:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8675:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "8688:5:32"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8695:4:32"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "8684:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8684:16:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8675:5:32"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "7663:4:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "7669:8:32",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "7679:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "7687:5:32",
				  "type": ""
				}
			  ],
			  "src": "7633:1073:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8755:43:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8765:27:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "8780:5:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8787:4:32",
						  "type": "",
						  "value": "0xff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "8776:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8776:16:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "8765:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "8737:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "8747:7:32",
				  "type": ""
				}
			  ],
			  "src": "8712:86:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8868:217:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8878:31:32",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8904:4:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "8886:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8886:23:32"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "8878:4:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8918:37:32",
					"value": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "8946:8:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "8930:15:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8930:25:32"
					},
					"variableNames": [
					  {
						"name": "exponent",
						"nodeType": "YulIdentifier",
						"src": "8918:8:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8965:113:32",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8995:4:32"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "9001:8:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9011:66:32",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "8974:20:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8974:104:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8965:5:32"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "8843:4:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "8849:8:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "8862:5:32",
				  "type": ""
				}
			  ],
			  "src": "8804:281:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9139:362:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9149:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "9172:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9154:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9154:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "9149:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9183:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "9206:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9188:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9188:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "9183:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "9217:28:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "9240:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "9243:1:32"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "9236:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9236:9:32"
					},
					"variables": [
					  {
						"name": "product_raw",
						"nodeType": "YulTypedName",
						"src": "9221:11:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9254:41:32",
					"value": {
					  "arguments": [
						{
						  "name": "product_raw",
						  "nodeType": "YulIdentifier",
						  "src": "9283:11:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "9265:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9265:30:32"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "9254:7:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "9472:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "9474:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "9474:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "9474:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "9405:1:32"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "9398:6:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "9398:9:32"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "9428:1:32"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "9435:7:32"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "9444:1:32"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "9431:3:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "9431:15:32"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "9425:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "9425:22:32"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "9378:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9378:83:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "9358:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9358:113:32"
					},
					"nodeType": "YulIf",
					"src": "9355:139:32"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "9122:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "9125:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "9131:7:32",
				  "type": ""
				}
			  ],
			  "src": "9091:410:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9603:73:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9620:3:32"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "9625:6:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9613:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9613:19:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9613:19:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9641:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9660:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9665:4:32",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9656:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9656:14:32"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "9641:11:32"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "9575:3:32",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "9580:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "9591:11:32",
				  "type": ""
				}
			  ],
			  "src": "9507:169:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9788:75:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "9810:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9818:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9806:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9806:14:32"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9822:33:32",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9799:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9799:57:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9799:57:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "9780:6:32",
				  "type": ""
				}
			  ],
			  "src": "9682:181:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10015:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10025:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10091:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10096:2:32",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10032:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10032:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "10025:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10197:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
						"nodeType": "YulIdentifier",
						"src": "10108:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10108:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10108:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10210:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10221:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10226:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10217:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10217:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "10210:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "10003:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "10011:3:32",
				  "type": ""
				}
			  ],
			  "src": "9869:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10412:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10422:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10434:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10445:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10430:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10430:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10422:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10469:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10480:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10465:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10465:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "10488:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10494:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "10484:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10484:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10458:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10458:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10458:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10514:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "10648:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10522:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10522:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10514:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10392:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10407:4:32",
				  "type": ""
				}
			  ],
			  "src": "10241:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10710:147:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10720:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10743:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10725:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10725:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "10720:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10754:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10777:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10759:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10759:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "10754:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10788:16:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10799:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10802:1:32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10795:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10795:9:32"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "10788:3:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10828:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "10830:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "10830:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10830:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10820:1:32"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "10823:3:32"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "10817:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10817:10:32"
					},
					"nodeType": "YulIf",
					"src": "10814:36:32"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "10697:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "10700:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "10706:3:32",
				  "type": ""
				}
			  ],
			  "src": "10666:191:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10928:53:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "10945:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "10968:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "10950:17:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10950:24:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10938:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10938:37:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10938:37:32"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "10916:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "10923:3:32",
				  "type": ""
				}
			  ],
			  "src": "10863:118:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11085:124:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11095:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11107:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11118:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11103:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11103:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11095:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "11175:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11188:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11199:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11184:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11184:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11131:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11131:71:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11131:71:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11057:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11069:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11080:4:32",
				  "type": ""
				}
			  ],
			  "src": "10987:222:32"
			}
		  ]
		},
		"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_payable_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
		"id": 32,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:29867:32",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "52:32:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "62:16:32",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "73:5:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "62:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "34:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "44:7:32",
				  "type": ""
				}
			  ],
			  "src": "7:77:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "155:53:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "172:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "195:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "177:17:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "177:24:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "165:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "165:37:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "165:37:32"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "143:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "150:3:32",
				  "type": ""
				}
			  ],
			  "src": "90:118:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "312:124:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "322:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "334:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "345:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "330:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "330:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "322:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "402:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "415:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "426:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "411:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "411:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "358:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "358:71:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "358:71:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "284:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "296:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "307:4:32",
				  "type": ""
				}
			  ],
			  "src": "214:222:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "501:40:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "512:22:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "528:5:32"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "522:5:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "522:12:32"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "512:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_string_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "484:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "494:6:32",
				  "type": ""
				}
			  ],
			  "src": "442:99:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "643:73:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "660:3:32"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "665:6:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "653:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "653:19:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "653:19:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "681:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "700:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "705:4:32",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "696:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "696:14:32"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "681:11:32"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "615:3:32",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "620:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "631:11:32",
				  "type": ""
				}
			  ],
			  "src": "547:169:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "784:184:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "794:10:32",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "803:1:32",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "798:1:32",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "863:63:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"name": "dst",
									"nodeType": "YulIdentifier",
									"src": "888:3:32"
								  },
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "893:1:32"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "884:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "884:11:32"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"name": "src",
										"nodeType": "YulIdentifier",
										"src": "907:3:32"
									  },
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "912:1:32"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "903:3:32"
									},
									"nodeType": "YulFunctionCall",
									"src": "903:11:32"
								  }
								],
								"functionName": {
								  "name": "mload",
								  "nodeType": "YulIdentifier",
								  "src": "897:5:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "897:18:32"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "877:6:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "877:39:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "877:39:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "824:1:32"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "827:6:32"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "821:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "821:13:32"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "835:19:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "837:15:32",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "846:1:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "849:2:32",
								"type": "",
								"value": "32"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "842:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "842:10:32"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "837:1:32"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "817:3:32",
					  "statements": []
					},
					"src": "813:113:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dst",
							  "nodeType": "YulIdentifier",
							  "src": "946:3:32"
							},
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "951:6:32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "942:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "942:16:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "960:1:32",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "935:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "935:27:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "935:27:32"
				  }
				]
			  },
			  "name": "copy_memory_to_memory_with_cleanup",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "766:3:32",
				  "type": ""
				},
				{
				  "name": "dst",
				  "nodeType": "YulTypedName",
				  "src": "771:3:32",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "776:6:32",
				  "type": ""
				}
			  ],
			  "src": "722:246:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1022:54:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1032:38:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1050:5:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1057:2:32",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1046:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1046:14:32"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1066:2:32",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "1062:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1062:7:32"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "1042:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1042:28:32"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "1032:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "round_up_to_mul_of_32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1005:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "1015:6:32",
				  "type": ""
				}
			  ],
			  "src": "974:102:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1174:285:32",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1184:53:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1231:5:32"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "1198:32:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1198:39:32"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "1188:6:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1246:78:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1312:3:32"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1317:6:32"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "1253:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1253:71:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "1246:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1372:5:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1379:4:32",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1368:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1368:16:32"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1386:3:32"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1391:6:32"
						}
					  ],
					  "functionName": {
						"name": "copy_memory_to_memory_with_cleanup",
						"nodeType": "YulIdentifier",
						"src": "1333:34:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1333:65:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1333:65:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1407:46:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1418:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "1445:6:32"
							}
						  ],
						  "functionName": {
							"name": "round_up_to_mul_of_32",
							"nodeType": "YulIdentifier",
							"src": "1423:21:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1423:29:32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1414:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1414:39:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "1407:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1155:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "1162:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "1170:3:32",
				  "type": ""
				}
			  ],
			  "src": "1082:377:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1583:195:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1593:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1605:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1616:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1601:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1601:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1593:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1640:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1651:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1636:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1636:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "1659:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1665:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1655:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1655:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1629:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1629:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1629:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1685:86:32",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "1757:6:32"
						},
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "1766:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "1693:63:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1693:78:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1685:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1555:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1567:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1578:4:32",
				  "type": ""
				}
			  ],
			  "src": "1465:313:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1824:35:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1834:19:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1850:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1844:5:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1844:9:32"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "1834:6:32"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "1817:6:32",
				  "type": ""
				}
			  ],
			  "src": "1784:75:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1954:28:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1971:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1974:1:32",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "1964:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1964:12:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1964:12:32"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1865:117:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2077:28:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2094:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2097:1:32",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "2087:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2087:12:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2087:12:32"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "1988:117:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2156:81:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2166:65:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2181:5:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2188:42:32",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "2177:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2177:54:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2166:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2138:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2148:7:32",
				  "type": ""
				}
			  ],
			  "src": "2111:126:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2288:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2298:35:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2327:5:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "2309:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2309:24:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2298:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2270:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2280:7:32",
				  "type": ""
				}
			  ],
			  "src": "2243:96:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2388:79:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2445:16:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2454:1:32",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2457:1:32",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2447:6:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "2447:12:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2447:12:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2411:5:32"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "2436:5:32"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address",
								"nodeType": "YulIdentifier",
								"src": "2418:17:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2418:24:32"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "2408:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2408:35:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "2401:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2401:43:32"
					},
					"nodeType": "YulIf",
					"src": "2398:63:32"
				  }
				]
			  },
			  "name": "validator_revert_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2381:5:32",
				  "type": ""
				}
			  ],
			  "src": "2345:122:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2525:87:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2535:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "2557:6:32"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2544:12:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2544:20:32"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2535:5:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2600:5:32"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address",
						"nodeType": "YulIdentifier",
						"src": "2573:26:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2573:33:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2573:33:32"
				  }
				]
			  },
			  "name": "abi_decode_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "2503:6:32",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "2511:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2519:5:32",
				  "type": ""
				}
			  ],
			  "src": "2473:139:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2661:79:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2718:16:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2727:1:32",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2730:1:32",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2720:6:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "2720:12:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2720:12:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2684:5:32"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "2709:5:32"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "2691:17:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2691:24:32"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "2681:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2681:35:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "2674:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2674:43:32"
					},
					"nodeType": "YulIf",
					"src": "2671:63:32"
				  }
				]
			  },
			  "name": "validator_revert_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2654:5:32",
				  "type": ""
				}
			  ],
			  "src": "2618:122:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2798:87:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2808:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "2830:6:32"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2817:12:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2817:20:32"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "2808:5:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2873:5:32"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "2846:26:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2846:33:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2846:33:32"
				  }
				]
			  },
			  "name": "abi_decode_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "2776:6:32",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "2784:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2792:5:32",
				  "type": ""
				}
			  ],
			  "src": "2746:139:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2974:391:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3020:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "3022:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "3022:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3022:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2995:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3004:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2991:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2991:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3016:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2987:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2987:32:32"
					},
					"nodeType": "YulIf",
					"src": "2984:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "3113:117:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "3128:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3142:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "3132:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "3157:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "3192:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "3203:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3188:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3188:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3212:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "3167:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3167:53:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "3157:6:32"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "3240:118:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "3255:16:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3269:2:32",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "3259:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "3285:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "3320:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "3331:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3316:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3316:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3340:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "3295:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3295:53:32"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "3285:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2936:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2947:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2959:6:32",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "2967:6:32",
				  "type": ""
				}
			  ],
			  "src": "2891:474:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3413:48:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3423:32:32",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3448:5:32"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "3441:6:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3441:13:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3434:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3434:21:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3423:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3395:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3405:7:32",
				  "type": ""
				}
			  ],
			  "src": "3371:90:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3526:50:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3543:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3563:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_bool",
							"nodeType": "YulIdentifier",
							"src": "3548:14:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3548:21:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3536:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3536:34:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3536:34:32"
				  }
				]
			  },
			  "name": "abi_encode_t_bool_to_t_bool_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3514:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3521:3:32",
				  "type": ""
				}
			  ],
			  "src": "3467:109:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3674:118:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3684:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3696:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3707:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "3692:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3692:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "3684:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "3758:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3771:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3782:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3767:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3767:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bool_to_t_bool_fromStack",
						"nodeType": "YulIdentifier",
						"src": "3720:37:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3720:65:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3720:65:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3646:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3658:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "3669:4:32",
				  "type": ""
				}
			  ],
			  "src": "3582:210:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3865:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3875:35:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3904:5:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_address",
						"nodeType": "YulIdentifier",
						"src": "3886:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3886:24:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3875:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_contract$_LiquidityPool_$6337",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3847:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3857:7:32",
				  "type": ""
				}
			  ],
			  "src": "3798:118:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3987:101:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4066:16:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4075:1:32",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4078:1:32",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4068:6:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4068:12:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4068:12:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4010:5:32"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "4057:5:32"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_contract$_LiquidityPool_$6337",
								"nodeType": "YulIdentifier",
								"src": "4017:39:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4017:46:32"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "4007:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4007:57:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4000:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4000:65:32"
					},
					"nodeType": "YulIf",
					"src": "3997:85:32"
				  }
				]
			  },
			  "name": "validator_revert_t_contract$_LiquidityPool_$6337",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3980:5:32",
				  "type": ""
				}
			  ],
			  "src": "3922:166:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4168:109:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4178:29:32",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "4200:6:32"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "4187:12:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4187:20:32"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "4178:5:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "4265:5:32"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_contract$_LiquidityPool_$6337",
						"nodeType": "YulIdentifier",
						"src": "4216:48:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4216:55:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4216:55:32"
				  }
				]
			  },
			  "name": "abi_decode_t_contract$_LiquidityPool_$6337",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "4146:6:32",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "4154:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4162:5:32",
				  "type": ""
				}
			  ],
			  "src": "4094:183:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4371:285:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4417:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "4419:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "4419:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4419:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4392:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4401:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "4388:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4388:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4413:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "4384:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4384:32:32"
					},
					"nodeType": "YulIf",
					"src": "4381:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "4510:139:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "4525:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4539:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "4529:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "4554:85:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "4611:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "4622:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "4607:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4607:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4631:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_contract$_LiquidityPool_$6337",
							"nodeType": "YulIdentifier",
							"src": "4564:42:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4564:75:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "4554:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_contract$_LiquidityPool_$6337",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4341:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "4352:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4364:6:32",
				  "type": ""
				}
			  ],
			  "src": "4283:373:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4727:53:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "4744:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4767:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address",
							"nodeType": "YulIdentifier",
							"src": "4749:17:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4749:24:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4737:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4737:37:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4737:37:32"
				  }
				]
			  },
			  "name": "abi_encode_t_address_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4715:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4722:3:32",
				  "type": ""
				}
			  ],
			  "src": "4662:118:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4884:124:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4894:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4906:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4917:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4902:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4902:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4894:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "4974:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4987:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4998:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4983:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4983:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "4930:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4930:71:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4930:71:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4856:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4868:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4879:4:32",
				  "type": ""
				}
			  ],
			  "src": "4786:222:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5114:519:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5160:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "5162:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "5162:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5162:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5135:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5144:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "5131:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5131:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5156:2:32",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "5127:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5127:32:32"
					},
					"nodeType": "YulIf",
					"src": "5124:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5253:117:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5268:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5282:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5272:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5297:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5332:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5343:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5328:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5328:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5352:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5307:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5307:53:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "5297:6:32"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5380:118:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5395:16:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5409:2:32",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5399:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5425:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5460:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5471:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5456:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5456:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5480:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5435:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5435:53:32"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "5425:6:32"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5508:118:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5523:16:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5537:2:32",
						  "type": "",
						  "value": "64"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5527:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5553:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5588:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5599:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5584:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5584:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5608:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "5563:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5563:53:32"
						},
						"variableNames": [
						  {
							"name": "value2",
							"nodeType": "YulIdentifier",
							"src": "5553:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5068:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "5079:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5091:6:32",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "5099:6:32",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "5107:6:32",
				  "type": ""
				}
			  ],
			  "src": "5014:619:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5682:43:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5692:27:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "5707:5:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5714:4:32",
						  "type": "",
						  "value": "0xff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "5703:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5703:16:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "5692:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5664:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "5674:7:32",
				  "type": ""
				}
			  ],
			  "src": "5639:86:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5792:51:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5809:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "5830:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint8",
							"nodeType": "YulIdentifier",
							"src": "5814:15:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5814:22:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5802:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5802:35:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5802:35:32"
				  }
				]
			  },
			  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5780:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "5787:3:32",
				  "type": ""
				}
			  ],
			  "src": "5731:112:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5943:120:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5953:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5965:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5976:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5961:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5961:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5953:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "6029:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6042:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6053:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6038:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6038:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint8_to_t_uint8_fromStack",
						"nodeType": "YulIdentifier",
						"src": "5989:39:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5989:67:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5989:67:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5915:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5927:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5938:4:32",
				  "type": ""
				}
			  ],
			  "src": "5849:214:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6135:263:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6181:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "6183:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "6183:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "6183:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6156:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6165:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "6152:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6152:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6177:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "6148:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6148:32:32"
					},
					"nodeType": "YulIf",
					"src": "6145:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6274:117:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6289:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6303:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "6293:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "6318:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "6353:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "6364:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6349:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6349:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6373:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "6328:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6328:53:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "6318:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6105:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "6116:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6128:6:32",
				  "type": ""
				}
			  ],
			  "src": "6069:329:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6457:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6467:35:32",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "6496:5:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "6478:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6478:24:32"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "6467:7:32"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address_payable",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6439:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "6449:7:32",
				  "type": ""
				}
			  ],
			  "src": "6404:104:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6595:61:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6612:3:32"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6643:5:32"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address_payable",
							"nodeType": "YulIdentifier",
							"src": "6617:25:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6617:32:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6605:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6605:45:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6605:45:32"
				  }
				]
			  },
			  "name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6583:5:32",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6590:3:32",
				  "type": ""
				}
			  ],
			  "src": "6514:142:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6776:140:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6786:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6798:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6809:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6794:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6794:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6786:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "6882:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6895:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6906:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6891:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6891:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_payable_to_t_address_payable_fromStack",
						"nodeType": "YulIdentifier",
						"src": "6822:59:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6822:87:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6822:87:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6748:9:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6760:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6771:4:32",
				  "type": ""
				}
			  ],
			  "src": "6662:254:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7005:391:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7051:83:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "7053:77:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7053:79:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7053:79:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7026:7:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7035:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "7022:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7022:23:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7047:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "7018:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7018:32:32"
					},
					"nodeType": "YulIf",
					"src": "7015:119:32"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7144:117:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7159:15:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7173:1:32",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7163:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7188:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7223:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7234:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7219:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7219:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7243:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7198:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7198:53:32"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "7188:6:32"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7271:118:32",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7286:16:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7300:2:32",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7290:6:32",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7316:63:32",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7351:9:32"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7362:6:32"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7347:3:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7347:22:32"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7371:7:32"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7326:20:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7326:53:32"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "7316:6:32"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6967:9:32",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "6978:7:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6990:6:32",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "6998:6:32",
				  "type": ""
				}
			  ],
			  "src": "6922:474:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7430:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7447:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7450:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7440:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7440:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7440:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7544:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7547:4:32",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7537:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7537:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7537:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7568:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7571:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "7561:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7561:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7561:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "7402:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7639:269:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7649:22:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "7663:4:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7669:1:32",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "7659:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7659:12:32"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "7649:6:32"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "7680:38:32",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "7710:4:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7716:1:32",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "7706:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7706:12:32"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "7684:18:32",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7757:51:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7771:27:32",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "7785:6:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7793:4:32",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "7781:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7781:17:32"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "7771:6:32"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "7737:18:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7730:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7730:26:32"
					},
					"nodeType": "YulIf",
					"src": "7727:81:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7860:42:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "7874:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "7874:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7874:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "7824:18:32"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "7847:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7855:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "7844:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7844:14:32"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "7821:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7821:38:32"
					},
					"nodeType": "YulIf",
					"src": "7818:84:32"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "7623:4:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "7632:6:32",
				  "type": ""
				}
			  ],
			  "src": "7588:320:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8020:54:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "8042:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8050:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8038:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8038:14:32"
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8054:12:32",
						  "type": "",
						  "value": "OWNER_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8031:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8031:36:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8031:36:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "8012:6:32",
				  "type": ""
				}
			  ],
			  "src": "7914:160:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8226:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8236:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8302:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8307:2:32",
						  "type": "",
						  "value": "10"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8243:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8243:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "8236:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8408:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
						"nodeType": "YulIdentifier",
						"src": "8319:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8319:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8319:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8421:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "8432:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8437:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8428:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8428:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "8421:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "8214:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "8222:3:32",
				  "type": ""
				}
			  ],
			  "src": "8080:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8623:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8633:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8645:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8656:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8641:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8641:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8633:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8680:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8691:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8676:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8676:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "8699:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8705:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "8695:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8695:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8669:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8669:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8669:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8725:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "8859:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "8733:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8733:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8725:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8603:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8618:4:32",
				  "type": ""
				}
			  ],
			  "src": "8452:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8983:61:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "9005:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9013:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9001:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9001:14:32"
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9017:19:32",
						  "type": "",
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8994:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8994:43:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8994:43:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "8975:6:32",
				  "type": ""
				}
			  ],
			  "src": "8877:167:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9196:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9206:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9272:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9277:2:32",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9213:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9213:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "9206:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9378:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
						"nodeType": "YulIdentifier",
						"src": "9289:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9289:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9289:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9391:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "9402:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9407:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9398:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9398:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "9391:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "9184:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "9192:3:32",
				  "type": ""
				}
			  ],
			  "src": "9050:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9593:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9603:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9615:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9626:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9611:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9611:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9603:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9650:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9661:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9646:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9646:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "9669:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9675:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "9665:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9665:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9639:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9639:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9639:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9695:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "9829:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "9703:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9703:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9695:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9573:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9588:4:32",
				  "type": ""
				}
			  ],
			  "src": "9422:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9875:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9892:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9895:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9885:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9885:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9885:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9989:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9992:4:32",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9982:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9982:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9982:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10013:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10016:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "10006:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10006:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10006:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "9847:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10081:362:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10091:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10114:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10096:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10096:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "10091:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10125:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10148:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10130:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10130:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "10125:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "10159:28:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "10182:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "10185:1:32"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "10178:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10178:9:32"
					},
					"variables": [
					  {
						"name": "product_raw",
						"nodeType": "YulTypedName",
						"src": "10163:11:32",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10196:41:32",
					"value": {
					  "arguments": [
						{
						  "name": "product_raw",
						  "nodeType": "YulIdentifier",
						  "src": "10225:11:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "10207:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10207:30:32"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "10196:7:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10414:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "10416:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "10416:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10416:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "10347:1:32"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "10340:6:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10340:9:32"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "10370:1:32"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "10377:7:32"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "10386:1:32"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "10373:3:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "10373:15:32"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "10367:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10367:22:32"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "10320:2:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10320:83:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "10300:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10300:113:32"
					},
					"nodeType": "YulIf",
					"src": "10297:139:32"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "10064:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "10067:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "10073:7:32",
				  "type": ""
				}
			  ],
			  "src": "10033:410:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10575:206:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "10585:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10597:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10608:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10593:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10593:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10585:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "10665:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10678:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10689:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10674:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10674:17:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10621:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10621:71:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10621:71:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "10746:6:32"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10759:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10770:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10755:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10755:18:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "10702:43:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10702:72:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10702:72:32"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10539:9:32",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "10551:6:32",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "10559:6:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10570:4:32",
				  "type": ""
				}
			  ],
			  "src": "10449:332:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10893:57:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "10915:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10923:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10911:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10911:14:32"
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10927:15:32",
						  "type": "",
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10904:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10904:39:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10904:39:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "10885:6:32",
				  "type": ""
				}
			  ],
			  "src": "10787:163:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11102:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11112:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11178:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11183:2:32",
						  "type": "",
						  "value": "13"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11119:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11119:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "11112:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11284:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
						"nodeType": "YulIdentifier",
						"src": "11195:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11195:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11195:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11297:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "11308:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11313:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11304:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11304:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "11297:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "11090:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "11098:3:32",
				  "type": ""
				}
			  ],
			  "src": "10956:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11499:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11509:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11521:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11532:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11517:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11517:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11509:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11556:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11567:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11552:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11552:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "11575:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11581:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "11571:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11571:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11545:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11545:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11545:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11601:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "11735:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "11609:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11609:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11601:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11479:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11494:4:32",
				  "type": ""
				}
			  ],
			  "src": "11328:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11797:147:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "11807:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11830:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "11812:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11812:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "11807:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11841:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "11864:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "11846:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11846:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "11841:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11875:16:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11886:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "11889:1:32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11882:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11882:9:32"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "11875:3:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "11915:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "11917:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "11917:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "11917:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "11907:1:32"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "11910:3:32"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "11904:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11904:10:32"
					},
					"nodeType": "YulIf",
					"src": "11901:36:32"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "11784:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "11787:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "11793:3:32",
				  "type": ""
				}
			  ],
			  "src": "11753:191:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12056:75:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "12078:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12086:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12074:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12074:14:32"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12090:33:32",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12067:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12067:57:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12067:57:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "12048:6:32",
				  "type": ""
				}
			  ],
			  "src": "11950:181:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12283:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12293:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12359:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12364:2:32",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "12300:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12300:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "12293:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12465:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
						"nodeType": "YulIdentifier",
						"src": "12376:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12376:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12376:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12478:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12489:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12494:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12485:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12485:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "12478:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "12271:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "12279:3:32",
				  "type": ""
				}
			  ],
			  "src": "12137:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12680:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12690:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12702:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12713:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12698:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12698:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12690:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12737:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12748:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12733:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12733:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "12756:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12762:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "12752:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12752:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12726:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12726:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12726:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12782:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "12916:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "12790:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12790:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12782:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "12660:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "12675:4:32",
				  "type": ""
				}
			  ],
			  "src": "12509:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13040:60:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "13062:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13070:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13058:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13058:14:32"
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "13074:18:32",
						  "type": "",
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13051:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13051:42:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13051:42:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "13032:6:32",
				  "type": ""
				}
			  ],
			  "src": "12934:166:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13252:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13262:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13328:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13333:2:32",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13269:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13269:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "13262:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13434:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
						"nodeType": "YulIdentifier",
						"src": "13345:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13345:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13345:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13447:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13458:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13463:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13454:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13454:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "13447:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "13240:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "13248:3:32",
				  "type": ""
				}
			  ],
			  "src": "13106:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13649:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13659:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "13671:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13682:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13667:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13667:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13659:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13706:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13717:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13702:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13702:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "13725:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13731:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "13721:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13721:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13695:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13695:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13695:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13751:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "13885:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13759:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13759:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13751:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "13629:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "13644:4:32",
				  "type": ""
				}
			  ],
			  "src": "13478:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13954:51:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13964:34:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13989:1:32",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13992:5:32"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "13985:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13985:13:32"
					},
					"variableNames": [
					  {
						"name": "newValue",
						"nodeType": "YulIdentifier",
						"src": "13964:8:32"
					  }
					]
				  }
				]
			  },
			  "name": "shift_right_1_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13935:5:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "newValue",
				  "nodeType": "YulTypedName",
				  "src": "13945:8:32",
				  "type": ""
				}
			  ],
			  "src": "13903:102:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14084:775:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14094:15:32",
					"value": {
					  "name": "_power",
					  "nodeType": "YulIdentifier",
					  "src": "14103:6:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "14094:5:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14118:14:32",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "14127:5:32"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "14118:4:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "14176:677:32",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "14264:22:32",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "14266:16:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "14266:18:32"
								},
								"nodeType": "YulExpressionStatement",
								"src": "14266:18:32"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14242:4:32"
							  },
							  {
								"arguments": [
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "14252:3:32"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "14257:4:32"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "14248:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "14248:14:32"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "14239:2:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "14239:24:32"
						  },
						  "nodeType": "YulIf",
						  "src": "14236:50:32"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "14331:419:32",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "14711:25:32",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "14724:5:32"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "14731:4:32"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "14720:3:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "14720:16:32"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "14711:5:32"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "14306:8:32"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "14316:1:32",
								"type": "",
								"value": "1"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "14302:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "14302:16:32"
						  },
						  "nodeType": "YulIf",
						  "src": "14299:451:32"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "14763:23:32",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14775:4:32"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "14781:4:32"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "14771:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "14771:15:32"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "14763:4:32"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "14799:44:32",
						  "value": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "14834:8:32"
							  }
							],
							"functionName": {
							  "name": "shift_right_1_unsigned",
							  "nodeType": "YulIdentifier",
							  "src": "14811:22:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "14811:32:32"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "14799:8:32"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "14152:8:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14162:1:32",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "14149:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14149:15:32"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "14165:2:32",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "14145:3:32",
					  "statements": []
					},
					"src": "14141:712:32"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_power",
				  "nodeType": "YulTypedName",
				  "src": "14039:6:32",
				  "type": ""
				},
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "14047:5:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "14054:8:32",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "14064:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "14072:5:32",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "14079:4:32",
				  "type": ""
				}
			  ],
			  "src": "14011:848:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14925:1013:32",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15120:20:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15122:10:32",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "15131:1:32",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15122:5:32"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15133:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "15110:8:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "15103:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15103:16:32"
					},
					"nodeType": "YulIf",
					"src": "15100:40:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15165:20:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15167:10:32",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "15176:1:32",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15167:5:32"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15178:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15159:4:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "15152:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15152:12:32"
					},
					"nodeType": "YulIf",
					"src": "15149:36:32"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "15295:20:32",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "15297:10:32",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "15306:1:32",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "15297:5:32"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "15308:5:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "15288:27:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15293:1:32",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "15339:176:32",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "15374:22:32",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "15376:16:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "15376:18:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "15376:18:32"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "15359:8:32"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "15369:3:32",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "15356:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "15356:17:32"
							  },
							  "nodeType": "YulIf",
							  "src": "15353:43:32"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "15409:25:32",
							  "value": {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "15422:1:32",
									"type": "",
									"value": "2"
								  },
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "15425:8:32"
								  }
								],
								"functionName": {
								  "name": "exp",
								  "nodeType": "YulIdentifier",
								  "src": "15418:3:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "15418:16:32"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "15409:5:32"
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "15465:22:32",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "15467:16:32"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "15467:18:32"
									},
									"nodeType": "YulExpressionStatement",
									"src": "15467:18:32"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "15453:5:32"
								  },
								  {
									"name": "max",
									"nodeType": "YulIdentifier",
									"src": "15460:3:32"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "15450:2:32"
								},
								"nodeType": "YulFunctionCall",
								"src": "15450:14:32"
							  },
							  "nodeType": "YulIf",
							  "src": "15447:40:32"
							},
							{
							  "nodeType": "YulLeave",
							  "src": "15500:5:32"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "15324:191:32",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15329:1:32",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "15245:4:32"
					},
					"nodeType": "YulSwitch",
					"src": "15238:277:32"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15647:123:32",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "15661:28:32",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "15674:4:32"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "15680:8:32"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "15670:3:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "15670:19:32"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "15661:5:32"
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "15720:22:32",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "15722:16:32"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "15722:18:32"
								},
								"nodeType": "YulExpressionStatement",
								"src": "15722:18:32"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "power",
								"nodeType": "YulIdentifier",
								"src": "15708:5:32"
							  },
							  {
								"name": "max",
								"nodeType": "YulIdentifier",
								"src": "15715:3:32"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "15705:2:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "15705:14:32"
						  },
						  "nodeType": "YulIf",
						  "src": "15702:40:32"
						},
						{
						  "nodeType": "YulLeave",
						  "src": "15755:5:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "15550:4:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15556:2:32",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15547:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15547:12:32"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "15564:8:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15574:2:32",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15561:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15561:16:32"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "15543:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15543:35:32"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "15599:4:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15605:3:32",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15596:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15596:13:32"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "15614:8:32"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "15624:2:32",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "15611:2:32"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "15611:16:32"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "15592:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15592:36:32"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "15527:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15527:111:32"
					},
					"nodeType": "YulIf",
					"src": "15524:246:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15780:57:32",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15814:1:32",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15817:4:32"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "15823:8:32"
						},
						{
						  "name": "max",
						  "nodeType": "YulIdentifier",
						  "src": "15833:3:32"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "15795:18:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15795:42:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "15780:5:32"
					  },
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "15787:4:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "15876:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "15878:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "15878:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "15878:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "15853:5:32"
						},
						{
						  "arguments": [
							{
							  "name": "max",
							  "nodeType": "YulIdentifier",
							  "src": "15864:3:32"
							},
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "15869:4:32"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "15860:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15860:14:32"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "15850:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15850:25:32"
					},
					"nodeType": "YulIf",
					"src": "15847:51:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15907:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "power",
						  "nodeType": "YulIdentifier",
						  "src": "15920:5:32"
						},
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "15927:4:32"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "15916:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15916:16:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "15907:5:32"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "14895:4:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "14901:8:32",
				  "type": ""
				},
				{
				  "name": "max",
				  "nodeType": "YulTypedName",
				  "src": "14911:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "14919:5:32",
				  "type": ""
				}
			  ],
			  "src": "14865:1073:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16008:217:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16018:31:32",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "16044:4:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "16026:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16026:23:32"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "16018:4:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16058:37:32",
					"value": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "16086:8:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint8",
						"nodeType": "YulIdentifier",
						"src": "16070:15:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16070:25:32"
					},
					"variableNames": [
					  {
						"name": "exponent",
						"nodeType": "YulIdentifier",
						"src": "16058:8:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16105:113:32",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "16135:4:32"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "16141:8:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16151:66:32",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "16114:20:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16114:104:32"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "16105:5:32"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "15983:4:32",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "15989:8:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "16002:5:32",
				  "type": ""
				}
			  ],
			  "src": "15944:281:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16337:55:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "16359:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16367:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16355:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16355:14:32"
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16371:13:32",
						  "type": "",
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16348:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16348:37:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16348:37:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "16329:6:32",
				  "type": ""
				}
			  ],
			  "src": "16231:161:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16544:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16554:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16620:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16625:2:32",
						  "type": "",
						  "value": "11"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "16561:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16561:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "16554:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16726:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
						"nodeType": "YulIdentifier",
						"src": "16637:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16637:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16637:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16739:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16750:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16755:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16746:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16746:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "16739:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "16532:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "16540:3:32",
				  "type": ""
				}
			  ],
			  "src": "16398:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16941:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16951:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "16963:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16974:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16959:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16959:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "16951:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "16998:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17009:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16994:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16994:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "17017:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17023:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "17013:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17013:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16987:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16987:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16987:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17043:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "17177:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17051:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17051:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17043:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "16921:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "16936:4:32",
				  "type": ""
				}
			  ],
			  "src": "16770:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17301:59:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "17323:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17331:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17319:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17319:14:32"
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "17335:17:32",
						  "type": "",
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17312:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17312:41:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17312:41:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "17293:6:32",
				  "type": ""
				}
			  ],
			  "src": "17195:165:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17512:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17522:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17588:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17593:2:32",
						  "type": "",
						  "value": "15"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17529:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17529:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "17522:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17694:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
						"nodeType": "YulIdentifier",
						"src": "17605:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17605:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17605:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17707:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17718:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17723:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17714:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17714:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "17707:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "17500:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "17508:3:32",
				  "type": ""
				}
			  ],
			  "src": "17366:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17909:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17919:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "17931:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17942:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17927:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17927:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17919:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17966:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17977:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17962:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17962:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "17985:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17991:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "17981:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17981:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17955:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17955:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17955:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18011:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "18145:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18019:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18019:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18011:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "17889:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "17904:4:32",
				  "type": ""
				}
			  ],
			  "src": "17738:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18269:62:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "18291:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18299:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18287:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18287:14:32"
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "18303:20:32",
						  "type": "",
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18280:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18280:44:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18280:44:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "18261:6:32",
				  "type": ""
				}
			  ],
			  "src": "18163:168:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18483:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18493:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18559:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18564:2:32",
						  "type": "",
						  "value": "18"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18500:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18500:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "18493:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18665:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
						"nodeType": "YulIdentifier",
						"src": "18576:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18576:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18576:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18678:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18689:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18694:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18685:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18685:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "18678:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "18471:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "18479:3:32",
				  "type": ""
				}
			  ],
			  "src": "18337:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18880:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18890:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "18902:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18913:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18898:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18898:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18890:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18937:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18948:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18933:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18933:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "18956:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18962:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "18952:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18952:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18926:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18926:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18926:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18982:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "19116:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18990:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18990:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18982:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "18860:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "18875:4:32",
				  "type": ""
				}
			  ],
			  "src": "18709:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19240:118:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "19262:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19270:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19258:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19258:14:32"
						},
						{
						  "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "19274:34:32",
						  "type": "",
						  "value": "ERC20: decreased allowance below"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19251:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19251:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19251:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "19330:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19338:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19326:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19326:15:32"
						},
						{
						  "hexValue": "207a65726f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "19343:7:32",
						  "type": "",
						  "value": " zero"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19319:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19319:32:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19319:32:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "19232:6:32",
				  "type": ""
				}
			  ],
			  "src": "19134:224:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19510:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19520:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19586:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19591:2:32",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "19527:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19527:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "19520:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19692:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
						"nodeType": "YulIdentifier",
						"src": "19603:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19603:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19603:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "19705:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19716:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19721:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19712:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19712:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "19705:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "19498:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "19506:3:32",
				  "type": ""
				}
			  ],
			  "src": "19364:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19907:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19917:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "19929:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19940:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19925:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19925:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "19917:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19964:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19975:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19960:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19960:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "19983:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19989:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "19979:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19979:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19953:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19953:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19953:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20009:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "20143:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20017:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20017:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20009:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "19887:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "19902:4:32",
				  "type": ""
				}
			  ],
			  "src": "19736:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20267:64:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "20289:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20297:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20285:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20285:14:32"
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "20301:22:32",
						  "type": "",
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20278:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20278:46:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20278:46:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "20259:6:32",
				  "type": ""
				}
			  ],
			  "src": "20161:170:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20483:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20493:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20559:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20564:2:32",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20500:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20500:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "20493:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20665:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
						"nodeType": "YulIdentifier",
						"src": "20576:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20576:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20576:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20678:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20689:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20694:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20685:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20685:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "20678:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "20471:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "20479:3:32",
				  "type": ""
				}
			  ],
			  "src": "20337:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20880:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20890:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "20902:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20913:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20898:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20898:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20890:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20937:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20948:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20933:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20933:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "20956:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20962:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "20952:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20952:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20926:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20926:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20926:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20982:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "21116:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20990:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20990:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20982:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "20860:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "20875:4:32",
				  "type": ""
				}
			  ],
			  "src": "20709:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21240:117:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "21262:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21270:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21258:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21258:14:32"
						},
						{
						  "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "21274:34:32",
						  "type": "",
						  "value": "ERC20: approve from the zero add"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21251:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21251:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21251:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "21330:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21338:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21326:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21326:15:32"
						},
						{
						  "hexValue": "72657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "21343:6:32",
						  "type": "",
						  "value": "ress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21319:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21319:31:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21319:31:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "21232:6:32",
				  "type": ""
				}
			  ],
			  "src": "21134:223:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21509:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21519:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21585:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21590:2:32",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "21526:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21526:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "21519:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21691:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
						"nodeType": "YulIdentifier",
						"src": "21602:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21602:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21602:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "21704:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21715:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21720:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21711:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21711:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "21704:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "21497:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "21505:3:32",
				  "type": ""
				}
			  ],
			  "src": "21363:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21906:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21916:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "21928:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21939:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21924:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21924:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "21916:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21963:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21974:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21959:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21959:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "21982:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21988:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "21978:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21978:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21952:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21952:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21952:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22008:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "22142:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22016:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22016:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "22008:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "21886:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "21901:4:32",
				  "type": ""
				}
			  ],
			  "src": "21735:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22266:115:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "22288:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22296:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22284:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22284:14:32"
						},
						{
						  "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "22300:34:32",
						  "type": "",
						  "value": "ERC20: approve to the zero addre"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22277:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22277:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22277:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "22356:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22364:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22352:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22352:15:32"
						},
						{
						  "hexValue": "7373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "22369:4:32",
						  "type": "",
						  "value": "ss"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22345:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22345:29:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22345:29:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "22258:6:32",
				  "type": ""
				}
			  ],
			  "src": "22160:221:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22533:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22543:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22609:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22614:2:32",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22550:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22550:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "22543:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22715:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
						"nodeType": "YulIdentifier",
						"src": "22626:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22626:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22626:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22728:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22739:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22744:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "22735:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22735:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "22728:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "22521:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "22529:3:32",
				  "type": ""
				}
			  ],
			  "src": "22387:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22930:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22940:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "22952:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "22963:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "22948:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22948:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "22940:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "22987:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22998:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22983:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22983:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "23006:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "23012:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "23002:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23002:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "22976:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22976:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22976:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "23032:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "23166:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "23040:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23040:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "23032:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "22910:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "22925:4:32",
				  "type": ""
				}
			  ],
			  "src": "22759:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23290:118:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23312:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23320:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23308:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23308:14:32"
						},
						{
						  "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23324:34:32",
						  "type": "",
						  "value": "ERC20: transfer from the zero ad"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23301:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23301:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23301:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23380:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23388:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23376:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23376:15:32"
						},
						{
						  "hexValue": "6472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23393:7:32",
						  "type": "",
						  "value": "dress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23369:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23369:32:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23369:32:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "23282:6:32",
				  "type": ""
				}
			  ],
			  "src": "23184:224:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23560:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23570:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23636:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23641:2:32",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "23577:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23577:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "23570:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23742:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
						"nodeType": "YulIdentifier",
						"src": "23653:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23653:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23653:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "23755:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23766:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23771:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23762:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23762:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "23755:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "23548:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "23556:3:32",
				  "type": ""
				}
			  ],
			  "src": "23414:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23957:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23967:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "23979:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23990:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23975:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23975:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "23967:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "24014:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24025:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24010:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24010:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "24033:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "24039:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "24029:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24029:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24003:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24003:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24003:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24059:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "24193:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24067:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24067:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24059:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "23937:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "23952:4:32",
				  "type": ""
				}
			  ],
			  "src": "23786:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24317:116:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24339:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24347:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24335:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24335:14:32"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24351:34:32",
						  "type": "",
						  "value": "ERC20: transfer to the zero addr"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24328:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24328:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24328:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24407:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24415:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24403:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24403:15:32"
						},
						{
						  "hexValue": "657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24420:5:32",
						  "type": "",
						  "value": "ess"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24396:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24396:30:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24396:30:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "24309:6:32",
				  "type": ""
				}
			  ],
			  "src": "24211:222:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24585:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24595:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24661:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24666:2:32",
						  "type": "",
						  "value": "35"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24602:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24602:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "24595:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24767:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
						"nodeType": "YulIdentifier",
						"src": "24678:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24678:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24678:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24780:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24791:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24796:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "24787:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24787:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "24780:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "24573:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "24581:3:32",
				  "type": ""
				}
			  ],
			  "src": "24439:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24982:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24992:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "25004:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25015:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25000:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25000:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24992:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "25039:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25050:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25035:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25035:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "25058:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "25064:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "25054:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25054:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25028:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25028:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25028:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25084:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "25218:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25092:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25092:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "25084:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "24962:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "24977:4:32",
				  "type": ""
				}
			  ],
			  "src": "24811:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25342:119:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "25364:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25372:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25360:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25360:14:32"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "25376:34:32",
						  "type": "",
						  "value": "ERC20: transfer amount exceeds b"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25353:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25353:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25353:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "25432:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25440:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25428:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25428:15:32"
						},
						{
						  "hexValue": "616c616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "25445:8:32",
						  "type": "",
						  "value": "alance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25421:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25421:33:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25421:33:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "25334:6:32",
				  "type": ""
				}
			  ],
			  "src": "25236:225:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25613:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "25623:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25689:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25694:2:32",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25630:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25630:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "25623:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25795:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
						"nodeType": "YulIdentifier",
						"src": "25706:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25706:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25706:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25808:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25819:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25824:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25815:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25815:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "25808:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "25601:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "25609:3:32",
				  "type": ""
				}
			  ],
			  "src": "25467:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26010:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26020:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "26032:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26043:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26028:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26028:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26020:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26067:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26078:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26063:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26063:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "26086:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26092:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "26082:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26082:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26056:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26056:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26056:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26112:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "26246:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26120:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26120:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26112:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "25990:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "26005:4:32",
				  "type": ""
				}
			  ],
			  "src": "25839:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26370:114:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26392:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26400:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26388:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26388:14:32"
						},
						{
						  "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26404:34:32",
						  "type": "",
						  "value": "ERC20: burn from the zero addres"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26381:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26381:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26381:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26460:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26468:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26456:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26456:15:32"
						},
						{
						  "hexValue": "73",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26473:3:32",
						  "type": "",
						  "value": "s"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26449:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26449:28:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26449:28:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "26362:6:32",
				  "type": ""
				}
			  ],
			  "src": "26264:220:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26636:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26646:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26712:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26717:2:32",
						  "type": "",
						  "value": "33"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26653:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26653:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "26646:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26818:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f",
						"nodeType": "YulIdentifier",
						"src": "26729:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26729:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26729:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26831:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26842:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26847:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26838:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26838:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "26831:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "26624:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "26632:3:32",
				  "type": ""
				}
			  ],
			  "src": "26490:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27033:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "27043:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "27055:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27066:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "27051:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27051:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "27043:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "27090:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27101:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27086:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27086:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "27109:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "27115:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "27105:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27105:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27079:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27079:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27079:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "27135:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "27269:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "27143:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27143:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "27135:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "27013:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "27028:4:32",
				  "type": ""
				}
			  ],
			  "src": "26862:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27393:115:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27415:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27423:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27411:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27411:14:32"
						},
						{
						  "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27427:34:32",
						  "type": "",
						  "value": "ERC20: burn amount exceeds balan"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27404:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27404:58:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27404:58:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27483:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27491:2:32",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27479:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27479:15:32"
						},
						{
						  "hexValue": "6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27496:4:32",
						  "type": "",
						  "value": "ce"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27472:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27472:29:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27472:29:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "27385:6:32",
				  "type": ""
				}
			  ],
			  "src": "27287:221:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27660:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "27670:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27736:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27741:2:32",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "27677:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27677:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "27670:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27842:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd",
						"nodeType": "YulIdentifier",
						"src": "27753:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27753:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27753:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "27855:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27866:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27871:2:32",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "27862:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27862:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "27855:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "27648:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "27656:3:32",
				  "type": ""
				}
			  ],
			  "src": "27514:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28057:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28067:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "28079:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28090:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "28075:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28075:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "28067:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "28114:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "28125:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "28110:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28110:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "28133:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "28139:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "28129:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28129:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "28103:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28103:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28103:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28159:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "28293:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28167:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28167:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "28159:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "28037:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "28052:4:32",
				  "type": ""
				}
			  ],
			  "src": "27886:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28356:149:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28366:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "28389:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "28371:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28371:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "28366:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28400:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "28423:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "28405:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28405:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "28400:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28434:17:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "28446:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "28449:1:32"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "28442:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28442:9:32"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "28434:4:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "28476:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "28478:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "28478:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "28478:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "diff",
						  "nodeType": "YulIdentifier",
						  "src": "28467:4:32"
						},
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "28473:1:32"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "28464:2:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28464:11:32"
					},
					"nodeType": "YulIf",
					"src": "28461:37:32"
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "28342:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "28345:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "28351:4:32",
				  "type": ""
				}
			  ],
			  "src": "28311:194:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28617:73:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "28639:6:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "28647:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "28635:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "28635:14:32"
						},
						{
						  "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "28651:31:32",
						  "type": "",
						  "value": "ERC20: insufficient allowance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "28628:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28628:55:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28628:55:32"
				  }
				]
			  },
			  "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "28609:6:32",
				  "type": ""
				}
			  ],
			  "src": "28511:179:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28842:220:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28852:74:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28918:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28923:2:32",
						  "type": "",
						  "value": "29"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28859:58:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28859:67:32"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "28852:3:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29024:3:32"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
						"nodeType": "YulIdentifier",
						"src": "28935:88:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28935:93:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28935:93:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29037:19:32",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29048:3:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29053:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "29044:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29044:12:32"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "29037:3:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "28830:3:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "28838:3:32",
				  "type": ""
				}
			  ],
			  "src": "28696:366:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29239:248:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29249:26:32",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "29261:9:32"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29272:2:32",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "29257:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29257:18:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "29249:4:32"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "29296:9:32"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "29307:1:32",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "29292:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29292:17:32"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "29315:4:32"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "29321:9:32"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "29311:3:32"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29311:20:32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29285:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29285:47:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29285:47:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29341:139:32",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "29475:4:32"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29349:124:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29349:131:32"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "29341:4:32"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "29219:9:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "29234:4:32",
				  "type": ""
				}
			  ],
			  "src": "29068:419:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29521:152:32",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29538:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29541:77:32",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29531:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29531:88:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29531:88:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29635:1:32",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29638:4:32",
						  "type": "",
						  "value": "0x12"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29628:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29628:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29628:15:32"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29659:1:32",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29662:4:32",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "29652:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29652:15:32"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29652:15:32"
				  }
				]
			  },
			  "name": "panic_error_0x12",
			  "nodeType": "YulFunctionDefinition",
			  "src": "29493:180:32"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29721:143:32",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29731:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "29754:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "29736:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29736:20:32"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "29731:1:32"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29765:25:32",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "29788:1:32"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "29770:17:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29770:20:32"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "29765:1:32"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "29812:22:32",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "29814:16:32"
							},
							"nodeType": "YulFunctionCall",
							"src": "29814:18:32"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "29814:18:32"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "29809:1:32"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "29802:6:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29802:9:32"
					},
					"nodeType": "YulIf",
					"src": "29799:35:32"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29844:14:32",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "29853:1:32"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "29856:1:32"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "29849:3:32"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29849:9:32"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "29844:1:32"
					  }
					]
				  }
				]
			  },
			  "name": "checked_div_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "29710:1:32",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "29713:1:32",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "29719:1:32",
				  "type": ""
				}
			  ],
			  "src": "29679:185:32"
			}
		  ]
		},
		"contents": "{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_contract$_LiquidityPool_$6337(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_LiquidityPool_$6337(value) {\n        if iszero(eq(value, cleanup_t_contract$_LiquidityPool_$6337(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_LiquidityPool_$6337(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_contract$_LiquidityPool_$6337(value)\n    }\n\n    function abi_decode_tuple_t_contract$_LiquidityPool_$6337(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_LiquidityPool_$6337(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_payable_to_t_address_payable_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address_payable(value))\n    }\n\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_payable_to_t_address_payable_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(memPtr) {\n\n        mstore(add(memPtr, 0), \"OWNER_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 10)\n        store_literal_in_memory_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c(memPtr) {\n\n        mstore(add(memPtr, 0), \"FUNDS_MOVED_TO_LP\")\n\n    }\n\n    function abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 17)\n        store_literal_in_memory_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2(memPtr) {\n\n        mstore(add(memPtr, 0), \"MAPLENFT_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 13)\n        store_literal_in_memory_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(memPtr) {\n\n        mstore(add(memPtr, 0), \"ABOVE_MAX_SUPPLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7(memPtr) {\n\n        mstore(add(memPtr, 0), \"WRITE_ONCE!\")\n\n    }\n\n    function abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 11)\n        store_literal_in_memory_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3(memPtr) {\n\n        mstore(add(memPtr, 0), \"CONTRACT_PAUSED\")\n\n    }\n\n    function abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 15)\n        store_literal_in_memory_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64(memPtr) {\n\n        mstore(add(memPtr, 0), \"NO_AVAILABLE_FUNDS\")\n\n    }\n\n    function abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 18)\n        store_literal_in_memory_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ROUTER_OR_MAPLE_ONLY\")\n\n    }\n\n    function abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n        store_literal_in_memory_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn from the zero addres\")\n\n        mstore(add(memPtr, 32), \"s\")\n\n    }\n\n    function abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: burn amount exceeds balan\")\n\n        mstore(add(memPtr, 32), \"ce\")\n\n    }\n\n    function abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        diff := sub(x, y)\n\n        if gt(diff, x) { panic_error_0x11() }\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n}\n",
		"id": 32,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "149:6830:25:-:0;;;657:4;635:26;;;;;;;;;;;;;;;;;;;;1102:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2052:5;2044;:13;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;:::i;:::-;;1978:113;;1203:10:25::1;:8;;;:10;;:::i;:::-;1199:2;:14;;;;:::i;:::-;1189:7;:24;;;;:::i;:::-;1176:10;:37;;;;1224:32;1238:4;1245:10;;1224:5;;;:32;;:::i;:::-;1275:10;1267:5;;:18;;;;;;;;;;;;;;;;;;1313:8;1296:14;;:25;;;;;;;;;;;;;;;;;;1388:4;1365:13;:20;1379:5;;;;;;;;;;;1365:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;1102:323:::0;149:6830;;3093:91:7;3151:5;3175:2;3168:9;;3093:91;:::o;8402:389::-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;;;:49;;:::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;;;:48;;:::i;:::-;8402:389;;:::o;11786:121::-;;;;:::o;12495:120::-;;;;:::o;88:117:32:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:104::-;511:7;540:24;558:5;540:24;:::i;:::-;529:35;;466:104;;;:::o;576:138::-;657:32;683:5;657:32;:::i;:::-;650:5;647:43;637:71;;704:1;701;694:12;637:71;576:138;:::o;720:159::-;785:5;816:6;810:13;801:22;;832:41;867:5;832:41;:::i;:::-;720:159;;;;:::o;885:367::-;963:6;1012:2;1000:9;991:7;987:23;983:32;980:119;;;1018:79;;:::i;:::-;980:119;1138:1;1163:72;1227:7;1218:6;1207:9;1203:22;1163:72;:::i;:::-;1153:82;;1109:136;885:367;;;;:::o;1258:99::-;1310:6;1344:5;1338:12;1328:22;;1258:99;;;:::o;1363:180::-;1411:77;1408:1;1401:88;1508:4;1505:1;1498:15;1532:4;1529:1;1522:15;1549:180;1597:77;1594:1;1587:88;1694:4;1691:1;1684:15;1718:4;1715:1;1708:15;1735:320;1779:6;1816:1;1810:4;1806:12;1796:22;;1863:1;1857:4;1853:12;1884:18;1874:81;;1940:4;1932:6;1928:17;1918:27;;1874:81;2002:2;1994:6;1991:14;1971:18;1968:38;1965:84;;2021:18;;:::i;:::-;1965:84;1786:269;1735:320;;;:::o;2061:141::-;2110:4;2133:3;2125:11;;2156:3;2153:1;2146:14;2190:4;2187:1;2177:18;2169:26;;2061:141;;;:::o;2208:93::-;2245:6;2292:2;2287;2280:5;2276:14;2272:23;2262:33;;2208:93;;;:::o;2307:107::-;2351:8;2401:5;2395:4;2391:16;2370:37;;2307:107;;;;:::o;2420:393::-;2489:6;2539:1;2527:10;2523:18;2562:97;2592:66;2581:9;2562:97;:::i;:::-;2680:39;2710:8;2699:9;2680:39;:::i;:::-;2668:51;;2752:4;2748:9;2741:5;2737:21;2728:30;;2801:4;2791:8;2787:19;2780:5;2777:30;2767:40;;2496:317;;2420:393;;;;;:::o;2819:77::-;2856:7;2885:5;2874:16;;2819:77;;;:::o;2902:60::-;2930:3;2951:5;2944:12;;2902:60;;;:::o;2968:142::-;3018:9;3051:53;3069:34;3078:24;3096:5;3078:24;:::i;:::-;3069:34;:::i;:::-;3051:53;:::i;:::-;3038:66;;2968:142;;;:::o;3116:75::-;3159:3;3180:5;3173:12;;3116:75;;;:::o;3197:269::-;3307:39;3338:7;3307:39;:::i;:::-;3368:91;3417:41;3441:16;3417:41;:::i;:::-;3409:6;3402:4;3396:11;3368:91;:::i;:::-;3362:4;3355:105;3273:193;3197:269;;;:::o;3472:73::-;3517:3;3472:73;:::o;3551:189::-;3628:32;;:::i;:::-;3669:65;3727:6;3719;3713:4;3669:65;:::i;:::-;3604:136;3551:189;;:::o;3746:186::-;3806:120;3823:3;3816:5;3813:14;3806:120;;;3877:39;3914:1;3907:5;3877:39;:::i;:::-;3850:1;3843:5;3839:13;3830:22;;3806:120;;;3746:186;;:::o;3938:543::-;4039:2;4034:3;4031:11;4028:446;;;4073:38;4105:5;4073:38;:::i;:::-;4157:29;4175:10;4157:29;:::i;:::-;4147:8;4143:44;4340:2;4328:10;4325:18;4322:49;;;4361:8;4346:23;;4322:49;4384:80;4440:22;4458:3;4440:22;:::i;:::-;4430:8;4426:37;4413:11;4384:80;:::i;:::-;4043:431;;4028:446;3938:543;;;:::o;4487:117::-;4541:8;4591:5;4585:4;4581:16;4560:37;;4487:117;;;;:::o;4610:169::-;4654:6;4687:51;4735:1;4731:6;4723:5;4720:1;4716:13;4687:51;:::i;:::-;4683:56;4768:4;4762;4758:15;4748:25;;4661:118;4610:169;;;;:::o;4784:295::-;4860:4;5006:29;5031:3;5025:4;5006:29;:::i;:::-;4998:37;;5068:3;5065:1;5061:11;5055:4;5052:21;5044:29;;4784:295;;;;:::o;5084:1395::-;5201:37;5234:3;5201:37;:::i;:::-;5303:18;5295:6;5292:30;5289:56;;;5325:18;;:::i;:::-;5289:56;5369:38;5401:4;5395:11;5369:38;:::i;:::-;5454:67;5514:6;5506;5500:4;5454:67;:::i;:::-;5548:1;5572:4;5559:17;;5604:2;5596:6;5593:14;5621:1;5616:618;;;;6278:1;6295:6;6292:77;;;6344:9;6339:3;6335:19;6329:26;6320:35;;6292:77;6395:67;6455:6;6448:5;6395:67;:::i;:::-;6389:4;6382:81;6251:222;5586:887;;5616:618;5668:4;5664:9;5656:6;5652:22;5702:37;5734:4;5702:37;:::i;:::-;5761:1;5775:208;5789:7;5786:1;5783:14;5775:208;;;5868:9;5863:3;5859:19;5853:26;5845:6;5838:42;5919:1;5911:6;5907:14;5897:24;;5966:2;5955:9;5951:18;5938:31;;5812:4;5809:1;5805:12;5800:17;;5775:208;;;6011:6;6002:7;5999:19;5996:179;;;6069:9;6064:3;6060:19;6054:26;6112:48;6154:4;6146:6;6142:17;6131:9;6112:48;:::i;:::-;6104:6;6097:64;6019:156;5996:179;6221:1;6217;6209:6;6205:14;6201:22;6195:4;6188:36;5623:611;;;5586:887;;5176:1303;;;5084:1395;;:::o;6485:180::-;6533:77;6530:1;6523:88;6630:4;6627:1;6620:15;6654:4;6651:1;6644:15;6671:102;6713:8;6760:5;6757:1;6753:13;6732:34;;6671:102;;;:::o;6779:848::-;6840:5;6847:4;6871:6;6862:15;;6895:5;6886:14;;6909:712;6930:1;6920:8;6917:15;6909:712;;;7025:4;7020:3;7016:14;7010:4;7007:24;7004:50;;;7034:18;;:::i;:::-;7004:50;7084:1;7074:8;7070:16;7067:451;;;7499:4;7492:5;7488:16;7479:25;;7067:451;7549:4;7543;7539:15;7531:23;;7579:32;7602:8;7579:32;:::i;:::-;7567:44;;6909:712;;;6779:848;;;;;;;:::o;7633:1073::-;7687:5;7878:8;7868:40;;7899:1;7890:10;;7901:5;;7868:40;7927:4;7917:36;;7944:1;7935:10;;7946:5;;7917:36;8013:4;8061:1;8056:27;;;;8097:1;8092:191;;;;8006:277;;8056:27;8074:1;8065:10;;8076:5;;;8092:191;8137:3;8127:8;8124:17;8121:43;;;8144:18;;:::i;:::-;8121:43;8193:8;8190:1;8186:16;8177:25;;8228:3;8221:5;8218:14;8215:40;;;8235:18;;:::i;:::-;8215:40;8268:5;;;8006:277;;8392:2;8382:8;8379:16;8373:3;8367:4;8364:13;8360:36;8342:2;8332:8;8329:16;8324:2;8318:4;8315:12;8311:35;8295:111;8292:246;;;8448:8;8442:4;8438:19;8429:28;;8483:3;8476:5;8473:14;8470:40;;;8490:18;;:::i;:::-;8470:40;8523:5;;8292:246;8563:42;8601:3;8591:8;8585:4;8582:1;8563:42;:::i;:::-;8548:57;;;;8637:4;8632:3;8628:14;8621:5;8618:25;8615:51;;;8646:18;;:::i;:::-;8615:51;8695:4;8688:5;8684:16;8675:25;;7633:1073;;;;;;:::o;8712:86::-;8747:7;8787:4;8780:5;8776:16;8765:27;;8712:86;;;:::o;8804:281::-;8862:5;8886:23;8904:4;8886:23;:::i;:::-;8878:31;;8930:25;8946:8;8930:25;:::i;:::-;8918:37;;8974:104;9011:66;9001:8;8995:4;8974:104;:::i;:::-;8965:113;;8804:281;;;;:::o;9091:410::-;9131:7;9154:20;9172:1;9154:20;:::i;:::-;9149:25;;9188:20;9206:1;9188:20;:::i;:::-;9183:25;;9243:1;9240;9236:9;9265:30;9283:11;9265:30;:::i;:::-;9254:41;;9444:1;9435:7;9431:15;9428:1;9425:22;9405:1;9398:9;9378:83;9355:139;;9474:18;;:::i;:::-;9355:139;9139:362;9091:410;;;;:::o;9507:169::-;9591:11;9625:6;9620:3;9613:19;9665:4;9660:3;9656:14;9641:29;;9507:169;;;;:::o;9682:181::-;9822:33;9818:1;9810:6;9806:14;9799:57;9682:181;:::o;9869:366::-;10011:3;10032:67;10096:2;10091:3;10032:67;:::i;:::-;10025:74;;10108:93;10197:3;10108:93;:::i;:::-;10226:2;10221:3;10217:12;10210:19;;9869:366;;;:::o;10241:419::-;10407:4;10445:2;10434:9;10430:18;10422:26;;10494:9;10488:4;10484:20;10480:1;10469:9;10465:17;10458:47;10522:131;10648:4;10522:131;:::i;:::-;10514:139;;10241:419;;;:::o;10666:191::-;10706:3;10725:20;10743:1;10725:20;:::i;:::-;10720:25;;10759:20;10777:1;10759:20;:::i;:::-;10754:25;;10802:1;10799;10795:9;10788:16;;10823:3;10820:1;10817:10;10814:36;;;10830:18;;:::i;:::-;10814:36;10666:191;;;;:::o;10863:118::-;10950:24;10968:5;10950:24;:::i;:::-;10945:3;10938:37;10863:118;;:::o;10987:222::-;11080:4;11118:2;11107:9;11103:18;11095:26;;11131:71;11199:1;11188:9;11184:17;11175:6;11131:71;:::i;:::-;10987:222;;;;:::o;149:6830:25:-;;;;;;;",
	"deployedSourceMap": "149:6830:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;471:31;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2156:98:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3788:103:25;;;;;;;;;;;;;:::i;:::-;;5821:761;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3244:106:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;823:23:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5019:115;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5192:286:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3093:91;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;369:25:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5873:234:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;970:50:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1050:45;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4546:335;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2224:173;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;732:37;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3177:400;;;;;;;;;;;;;:::i;:::-;;600:29;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;414:31;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;852:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3408:125:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2404:169:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;695:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2367:102:7;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4891:122:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;6594:427:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3729:189;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;884:50:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;635:26;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3618:131;;;;;;;;;;;;;:::i;:::-;;2788:344;;;:::i;:::-;;5297:455;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3976:149:7;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3928:106:25;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2578:180;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;536:28;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;796:21;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;471:31;;;;:::o;2156:98:7:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;4532:13;4548:12;:10;:12::i;:::-;4532:28;;4570:32;4579:5;4586:7;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;:::o;3788:103:25:-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;3849:7:::1;;;;;;;;;;;3848:8;3838:7;;:18;;;;;;;;;;;;;;;;;;3871:13;;;;;;;;;;3788:103::o:0;5821:761::-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;1938:17:::1;;;;;;;;;;;1937:18;1929:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;5952:4:::2;5932:17;;:24;;;;;;;;;;;;;;;;;;6036:31;6089:3;6070:16;;:22;;;;:::i;:::-;6036:56;;6131:125;6168:4;6195:13;6223:23;6131:15;:125::i;:::-;6338:13;:21;;;6367:16;;6398:23;6443:4;6338:120;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;;6502:13;:30;;;:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;6545:30;:28;:30::i;:::-;5922:660;5821:761:::0;:::o;3244:106:7:-;3305:7;3331:12;;3324:19;;3244:106;:::o;823:23:25:-;;;;;;;;;;;;;:::o;5019:115::-;1583:8;;;;;;;;;;;1569:22;;:10;:22;;;:50;;;;1609:10;;;;;;;;;;;1595:24;;:10;:24;;;1569:50;1561:76;;;;;;;;;;;;:::i;:::-;;;;;;;;;5104:22:::1;5110:7;5119:6;5104:5;:22::i;:::-;5019:115:::0;;:::o;5192:286:7:-;5319:4;5335:15;5353:12;:10;:12::i;:::-;5335:30;;5375:38;5391:4;5397:7;5406:6;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;5467:4;5460:11;;;5192:286;;;;;:::o;3093:91::-;3151:5;3175:2;3168:9;;3093:91;:::o;369:25:25:-;;;;:::o;5873:234:7:-;5961:4;5977:13;5993:12;:10;:12::i;:::-;5977:28;;6015:64;6024:5;6031:7;6068:10;6040:25;6050:5;6057:7;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;:::-;6096:4;6089:11;;;5873:234;;;;:::o;970:50:25:-;;;;;;;;;;;;;;;;;:::o;1050:45::-;;;;;;;;;;;;;;;;;;;;;;:::o;4546:335::-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;4649:1:::1;4630:21;;:7;:21;;::::0;4622:65:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;4770:10;;4760:6;4744:13;:11;:13::i;:::-;:22;;;;:::i;:::-;:36;;4736:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;4835:39;4841:7;4863:10;:8;:10::i;:::-;4859:2;:14;;;;:::i;:::-;4850:6;:23;;;;:::i;:::-;4835:5;:39::i;:::-;4546:335:::0;;:::o;2224:173::-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2332:1:::1;2305:29;;2313:6;;;;;;;;;;;2305:29;;;2297:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;2383:7;2374:6;;:16;;;;;;;;;;;;;;;;;;2224:173:::0;:::o;732:37::-;;;;;;;;;;;;;:::o;3177:400::-;2068:16;;;;;;;;;;;2067:17;2059:45;;;;;;;;;;;;:::i;:::-;;;;;;;;;1938:17:::1;;;;;;;;;;;1937:18;1929:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;3280:1:::2;3250:15;:27;3266:10;3250:27;;;;;;;;;;;;;;;;:31;3242:62;;;;;;;;;;;;:::i;:::-;;;;;;;;;3377:21;3401:15;:27;3417:10;3401:27;;;;;;;;;;;;;;;;3377:51;;3468:1;3438:15;:27;3454:10;3438:27;;;;;;;;;;;;;;;:31;;;;3480:57;3504:4;3511:10;3523:13;3480:15;:57::i;:::-;3232:345;3177:400::o:0;600:29::-;;;;;;;;;;;;;:::o;414:31::-;444:1;414:31;:::o;852:25::-;;;;;;;;;;;;;:::o;3408:125:7:-;3482:7;3508:9;:18;3518:7;3508:18;;;;;;;;;;;;;;;;3501:25;;3408:125;;;:::o;2404:169:25:-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2518:1:::1;2489:31;;2497:8;;;;;;;;;;;2489:31;;;2481:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;2557:9;2546:8;;:20;;;;;;;;;;;;;;;;;;2404:169:::0;:::o;695:20::-;;;;;;;;;;;;;:::o;2367:102:7:-;2423:13;2455:7;2448:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:102;:::o;4891:122:25:-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;4967:39:::1;4973:7;4995:10;:8;:10::i;:::-;4991:2;:14;;;;:::i;:::-;4982:6;:23;;;;:::i;:::-;4967:5;:39::i;:::-;4891:122:::0;;:::o;6594:427:7:-;6687:4;6703:13;6719:12;:10;:12::i;:::-;6703:28;;6741:24;6768:25;6778:5;6785:7;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;:::-;7010:4;7003:11;;;;6594:427;;;;:::o;3729:189::-;3808:4;3824:13;3840:12;:10;:12::i;:::-;3824:28;;3862;3872:5;3879:2;3883:6;3862:9;:28::i;:::-;3907:4;3900:11;;;3729:189;;;;:::o;884:50:25:-;;;;;;;;;;;;;;;;;:::o;635:26::-;;;;;;;;;;;;;:::o;3618:131::-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;3698:16:::1;;;;;;;;;;;3697:17;3678:16;;:36;;;;;;;;;;;;;;;;;;3729:13;;;;;;;;;;3618:131::o:0;2788:344::-;2068:16;;;;;;;;;;;2067:17;2059:45;;;;;;;;;;;;:::i;:::-;;;;;;;;;1938:17:::1;;;;;;;;;;;1937:18;1929:48;;;;;;;;;;;;:::i;:::-;;;;;;;;;2894:19:::2;2928:3;2916:9;:15;;;;:::i;:::-;2894:37;;2972:11;2941:15;:27;2957:10;2941:27;;;;;;;;;;;;;;;;:42;;;;;;;:::i;:::-;;;;;;;;3024:9;2993:15;:27;3009:10;2993:27;;;;;;;;;;;;;;;;:40;;;;;;;:::i;:::-;;;;;;;;3063:9;3043:16;;:29;;;;;;;:::i;:::-;;;;;;;;3101:10;3088:37;;;3113:11;3088:37;;;;;;:::i;:::-;;;;;;;;2850:282;2788:344::o:0;5297:455::-;5418:4;1757:6;;;;;;;;;;;1743:20;;:10;:20;;;:46;;;;1781:8;;;;;;;;;;;1767:22;;:10;:22;;;1743:46;:74;;;;1807:10;;;;;;;;;;;1793:24;;:10;:24;;;1743:74;1735:107;;;;;;;;;;;;:::i;:::-;;;;;;;;;5589:134:::1;5611:6;5639:8;5706:7;5667:36;5677:10;5697:4;5667:9;:36::i;:::-;:46;;;;:::i;:::-;5589:8;:134::i;:::-;5741:4;5734:11;;5297:455:::0;;;;;:::o;3976:149:7:-;4065:7;4091:11;:18;4103:5;4091:18;;;;;;;;;;;;;;;:27;4110:7;4091:27;;;;;;;;;;;;;;;;4084:34;;3976:149;;;;:::o;3928:106:25:-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;4023:4:::1;3998:13;:22;4012:7;3998:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3928:106:::0;:::o;2578:180::-;1484:5;;;;;;;;;;;1470:19;;:10;:19;;;1462:42;;;;;;;;;;;;:::i;:::-;;;;;;;;;2699:1:::1;2668:33;;2676:10;;;;;;;;;;;2668:33;;;2660:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;2740:11;2727:10;;:24;;;;;;;;;;;;;;;;;;2578:180:::0;:::o;536:28::-;;;;;;;;;;;;;:::o;796:21::-;;;;;;;;;;;;;:::o;640:96:17:-;693:7;719:10;712:17;;640:96;:::o;10110:370:7:-;10258:1;10241:19;;:5;:19;;;10233:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10338:1;10319:21;;:7;:21;;;10311:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10420:6;10390:11;:18;10402:5;10390:18;;;;;;;;;;;;;;;:27;10409:7;10390:27;;;;;;;;;;;;;;;:36;;;;10457:7;10441:32;;10450:5;10441:32;;;10466:6;10441:32;;;;;;:::i;:::-;;;;;;;;10110:370;;;:::o;7475:651::-;7617:1;7601:18;;:4;:18;;;7593:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7693:1;7679:16;;:2;:16;;;7671:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7746:38;7767:4;7773:2;7777:6;7746:20;:38::i;:::-;7795:19;7817:9;:15;7827:4;7817:15;;;;;;;;;;;;;;;;7795:37;;7865:6;7850:11;:21;;7842:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7980:6;7966:11;:20;7948:9;:15;7958:4;7948:15;;;;;;;;;;;;;;;:38;;;;8023:6;8006:9;:13;8016:2;8006:13;;;;;;;;;;;;;;;;:23;;;;;;;:::i;:::-;;;;;;;;8060:2;8045:26;;8054:4;8045:26;;;8064:6;8045:26;;;;;;:::i;:::-;;;;;;;;8082:37;8102:4;8108:2;8112:6;8082:19;:37::i;:::-;7583:543;7475:651;;;:::o;6758:219:25:-;6817:20;6840:24;6858:4;6840:9;:24::i;:::-;6817:47;;6874:69;6898:4;6913:14;;;;;;;;;;;6930:12;6874:15;:69::i;:::-;6958:12;;;;;;;;;;6807:170;6758:219::o;9111:576:7:-;9213:1;9194:21;;:7;:21;;;9186:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;9264:49;9285:7;9302:1;9306:6;9264:20;:49::i;:::-;9324:22;9349:9;:18;9359:7;9349:18;;;;;;;;;;;;;;;;9324:43;;9403:6;9385:14;:24;;9377:71;;;;;;;;;;;;:::i;:::-;;;;;;;;;9520:6;9503:14;:23;9482:9;:18;9492:7;9482:18;;;;;;;;;;;;;;;:44;;;;9562:6;9546:12;;:22;;;;;;;:::i;:::-;;;;;;;;9610:1;9584:37;;9593:7;9584:37;;;9614:6;9584:37;;;;;;:::i;:::-;;;;;;;;9632:48;9652:7;9669:1;9673:6;9632:19;:48::i;:::-;9176:511;9111:576;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;10977:17;10957:16;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10953:243;10881:321;10761:441;;;:::o;4040:500:25:-;4138:20;4192:7;;;;;;;;;;;4188:73;;;4247:3;4237:6;444:1;4231:12;;;;:::i;:::-;4230:20;;;;:::i;:::-;4215:35;;4188:73;4270:24;4306:12;4297:6;:21;;;;:::i;:::-;4270:48;;4370:52;4386:6;4394:9;4405:16;4370:15;:52::i;:::-;4479:53;4495:6;4503:14;;;;;;;;;;;4519:12;4479:15;:53::i;:::-;4128:412;;4040:500;;;:::o;8402:389:7:-;8504:1;8485:21;;:7;:21;;;8477:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8553:49;8582:1;8586:7;8595:6;8553:20;:49::i;:::-;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;;;;;8667:6;8645:9;:18;8655:7;8645:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8709:7;8688:37;;8705:1;8688:37;;;8718:6;8688:37;;;;;;:::i;:::-;;;;;;;;8736:48;8764:1;8768:7;8777:6;8736:19;:48::i;:::-;8402:389;;:::o;11786:121::-;;;;:::o;12495:120::-;;;;:::o;7:77:32:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:99::-;494:6;528:5;522:12;512:22;;442:99;;;:::o;547:169::-;631:11;665:6;660:3;653:19;705:4;700:3;696:14;681:29;;547:169;;;;:::o;722:246::-;803:1;813:113;827:6;824:1;821:13;813:113;;;912:1;907:3;903:11;897:18;893:1;888:3;884:11;877:39;849:2;846:1;842:10;837:15;;813:113;;;960:1;951:6;946:3;942:16;935:27;784:184;722:246;;;:::o;974:102::-;1015:6;1066:2;1062:7;1057:2;1050:5;1046:14;1042:28;1032:38;;974:102;;;:::o;1082:377::-;1170:3;1198:39;1231:5;1198:39;:::i;:::-;1253:71;1317:6;1312:3;1253:71;:::i;:::-;1246:78;;1333:65;1391:6;1386:3;1379:4;1372:5;1368:16;1333:65;:::i;:::-;1423:29;1445:6;1423:29;:::i;:::-;1418:3;1414:39;1407:46;;1174:285;1082:377;;;;:::o;1465:313::-;1578:4;1616:2;1605:9;1601:18;1593:26;;1665:9;1659:4;1655:20;1651:1;1640:9;1636:17;1629:47;1693:78;1766:4;1757:6;1693:78;:::i;:::-;1685:86;;1465:313;;;;:::o;1865:117::-;1974:1;1971;1964:12;2111:126;2148:7;2188:42;2181:5;2177:54;2166:65;;2111:126;;;:::o;2243:96::-;2280:7;2309:24;2327:5;2309:24;:::i;:::-;2298:35;;2243:96;;;:::o;2345:122::-;2418:24;2436:5;2418:24;:::i;:::-;2411:5;2408:35;2398:63;;2457:1;2454;2447:12;2398:63;2345:122;:::o;2473:139::-;2519:5;2557:6;2544:20;2535:29;;2573:33;2600:5;2573:33;:::i;:::-;2473:139;;;;:::o;2618:122::-;2691:24;2709:5;2691:24;:::i;:::-;2684:5;2681:35;2671:63;;2730:1;2727;2720:12;2671:63;2618:122;:::o;2746:139::-;2792:5;2830:6;2817:20;2808:29;;2846:33;2873:5;2846:33;:::i;:::-;2746:139;;;;:::o;2891:474::-;2959:6;2967;3016:2;3004:9;2995:7;2991:23;2987:32;2984:119;;;3022:79;;:::i;:::-;2984:119;3142:1;3167:53;3212:7;3203:6;3192:9;3188:22;3167:53;:::i;:::-;3157:63;;3113:117;3269:2;3295:53;3340:7;3331:6;3320:9;3316:22;3295:53;:::i;:::-;3285:63;;3240:118;2891:474;;;;;:::o;3371:90::-;3405:7;3448:5;3441:13;3434:21;3423:32;;3371:90;;;:::o;3467:109::-;3548:21;3563:5;3548:21;:::i;:::-;3543:3;3536:34;3467:109;;:::o;3582:210::-;3669:4;3707:2;3696:9;3692:18;3684:26;;3720:65;3782:1;3771:9;3767:17;3758:6;3720:65;:::i;:::-;3582:210;;;;:::o;3798:118::-;3857:7;3886:24;3904:5;3886:24;:::i;:::-;3875:35;;3798:118;;;:::o;3922:166::-;4017:46;4057:5;4017:46;:::i;:::-;4010:5;4007:57;3997:85;;4078:1;4075;4068:12;3997:85;3922:166;:::o;4094:183::-;4162:5;4200:6;4187:20;4178:29;;4216:55;4265:5;4216:55;:::i;:::-;4094:183;;;;:::o;4283:373::-;4364:6;4413:2;4401:9;4392:7;4388:23;4384:32;4381:119;;;4419:79;;:::i;:::-;4381:119;4539:1;4564:75;4631:7;4622:6;4611:9;4607:22;4564:75;:::i;:::-;4554:85;;4510:139;4283:373;;;;:::o;4662:118::-;4749:24;4767:5;4749:24;:::i;:::-;4744:3;4737:37;4662:118;;:::o;4786:222::-;4879:4;4917:2;4906:9;4902:18;4894:26;;4930:71;4998:1;4987:9;4983:17;4974:6;4930:71;:::i;:::-;4786:222;;;;:::o;5014:619::-;5091:6;5099;5107;5156:2;5144:9;5135:7;5131:23;5127:32;5124:119;;;5162:79;;:::i;:::-;5124:119;5282:1;5307:53;5352:7;5343:6;5332:9;5328:22;5307:53;:::i;:::-;5297:63;;5253:117;5409:2;5435:53;5480:7;5471:6;5460:9;5456:22;5435:53;:::i;:::-;5425:63;;5380:118;5537:2;5563:53;5608:7;5599:6;5588:9;5584:22;5563:53;:::i;:::-;5553:63;;5508:118;5014:619;;;;;:::o;5639:86::-;5674:7;5714:4;5707:5;5703:16;5692:27;;5639:86;;;:::o;5731:112::-;5814:22;5830:5;5814:22;:::i;:::-;5809:3;5802:35;5731:112;;:::o;5849:214::-;5938:4;5976:2;5965:9;5961:18;5953:26;;5989:67;6053:1;6042:9;6038:17;6029:6;5989:67;:::i;:::-;5849:214;;;;:::o;6069:329::-;6128:6;6177:2;6165:9;6156:7;6152:23;6148:32;6145:119;;;6183:79;;:::i;:::-;6145:119;6303:1;6328:53;6373:7;6364:6;6353:9;6349:22;6328:53;:::i;:::-;6318:63;;6274:117;6069:329;;;;:::o;6404:104::-;6449:7;6478:24;6496:5;6478:24;:::i;:::-;6467:35;;6404:104;;;:::o;6514:142::-;6617:32;6643:5;6617:32;:::i;:::-;6612:3;6605:45;6514:142;;:::o;6662:254::-;6771:4;6809:2;6798:9;6794:18;6786:26;;6822:87;6906:1;6895:9;6891:17;6882:6;6822:87;:::i;:::-;6662:254;;;;:::o;6922:474::-;6990:6;6998;7047:2;7035:9;7026:7;7022:23;7018:32;7015:119;;;7053:79;;:::i;:::-;7015:119;7173:1;7198:53;7243:7;7234:6;7223:9;7219:22;7198:53;:::i;:::-;7188:63;;7144:117;7300:2;7326:53;7371:7;7362:6;7351:9;7347:22;7326:53;:::i;:::-;7316:63;;7271:118;6922:474;;;;;:::o;7402:180::-;7450:77;7447:1;7440:88;7547:4;7544:1;7537:15;7571:4;7568:1;7561:15;7588:320;7632:6;7669:1;7663:4;7659:12;7649:22;;7716:1;7710:4;7706:12;7737:18;7727:81;;7793:4;7785:6;7781:17;7771:27;;7727:81;7855:2;7847:6;7844:14;7824:18;7821:38;7818:84;;7874:18;;:::i;:::-;7818:84;7639:269;7588:320;;;:::o;7914:160::-;8054:12;8050:1;8042:6;8038:14;8031:36;7914:160;:::o;8080:366::-;8222:3;8243:67;8307:2;8302:3;8243:67;:::i;:::-;8236:74;;8319:93;8408:3;8319:93;:::i;:::-;8437:2;8432:3;8428:12;8421:19;;8080:366;;;:::o;8452:419::-;8618:4;8656:2;8645:9;8641:18;8633:26;;8705:9;8699:4;8695:20;8691:1;8680:9;8676:17;8669:47;8733:131;8859:4;8733:131;:::i;:::-;8725:139;;8452:419;;;:::o;8877:167::-;9017:19;9013:1;9005:6;9001:14;8994:43;8877:167;:::o;9050:366::-;9192:3;9213:67;9277:2;9272:3;9213:67;:::i;:::-;9206:74;;9289:93;9378:3;9289:93;:::i;:::-;9407:2;9402:3;9398:12;9391:19;;9050:366;;;:::o;9422:419::-;9588:4;9626:2;9615:9;9611:18;9603:26;;9675:9;9669:4;9665:20;9661:1;9650:9;9646:17;9639:47;9703:131;9829:4;9703:131;:::i;:::-;9695:139;;9422:419;;;:::o;9847:180::-;9895:77;9892:1;9885:88;9992:4;9989:1;9982:15;10016:4;10013:1;10006:15;10033:410;10073:7;10096:20;10114:1;10096:20;:::i;:::-;10091:25;;10130:20;10148:1;10130:20;:::i;:::-;10125:25;;10185:1;10182;10178:9;10207:30;10225:11;10207:30;:::i;:::-;10196:41;;10386:1;10377:7;10373:15;10370:1;10367:22;10347:1;10340:9;10320:83;10297:139;;10416:18;;:::i;:::-;10297:139;10081:362;10033:410;;;;:::o;10449:332::-;10570:4;10608:2;10597:9;10593:18;10585:26;;10621:71;10689:1;10678:9;10674:17;10665:6;10621:71;:::i;:::-;10702:72;10770:2;10759:9;10755:18;10746:6;10702:72;:::i;:::-;10449:332;;;;;:::o;10787:163::-;10927:15;10923:1;10915:6;10911:14;10904:39;10787:163;:::o;10956:366::-;11098:3;11119:67;11183:2;11178:3;11119:67;:::i;:::-;11112:74;;11195:93;11284:3;11195:93;:::i;:::-;11313:2;11308:3;11304:12;11297:19;;10956:366;;;:::o;11328:419::-;11494:4;11532:2;11521:9;11517:18;11509:26;;11581:9;11575:4;11571:20;11567:1;11556:9;11552:17;11545:47;11609:131;11735:4;11609:131;:::i;:::-;11601:139;;11328:419;;;:::o;11753:191::-;11793:3;11812:20;11830:1;11812:20;:::i;:::-;11807:25;;11846:20;11864:1;11846:20;:::i;:::-;11841:25;;11889:1;11886;11882:9;11875:16;;11910:3;11907:1;11904:10;11901:36;;;11917:18;;:::i;:::-;11901:36;11753:191;;;;:::o;11950:181::-;12090:33;12086:1;12078:6;12074:14;12067:57;11950:181;:::o;12137:366::-;12279:3;12300:67;12364:2;12359:3;12300:67;:::i;:::-;12293:74;;12376:93;12465:3;12376:93;:::i;:::-;12494:2;12489:3;12485:12;12478:19;;12137:366;;;:::o;12509:419::-;12675:4;12713:2;12702:9;12698:18;12690:26;;12762:9;12756:4;12752:20;12748:1;12737:9;12733:17;12726:47;12790:131;12916:4;12790:131;:::i;:::-;12782:139;;12509:419;;;:::o;12934:166::-;13074:18;13070:1;13062:6;13058:14;13051:42;12934:166;:::o;13106:366::-;13248:3;13269:67;13333:2;13328:3;13269:67;:::i;:::-;13262:74;;13345:93;13434:3;13345:93;:::i;:::-;13463:2;13458:3;13454:12;13447:19;;13106:366;;;:::o;13478:419::-;13644:4;13682:2;13671:9;13667:18;13659:26;;13731:9;13725:4;13721:20;13717:1;13706:9;13702:17;13695:47;13759:131;13885:4;13759:131;:::i;:::-;13751:139;;13478:419;;;:::o;13903:102::-;13945:8;13992:5;13989:1;13985:13;13964:34;;13903:102;;;:::o;14011:848::-;14072:5;14079:4;14103:6;14094:15;;14127:5;14118:14;;14141:712;14162:1;14152:8;14149:15;14141:712;;;14257:4;14252:3;14248:14;14242:4;14239:24;14236:50;;;14266:18;;:::i;:::-;14236:50;14316:1;14306:8;14302:16;14299:451;;;14731:4;14724:5;14720:16;14711:25;;14299:451;14781:4;14775;14771:15;14763:23;;14811:32;14834:8;14811:32;:::i;:::-;14799:44;;14141:712;;;14011:848;;;;;;;:::o;14865:1073::-;14919:5;15110:8;15100:40;;15131:1;15122:10;;15133:5;;15100:40;15159:4;15149:36;;15176:1;15167:10;;15178:5;;15149:36;15245:4;15293:1;15288:27;;;;15329:1;15324:191;;;;15238:277;;15288:27;15306:1;15297:10;;15308:5;;;15324:191;15369:3;15359:8;15356:17;15353:43;;;15376:18;;:::i;:::-;15353:43;15425:8;15422:1;15418:16;15409:25;;15460:3;15453:5;15450:14;15447:40;;;15467:18;;:::i;:::-;15447:40;15500:5;;;15238:277;;15624:2;15614:8;15611:16;15605:3;15599:4;15596:13;15592:36;15574:2;15564:8;15561:16;15556:2;15550:4;15547:12;15543:35;15527:111;15524:246;;;15680:8;15674:4;15670:19;15661:28;;15715:3;15708:5;15705:14;15702:40;;;15722:18;;:::i;:::-;15702:40;15755:5;;15524:246;15795:42;15833:3;15823:8;15817:4;15814:1;15795:42;:::i;:::-;15780:57;;;;15869:4;15864:3;15860:14;15853:5;15850:25;15847:51;;;15878:18;;:::i;:::-;15847:51;15927:4;15920:5;15916:16;15907:25;;14865:1073;;;;;;:::o;15944:281::-;16002:5;16026:23;16044:4;16026:23;:::i;:::-;16018:31;;16070:25;16086:8;16070:25;:::i;:::-;16058:37;;16114:104;16151:66;16141:8;16135:4;16114:104;:::i;:::-;16105:113;;15944:281;;;;:::o;16231:161::-;16371:13;16367:1;16359:6;16355:14;16348:37;16231:161;:::o;16398:366::-;16540:3;16561:67;16625:2;16620:3;16561:67;:::i;:::-;16554:74;;16637:93;16726:3;16637:93;:::i;:::-;16755:2;16750:3;16746:12;16739:19;;16398:366;;;:::o;16770:419::-;16936:4;16974:2;16963:9;16959:18;16951:26;;17023:9;17017:4;17013:20;17009:1;16998:9;16994:17;16987:47;17051:131;17177:4;17051:131;:::i;:::-;17043:139;;16770:419;;;:::o;17195:165::-;17335:17;17331:1;17323:6;17319:14;17312:41;17195:165;:::o;17366:366::-;17508:3;17529:67;17593:2;17588:3;17529:67;:::i;:::-;17522:74;;17605:93;17694:3;17605:93;:::i;:::-;17723:2;17718:3;17714:12;17707:19;;17366:366;;;:::o;17738:419::-;17904:4;17942:2;17931:9;17927:18;17919:26;;17991:9;17985:4;17981:20;17977:1;17966:9;17962:17;17955:47;18019:131;18145:4;18019:131;:::i;:::-;18011:139;;17738:419;;;:::o;18163:168::-;18303:20;18299:1;18291:6;18287:14;18280:44;18163:168;:::o;18337:366::-;18479:3;18500:67;18564:2;18559:3;18500:67;:::i;:::-;18493:74;;18576:93;18665:3;18576:93;:::i;:::-;18694:2;18689:3;18685:12;18678:19;;18337:366;;;:::o;18709:419::-;18875:4;18913:2;18902:9;18898:18;18890:26;;18962:9;18956:4;18952:20;18948:1;18937:9;18933:17;18926:47;18990:131;19116:4;18990:131;:::i;:::-;18982:139;;18709:419;;;:::o;19134:224::-;19274:34;19270:1;19262:6;19258:14;19251:58;19343:7;19338:2;19330:6;19326:15;19319:32;19134:224;:::o;19364:366::-;19506:3;19527:67;19591:2;19586:3;19527:67;:::i;:::-;19520:74;;19603:93;19692:3;19603:93;:::i;:::-;19721:2;19716:3;19712:12;19705:19;;19364:366;;;:::o;19736:419::-;19902:4;19940:2;19929:9;19925:18;19917:26;;19989:9;19983:4;19979:20;19975:1;19964:9;19960:17;19953:47;20017:131;20143:4;20017:131;:::i;:::-;20009:139;;19736:419;;;:::o;20161:170::-;20301:22;20297:1;20289:6;20285:14;20278:46;20161:170;:::o;20337:366::-;20479:3;20500:67;20564:2;20559:3;20500:67;:::i;:::-;20493:74;;20576:93;20665:3;20576:93;:::i;:::-;20694:2;20689:3;20685:12;20678:19;;20337:366;;;:::o;20709:419::-;20875:4;20913:2;20902:9;20898:18;20890:26;;20962:9;20956:4;20952:20;20948:1;20937:9;20933:17;20926:47;20990:131;21116:4;20990:131;:::i;:::-;20982:139;;20709:419;;;:::o;21134:223::-;21274:34;21270:1;21262:6;21258:14;21251:58;21343:6;21338:2;21330:6;21326:15;21319:31;21134:223;:::o;21363:366::-;21505:3;21526:67;21590:2;21585:3;21526:67;:::i;:::-;21519:74;;21602:93;21691:3;21602:93;:::i;:::-;21720:2;21715:3;21711:12;21704:19;;21363:366;;;:::o;21735:419::-;21901:4;21939:2;21928:9;21924:18;21916:26;;21988:9;21982:4;21978:20;21974:1;21963:9;21959:17;21952:47;22016:131;22142:4;22016:131;:::i;:::-;22008:139;;21735:419;;;:::o;22160:221::-;22300:34;22296:1;22288:6;22284:14;22277:58;22369:4;22364:2;22356:6;22352:15;22345:29;22160:221;:::o;22387:366::-;22529:3;22550:67;22614:2;22609:3;22550:67;:::i;:::-;22543:74;;22626:93;22715:3;22626:93;:::i;:::-;22744:2;22739:3;22735:12;22728:19;;22387:366;;;:::o;22759:419::-;22925:4;22963:2;22952:9;22948:18;22940:26;;23012:9;23006:4;23002:20;22998:1;22987:9;22983:17;22976:47;23040:131;23166:4;23040:131;:::i;:::-;23032:139;;22759:419;;;:::o;23184:224::-;23324:34;23320:1;23312:6;23308:14;23301:58;23393:7;23388:2;23380:6;23376:15;23369:32;23184:224;:::o;23414:366::-;23556:3;23577:67;23641:2;23636:3;23577:67;:::i;:::-;23570:74;;23653:93;23742:3;23653:93;:::i;:::-;23771:2;23766:3;23762:12;23755:19;;23414:366;;;:::o;23786:419::-;23952:4;23990:2;23979:9;23975:18;23967:26;;24039:9;24033:4;24029:20;24025:1;24014:9;24010:17;24003:47;24067:131;24193:4;24067:131;:::i;:::-;24059:139;;23786:419;;;:::o;24211:222::-;24351:34;24347:1;24339:6;24335:14;24328:58;24420:5;24415:2;24407:6;24403:15;24396:30;24211:222;:::o;24439:366::-;24581:3;24602:67;24666:2;24661:3;24602:67;:::i;:::-;24595:74;;24678:93;24767:3;24678:93;:::i;:::-;24796:2;24791:3;24787:12;24780:19;;24439:366;;;:::o;24811:419::-;24977:4;25015:2;25004:9;25000:18;24992:26;;25064:9;25058:4;25054:20;25050:1;25039:9;25035:17;25028:47;25092:131;25218:4;25092:131;:::i;:::-;25084:139;;24811:419;;;:::o;25236:225::-;25376:34;25372:1;25364:6;25360:14;25353:58;25445:8;25440:2;25432:6;25428:15;25421:33;25236:225;:::o;25467:366::-;25609:3;25630:67;25694:2;25689:3;25630:67;:::i;:::-;25623:74;;25706:93;25795:3;25706:93;:::i;:::-;25824:2;25819:3;25815:12;25808:19;;25467:366;;;:::o;25839:419::-;26005:4;26043:2;26032:9;26028:18;26020:26;;26092:9;26086:4;26082:20;26078:1;26067:9;26063:17;26056:47;26120:131;26246:4;26120:131;:::i;:::-;26112:139;;25839:419;;;:::o;26264:220::-;26404:34;26400:1;26392:6;26388:14;26381:58;26473:3;26468:2;26460:6;26456:15;26449:28;26264:220;:::o;26490:366::-;26632:3;26653:67;26717:2;26712:3;26653:67;:::i;:::-;26646:74;;26729:93;26818:3;26729:93;:::i;:::-;26847:2;26842:3;26838:12;26831:19;;26490:366;;;:::o;26862:419::-;27028:4;27066:2;27055:9;27051:18;27043:26;;27115:9;27109:4;27105:20;27101:1;27090:9;27086:17;27079:47;27143:131;27269:4;27143:131;:::i;:::-;27135:139;;26862:419;;;:::o;27287:221::-;27427:34;27423:1;27415:6;27411:14;27404:58;27496:4;27491:2;27483:6;27479:15;27472:29;27287:221;:::o;27514:366::-;27656:3;27677:67;27741:2;27736:3;27677:67;:::i;:::-;27670:74;;27753:93;27842:3;27753:93;:::i;:::-;27871:2;27866:3;27862:12;27855:19;;27514:366;;;:::o;27886:419::-;28052:4;28090:2;28079:9;28075:18;28067:26;;28139:9;28133:4;28129:20;28125:1;28114:9;28110:17;28103:47;28167:131;28293:4;28167:131;:::i;:::-;28159:139;;27886:419;;;:::o;28311:194::-;28351:4;28371:20;28389:1;28371:20;:::i;:::-;28366:25;;28405:20;28423:1;28405:20;:::i;:::-;28400:25;;28449:1;28446;28442:9;28434:17;;28473:1;28467:4;28464:11;28461:37;;;28478:18;;:::i;:::-;28461:37;28311:194;;;;:::o;28511:179::-;28651:31;28647:1;28639:6;28635:14;28628:55;28511:179;:::o;28696:366::-;28838:3;28859:67;28923:2;28918:3;28859:67;:::i;:::-;28852:74;;28935:93;29024:3;28935:93;:::i;:::-;29053:2;29048:3;29044:12;29037:19;;28696:366;;;:::o;29068:419::-;29234:4;29272:2;29261:9;29257:18;29249:26;;29321:9;29315:4;29311:20;29307:1;29296:9;29292:17;29285:47;29349:131;29475:4;29349:131;:::i;:::-;29341:139;;29068:419;;;:::o;29493:180::-;29541:77;29538:1;29531:88;29638:4;29635:1;29628:15;29662:4;29659:1;29652:15;29679:185;29719:1;29736:20;29754:1;29736:20;:::i;:::-;29731:25;;29770:20;29788:1;29770:20;:::i;:::-;29765:25;;29809:1;29799:35;;29814:18;;:::i;:::-;29799:35;29856:1;29853;29849:9;29844:14;;29679:185;;;;:::o",
	"source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JMToken is ERC20 {\n    event TokensBought(address indexed _account, uint256 amount); // 펀딩이후 토큰 클레임 \n    event OwnerAction(); // 오너의 액션\n    event FundsMoved(); // 펀딩 종료 \n\n    uint256 public MAX_SUPPLY; // 발행량 \n    uint256 public constant TAX = 1; //  수수료 tx 1%\n    uint256 public totalContributed; // 총 이더 기부금액 \n    bool public isContractPaused; // 컨트랙트 동작 상태\n    bool public fundsAlreadyMoved;\n    bool public isTaxOn = true; // 현재 수수료 on off \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 비상금 계좌!\n    address public Router;\n    address public MapleNFT;\n    address public MapleItems;\n\n    mapping(address => uint256) public balancesToClaim; // 투자금1:100 비율==jmt\n    mapping(address => uint256) public contributionsOf; // 실제 기부금 eth\n    mapping(address => bool) public isWhitelisted;\n\n    constructor(address payable treasury) ERC20(\"JMT Token\", \"JMT\") {\n        MAX_SUPPLY = 1000000 * 10**decimals(); \n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n        isWhitelisted[owner] = true; // 오너 자동 화리  \n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    modifier mapleNFTOnly(){\n        require(msg.sender == MapleNFT || msg.sender == MapleItems, \"MAPLENFT_ONLY\");\n        _;\n    }\n    // router 컨트랙트에서만 실행\n    modifier routerOnly() {\n        require(msg.sender == Router || msg.sender == MapleNFT || msg.sender == MapleItems, \"ROUTER_OR_MAPLE_ONLY\");\n        _;\n    }\n    // 펀딩 종료 체크 \n    modifier areFundsMoved() {\n        require(!fundsAlreadyMoved, \"FUNDS_MOVED_TO_LP\");\n        _;\n    }\n\n    // 컨트랙트 상태 \n    modifier isPaused() {\n        require(!isContractPaused, \"CONTRACT_PAUSED\");\n        _;\n    }\n\n\n    // 첫 계약 제로 계정 배포자(0x0)와 같은지 확인, 딱 한번만 실행가능\n    function setRouterAddress(address _router) external  ownerOnly {\n        require(address(Router) == address(0), \"WRITE_ONCE!\"); // 0x00000000\n        Router = _router;\n    }\n\n     function setMapleNFTAddress(address _mapleNft) external  ownerOnly {\n        require(address(MapleNFT) == address(0), \"WRITE_ONCE!\");\n        MapleNFT = _mapleNft;\n    }\n    function setMapleItemsAddress(address _mapleItems ) external  ownerOnly {\n        require(address(MapleItems) == address(0), \"WRITE_ONCE!\");\n        MapleItems = _mapleItems;\n    }\n  \n    // 이더 펀딩 \n    function contribute() external payable isPaused areFundsMoved {\n\n        //교환 비율이 1:100\n        uint256 tokenAmount = msg.value * 100;\n        balancesToClaim[msg.sender] += tokenAmount;\n        contributionsOf[msg.sender] += msg.value;\n        totalContributed += msg.value; \n        emit TokensBought(msg.sender, tokenAmount);\n    }\n    \n    // 펀딩 jmt토큰 클레임 \n    function claimTokens() external isPaused areFundsMoved {\n        require(balancesToClaim[msg.sender] > 0, \"NO_AVAILABLE_FUNDS\"); // 수령이 가능한 토큰을 보유하고있는지 체크 \n        uint256 tokensToClaim = balancesToClaim[msg.sender];\n        balancesToClaim[msg.sender] = 0;\n\n        super._transfer(address(this), msg.sender, tokensToClaim); // 컨트랙트 -> sender 전송\n    }\n\n    //컨트랙트 pause스위치 \n    function togglePauseContract() external ownerOnly {\n        isContractPaused = !isContractPaused;\n        emit OwnerAction();\n    }\n\n    // tx스위치 기본 : true\n    function toggleTax() external ownerOnly {\n        isTaxOn = !isTaxOn;\n        emit OwnerAction();\n    }\n\n    // 화리에 유저 추가\n    function addToWhitelist(address account) external ownerOnly {\n        isWhitelisted[account] = true;\n    }\n\n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        uint256 amountToTake;\n        // tx계산\n        if (isTaxOn) {\n            amountToTake = (TAX * amount) / 100;\n        }\n        uint256 amountToTransfer = amount - amountToTake;\n        // 수수료를 뺀만큼 전송 \n        super._transfer(sender, recipient, amountToTransfer);\n        // 수수료는 비상금으로 축적\n        super._transfer(sender, treasuryWallet, amountToTake); \n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    function marketBurn(address account, uint256 amount) external mapleNFTOnly {\n        _burn(account, amount);\n\n    }\n\n    //tranferfrom에서 권한 부여\n    //spender에게 토큰 거래 제한\n    //라우터에서만 호출 가능 외부 컨트랙트를 통한 호출x \n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount)  \n        public routerOnly returns (bool) {\n        // spender에게 토큰 사용 허용 토큰양 추척해서 거래 제한 ㄱ \n        // allowance 현재 제한 해제된 토큰 상황 return \n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 펀딩 금액 -> lp로 전송,  최초 리저브생성 \n    function sendLiquidityToLPContract(LiquidityPool liquidityPool) external ownerOnly areFundsMoved\n    {\n        fundsAlreadyMoved = true; //클레임불가\n\n        // 이더 기부금 * 100 jmt 에어드랍\n        uint256 jmtCoinAmountToTransfer = totalContributed * 100;\n\n        // lp풀 JMT전송 \n        super._transfer(\n            address(this),\n            address(liquidityPool),\n            jmtCoinAmountToTransfer\n        );\n\n        //msg.value = totalContributed, 리저브 생성, 이더전송\n        liquidityPool.deposit{value: totalContributed}(\n            jmtCoinAmountToTransfer,\n            address(this)\n        );\n\n        //펀딩 reserve_setting\n        liquidityPool.setFundedReserve();\n\n        sendRemainingFundsToTreasury();\n    }\n    //펀딩 이후 남은 토큰 재무 관련 지갑 전송\n    //일단은 오너지갑으로, 소프트런 각?\n    //실제 서비스시 오너지갑이라면 전쟁\n    function sendRemainingFundsToTreasury() internal {\n        uint256 remainingJMT = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingJMT);\n        emit FundsMoved();\n    }\n}",
	"sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/JMToken.sol",
	"ast": {
	  "absolutePath": "project:/contracts/JMToken.sol",
	  "exportedSymbols": {
		"Babylonian": [
		  5039
		],
		"Context": [
		  4142
		],
		"ERC20": [
		  2325
		],
		"IERC20": [
		  2403
		],
		"IERC20Metadata": [
		  2428
		],
		"JMToken": [
		  5807
		],
		"LPT": [
		  5860
		],
		"LiquidityPool": [
		  6337
		],
		"Math": [
		  4982
		],
		"Ownable": [
		  112
		]
	  },
	  "id": 5808,
	  "license": "Unlicense",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 5202,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".0"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "37:23:25"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "id": 5203,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 5808,
		  "sourceUnit": 2326,
		  "src": "62:55:25",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "project:/contracts/LiquidityPool.sol",
		  "file": "./LiquidityPool.sol",
		  "id": 5204,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 5808,
		  "sourceUnit": 6338,
		  "src": "118:29:25",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 5205,
				"name": "ERC20",
				"nameLocations": [
				  "169:5:25"
				],
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2325,
				"src": "169:5:25"
			  },
			  "id": 5206,
			  "nodeType": "InheritanceSpecifier",
			  "src": "169:5:25"
			}
		  ],
		  "canonicalName": "JMToken",
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 5807,
		  "linearizedBaseContracts": [
			5807,
			2325,
			2428,
			2403,
			4142
		  ],
		  "name": "JMToken",
		  "nameLocation": "158:7:25",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "anonymous": false,
			  "eventSelector": "745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a",
			  "id": 5212,
			  "name": "TokensBought",
			  "nameLocation": "187:12:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5211,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5208,
					"indexed": true,
					"mutability": "mutable",
					"name": "_account",
					"nameLocation": "216:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5212,
					"src": "200:24:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5207,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "200:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5210,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "234:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5212,
					"src": "226:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5209,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "226:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "199:42:25"
			  },
			  "src": "181:61:25"
			},
			{
			  "anonymous": false,
			  "eventSelector": "e454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3",
			  "id": 5214,
			  "name": "OwnerAction",
			  "nameLocation": "287:11:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5213,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "298:2:25"
			  },
			  "src": "281:20:25"
			},
			{
			  "anonymous": false,
			  "eventSelector": "a01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1",
			  "id": 5216,
			  "name": "FundsMoved",
			  "nameLocation": "332:10:25",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5215,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "342:2:25"
			  },
			  "src": "326:19:25"
			},
			{
			  "constant": false,
			  "functionSelector": "32cb6b0c",
			  "id": 5218,
			  "mutability": "mutable",
			  "name": "MAX_SUPPLY",
			  "nameLocation": "384:10:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "369:25:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5217,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "369:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": true,
			  "functionSelector": "68f58b03",
			  "id": 5221,
			  "mutability": "constant",
			  "name": "TAX",
			  "nameLocation": "438:3:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "414:31:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5219,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "414:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "31",
				"id": 5220,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "444:1:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_1_by_1",
				  "typeString": "int_const 1"
				},
				"value": "1"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "023f4147",
			  "id": 5223,
			  "mutability": "mutable",
			  "name": "totalContributed",
			  "nameLocation": "486:16:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "471:31:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5222,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "471:7:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f4ab2928",
			  "id": 5225,
			  "mutability": "mutable",
			  "name": "isContractPaused",
			  "nameLocation": "548:16:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "536:28:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5224,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "536:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "65acacfe",
			  "id": 5227,
			  "mutability": "mutable",
			  "name": "fundsAlreadyMoved",
			  "nameLocation": "612:17:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "600:29:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5226,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "600:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "be07d17d",
			  "id": 5230,
			  "mutability": "mutable",
			  "name": "isTaxOn",
			  "nameLocation": "647:7:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "635:26:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5228,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "635:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "value": {
				"hexValue": "74727565",
				"id": 5229,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "bool",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "657:4:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				},
				"value": "true"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "8da5cb5b",
			  "id": 5232,
			  "mutability": "mutable",
			  "name": "owner",
			  "nameLocation": "710:5:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "695:20:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5231,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "695:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "4626402b",
			  "id": 5234,
			  "mutability": "mutable",
			  "name": "treasuryWallet",
			  "nameLocation": "755:14:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "732:37:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address_payable",
				"typeString": "address payable"
			  },
			  "typeName": {
				"id": 5233,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "732:15:25",
				"stateMutability": "payable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address_payable",
				  "typeString": "address payable"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f6d7eade",
			  "id": 5236,
			  "mutability": "mutable",
			  "name": "Router",
			  "nameLocation": "811:6:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "796:21:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5235,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "796:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "1b9631fc",
			  "id": 5238,
			  "mutability": "mutable",
			  "name": "MapleNFT",
			  "nameLocation": "838:8:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "823:23:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5237,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "823:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "6eefec11",
			  "id": 5240,
			  "mutability": "mutable",
			  "name": "MapleItems",
			  "nameLocation": "867:10:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "852:25:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5239,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "852:7:25",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "b70f21c7",
			  "id": 5244,
			  "mutability": "mutable",
			  "name": "balancesToClaim",
			  "nameLocation": "919:15:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "884:50:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5243,
				"keyType": {
				  "id": 5241,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "892:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "884:27:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5242,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "903:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af0dbc1",
			  "id": 5248,
			  "mutability": "mutable",
			  "name": "contributionsOf",
			  "nameLocation": "1005:15:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "970:50:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5247,
				"keyType": {
				  "id": 5245,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "978:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "970:27:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5246,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "989:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af32abf",
			  "id": 5252,
			  "mutability": "mutable",
			  "name": "isWhitelisted",
			  "nameLocation": "1082:13:25",
			  "nodeType": "VariableDeclaration",
			  "scope": 5807,
			  "src": "1050:45:25",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 5251,
				"keyType": {
				  "id": 5249,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1058:7:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1050:24:25",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 5250,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "1069:4:25",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5293,
				"nodeType": "Block",
				"src": "1166:259:25",
				"statements": [
				  {
					"expression": {
					  "id": 5268,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5261,
						"name": "MAX_SUPPLY",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5218,
						"src": "1176:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 5267,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "31303030303030",
						  "id": 5262,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1189:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_1000000_by_1",
							"typeString": "int_const 1000000"
						  },
						  "value": "1000000"
						},
						"nodeType": "BinaryOperation",
						"operator": "*",
						"rightExpression": {
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5266,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"hexValue": "3130",
							"id": 5263,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "1199:2:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_10_by_1",
							  "typeString": "int_const 10"
							},
							"value": "10"
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "**",
						  "rightExpression": {
							"arguments": [],
							"expression": {
							  "argumentTypes": [],
							  "id": 5264,
							  "name": "decimals",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1814,
							  "src": "1203:8:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								"typeString": "function () view returns (uint8)"
							  }
							},
							"id": 5265,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "1203:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "1199:14:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "1189:24:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1176:37:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5269,
					"nodeType": "ExpressionStatement",
					"src": "1176:37:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5273,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "1238:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5272,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1230:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5271,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "1230:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5274,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1230:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5275,
						  "name": "MAX_SUPPLY",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5218,
						  "src": "1245:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5270,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2142,
						"src": "1224:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5276,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1224:32:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5277,
					"nodeType": "ExpressionStatement",
					"src": "1224:32:25"
				  },
				  {
					"expression": {
					  "id": 5281,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5278,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5232,
						"src": "1267:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 5279,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1275:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5280,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "1279:6:25",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1275:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1267:18:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5282,
					"nodeType": "ExpressionStatement",
					"src": "1267:18:25"
				  },
				  {
					"expression": {
					  "id": 5285,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5283,
						"name": "treasuryWallet",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5234,
						"src": "1296:14:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5284,
						"name": "treasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5254,
						"src": "1313:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "1296:25:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"id": 5286,
					"nodeType": "ExpressionStatement",
					"src": "1296:25:25"
				  },
				  {
					"expression": {
					  "id": 5291,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5287,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5252,
						  "src": "1365:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5289,
						"indexExpression": {
						  "id": 5288,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5232,
						  "src": "1379:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "1365:20:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5290,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1388:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "1365:27:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5292,
					"nodeType": "ExpressionStatement",
					"src": "1365:27:25"
				  }
				]
			  },
			  "id": 5294,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "hexValue": "4a4d5420546f6b656e",
					  "id": 5257,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1146:11:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_a9a53302e4bb530eeacfd21a7a31e566429a171ca9336abbe7122b03852140c5",
						"typeString": "literal_string \"JMT Token\""
					  },
					  "value": "JMT Token"
					},
					{
					  "hexValue": "4a4d54",
					  "id": 5258,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1159:5:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_5dd6c48417bf5763178b941ef6b12f7c9a2600518281e43bd45fc179a5eeda5c",
						"typeString": "literal_string \"JMT\""
					  },
					  "value": "JMT"
					}
				  ],
				  "id": 5259,
				  "kind": "baseConstructorSpecifier",
				  "modifierName": {
					"id": 5256,
					"name": "ERC20",
					"nameLocations": [
					  "1140:5:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2325,
					"src": "1140:5:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1140:25:25"
				}
			  ],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5255,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5254,
					"mutability": "mutable",
					"name": "treasury",
					"nameLocation": "1130:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5294,
					"src": "1114:24:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address_payable",
					  "typeString": "address payable"
					},
					"typeName": {
					  "id": 5253,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1114:15:25",
					  "stateMutability": "payable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1113:26:25"
			  },
			  "returnParameters": {
				"id": 5260,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1166:0:25"
			  },
			  "scope": 5807,
			  "src": "1102:323:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5305,
				"nodeType": "Block",
				"src": "1452:70:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5300,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 5297,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "1470:3:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 5298,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberLocation": "1474:6:25",
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "1470:10:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 5299,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5232,
							"src": "1484:5:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "1470:19:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "id": 5301,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1491:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  },
						  "value": "OWNER_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  }
						],
						"id": 5296,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1462:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5302,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1462:42:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5303,
					"nodeType": "ExpressionStatement",
					"src": "1462:42:25"
				  },
				  {
					"id": 5304,
					"nodeType": "PlaceholderStatement",
					"src": "1514:1:25"
				  }
				]
			  },
			  "id": 5306,
			  "name": "ownerOnly",
			  "nameLocation": "1440:9:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5295,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1449:2:25"
			  },
			  "src": "1431:91:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5322,
				"nodeType": "Block",
				"src": "1551:104:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5317,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5312,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5309,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1569:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5310,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1573:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1569:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5311,
							  "name": "MapleNFT",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5238,
							  "src": "1583:8:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1569:22:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5316,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5313,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1595:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5314,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1599:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1595:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5315,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5240,
							  "src": "1609:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1595:24:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1569:50:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "id": 5318,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1621:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  },
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  }
						],
						"id": 5308,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1561:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5319,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1561:76:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5320,
					"nodeType": "ExpressionStatement",
					"src": "1561:76:25"
				  },
				  {
					"id": 5321,
					"nodeType": "PlaceholderStatement",
					"src": "1647:1:25"
				  }
				]
			  },
			  "id": 5323,
			  "name": "mapleNFTOnly",
			  "nameLocation": "1537:12:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5307,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1549:2:25"
			  },
			  "src": "1528:127:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5344,
				"nodeType": "Block",
				"src": "1725:135:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5339,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"id": 5334,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5329,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5326,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1743:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5327,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1747:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1743:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5328,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5236,
								"src": "1757:6:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1743:20:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "||",
							"rightExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5333,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5330,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1767:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5331,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1771:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1767:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5332,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5238,
								"src": "1781:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1767:22:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"src": "1743:46:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5338,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5335,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1793:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5336,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1797:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1793:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5337,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5240,
							  "src": "1807:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1793:24:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1743:74:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "id": 5340,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1819:22:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  },
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  }
						],
						"id": 5325,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1735:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5341,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1735:107:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5342,
					"nodeType": "ExpressionStatement",
					"src": "1735:107:25"
				  },
				  {
					"id": 5343,
					"nodeType": "PlaceholderStatement",
					"src": "1852:1:25"
				  }
				]
			  },
			  "id": 5345,
			  "name": "routerOnly",
			  "nameLocation": "1712:10:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5324,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1722:2:25"
			  },
			  "src": "1703:157:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5354,
				"nodeType": "Block",
				"src": "1919:76:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5349,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "1937:18:25",
						  "subExpression": {
							"id": 5348,
							"name": "fundsAlreadyMoved",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5227,
							"src": "1938:17:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "id": 5350,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1957:19:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  },
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  }
						],
						"id": 5347,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1929:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5351,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1929:48:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5352,
					"nodeType": "ExpressionStatement",
					"src": "1929:48:25"
				  },
				  {
					"id": 5353,
					"nodeType": "PlaceholderStatement",
					"src": "1987:1:25"
				  }
				]
			  },
			  "id": 5355,
			  "name": "areFundsMoved",
			  "nameLocation": "1903:13:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5346,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1916:2:25"
			  },
			  "src": "1894:101:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5364,
				"nodeType": "Block",
				"src": "2049:73:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5359,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2067:17:25",
						  "subExpression": {
							"id": 5358,
							"name": "isContractPaused",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5225,
							"src": "2068:16:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "id": 5360,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2086:17:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  },
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  }
						],
						"id": 5357,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2059:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5361,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2059:45:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5362,
					"nodeType": "ExpressionStatement",
					"src": "2059:45:25"
				  },
				  {
					"id": 5363,
					"nodeType": "PlaceholderStatement",
					"src": "2114:1:25"
				  }
				]
			  },
			  "id": 5365,
			  "name": "isPaused",
			  "nameLocation": "2038:8:25",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5356,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2046:2:25"
			  },
			  "src": "2029:93:25",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5389,
				"nodeType": "Block",
				"src": "2287:110:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5381,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5375,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5236,
								"src": "2313:6:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5374,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2305:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5373,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2305:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5376,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2305:15:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5379,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2332:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5378,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2324:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5377,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2324:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5380,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2324:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2305:29:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5382,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2336:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5372,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2297:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5383,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2297:53:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5384,
					"nodeType": "ExpressionStatement",
					"src": "2297:53:25"
				  },
				  {
					"expression": {
					  "id": 5387,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5385,
						"name": "Router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5236,
						"src": "2374:6:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5386,
						"name": "_router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5367,
						"src": "2383:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2374:16:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5388,
					"nodeType": "ExpressionStatement",
					"src": "2374:16:25"
				  }
				]
			  },
			  "functionSelector": "41cb87fc",
			  "id": 5390,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5370,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5369,
					"name": "ownerOnly",
					"nameLocations": [
					  "2277:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "2277:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2277:9:25"
				}
			  ],
			  "name": "setRouterAddress",
			  "nameLocation": "2233:16:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5368,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5367,
					"mutability": "mutable",
					"name": "_router",
					"nameLocation": "2258:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5390,
					"src": "2250:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5366,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2250:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2249:17:25"
			  },
			  "returnParameters": {
				"id": 5371,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2287:0:25"
			  },
			  "scope": 5807,
			  "src": "2224:173:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5414,
				"nodeType": "Block",
				"src": "2471:102:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5406,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5400,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5238,
								"src": "2497:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5399,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2489:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5398,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2489:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5401,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2489:17:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5404,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2518:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5403,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2510:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5402,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2510:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5405,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2510:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2489:31:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5407,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2522:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5397,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2481:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5408,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2481:55:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5409,
					"nodeType": "ExpressionStatement",
					"src": "2481:55:25"
				  },
				  {
					"expression": {
					  "id": 5412,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5410,
						"name": "MapleNFT",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5238,
						"src": "2546:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5411,
						"name": "_mapleNft",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5392,
						"src": "2557:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2546:20:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5413,
					"nodeType": "ExpressionStatement",
					"src": "2546:20:25"
				  }
				]
			  },
			  "functionSelector": "83925460",
			  "id": 5415,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5395,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5394,
					"name": "ownerOnly",
					"nameLocations": [
					  "2461:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "2461:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2461:9:25"
				}
			  ],
			  "name": "setMapleNFTAddress",
			  "nameLocation": "2413:18:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5393,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5392,
					"mutability": "mutable",
					"name": "_mapleNft",
					"nameLocation": "2440:9:25",
					"nodeType": "VariableDeclaration",
					"scope": 5415,
					"src": "2432:17:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5391,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2432:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2431:19:25"
			  },
			  "returnParameters": {
				"id": 5396,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2471:0:25"
			  },
			  "scope": 5807,
			  "src": "2404:169:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5439,
				"nodeType": "Block",
				"src": "2650:108:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5431,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5425,
								"name": "MapleItems",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5240,
								"src": "2676:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5424,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2668:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5423,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2668:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5426,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2668:19:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5429,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2699:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5428,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2691:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5427,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2691:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5430,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2691:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2668:33:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5432,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2703:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5422,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2660:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5433,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2660:57:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5434,
					"nodeType": "ExpressionStatement",
					"src": "2660:57:25"
				  },
				  {
					"expression": {
					  "id": 5437,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5435,
						"name": "MapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5240,
						"src": "2727:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5436,
						"name": "_mapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5417,
						"src": "2740:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2727:24:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5438,
					"nodeType": "ExpressionStatement",
					"src": "2727:24:25"
				  }
				]
			  },
			  "functionSelector": "ec71ef89",
			  "id": 5440,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5420,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5419,
					"name": "ownerOnly",
					"nameLocations": [
					  "2640:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "2640:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2640:9:25"
				}
			  ],
			  "name": "setMapleItemsAddress",
			  "nameLocation": "2587:20:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5418,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5417,
					"mutability": "mutable",
					"name": "_mapleItems",
					"nameLocation": "2616:11:25",
					"nodeType": "VariableDeclaration",
					"scope": 5440,
					"src": "2608:19:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5416,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2608:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2607:22:25"
			  },
			  "returnParameters": {
				"id": 5421,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2650:0:25"
			  },
			  "scope": 5807,
			  "src": "2578:180:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5480,
				"nodeType": "Block",
				"src": "2850:282:25",
				"statements": [
				  {
					"assignments": [
					  5448
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5448,
						"mutability": "mutable",
						"name": "tokenAmount",
						"nameLocation": "2902:11:25",
						"nodeType": "VariableDeclaration",
						"scope": 5480,
						"src": "2894:19:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5447,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "2894:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5453,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5452,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 5449,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "2916:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5450,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "2920:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "2916:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5451,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "2928:3:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "2916:15:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "2894:37:25"
				  },
				  {
					"expression": {
					  "id": 5459,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5454,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5244,
						  "src": "2941:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5457,
						"indexExpression": {
						  "expression": {
							"id": 5455,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "2957:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5456,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "2961:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "2957:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2941:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"id": 5458,
						"name": "tokenAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5448,
						"src": "2972:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "2941:42:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5460,
					"nodeType": "ExpressionStatement",
					"src": "2941:42:25"
				  },
				  {
					"expression": {
					  "id": 5467,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5461,
						  "name": "contributionsOf",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5248,
						  "src": "2993:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5464,
						"indexExpression": {
						  "expression": {
							"id": 5462,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3009:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5463,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3013:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3009:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "2993:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5465,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3024:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5466,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3028:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3024:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "2993:40:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5468,
					"nodeType": "ExpressionStatement",
					"src": "2993:40:25"
				  },
				  {
					"expression": {
					  "id": 5472,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5469,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5223,
						"src": "3043:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5470,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3063:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5471,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3067:5:25",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3063:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3043:29:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5473,
					"nodeType": "ExpressionStatement",
					"src": "3043:29:25"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 5475,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3101:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5476,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3105:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3101:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5477,
						  "name": "tokenAmount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5448,
						  "src": "3113:11:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5474,
						"name": "TokensBought",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5212,
						"src": "3088:12:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5478,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3088:37:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5479,
					"nodeType": "EmitStatement",
					"src": "3083:42:25"
				  }
				]
			  },
			  "functionSelector": "d7bb99ba",
			  "id": 5481,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5443,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5442,
					"name": "isPaused",
					"nameLocations": [
					  "2827:8:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5365,
					"src": "2827:8:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2827:8:25"
				},
				{
				  "id": 5445,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5444,
					"name": "areFundsMoved",
					"nameLocations": [
					  "2836:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5355,
					"src": "2836:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2836:13:25"
				}
			  ],
			  "name": "contribute",
			  "nameLocation": "2797:10:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5441,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2807:2:25"
			  },
			  "returnParameters": {
				"id": 5446,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2850:0:25"
			  },
			  "scope": 5807,
			  "src": "2788:344:25",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5524,
				"nodeType": "Block",
				"src": "3232:345:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5494,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 5489,
							  "name": "balancesToClaim",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5244,
							  "src": "3250:15:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
								"typeString": "mapping(address => uint256)"
							  }
							},
							"id": 5492,
							"indexExpression": {
							  "expression": {
								"id": 5490,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "3266:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5491,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "3270:6:25",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "3266:10:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "3250:27:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": ">",
						  "rightExpression": {
							"hexValue": "30",
							"id": 5493,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "3280:1:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_0_by_1",
							  "typeString": "int_const 0"
							},
							"value": "0"
						  },
						  "src": "3250:31:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "id": 5495,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3283:20:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  },
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  }
						],
						"id": 5488,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3242:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5496,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3242:62:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5497,
					"nodeType": "ExpressionStatement",
					"src": "3242:62:25"
				  },
				  {
					"assignments": [
					  5499
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5499,
						"mutability": "mutable",
						"name": "tokensToClaim",
						"nameLocation": "3385:13:25",
						"nodeType": "VariableDeclaration",
						"scope": 5524,
						"src": "3377:21:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5498,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3377:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5504,
					"initialValue": {
					  "baseExpression": {
						"id": 5500,
						"name": "balancesToClaim",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5244,
						"src": "3401:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 5503,
					  "indexExpression": {
						"expression": {
						  "id": 5501,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3417:3:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5502,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3421:6:25",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "3417:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "3401:27:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3377:51:25"
				  },
				  {
					"expression": {
					  "id": 5510,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5505,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5244,
						  "src": "3438:15:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5508,
						"indexExpression": {
						  "expression": {
							"id": 5506,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3454:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5507,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3458:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3454:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3438:27:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 5509,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3468:1:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3438:31:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5511,
					"nodeType": "ExpressionStatement",
					"src": "3438:31:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5517,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "3504:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5516,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "3496:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5515,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "3496:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5518,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "3496:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 5519,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3511:3:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5520,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3515:6:25",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3511:10:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5521,
						  "name": "tokensToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5499,
						  "src": "3523:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5512,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "3480:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5807_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5514,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3486:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "3480:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5522,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3480:57:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5523,
					"nodeType": "ExpressionStatement",
					"src": "3480:57:25"
				  }
				]
			  },
			  "functionSelector": "48c54b9d",
			  "id": 5525,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5484,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5483,
					"name": "isPaused",
					"nameLocations": [
					  "3209:8:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5365,
					"src": "3209:8:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3209:8:25"
				},
				{
				  "id": 5486,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5485,
					"name": "areFundsMoved",
					"nameLocations": [
					  "3218:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5355,
					"src": "3218:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3218:13:25"
				}
			  ],
			  "name": "claimTokens",
			  "nameLocation": "3186:11:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5482,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3197:2:25"
			  },
			  "returnParameters": {
				"id": 5487,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3232:0:25"
			  },
			  "scope": 5807,
			  "src": "3177:400:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5538,
				"nodeType": "Block",
				"src": "3668:81:25",
				"statements": [
				  {
					"expression": {
					  "id": 5533,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5530,
						"name": "isContractPaused",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5225,
						"src": "3678:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5532,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "3697:17:25",
						"subExpression": {
						  "id": 5531,
						  "name": "isContractPaused",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5225,
						  "src": "3698:16:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "3678:36:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5534,
					"nodeType": "ExpressionStatement",
					"src": "3678:36:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5535,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5214,
						"src": "3729:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5536,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3729:13:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5537,
					"nodeType": "EmitStatement",
					"src": "3724:18:25"
				  }
				]
			  },
			  "functionSelector": "d1cabc35",
			  "id": 5539,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5528,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5527,
					"name": "ownerOnly",
					"nameLocations": [
					  "3658:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "3658:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3658:9:25"
				}
			  ],
			  "name": "togglePauseContract",
			  "nameLocation": "3627:19:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5526,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3646:2:25"
			  },
			  "returnParameters": {
				"id": 5529,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3668:0:25"
			  },
			  "scope": 5807,
			  "src": "3618:131:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5552,
				"nodeType": "Block",
				"src": "3828:63:25",
				"statements": [
				  {
					"expression": {
					  "id": 5547,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5544,
						"name": "isTaxOn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5230,
						"src": "3838:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5546,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "3848:8:25",
						"subExpression": {
						  "id": 5545,
						  "name": "isTaxOn",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5230,
						  "src": "3849:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "3838:18:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5548,
					"nodeType": "ExpressionStatement",
					"src": "3838:18:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5549,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5214,
						"src": "3871:11:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5550,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3871:13:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5551,
					"nodeType": "EmitStatement",
					"src": "3866:18:25"
				  }
				]
			  },
			  "functionSelector": "10bf6029",
			  "id": 5553,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5542,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5541,
					"name": "ownerOnly",
					"nameLocations": [
					  "3818:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "3818:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3818:9:25"
				}
			  ],
			  "name": "toggleTax",
			  "nameLocation": "3797:9:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5540,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3806:2:25"
			  },
			  "returnParameters": {
				"id": 5543,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3828:0:25"
			  },
			  "scope": 5807,
			  "src": "3788:103:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5566,
				"nodeType": "Block",
				"src": "3988:46:25",
				"statements": [
				  {
					"expression": {
					  "id": 5564,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5560,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5252,
						  "src": "3998:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5562,
						"indexExpression": {
						  "id": 5561,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5555,
						  "src": "4012:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3998:22:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5563,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "4023:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "3998:29:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5565,
					"nodeType": "ExpressionStatement",
					"src": "3998:29:25"
				  }
				]
			  },
			  "functionSelector": "e43252d7",
			  "id": 5567,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5558,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5557,
					"name": "ownerOnly",
					"nameLocations": [
					  "3978:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "3978:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3978:9:25"
				}
			  ],
			  "name": "addToWhitelist",
			  "nameLocation": "3937:14:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5556,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5555,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "3960:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5567,
					"src": "3952:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5554,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "3952:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3951:17:25"
			  },
			  "returnParameters": {
				"id": 5559,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3988:0:25"
			  },
			  "scope": 5807,
			  "src": "3928:106:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				2086
			  ],
			  "body": {
				"id": 5614,
				"nodeType": "Block",
				"src": "4128:412:25",
				"statements": [
				  {
					"assignments": [
					  5578
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5578,
						"mutability": "mutable",
						"name": "amountToTake",
						"nameLocation": "4146:12:25",
						"nodeType": "VariableDeclaration",
						"scope": 5614,
						"src": "4138:20:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5577,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4138:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5579,
					"nodeType": "VariableDeclarationStatement",
					"src": "4138:20:25"
				  },
				  {
					"condition": {
					  "id": 5580,
					  "name": "isTaxOn",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 5230,
					  "src": "4192:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5591,
					"nodeType": "IfStatement",
					"src": "4188:73:25",
					"trueBody": {
					  "id": 5590,
					  "nodeType": "Block",
					  "src": "4201:60:25",
					  "statements": [
						{
						  "expression": {
							"id": 5588,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "id": 5581,
							  "name": "amountToTake",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5578,
							  "src": "4215:12:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "commonType": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  },
							  "id": 5587,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"components": [
								  {
									"commonType": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									"id": 5584,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"leftExpression": {
									  "id": 5582,
									  "name": "TAX",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5221,
									  "src": "4231:3:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"nodeType": "BinaryOperation",
									"operator": "*",
									"rightExpression": {
									  "id": 5583,
									  "name": "amount",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5573,
									  "src": "4237:6:25",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"src": "4231:12:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"id": 5585,
								"isConstant": false,
								"isInlineArray": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "TupleExpression",
								"src": "4230:14:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "/",
							  "rightExpression": {
								"hexValue": "313030",
								"id": 5586,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "4247:3:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_100_by_1",
								  "typeString": "int_const 100"
								},
								"value": "100"
							  },
							  "src": "4230:20:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4215:35:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 5589,
						  "nodeType": "ExpressionStatement",
						  "src": "4215:35:25"
						}
					  ]
					}
				  },
				  {
					"assignments": [
					  5593
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5593,
						"mutability": "mutable",
						"name": "amountToTransfer",
						"nameLocation": "4278:16:25",
						"nodeType": "VariableDeclaration",
						"scope": 5614,
						"src": "4270:24:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5592,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4270:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5597,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5596,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5594,
						"name": "amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5573,
						"src": "4297:6:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 5595,
						"name": "amountToTake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5578,
						"src": "4306:12:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4297:21:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4270:48:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5601,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5569,
						  "src": "4386:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5602,
						  "name": "recipient",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5571,
						  "src": "4394:9:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5603,
						  "name": "amountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5593,
						  "src": "4405:16:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5598,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4370:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5807_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5600,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4376:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "4370:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5604,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4370:52:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5605,
					"nodeType": "ExpressionStatement",
					"src": "4370:52:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5609,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5569,
						  "src": "4495:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5610,
						  "name": "treasuryWallet",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5234,
						  "src": "4503:14:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						{
						  "id": 5611,
						  "name": "amountToTake",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5578,
						  "src": "4519:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5606,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4479:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5807_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5608,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4485:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "4479:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5612,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4479:53:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5613,
					"nodeType": "ExpressionStatement",
					"src": "4479:53:25"
				  }
				]
			  },
			  "id": 5615,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "_transfer",
			  "nameLocation": "4049:9:25",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 5575,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "4119:8:25"
			  },
			  "parameters": {
				"id": 5574,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5569,
					"mutability": "mutable",
					"name": "sender",
					"nameLocation": "4067:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5615,
					"src": "4059:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5568,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4059:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5571,
					"mutability": "mutable",
					"name": "recipient",
					"nameLocation": "4083:9:25",
					"nodeType": "VariableDeclaration",
					"scope": 5615,
					"src": "4075:17:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5570,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4075:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5573,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4102:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5615,
					"src": "4094:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5572,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4094:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4058:51:25"
			  },
			  "returnParameters": {
				"id": 5576,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4128:0:25"
			  },
			  "scope": 5807,
			  "src": "4040:500:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5654,
				"nodeType": "Block",
				"src": "4612:269:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5630,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5625,
							"name": "account",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5617,
							"src": "4630:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5628,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "4649:1:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5627,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "4641:7:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5626,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "4641:7:25",
								"typeDescriptions": {}
							  }
							},
							"id": 5629,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "4641:10:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "4630:21:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "id": 5631,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "4653:33:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  },
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  }
						],
						"id": 5624,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "4622:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5632,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4622:65:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5633,
					"nodeType": "ExpressionStatement",
					"src": "4622:65:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5640,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5638,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5635,
								"name": "totalSupply",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1824,
								"src": "4744:11:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								  "typeString": "function () view returns (uint256)"
								}
							  },
							  "id": 5636,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "4744:13:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "id": 5637,
							  "name": "amount",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5619,
							  "src": "4760:6:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4744:22:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"id": 5639,
							"name": "MAX_SUPPLY",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5218,
							"src": "4770:10:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "4744:36:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "id": 5641,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "4782:18:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  },
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  }
						],
						"id": 5634,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "4736:7:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5642,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4736:65:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5643,
					"nodeType": "ExpressionStatement",
					"src": "4736:65:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5645,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5617,
						  "src": "4841:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5651,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5646,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5619,
							"src": "4850:6:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5650,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5647,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "4859:2:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5648,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1814,
								"src": "4863:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5649,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "4863:10:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "4859:14:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "4850:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5644,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2142,
						"src": "4835:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5652,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4835:39:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5653,
					"nodeType": "ExpressionStatement",
					"src": "4835:39:25"
				  }
				]
			  },
			  "functionSelector": "40c10f19",
			  "id": 5655,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5622,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5621,
					"name": "ownerOnly",
					"nameLocations": [
					  "4602:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "4602:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4602:9:25"
				}
			  ],
			  "name": "mint",
			  "nameLocation": "4555:4:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5620,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5617,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4568:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5655,
					"src": "4560:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5616,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4560:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5619,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4585:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5655,
					"src": "4577:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5618,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4577:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4559:33:25"
			  },
			  "returnParameters": {
				"id": 5623,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4612:0:25"
			  },
			  "scope": 5807,
			  "src": "4546:335:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5674,
				"nodeType": "Block",
				"src": "4957:56:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5665,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5657,
						  "src": "4973:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5671,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5666,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5659,
							"src": "4982:6:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5670,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5667,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "4991:2:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5668,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1814,
								"src": "4995:8:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5669,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "4995:10:25",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "4991:14:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "4982:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5664,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2214,
						"src": "4967:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5672,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4967:39:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5673,
					"nodeType": "ExpressionStatement",
					"src": "4967:39:25"
				  }
				]
			  },
			  "functionSelector": "9dc29fac",
			  "id": 5675,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5662,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5661,
					"name": "ownerOnly",
					"nameLocations": [
					  "4947:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "4947:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4947:9:25"
				}
			  ],
			  "name": "burn",
			  "nameLocation": "4900:4:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5660,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5657,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4913:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5675,
					"src": "4905:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5656,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4905:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5659,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4930:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5675,
					"src": "4922:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5658,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4922:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4904:33:25"
			  },
			  "returnParameters": {
				"id": 5663,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4957:0:25"
			  },
			  "scope": 5807,
			  "src": "4891:122:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5689,
				"nodeType": "Block",
				"src": "5094:40:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5685,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5677,
						  "src": "5110:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5686,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5679,
						  "src": "5119:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5684,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2214,
						"src": "5104:5:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5687,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5104:22:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5688,
					"nodeType": "ExpressionStatement",
					"src": "5104:22:25"
				  }
				]
			  },
			  "functionSelector": "1d057bd9",
			  "id": 5690,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5682,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5681,
					"name": "mapleNFTOnly",
					"nameLocations": [
					  "5081:12:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5323,
					"src": "5081:12:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5081:12:25"
				}
			  ],
			  "name": "marketBurn",
			  "nameLocation": "5028:10:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5680,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5677,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5047:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5690,
					"src": "5039:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5676,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5039:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5679,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5064:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5690,
					"src": "5056:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5678,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5056:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5038:33:25"
			  },
			  "returnParameters": {
				"id": 5683,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5094:0:25"
			  },
			  "scope": 5807,
			  "src": "5019:115:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5720,
				"nodeType": "Block",
				"src": "5424:328:25",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5704,
						  "name": "_owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5692,
						  "src": "5611:6:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5705,
						  "name": "_spender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5694,
						  "src": "5639:8:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5715,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"expression": {
								  "id": 5707,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "5677:3:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5708,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "5681:6:25",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "5677:10:25",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 5711,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967268,
									"src": "5697:4:25",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_JMToken_$5807",
									  "typeString": "contract JMToken"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_JMToken_$5807",
									  "typeString": "contract JMToken"
									}
								  ],
								  "id": 5710,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "5689:7:25",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 5709,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "5689:7:25",
									"typeDescriptions": {}
								  }
								},
								"id": 5712,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "5689:13:25",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5706,
							  "name": "allowance",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1881,
							  "src": "5667:9:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
								"typeString": "function (address,address) view returns (uint256)"
							  }
							},
							"id": 5713,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "5667:36:25",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"id": 5714,
							"name": "_amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5696,
							"src": "5706:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5667:46:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5703,
						"name": "_approve",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2259,
						"src": "5589:8:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5716,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5589:134:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5717,
					"nodeType": "ExpressionStatement",
					"src": "5589:134:25"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 5718,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "5741:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 5702,
					"id": 5719,
					"nodeType": "Return",
					"src": "5734:11:25"
				  }
				]
			  },
			  "functionSelector": "d83a2bf3",
			  "id": 5721,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5699,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5698,
					"name": "routerOnly",
					"nameLocations": [
					  "5398:10:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5345,
					"src": "5398:10:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5398:10:25"
				}
			  ],
			  "name": "increaseContractAllowance",
			  "nameLocation": "5306:25:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5697,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5692,
					"mutability": "mutable",
					"name": "_owner",
					"nameLocation": "5340:6:25",
					"nodeType": "VariableDeclaration",
					"scope": 5721,
					"src": "5332:14:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5691,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5332:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5694,
					"mutability": "mutable",
					"name": "_spender",
					"nameLocation": "5355:8:25",
					"nodeType": "VariableDeclaration",
					"scope": 5721,
					"src": "5347:16:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5693,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5347:7:25",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5696,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "5372:7:25",
					"nodeType": "VariableDeclaration",
					"scope": 5721,
					"src": "5364:15:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5695,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5364:7:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5331:49:25"
			  },
			  "returnParameters": {
				"id": 5702,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5701,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 5721,
					"src": "5418:4:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5700,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "5418:4:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5417:6:25"
			  },
			  "scope": 5807,
			  "src": "5297:455:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5775,
				"nodeType": "Block",
				"src": "5922:660:25",
				"statements": [
				  {
					"expression": {
					  "id": 5733,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5731,
						"name": "fundsAlreadyMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5227,
						"src": "5932:17:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5732,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "5952:4:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "5932:24:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5734,
					"nodeType": "ExpressionStatement",
					"src": "5932:24:25"
				  },
				  {
					"assignments": [
					  5736
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5736,
						"mutability": "mutable",
						"name": "jmtCoinAmountToTransfer",
						"nameLocation": "6044:23:25",
						"nodeType": "VariableDeclaration",
						"scope": 5775,
						"src": "6036:31:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5735,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6036:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5740,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5739,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5737,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5223,
						"src": "6070:16:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5738,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6089:3:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "6070:22:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6036:56:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5746,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6168:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5745,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6160:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5744,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6160:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5747,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6160:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5750,
							  "name": "liquidityPool",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5724,
							  "src": "6195:13:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_LiquidityPool_$6337",
								"typeString": "contract LiquidityPool"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_LiquidityPool_$6337",
								"typeString": "contract LiquidityPool"
							  }
							],
							"id": 5749,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6187:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5748,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6187:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5751,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6187:22:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5752,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5736,
						  "src": "6223:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5741,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "6131:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5807_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5743,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6137:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "6131:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5753,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6131:125:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5754,
					"nodeType": "ExpressionStatement",
					"src": "6131:125:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5760,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5736,
						  "src": "6398:23:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5763,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6443:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5762,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6435:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5761,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6435:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5764,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6435:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							{
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  ],
						  "expression": {
							"id": 5755,
							"name": "liquidityPool",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5724,
							"src": "6338:13:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_LiquidityPool_$6337",
							  "typeString": "contract LiquidityPool"
							}
						  },
						  "id": 5757,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "6352:7:25",
						  "memberName": "deposit",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 6232,
						  "src": "6338:21:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
							"typeString": "function (uint256,address) payable external"
						  }
						},
						"id": 5759,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"names": [
						  "value"
						],
						"nodeType": "FunctionCallOptions",
						"options": [
						  {
							"id": 5758,
							"name": "totalContributed",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5223,
							"src": "6367:16:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  }
						],
						"src": "6338:46:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
						  "typeString": "function (uint256,address) payable external"
						}
					  },
					  "id": 5765,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6338:120:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5766,
					"nodeType": "ExpressionStatement",
					"src": "6338:120:25"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 5767,
						  "name": "liquidityPool",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5724,
						  "src": "6502:13:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_LiquidityPool_$6337",
							"typeString": "contract LiquidityPool"
						  }
						},
						"id": 5769,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6516:16:25",
						"memberName": "setFundedReserve",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 5949,
						"src": "6502:30:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
						  "typeString": "function () external"
						}
					  },
					  "id": 5770,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6502:32:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5771,
					"nodeType": "ExpressionStatement",
					"src": "6502:32:25"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5772,
						"name": "sendRemainingFundsToTreasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5806,
						"src": "6545:28:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5773,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6545:30:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5774,
					"nodeType": "ExpressionStatement",
					"src": "6545:30:25"
				  }
				]
			  },
			  "functionSelector": "1690bb4e",
			  "id": 5776,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5727,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5726,
					"name": "ownerOnly",
					"nameLocations": [
					  "5894:9:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5306,
					"src": "5894:9:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5894:9:25"
				},
				{
				  "id": 5729,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5728,
					"name": "areFundsMoved",
					"nameLocations": [
					  "5904:13:25"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5355,
					"src": "5904:13:25"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5904:13:25"
				}
			  ],
			  "name": "sendLiquidityToLPContract",
			  "nameLocation": "5830:25:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5725,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5724,
					"mutability": "mutable",
					"name": "liquidityPool",
					"nameLocation": "5870:13:25",
					"nodeType": "VariableDeclaration",
					"scope": 5776,
					"src": "5856:27:25",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_LiquidityPool_$6337",
					  "typeString": "contract LiquidityPool"
					},
					"typeName": {
					  "id": 5723,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 5722,
						"name": "LiquidityPool",
						"nameLocations": [
						  "5856:13:25"
						],
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 6337,
						"src": "5856:13:25"
					  },
					  "referencedDeclaration": 6337,
					  "src": "5856:13:25",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_LiquidityPool_$6337",
						"typeString": "contract LiquidityPool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5855:29:25"
			  },
			  "returnParameters": {
				"id": 5730,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5922:0:25"
			  },
			  "scope": 5807,
			  "src": "5821:761:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5805,
				"nodeType": "Block",
				"src": "6807:170:25",
				"statements": [
				  {
					"assignments": [
					  5780
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5780,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "6825:12:25",
						"nodeType": "VariableDeclaration",
						"scope": 5805,
						"src": "6817:20:25",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5779,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6817:7:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5787,
					"initialValue": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5784,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6858:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5783,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6850:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5782,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6850:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5785,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6850:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 5781,
						"name": "balanceOf",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1838,
						"src": "6840:9:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view returns (uint256)"
						}
					  },
					  "id": 5786,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6840:24:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6817:47:25"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5793,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6898:4:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$5807",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5792,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6890:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5791,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6890:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5794,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6890:13:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5797,
							  "name": "treasuryWallet",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5234,
							  "src": "6913:14:25",
							  "typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							],
							"id": 5796,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6905:7:25",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5795,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6905:7:25",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5798,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6905:23:25",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5799,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5780,
						  "src": "6930:12:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5788,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "6874:5:25",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$5807_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5790,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6880:9:25",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2086,
						"src": "6874:15:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5800,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6874:69:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5801,
					"nodeType": "ExpressionStatement",
					"src": "6874:69:25"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5802,
						"name": "FundsMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5216,
						"src": "6958:10:25",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5803,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6958:12:25",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5804,
					"nodeType": "EmitStatement",
					"src": "6953:17:25"
				  }
				]
			  },
			  "id": 5806,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "sendRemainingFundsToTreasury",
			  "nameLocation": "6767:28:25",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5777,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6795:2:25"
			  },
			  "returnParameters": {
				"id": 5778,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6807:0:25"
			  },
			  "scope": 5807,
			  "src": "6758:219:25",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			}
		  ],
		  "scope": 5808,
		  "src": "149:6830:25",
		  "usedErrors": []
		}
	  ],
	  "src": "37:6942:25"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
	},
	"networks": {
	  "5777": {
		"events": {
		  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
		  "0xa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1": {
			"anonymous": false,
			"inputs": [],
			"name": "FundsMoved",
			"type": "event"
		  },
		  "0xe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3": {
			"anonymous": false,
			"inputs": [],
			"name": "OwnerAction",
			"type": "event"
		  },
		  "0x745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "_account",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			  }
			],
			"name": "TokensBought",
			"type": "event"
		  },
		  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
		  }
		},
		"links": {},
		"address": "0xb305C2dEE4AB67B8F433dA7Ef1AeFbfB0dC541C9",
		"transactionHash": "0x305616e7a859efa16f3765df8ab4aa047624604e99c70bf54d0d8dad95d71e83"
	  }
	},
	"schemaVersion": "3.4.9",
	"updatedAt": "2022-09-18T15:10:18.451Z",
	"networkType": "ethereum",
	"devdoc": {
	  "kind": "dev",
	  "methods": {
		"allowance(address,address)": {
		  "details": "See {IERC20-allowance}."
		},
		"approve(address,uint256)": {
		  "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
		},
		"balanceOf(address)": {
		  "details": "See {IERC20-balanceOf}."
		},
		"decimals()": {
		  "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
		},
		"decreaseAllowance(address,uint256)": {
		  "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
		},
		"increaseAllowance(address,uint256)": {
		  "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
		},
		"name()": {
		  "details": "Returns the name of the token."
		},
		"symbol()": {
		  "details": "Returns the symbol of the token, usually a shorter version of the name."
		},
		"totalSupply()": {
		  "details": "See {IERC20-totalSupply}."
		},
		"transfer(address,uint256)": {
		  "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
		},
		"transferFrom(address,address,uint256)": {
		  "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
		}
	  },
	  "version": 1
	},
	"userdoc": {
	  "kind": "user",
	  "methods": {},
	  "version": 1
	}
  }
export default TOKEN;