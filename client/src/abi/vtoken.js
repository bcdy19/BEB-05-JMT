const VTOKEN = {
    "contractName": "VJMToken",
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
        "anonymous": false,
        "inputs": [],
        "name": "TreasuryMoved",
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
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
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract LiquidityPool",
            "name": "_lp",
            "type": "address"
          }
        ],
        "name": "setLPAddress",
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
        "inputs": [],
        "name": "MoveToTreasuryWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"TreasuryMoved\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MoveToTreasuryWallet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"_lp\",\"type\":\"address\"}],\"name\":\"setLPAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/VJMToken.sol\":\"VJMToken\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b50604051620016a6380380620016a68339810160408190526200003491620001f0565b6040518060400160405280600a8152602001693b2526aa102a37b5b2b760b11b815250604051806040016040528060048152602001631d92935560e21b8152508160039081620000859190620002c6565b506004620000948282620002c6565b50620000a1915050601290565b620000ae90600a620004a7565b620000bd90620927c0620004b8565b6005819055620000cf90309062000103565b60068054336001600160a01b031991821617909155600780549091166001600160a01b0392909216919091179055620004e8565b6001600160a01b0382166200015e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001729190620004d2565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a1908490620004d2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b6000602082840312156200020357600080fd5b81516001600160a01b03811681146200021b57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200024d57607f821691505b6020821081036200026e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001eb57600081815260208120601f850160051c810160208610156200029d5750805b601f850160051c820191505b81811015620002be57828155600101620002a9565b505050505050565b81516001600160401b03811115620002e257620002e262000222565b620002fa81620002f3845462000238565b8462000274565b602080601f831160018114620003325760008415620003195750858301515b600019600386901b1c1916600185901b178555620002be565b600085815260208120601f198616915b82811015620003635788860151825594840194600190910190840162000342565b5085821015620003825787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003e9578160001904821115620003cd57620003cd62000392565b80851615620003db57918102915b93841c9390800290620003ad565b509250929050565b6000826200040257506001620004a1565b816200041157506000620004a1565b81600181146200042a5760028114620004355762000455565b6001915050620004a1565b60ff84111562000449576200044962000392565b50506001821b620004a1565b5060208310610133831016604e8410600b84101617156200047a575081810a620004a1565b620004868383620003a8565b80600019048211156200049d576200049d62000392565b0290505b92915050565b60006200021b60ff841683620003f1565b8082028115828204841417620004a157620004a162000392565b80820180821115620004a157620004a162000392565b6111ae80620004f86000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd578063a457c2d711610081578063d83a2bf311610066578063d83a2bf3146102b7578063dd62ed3e146102ca578063f3748af91461030357600080fd5b8063a457c2d714610291578063a9059cbb146102a457600080fd5b80638da5cb5b116100b25780638da5cb5b1461026357806395d89b41146102765780639dc29fac1461027e57600080fd5b806370a08231146102275780637a351a1d1461025057600080fd5b8063313ce56711610124578063395093511161010957806339509351146101d457806340c10f19146101e75780634626402b146101fc57600080fd5b8063313ce567146101bc57806332cb6b0c146101cb57600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61030b565b60405161016b9190610ec8565b60405180910390f35b610187610182366004610f2e565b61039d565b604051901515815260200161016b565b6002545b60405190815260200161016b565b6101876101b7366004610f5a565b6103b7565b6040516012815260200161016b565b61019b60055481565b6101876101e2366004610f2e565b6103db565b6101fa6101f5366004610f2e565b61041c565b005b60075461020f906001600160a01b031681565b6040516001600160a01b03909116815260200161016b565b61019b610235366004610f9b565b6001600160a01b031660009081526020819052604090205490565b6101fa61025e366004610f9b565b610546565b60065461020f906001600160a01b031681565b61015e610620565b6101fa61028c366004610f2e565b61062f565b61018761029f366004610f2e565b610695565b6101876102b2366004610f2e565b61073f565b6101876102c5366004610f5a565b61074d565b61019b6102d8366004610fbf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101fa610781565b60606003805461031a90610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461034690610ff8565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b5050505050905090565b6000336103ab818585610853565b60019150505b92915050565b6000336103c58582856109ab565b6103d0858585610a3d565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906103ab908290869086905b6104179190611048565b610853565b6006546001600160a01b031633146104685760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064015b60405180910390fd5b6001600160a01b0382166104be5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161045f565b600554816104cb60025490565b6104d59190611048565b11156105235760405162461bcd60e51b815260206004820152601060248201527f41424f56455f4d41585f535550504c5900000000000000000000000000000000604482015260640161045f565b610542826105336012600a61113f565b61053d908461114e565b610a4d565b5050565b6006546001600160a01b0316331461058d5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b6008546001600160a01b0316156105e65760405162461bcd60e51b815260206004820152600a60248201527f57524954455f4f4e434500000000000000000000000000000000000000000000604482015260640161045f565b600880547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60606004805461031a90610ff8565b6006546001600160a01b031633146106765760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b610542826106866012600a61113f565b610690908461114e565b610b2c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156107325760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161045f565b6103d08286868403610853565b6000336103ab818585610a3d565b3360009081526001602090815260408083203084529091528120546107779085908590859061040d565b5060019392505050565b6006546001600160a01b031633146107c85760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b60006107d66012600a61113f565b6107e390620186a061114e565b6008549091506107fe9030906001600160a01b031683610cb1565b306000818152602081905260409020546007549091610826916001600160a01b031683610cb1565b6040517fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa790600090a15050565b6001600160a01b0383166108ce5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03821661094a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610a375781811015610a2a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161045f565b610a378484848403610853565b50505050565b610a48838383610cb1565b505050565b6001600160a01b038216610aa35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161045f565b8060026000828254610ab59190611048565b90915550506001600160a01b03821660009081526020819052604081208054839290610ae2908490611048565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ba85760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03821660009081526020819052604090205481811015610c375760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c66908490611165565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038316610d2d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b038216610da95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03831660009081526020819052604090205481811015610e385760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e6f908490611048565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ebb91815260200190565b60405180910390a3610a37565b600060208083528351808285015260005b81811015610ef557858101830151858201604001528201610ed9565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610f2b57600080fd5b50565b60008060408385031215610f4157600080fd5b8235610f4c81610f16565b946020939093013593505050565b600080600060608486031215610f6f57600080fd5b8335610f7a81610f16565b92506020840135610f8a81610f16565b929592945050506040919091013590565b600060208284031215610fad57600080fd5b8135610fb881610f16565b9392505050565b60008060408385031215610fd257600080fd5b8235610fdd81610f16565b91506020830135610fed81610f16565b809150509250929050565b600181811c9082168061100c57607f821691505b60208210810361102c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b1576103b1611032565b600181815b8085111561109657816000190482111561107c5761107c611032565b8085161561108957918102915b93841c9390800290611060565b509250929050565b6000826110ad575060016103b1565b816110ba575060006103b1565b81600181146110d057600281146110da576110f6565b60019150506103b1565b60ff8411156110eb576110eb611032565b50506001821b6103b1565b5060208310610133831016604e8410600b8410161715611119575081810a6103b1565b611123838361105b565b806000190482111561113757611137611032565b029392505050565b6000610fb860ff84168361109e565b80820281158282048414176103b1576103b1611032565b818103818111156103b1576103b161103256fea26469706673582212208a926636a4053ae615baf3614f7bd8ccb68129f86b0f0b0c914511c4a2aa391564736f6c63430008110033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd578063a457c2d711610081578063d83a2bf311610066578063d83a2bf3146102b7578063dd62ed3e146102ca578063f3748af91461030357600080fd5b8063a457c2d714610291578063a9059cbb146102a457600080fd5b80638da5cb5b116100b25780638da5cb5b1461026357806395d89b41146102765780639dc29fac1461027e57600080fd5b806370a08231146102275780637a351a1d1461025057600080fd5b8063313ce56711610124578063395093511161010957806339509351146101d457806340c10f19146101e75780634626402b146101fc57600080fd5b8063313ce567146101bc57806332cb6b0c146101cb57600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e61030b565b60405161016b9190610ec8565b60405180910390f35b610187610182366004610f2e565b61039d565b604051901515815260200161016b565b6002545b60405190815260200161016b565b6101876101b7366004610f5a565b6103b7565b6040516012815260200161016b565b61019b60055481565b6101876101e2366004610f2e565b6103db565b6101fa6101f5366004610f2e565b61041c565b005b60075461020f906001600160a01b031681565b6040516001600160a01b03909116815260200161016b565b61019b610235366004610f9b565b6001600160a01b031660009081526020819052604090205490565b6101fa61025e366004610f9b565b610546565b60065461020f906001600160a01b031681565b61015e610620565b6101fa61028c366004610f2e565b61062f565b61018761029f366004610f2e565b610695565b6101876102b2366004610f2e565b61073f565b6101876102c5366004610f5a565b61074d565b61019b6102d8366004610fbf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101fa610781565b60606003805461031a90610ff8565b80601f016020809104026020016040519081016040528092919081815260200182805461034690610ff8565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b5050505050905090565b6000336103ab818585610853565b60019150505b92915050565b6000336103c58582856109ab565b6103d0858585610a3d565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906103ab908290869086905b6104179190611048565b610853565b6006546001600160a01b031633146104685760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064015b60405180910390fd5b6001600160a01b0382166104be5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161045f565b600554816104cb60025490565b6104d59190611048565b11156105235760405162461bcd60e51b815260206004820152601060248201527f41424f56455f4d41585f535550504c5900000000000000000000000000000000604482015260640161045f565b610542826105336012600a61113f565b61053d908461114e565b610a4d565b5050565b6006546001600160a01b0316331461058d5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b6008546001600160a01b0316156105e65760405162461bcd60e51b815260206004820152600a60248201527f57524954455f4f4e434500000000000000000000000000000000000000000000604482015260640161045f565b600880547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60606004805461031a90610ff8565b6006546001600160a01b031633146106765760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b610542826106866012600a61113f565b610690908461114e565b610b2c565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156107325760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161045f565b6103d08286868403610853565b6000336103ab818585610a3d565b3360009081526001602090815260408083203084529091528120546107779085908590859061040d565b5060019392505050565b6006546001600160a01b031633146107c85760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b604482015260640161045f565b60006107d66012600a61113f565b6107e390620186a061114e565b6008549091506107fe9030906001600160a01b031683610cb1565b306000818152602081905260409020546007549091610826916001600160a01b031683610cb1565b6040517fede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa790600090a15050565b6001600160a01b0383166108ce5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03821661094a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610a375781811015610a2a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161045f565b610a378484848403610853565b50505050565b610a48838383610cb1565b505050565b6001600160a01b038216610aa35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161045f565b8060026000828254610ab59190611048565b90915550506001600160a01b03821660009081526020819052604081208054839290610ae2908490611048565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610ba85760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03821660009081526020819052604090205481811015610c375760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c66908490611165565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038316610d2d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b038216610da95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03831660009081526020819052604090205481811015610e385760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161045f565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610e6f908490611048565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ebb91815260200190565b60405180910390a3610a37565b600060208083528351808285015260005b81811015610ef557858101830151858201604001528201610ed9565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610f2b57600080fd5b50565b60008060408385031215610f4157600080fd5b8235610f4c81610f16565b946020939093013593505050565b600080600060608486031215610f6f57600080fd5b8335610f7a81610f16565b92506020840135610f8a81610f16565b929592945050506040919091013590565b600060208284031215610fad57600080fd5b8135610fb881610f16565b9392505050565b60008060408385031215610fd257600080fd5b8235610fdd81610f16565b91506020830135610fed81610f16565b809150509250929050565b600181811c9082168061100c57607f821691505b60208210810361102c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103b1576103b1611032565b600181815b8085111561109657816000190482111561107c5761107c611032565b8085161561108957918102915b93841c9390800290611060565b509250929050565b6000826110ad575060016103b1565b816110ba575060006103b1565b81600181146110d057600281146110da576110f6565b60019150506103b1565b60ff8411156110eb576110eb611032565b50506001821b6103b1565b5060208310610133831016604e8410600b8410161715611119575081810a6103b1565b611123838361105b565b806000190482111561113757611137611032565b029392505050565b6000610fb860ff84168361109e565b80820281158282048414176103b1576103b1611032565b818103818111156103b1576103b161103256fea26469706673582212208a926636a4053ae615baf3614f7bd8ccb68129f86b0f0b0c914511c4a2aa391564736f6c63430008110033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5395:38",
          "statements": [
            {
              "nodeType": "YulBlock",
              "src": "6:3:38",
              "statements": []
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "103:209:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "149:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "158:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "161:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "151:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "151:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "151:12:38"
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
                              "src": "124:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "133:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "120:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "120:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "145:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "116:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "116:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "113:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "174:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "193:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "187:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:16:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "178:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "266:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "275:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "278:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "268:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "268:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "268:12:38"
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
                              "src": "225:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "236:5:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "251:3:38",
                                          "type": "",
                                          "value": "160"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "256:1:38",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "247:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "247:11:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "260:1:38",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "243:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "243:19:38"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "232:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "232:31:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "222:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "222:42:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "215:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "215:50:38"
                    },
                    "nodeType": "YulIf",
                    "src": "212:70:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "291:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "301:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "291:6:38"
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
                  "src": "69:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "80:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "92:6:38",
                  "type": ""
                }
              ],
              "src": "14:298:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "349:95:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "366:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "373:3:38",
                              "type": "",
                              "value": "224"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "378:10:38",
                              "type": "",
                              "value": "0x4e487b71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "369:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "369:20:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "359:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "359:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "359:31:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "406:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "409:4:38",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "399:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "399:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "399:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "430:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "433:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "423:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "423:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "423:15:38"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "317:127:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "504:325:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "514:22:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "528:1:38",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "531:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "524:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "524:12:38"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "514:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "545:38:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "575:4:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "581:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "571:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "571:12:38"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "549:18:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "622:31:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "624:27:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "638:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "646:4:38",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "634:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "634:17:38"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "624:6:38"
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
                          "src": "602:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "595:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "595:26:38"
                    },
                    "nodeType": "YulIf",
                    "src": "592:61:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "712:111:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "733:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "740:3:38",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "745:10:38",
                                    "type": "",
                                    "value": "0x4e487b71"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "736:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "736:20:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "726:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "726:31:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "726:31:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "777:1:38",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "780:4:38",
                                "type": "",
                                "value": "0x22"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "770:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "770:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "770:15:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "805:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "808:4:38",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "798:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "798:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "798:15:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "668:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "691:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "699:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "688:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "688:14:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "665:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "665:38:38"
                    },
                    "nodeType": "YulIf",
                    "src": "662:161:38"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "484:4:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "493:6:38",
                  "type": ""
                }
              ],
              "src": "449:380:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "890:65:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "907:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "910:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "900:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "900:14:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "900:14:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "923:26:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "941:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "944:4:38",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "931:9:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "931:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "923:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "array_dataslot_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "ptr",
                  "nodeType": "YulTypedName",
                  "src": "873:3:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "881:4:38",
                  "type": ""
                }
              ],
              "src": "834:121:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1041:464:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1074:425:38",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1088:11:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1098:1:38",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "_1",
                              "nodeType": "YulTypedName",
                              "src": "1092:2:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1119:2:38"
                              },
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "1123:5:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1112:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1112:17:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1112:17:38"
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1142:31:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1164:2:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1168:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "keccak256",
                              "nodeType": "YulIdentifier",
                              "src": "1154:9:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1154:19:38"
                          },
                          "variables": [
                            {
                              "name": "data",
                              "nodeType": "YulTypedName",
                              "src": "1146:4:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1186:57:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "1209:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1219:1:38",
                                    "type": "",
                                    "value": "5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "startIndex",
                                        "nodeType": "YulIdentifier",
                                        "src": "1226:10:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1238:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1222:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1222:19:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1215:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1215:27:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1205:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1205:38:38"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "1190:11:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1280:23:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1282:19:38",
                                "value": {
                                  "name": "data",
                                  "nodeType": "YulIdentifier",
                                  "src": "1297:4:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "1282:11:38"
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
                                "src": "1262:10:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1274:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "1259:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1259:20:38"
                          },
                          "nodeType": "YulIf",
                          "src": "1256:47:38"
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1316:41:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "1330:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1340:1:38",
                                    "type": "",
                                    "value": "5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "1347:3:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1352:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1343:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1343:12:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1336:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1336:20:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1326:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1326:31:38"
                          },
                          "variables": [
                            {
                              "name": "_2",
                              "nodeType": "YulTypedName",
                              "src": "1320:2:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "1370:24:38",
                          "value": {
                            "name": "deleteStart",
                            "nodeType": "YulIdentifier",
                            "src": "1383:11:38"
                          },
                          "variables": [
                            {
                              "name": "start",
                              "nodeType": "YulTypedName",
                              "src": "1374:5:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "1468:21:38",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "start",
                                      "nodeType": "YulIdentifier",
                                      "src": "1477:5:38"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "1484:2:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "1470:6:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1470:17:38"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "1470:17:38"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "1418:5:38"
                              },
                              {
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "1425:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "1415:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1415:13:38"
                          },
                          "nodeType": "YulForLoop",
                          "post": {
                            "nodeType": "YulBlock",
                            "src": "1429:26:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "1431:22:38",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "start",
                                      "nodeType": "YulIdentifier",
                                      "src": "1444:5:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1451:1:38",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1440:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1440:13:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "1431:5:38"
                                  }
                                ]
                              }
                            ]
                          },
                          "pre": {
                            "nodeType": "YulBlock",
                            "src": "1411:3:38",
                            "statements": []
                          },
                          "src": "1407:82:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "1057:3:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1062:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1054:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1054:11:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1051:448:38"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "1013:5:38",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "1020:3:38",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "1025:10:38",
                  "type": ""
                }
              ],
              "src": "960:545:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1595:81:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1605:65:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "1620:4:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1638:1:38",
                                          "type": "",
                                          "value": "3"
                                        },
                                        {
                                          "name": "len",
                                          "nodeType": "YulIdentifier",
                                          "src": "1641:3:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "1634:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1634:11:38"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1651:1:38",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nodeType": "YulIdentifier",
                                        "src": "1647:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1647:6:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nodeType": "YulIdentifier",
                                    "src": "1630:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1630:24:38"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "1626:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1626:29:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1616:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1616:40:38"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1662:1:38",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "1665:3:38"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "1658:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1658:11:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "1613:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1613:57:38"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "1605:4:38"
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
                  "src": "1572:4:38",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "1578:3:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "1586:4:38",
                  "type": ""
                }
              ],
              "src": "1510:166:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1777:1256:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1787:24:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "1807:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1801:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1801:10:38"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "1791:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1854:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "1856:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1856:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1856:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "1826:6:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1842:2:38",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1846:1:38",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "1838:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1838:10:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1850:1:38",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1834:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1834:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1823:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1823:30:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1820:56:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "1929:4:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "1967:4:38"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "1961:5:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1961:11:38"
                            }
                          ],
                          "functionName": {
                            "name": "extract_byte_array_length",
                            "nodeType": "YulIdentifier",
                            "src": "1935:25:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1935:38:38"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "1975:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "1885:43:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1885:97:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1885:97:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1991:18:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "2008:1:38",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "1995:9:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2018:23:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "2037:4:38",
                      "type": "",
                      "value": "0x20"
                    },
                    "variables": [
                      {
                        "name": "srcOffset_1",
                        "nodeType": "YulTypedName",
                        "src": "2022:11:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2050:24:38",
                    "value": {
                      "name": "srcOffset_1",
                      "nodeType": "YulIdentifier",
                      "src": "2063:11:38"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "2050:9:38"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2120:656:38",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2134:35:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "2153:6:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2165:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "2161:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2161:7:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "2149:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2149:20:38"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "2138:7:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2182:49:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "2226:4:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "2196:29:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2196:35:38"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "2186:6:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2244:10:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2253:1:38",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "2248:1:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "2331:172:38",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2356:6:38"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2374:3:38"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "2379:9:38"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "2370:3:38"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2370:19:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "2364:5:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2364:26:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "2349:6:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2349:42:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2349:42:38"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "2408:24:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "2422:6:38"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "2430:1:38",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2418:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2418:14:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "2408:6:38"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "2449:40:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "2466:9:38"
                                        },
                                        {
                                          "name": "srcOffset_1",
                                          "nodeType": "YulIdentifier",
                                          "src": "2477:11:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2462:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2462:27:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "2449:9:38"
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
                                    "src": "2278:1:38"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "2281:7:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "2275:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2275:14:38"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "2290:28:38",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "2292:24:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "2301:1:38"
                                        },
                                        {
                                          "name": "srcOffset_1",
                                          "nodeType": "YulIdentifier",
                                          "src": "2304:11:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "2297:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2297:19:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "2292:1:38"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "2271:3:38",
                                "statements": []
                              },
                              "src": "2267:236:38"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "2551:166:38",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "2569:43:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "2596:3:38"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "2601:9:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "2592:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2592:19:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "2586:5:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2586:26:38"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "2573:9:38",
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
                                          "src": "2636:6:38"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "2648:9:38"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "arguments": [
                                                    {
                                                      "arguments": [
                                                        {
                                                          "arguments": [
                                                            {
                                                              "kind": "number",
                                                              "nodeType": "YulLiteral",
                                                              "src": "2675:1:38",
                                                              "type": "",
                                                              "value": "3"
                                                            },
                                                            {
                                                              "name": "newLen",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "2678:6:38"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "shl",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2671:3:38"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "2671:14:38"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "2687:3:38",
                                                          "type": "",
                                                          "value": "248"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "and",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2667:3:38"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "2667:24:38"
                                                    },
                                                    {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "2697:1:38",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "not",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2693:3:38"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "2693:6:38"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "shr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2663:3:38"
                                                  },
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "2663:37:38"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "not",
                                                "nodeType": "YulIdentifier",
                                                "src": "2659:3:38"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "2659:42:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "and",
                                            "nodeType": "YulIdentifier",
                                            "src": "2644:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2644:58:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "2629:6:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2629:74:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2629:74:38"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "2522:7:38"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "2531:6:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "2519:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2519:19:38"
                              },
                              "nodeType": "YulIf",
                              "src": "2516:201:38"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "2737:4:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "2751:1:38",
                                            "type": "",
                                            "value": "1"
                                          },
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "2754:6:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "2747:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "2747:14:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2763:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2743:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2743:22:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2730:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2730:36:38"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2730:36:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "2113:663:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2118:1:38",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2793:234:38",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "2807:14:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2820:1:38",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "2811:5:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "2856:67:38",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "2874:35:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "2893:3:38"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "2898:9:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "2889:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "2889:19:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "2883:5:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2883:26:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "2874:5:38"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "2837:6:38"
                              },
                              "nodeType": "YulIf",
                              "src": "2834:89:38"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "2943:4:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "3002:5:38"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "3009:6:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "2949:52:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2949:67:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2936:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2936:81:38"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2936:81:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "2785:242:38",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "2093:6:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2101:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2090:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2090:14:38"
                    },
                    "nodeType": "YulSwitch",
                    "src": "2083:944:38"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "1762:4:38",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "1768:3:38",
                  "type": ""
                }
              ],
              "src": "1681:1352:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3070:95:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3087:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3094:3:38",
                              "type": "",
                              "value": "224"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3099:10:38",
                              "type": "",
                              "value": "0x4e487b71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "3090:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3090:20:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3080:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3080:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3080:31:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3127:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3130:4:38",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3120:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3120:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3120:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3151:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3154:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "3144:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3144:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3144:15:38"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "3038:127:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3234:358:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3244:16:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "3259:1:38",
                      "type": "",
                      "value": "1"
                    },
                    "variables": [
                      {
                        "name": "power_1",
                        "nodeType": "YulTypedName",
                        "src": "3248:7:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3269:16:38",
                    "value": {
                      "name": "power_1",
                      "nodeType": "YulIdentifier",
                      "src": "3278:7:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "3269:5:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3294:13:38",
                    "value": {
                      "name": "_base",
                      "nodeType": "YulIdentifier",
                      "src": "3302:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "3294:4:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3358:228:38",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3403:22:38",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "3405:16:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3405:18:38"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "3405:18:38"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "3378:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3392:1:38",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "3388:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3388:6:38"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "3396:4:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "3384:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3384:17:38"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "3375:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3375:27:38"
                          },
                          "nodeType": "YulIf",
                          "src": "3372:53:38"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "3464:29:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "3466:25:38",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "3479:5:38"
                                    },
                                    {
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "3486:4:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "3475:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3475:16:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "3466:5:38"
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
                                "src": "3445:8:38"
                              },
                              {
                                "name": "power_1",
                                "nodeType": "YulIdentifier",
                                "src": "3455:7:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "3441:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3441:22:38"
                          },
                          "nodeType": "YulIf",
                          "src": "3438:55:38"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "3506:23:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "3518:4:38"
                              },
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "3524:4:38"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "3514:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3514:15:38"
                          },
                          "variableNames": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "3506:4:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "3542:34:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "power_1",
                                "nodeType": "YulIdentifier",
                                "src": "3558:7:38"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "3567:8:38"
                              }
                            ],
                            "functionName": {
                              "name": "shr",
                              "nodeType": "YulIdentifier",
                              "src": "3554:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3554:22:38"
                          },
                          "variableNames": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "3542:8:38"
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
                          "src": "3327:8:38"
                        },
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "3337:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3324:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3324:21:38"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "3346:3:38",
                      "statements": []
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "3320:3:38",
                      "statements": []
                    },
                    "src": "3316:270:38"
                  }
                ]
              },
              "name": "checked_exp_helper",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "_base",
                  "nodeType": "YulTypedName",
                  "src": "3198:5:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "3205:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "3218:5:38",
                  "type": ""
                },
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "3225:4:38",
                  "type": ""
                }
              ],
              "src": "3170:422:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3656:747:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3694:52:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3708:10:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3717:1:38",
                            "type": "",
                            "value": "1"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "3708:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "3731:5:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "3676:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3669:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3669:16:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3666:80:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3779:52:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3793:10:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3802:1:38",
                            "type": "",
                            "value": "0"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "3793:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "3816:5:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "3765:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3758:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3758:12:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3755:76:38"
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3867:52:38",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3881:10:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3890:1:38",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "3881:5:38"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "3904:5:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "3860:59:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3865:1:38",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3935:123:38",
                          "statements": [
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "3970:22:38",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "3972:16:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3972:18:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "3972:18:38"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "3955:8:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3965:3:38",
                                    "type": "",
                                    "value": "255"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "3952:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3952:17:38"
                              },
                              "nodeType": "YulIf",
                              "src": "3949:43:38"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "4005:25:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "4018:8:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4028:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "4014:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4014:16:38"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "4005:5:38"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "4043:5:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "3928:130:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3933:1:38",
                          "type": "",
                          "value": "2"
                        }
                      }
                    ],
                    "expression": {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "3847:4:38"
                    },
                    "nodeType": "YulSwitch",
                    "src": "3840:218:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4156:70:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "4170:28:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "4183:4:38"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "4189:8:38"
                              }
                            ],
                            "functionName": {
                              "name": "exp",
                              "nodeType": "YulIdentifier",
                              "src": "4179:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4179:19:38"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "4170:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "4211:5:38"
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
                                  "src": "4080:4:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4086:2:38",
                                  "type": "",
                                  "value": "11"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4077:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4077:12:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "4094:8:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4104:2:38",
                                  "type": "",
                                  "value": "78"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4091:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4091:16:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4073:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4073:35:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "4117:4:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4123:3:38",
                                  "type": "",
                                  "value": "307"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4114:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4114:13:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "4132:8:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4142:2:38",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4129:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4129:16:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4110:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4110:36:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "4070:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4070:77:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4067:159:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4235:57:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "4277:4:38"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "4283:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_helper",
                        "nodeType": "YulIdentifier",
                        "src": "4258:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4258:34:38"
                    },
                    "variables": [
                      {
                        "name": "power_1",
                        "nodeType": "YulTypedName",
                        "src": "4239:7:38",
                        "type": ""
                      },
                      {
                        "name": "base_1",
                        "nodeType": "YulTypedName",
                        "src": "4248:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4337:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4339:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4339:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4339:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "4307:7:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4324:1:38",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "4320:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4320:6:38"
                            },
                            {
                              "name": "base_1",
                              "nodeType": "YulIdentifier",
                              "src": "4328:6:38"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "4316:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4316:19:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4304:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4304:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4301:58:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4368:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "4381:7:38"
                        },
                        {
                          "name": "base_1",
                          "nodeType": "YulIdentifier",
                          "src": "4390:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "4377:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4377:20:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "4368:5:38"
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
                  "src": "3627:4:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "3633:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "3646:5:38",
                  "type": ""
                }
              ],
              "src": "3597:806:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4476:72:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4486:56:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "4516:4:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "4526:8:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4536:4:38",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4522:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4522:19:38"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_unsigned",
                        "nodeType": "YulIdentifier",
                        "src": "4495:20:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4495:47:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "4486:5:38"
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
                  "src": "4447:4:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "4453:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "4466:5:38",
                  "type": ""
                }
              ],
              "src": "4408:140:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4605:116:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4615:20:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4630:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4633:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "4626:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4626:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "4615:7:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4693:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4695:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4695:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4695:18:38"
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
                                  "src": "4664:1:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "4657:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4657:9:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "4671:1:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nodeType": "YulIdentifier",
                                      "src": "4678:7:38"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "4687:1:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "4674:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4674:15:38"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "4668:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4668:22:38"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "4654:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4654:37:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4647:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4647:45:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4644:71:38"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "4584:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "4587:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "4593:7:38",
                  "type": ""
                }
              ],
              "src": "4553:168:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4900:181:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4917:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4928:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4910:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4910:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4910:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4951:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4962:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4947:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4947:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4967:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4940:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4940:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4940:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4990:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5001:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4986:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4986:18:38"
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5006:33:38",
                          "type": "",
                          "value": "ERC20: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4979:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4979:61:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4979:61:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5049:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5061:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5072:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5057:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5057:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5049:4:38"
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
                  "src": "4877:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4891:4:38",
                  "type": ""
                }
              ],
              "src": "4726:355:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5134:77:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5144:16:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5155:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "5158:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5151:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5151:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "5144:3:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5183:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "5185:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5185:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5185:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "5175:1:38"
                        },
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "5178:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "5172:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5172:10:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5169:36:38"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "5117:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "5120:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "5126:3:38",
                  "type": ""
                }
              ],
              "src": "5086:125:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5317:76:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5327:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5339:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5350:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5335:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5335:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5327:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5369:9:38"
                        },
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5380:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5362:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5362:25:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5362:25:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5286:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5297:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5308:4:38",
                  "type": ""
                }
              ],
              "src": "5216:177:38"
            }
          ]
        },
        "contents": "{\n    { }\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
        "id": 38,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:10891:38",
          "statements": [
            {
              "nodeType": "YulBlock",
              "src": "6:3:38",
              "statements": []
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "135:427:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "145:12:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "155:2:38",
                      "type": "",
                      "value": "32"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "149:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "173:9:38"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "184:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "166:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "166:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "166:21:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "196:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "216:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "210:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "210:13:38"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "200:6:38",
                        "type": ""
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
                              "src": "243:9:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "254:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "239:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "239:18:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "259:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "232:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "232:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "232:34:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "275:10:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "284:1:38",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "279:1:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "344:90:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "headStart",
                                        "nodeType": "YulIdentifier",
                                        "src": "373:9:38"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "384:1:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "369:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "369:17:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "388:2:38",
                                    "type": "",
                                    "value": "64"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "365:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "365:26:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "value0",
                                            "nodeType": "YulIdentifier",
                                            "src": "407:6:38"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "415:1:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "403:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "403:14:38"
                                      },
                                      {
                                        "name": "_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "419:2:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "399:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "399:23:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "393:5:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "393:30:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "358:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "358:66:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "358:66:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "305:1:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "308:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "302:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "302:13:38"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "316:19:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "318:15:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "327:1:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "330:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "323:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "323:10:38"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "318:1:38"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "298:3:38",
                      "statements": []
                    },
                    "src": "294:140:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "458:9:38"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "469:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "454:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "454:22:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "478:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "450:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "450:31:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "483:1:38",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "443:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "443:42:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "443:42:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "494:62:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "510:9:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "529:6:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "537:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "525:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "525:15:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "546:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "542:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "542:7:38"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "521:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "521:29:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "506:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "506:45:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "553:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "502:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "502:54:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "494:4:38"
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
                  "src": "104:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "115:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "126:4:38",
                  "type": ""
                }
              ],
              "src": "14:548:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "612:109:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "699:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "708:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "711:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "701:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "701:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "701:12:38"
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
                              "src": "635:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "646:5:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "653:42:38",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "642:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "642:54:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "632:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "632:65:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "625:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "625:73:38"
                    },
                    "nodeType": "YulIf",
                    "src": "622:93:38"
                  }
                ]
              },
              "name": "validator_revert_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "601:5:38",
                  "type": ""
                }
              ],
              "src": "567:154:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "813:228:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "859:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "868:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "871:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "861:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "861:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "861:12:38"
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
                              "src": "834:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "843:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "830:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "830:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "855:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "826:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "826:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "823:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "884:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "910:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "897:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "897:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "888:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "954:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "929:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "929:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "929:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "969:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "979:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "969:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "993:42:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1020:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1031:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1016:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1003:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1003:32:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "993:6:38"
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
                  "src": "771:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "782:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "794:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "802:6:38",
                  "type": ""
                }
              ],
              "src": "726:315:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1141:92:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1151:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1163:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1174:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1159:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1159:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1151:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1193:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "1218:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "1211:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1211:14:38"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1204:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1204:22:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1186:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1186:41:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1186:41:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1110:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1121:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1132:4:38",
                  "type": ""
                }
              ],
              "src": "1046:187:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1339:76:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1349:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1361:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1372:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1357:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1357:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1349:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1391:9:38"
                        },
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1402:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1384:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1384:25:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1384:25:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1308:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1319:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1330:4:38",
                  "type": ""
                }
              ],
              "src": "1238:177:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1524:352:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1570:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1579:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1582:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1572:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1572:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1572:12:38"
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
                              "src": "1545:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1554:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1541:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1541:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1566:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1537:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1537:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1534:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1595:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1621:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1608:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1608:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "1599:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1665:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "1640:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1640:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1640:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1680:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1690:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1680:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1704:47:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1736:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1747:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1732:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1732:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1719:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1719:32:38"
                    },
                    "variables": [
                      {
                        "name": "value_1",
                        "nodeType": "YulTypedName",
                        "src": "1708:7:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value_1",
                          "nodeType": "YulIdentifier",
                          "src": "1785:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "1760:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1760:33:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1760:33:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1802:17:38",
                    "value": {
                      "name": "value_1",
                      "nodeType": "YulIdentifier",
                      "src": "1812:7:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "1802:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1828:42:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1855:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1866:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1851:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1851:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1838:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1838:32:38"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "1828:6:38"
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
                  "src": "1474:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1485:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1497:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "1505:6:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "1513:6:38",
                  "type": ""
                }
              ],
              "src": "1420:456:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1978:87:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1988:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2000:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2011:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1996:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1996:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1988:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2030:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2045:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2053:4:38",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2041:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2041:17:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2023:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2023:36:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2023:36:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1947:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1958:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1969:4:38",
                  "type": ""
                }
              ],
              "src": "1881:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2187:125:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2197:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2209:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2220:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2205:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2205:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2197:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2239:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2254:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2262:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2250:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2250:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2232:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2232:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2232:74:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2156:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2167:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2178:4:38",
                  "type": ""
                }
              ],
              "src": "2070:242:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2387:177:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2433:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2442:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2445:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2435:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2435:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2435:12:38"
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
                              "src": "2408:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2417:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2404:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2404:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2429:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2400:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2400:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2397:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2458:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2484:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2471:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2471:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "2462:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2528:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "2503:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2503:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2503:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2543:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2553:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2543:6:38"
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
                  "src": "2353:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2364:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2376:6:38",
                  "type": ""
                }
              ],
              "src": "2317:247:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2661:177:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2707:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2716:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2719:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2709:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2709:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2709:12:38"
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
                              "src": "2682:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2691:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2678:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2678:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2703:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2674:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2674:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2671:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2732:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2758:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2745:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2745:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "2736:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2802:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "2777:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2777:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2777:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2817:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2827:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2817:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_contract$_LiquidityPool_$7043",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2627:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2638:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2650:6:38",
                  "type": ""
                }
              ],
              "src": "2569:269:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2944:125:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2954:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2966:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2977:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2962:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2962:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2954:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2996:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3011:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3019:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3007:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3007:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2989:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2989:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2989:74:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2913:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2924:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2935:4:38",
                  "type": ""
                }
              ],
              "src": "2843:226:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3161:301:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3207:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3216:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3219:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3209:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3209:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3209:12:38"
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
                              "src": "3182:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3191:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3178:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3178:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3203:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3174:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3174:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3171:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3232:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3258:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3245:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3245:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "3236:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3302:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "3277:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3277:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3277:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3317:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3327:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3317:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3341:47:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3373:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3384:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3369:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3369:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3356:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3356:32:38"
                    },
                    "variables": [
                      {
                        "name": "value_1",
                        "nodeType": "YulTypedName",
                        "src": "3345:7:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value_1",
                          "nodeType": "YulIdentifier",
                          "src": "3422:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "3397:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3397:33:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3397:33:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3439:17:38",
                    "value": {
                      "name": "value_1",
                      "nodeType": "YulIdentifier",
                      "src": "3449:7:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "3439:6:38"
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
                  "src": "3119:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3130:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3142:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "3150:6:38",
                  "type": ""
                }
              ],
              "src": "3074:388:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3522:382:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3532:22:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3546:1:38",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3549:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "3542:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3542:12:38"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3532:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3563:38:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "3593:4:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3599:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3589:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3589:12:38"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "3567:18:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3640:31:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "3642:27:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "3656:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3664:4:38",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "3652:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3652:17:38"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3642:6:38"
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
                          "src": "3620:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3613:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3613:26:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3610:61:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3730:168:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3751:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3754:77:38",
                                "type": "",
                                "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "3744:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3744:88:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3744:88:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3852:1:38",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3855:4:38",
                                "type": "",
                                "value": "0x22"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "3845:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3845:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3845:15:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3880:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3883:4:38",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3873:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3873:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3873:15:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "3686:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3709:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3717:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "3706:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3706:14:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "3683:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3683:38:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3680:218:38"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "3502:4:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "3511:6:38",
                  "type": ""
                }
              ],
              "src": "3467:437:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3941:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3958:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3961:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3951:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3951:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3951:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4055:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4058:4:38",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4048:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4048:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4048:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4079:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4082:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "4072:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4072:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4072:15:38"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "3909:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4146:77:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4156:16:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4167:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "4170:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4163:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4163:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "4156:3:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4195:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "4197:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4197:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4197:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "4187:1:38"
                        },
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "4190:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4184:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4184:10:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4181:36:38"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "4129:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "4132:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "4138:3:38",
                  "type": ""
                }
              ],
              "src": "4098:125:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4402:160:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4419:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4430:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4412:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4412:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4412:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4453:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4464:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4449:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4449:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4469:2:38",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4442:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4442:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4442:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4492:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4503:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4488:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4488:18:38"
                        },
                        {
                          "hexValue": "4f574e45525f4f4e4c59",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "4508:12:38",
                          "type": "",
                          "value": "OWNER_ONLY"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4481:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4481:40:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4481:40:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4530:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4542:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4553:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4538:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4538:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4530:4:38"
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
                  "src": "4379:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4393:4:38",
                  "type": ""
                }
              ],
              "src": "4228:334:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4741:181:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4758:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4769:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4751:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4751:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4751:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4792:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4803:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4788:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4788:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4808:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4781:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4781:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4781:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4831:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4842:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4827:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4827:18:38"
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "4847:33:38",
                          "type": "",
                          "value": "ERC20: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4820:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4820:61:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4820:61:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4890:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4902:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4913:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4898:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4898:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4890:4:38"
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
                  "src": "4718:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4732:4:38",
                  "type": ""
                }
              ],
              "src": "4567:355:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5101:166:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5118:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5129:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5111:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5111:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5111:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5152:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5163:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5148:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5148:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5168:2:38",
                          "type": "",
                          "value": "16"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5141:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5141:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5141:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5191:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5202:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5187:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5187:18:38"
                        },
                        {
                          "hexValue": "41424f56455f4d41585f535550504c59",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5207:18:38",
                          "type": "",
                          "value": "ABOVE_MAX_SUPPLY"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5180:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5180:46:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5180:46:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5235:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5247:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5258:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5243:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5243:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5235:4:38"
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
                  "src": "5078:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5092:4:38",
                  "type": ""
                }
              ],
              "src": "4927:340:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5336:358:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5346:16:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "5361:1:38",
                      "type": "",
                      "value": "1"
                    },
                    "variables": [
                      {
                        "name": "power_1",
                        "nodeType": "YulTypedName",
                        "src": "5350:7:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5371:16:38",
                    "value": {
                      "name": "power_1",
                      "nodeType": "YulIdentifier",
                      "src": "5380:7:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "5371:5:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5396:13:38",
                    "value": {
                      "name": "_base",
                      "nodeType": "YulIdentifier",
                      "src": "5404:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "base",
                        "nodeType": "YulIdentifier",
                        "src": "5396:4:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5460:228:38",
                      "statements": [
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "5505:22:38",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [],
                                  "functionName": {
                                    "name": "panic_error_0x11",
                                    "nodeType": "YulIdentifier",
                                    "src": "5507:16:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5507:18:38"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "5507:18:38"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "5480:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5494:1:38",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "5490:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5490:6:38"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "5498:4:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "5486:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5486:17:38"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "5477:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5477:27:38"
                          },
                          "nodeType": "YulIf",
                          "src": "5474:53:38"
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "5566:29:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "5568:25:38",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "5581:5:38"
                                    },
                                    {
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "5588:4:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "5577:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5577:16:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "5568:5:38"
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
                                "src": "5547:8:38"
                              },
                              {
                                "name": "power_1",
                                "nodeType": "YulIdentifier",
                                "src": "5557:7:38"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "5543:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5543:22:38"
                          },
                          "nodeType": "YulIf",
                          "src": "5540:55:38"
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "5608:23:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "5620:4:38"
                              },
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "5626:4:38"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "5616:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5616:15:38"
                          },
                          "variableNames": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "5608:4:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulAssignment",
                          "src": "5644:34:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "power_1",
                                "nodeType": "YulIdentifier",
                                "src": "5660:7:38"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "5669:8:38"
                              }
                            ],
                            "functionName": {
                              "name": "shr",
                              "nodeType": "YulIdentifier",
                              "src": "5656:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5656:22:38"
                          },
                          "variableNames": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "5644:8:38"
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
                          "src": "5429:8:38"
                        },
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "5439:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "5426:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5426:21:38"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "5448:3:38",
                      "statements": []
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "5422:3:38",
                      "statements": []
                    },
                    "src": "5418:270:38"
                  }
                ]
              },
              "name": "checked_exp_helper",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "_base",
                  "nodeType": "YulTypedName",
                  "src": "5300:5:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "5307:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "5320:5:38",
                  "type": ""
                },
                {
                  "name": "base",
                  "nodeType": "YulTypedName",
                  "src": "5327:4:38",
                  "type": ""
                }
              ],
              "src": "5272:422:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5758:747:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5796:52:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "5810:10:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5819:1:38",
                            "type": "",
                            "value": "1"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "5810:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "5833:5:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "5778:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5771:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5771:16:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5768:80:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5881:52:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "5895:10:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5904:1:38",
                            "type": "",
                            "value": "0"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "5895:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "5918:5:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "5867:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5860:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5860:12:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5857:76:38"
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5969:52:38",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "5983:10:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5992:1:38",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "5983:5:38"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "6006:5:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "5962:59:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5967:1:38",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6037:123:38",
                          "statements": [
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "6072:22:38",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "6074:16:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "6074:18:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "6074:18:38"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "6057:8:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6067:3:38",
                                    "type": "",
                                    "value": "255"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "6054:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6054:17:38"
                              },
                              "nodeType": "YulIf",
                              "src": "6051:43:38"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "6107:25:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "6120:8:38"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6130:1:38",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "6116:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6116:16:38"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "6107:5:38"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "6145:5:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "6030:130:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6035:1:38",
                          "type": "",
                          "value": "2"
                        }
                      }
                    ],
                    "expression": {
                      "name": "base",
                      "nodeType": "YulIdentifier",
                      "src": "5949:4:38"
                    },
                    "nodeType": "YulSwitch",
                    "src": "5942:218:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6258:70:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "6272:28:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "base",
                                "nodeType": "YulIdentifier",
                                "src": "6285:4:38"
                              },
                              {
                                "name": "exponent",
                                "nodeType": "YulIdentifier",
                                "src": "6291:8:38"
                              }
                            ],
                            "functionName": {
                              "name": "exp",
                              "nodeType": "YulIdentifier",
                              "src": "6281:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6281:19:38"
                          },
                          "variableNames": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "6272:5:38"
                            }
                          ]
                        },
                        {
                          "nodeType": "YulLeave",
                          "src": "6313:5:38"
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
                                  "src": "6182:4:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6188:2:38",
                                  "type": "",
                                  "value": "11"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6179:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6179:12:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "6196:8:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6206:2:38",
                                  "type": "",
                                  "value": "78"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6193:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6193:16:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6175:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6175:35:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "6219:4:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6225:3:38",
                                  "type": "",
                                  "value": "307"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6216:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6216:13:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "6234:8:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6244:2:38",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6231:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6231:16:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6212:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6212:36:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "6172:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6172:77:38"
                    },
                    "nodeType": "YulIf",
                    "src": "6169:159:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "6337:57:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "6379:4:38"
                        },
                        {
                          "name": "exponent",
                          "nodeType": "YulIdentifier",
                          "src": "6385:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_helper",
                        "nodeType": "YulIdentifier",
                        "src": "6360:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6360:34:38"
                    },
                    "variables": [
                      {
                        "name": "power_1",
                        "nodeType": "YulTypedName",
                        "src": "6341:7:38",
                        "type": ""
                      },
                      {
                        "name": "base_1",
                        "nodeType": "YulTypedName",
                        "src": "6350:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6439:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "6441:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6441:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6441:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "6409:7:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6426:1:38",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "6422:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6422:6:38"
                            },
                            {
                              "name": "base_1",
                              "nodeType": "YulIdentifier",
                              "src": "6430:6:38"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "6418:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6418:19:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "6406:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6406:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "6403:58:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6470:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "power_1",
                          "nodeType": "YulIdentifier",
                          "src": "6483:7:38"
                        },
                        {
                          "name": "base_1",
                          "nodeType": "YulIdentifier",
                          "src": "6492:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "6479:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6479:20:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "6470:5:38"
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
                  "src": "5729:4:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "5735:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "5748:5:38",
                  "type": ""
                }
              ],
              "src": "5699:806:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6578:72:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6588:56:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "6618:4:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "6628:8:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6638:4:38",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6624:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6624:19:38"
                        }
                      ],
                      "functionName": {
                        "name": "checked_exp_unsigned",
                        "nodeType": "YulIdentifier",
                        "src": "6597:20:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6597:47:38"
                    },
                    "variableNames": [
                      {
                        "name": "power",
                        "nodeType": "YulIdentifier",
                        "src": "6588:5:38"
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
                  "src": "6549:4:38",
                  "type": ""
                },
                {
                  "name": "exponent",
                  "nodeType": "YulTypedName",
                  "src": "6555:8:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "power",
                  "nodeType": "YulTypedName",
                  "src": "6568:5:38",
                  "type": ""
                }
              ],
              "src": "6510:140:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6707:116:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6717:20:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "6732:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "6735:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "6728:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6728:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "6717:7:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6795:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "6797:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6797:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6797:18:38"
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
                                  "src": "6766:1:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "6759:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6759:9:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "6773:1:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nodeType": "YulIdentifier",
                                      "src": "6780:7:38"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "6789:1:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "6776:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6776:15:38"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "6770:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6770:22:38"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "6756:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6756:37:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6749:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6749:45:38"
                    },
                    "nodeType": "YulIf",
                    "src": "6746:71:38"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "6686:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "6689:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "6695:7:38",
                  "type": ""
                }
              ],
              "src": "6655:168:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7002:160:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7019:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7030:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7012:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7012:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7012:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7053:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7064:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7049:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7049:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7069:2:38",
                          "type": "",
                          "value": "10"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7042:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7042:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7042:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7092:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7103:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7088:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7088:18:38"
                        },
                        {
                          "hexValue": "57524954455f4f4e4345",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7108:12:38",
                          "type": "",
                          "value": "WRITE_ONCE"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7081:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7081:40:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7081:40:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7130:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7142:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7153:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7138:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7138:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7130:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6979:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6993:4:38",
                  "type": ""
                }
              ],
              "src": "6828:334:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7341:227:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7358:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7369:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7351:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7351:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7351:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7392:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7403:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7388:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7388:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7408:2:38",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7381:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7381:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7381:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7431:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7442:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7427:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7427:18:38"
                        },
                        {
                          "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7447:34:38",
                          "type": "",
                          "value": "ERC20: decreased allowance below"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7420:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7420:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7420:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7502:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7513:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7498:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7498:18:38"
                        },
                        {
                          "hexValue": "207a65726f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7518:7:38",
                          "type": "",
                          "value": " zero"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7491:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7491:35:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7491:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7535:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7547:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7558:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7543:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7543:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7535:4:38"
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
                  "src": "7318:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7332:4:38",
                  "type": ""
                }
              ],
              "src": "7167:401:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7747:226:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7764:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7775:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7757:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7757:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7757:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7798:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7809:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7794:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7794:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7814:2:38",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7787:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7787:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7787:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7837:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7848:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7833:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7833:18:38"
                        },
                        {
                          "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7853:34:38",
                          "type": "",
                          "value": "ERC20: approve from the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7826:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7826:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7826:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7908:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7919:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7904:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7904:18:38"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7924:6:38",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7897:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7897:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7897:34:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7940:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7952:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7963:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7948:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7948:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7940:4:38"
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
                  "src": "7724:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7738:4:38",
                  "type": ""
                }
              ],
              "src": "7573:400:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8152:224:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8169:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8180:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8162:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8162:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8162:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8203:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8214:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8199:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8199:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8219:2:38",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8192:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8192:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8192:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8242:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8253:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8238:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8238:18:38"
                        },
                        {
                          "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "8258:34:38",
                          "type": "",
                          "value": "ERC20: approve to the zero addre"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8231:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8231:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8231:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8313:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8324:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8309:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8309:18:38"
                        },
                        {
                          "hexValue": "7373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "8329:4:38",
                          "type": "",
                          "value": "ss"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8302:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8302:32:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8302:32:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8343:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8355:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8366:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8351:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8351:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8343:4:38"
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
                  "src": "8129:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8143:4:38",
                  "type": ""
                }
              ],
              "src": "7978:398:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8555:179:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8572:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8583:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8565:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8565:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8565:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8606:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8617:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8602:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8602:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8622:2:38",
                          "type": "",
                          "value": "29"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8595:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8595:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8595:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8645:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8656:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8641:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8641:18:38"
                        },
                        {
                          "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "8661:31:38",
                          "type": "",
                          "value": "ERC20: insufficient allowance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8634:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8634:59:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8634:59:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8702:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8714:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8725:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8710:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8710:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8702:4:38"
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
                  "src": "8532:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8546:4:38",
                  "type": ""
                }
              ],
              "src": "8381:353:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8913:223:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8930:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8941:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8923:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8923:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8923:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8964:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8975:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8960:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8960:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8980:2:38",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8953:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8953:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8953:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9003:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9014:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8999:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8999:18:38"
                        },
                        {
                          "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9019:34:38",
                          "type": "",
                          "value": "ERC20: burn from the zero addres"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8992:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8992:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8992:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9074:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9085:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9070:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9070:18:38"
                        },
                        {
                          "hexValue": "73",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9090:3:38",
                          "type": "",
                          "value": "s"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9063:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9063:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9063:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9103:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9115:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9126:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9111:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9111:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9103:4:38"
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
                  "src": "8890:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8904:4:38",
                  "type": ""
                }
              ],
              "src": "8739:397:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9315:224:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9332:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9343:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9325:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9325:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9325:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9366:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9377:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9362:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9362:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9382:2:38",
                          "type": "",
                          "value": "34"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9355:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9355:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9355:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9405:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9416:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9401:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9401:18:38"
                        },
                        {
                          "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9421:34:38",
                          "type": "",
                          "value": "ERC20: burn amount exceeds balan"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9394:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9394:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9394:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9476:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9487:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9472:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9472:18:38"
                        },
                        {
                          "hexValue": "6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9492:4:38",
                          "type": "",
                          "value": "ce"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9465:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9465:32:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9465:32:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9506:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9518:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9529:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9514:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9514:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9506:4:38"
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
                  "src": "9292:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9306:4:38",
                  "type": ""
                }
              ],
              "src": "9141:398:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9593:79:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9603:17:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9615:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "9618:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "9611:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9611:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "9603:4:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9644:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "9646:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9646:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9646:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "diff",
                          "nodeType": "YulIdentifier",
                          "src": "9635:4:38"
                        },
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "9641:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "9632:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9632:11:38"
                    },
                    "nodeType": "YulIf",
                    "src": "9629:37:38"
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "9575:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "9578:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "9584:4:38",
                  "type": ""
                }
              ],
              "src": "9544:128:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9851:227:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9868:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9879:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9861:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9861:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9861:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9902:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9913:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9898:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9898:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9918:2:38",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9891:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9891:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9891:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9941:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9952:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9937:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9937:18:38"
                        },
                        {
                          "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9957:34:38",
                          "type": "",
                          "value": "ERC20: transfer from the zero ad"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9930:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9930:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9930:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10012:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10023:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10008:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10008:18:38"
                        },
                        {
                          "hexValue": "6472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10028:7:38",
                          "type": "",
                          "value": "dress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10001:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10001:35:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10001:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10045:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10057:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10068:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10053:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10053:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10045:4:38"
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
                  "src": "9828:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9842:4:38",
                  "type": ""
                }
              ],
              "src": "9677:401:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10257:225:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10274:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10285:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10267:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10267:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10267:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10308:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10319:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10304:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10304:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10324:2:38",
                          "type": "",
                          "value": "35"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10297:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10297:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10297:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10347:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10358:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10343:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10343:18:38"
                        },
                        {
                          "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10363:34:38",
                          "type": "",
                          "value": "ERC20: transfer to the zero addr"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10336:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10336:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10336:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10418:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10429:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10414:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10414:18:38"
                        },
                        {
                          "hexValue": "657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10434:5:38",
                          "type": "",
                          "value": "ess"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10407:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10407:33:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10407:33:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10449:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10461:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10472:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10457:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10457:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10449:4:38"
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
                  "src": "10234:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10248:4:38",
                  "type": ""
                }
              ],
              "src": "10083:399:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10661:228:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10678:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10689:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10671:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10671:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10671:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10712:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10723:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10708:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10708:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10728:2:38",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10701:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10701:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10701:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10751:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10762:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10747:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10747:18:38"
                        },
                        {
                          "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10767:34:38",
                          "type": "",
                          "value": "ERC20: transfer amount exceeds b"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10740:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10740:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10740:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10822:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10833:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10818:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10818:18:38"
                        },
                        {
                          "hexValue": "616c616e6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "10838:8:38",
                          "type": "",
                          "value": "alance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10811:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10811:36:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10811:36:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10856:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10868:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10879:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10864:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10864:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10856:4:38"
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
                  "src": "10638:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10652:4:38",
                  "type": ""
                }
              ],
              "src": "10487:402:38"
            }
          ]
        },
        "contents": "{\n    { }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_contract$_LiquidityPool_$7043(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"OWNER_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"ABOVE_MAX_SUPPLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"WRITE_ONCE\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n}",
        "id": 38,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "429:2121:36:-:0;;;695:260;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;797:10:36::1;::::0;-1:-1:-1;;3175:2:9;;3093:91;797:10:36::1;793:14;::::0;:2:::1;:14;:::i;:::-;784:23;::::0;:6:::1;:23;:::i;:::-;771:10;:36:::0;;;817:32:::1;::::0;831:4:::1;::::0;817:5:::1;:32::i;:::-;860:5;:18:::0;;868:10:::1;-1:-1:-1::0;;;;;;860:18:36;;::::1;;::::0;;;889:14:::1;:25:::0;;;;::::1;-1:-1:-1::0;;;;;889:25:36;;;::::1;::::0;;;::::1;::::0;;429:2121;;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4928:2:38;8477:65:9;;;4910:21:38;4967:2;4947:18;;;4940:30;5006:33;4986:18;;;4979:61;5057:18;;8477:65:9;;;;;;;;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;5362:25:38;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;5350:2:38;5335:18;8688:37:9;;;;;;;8402:389;;:::o;11786:121::-;;;;:::o;14:298:38:-;92:6;145:2;133:9;124:7;120:23;116:32;113:52;;;161:1;158;151:12;113:52;187:16;;-1:-1:-1;;;;;232:31:38;;222:42;;212:70;;278:1;275;268:12;212:70;301:5;14:298;-1:-1:-1;;;14:298:38:o;317:127::-;378:10;373:3;369:20;366:1;359:31;409:4;406:1;399:15;433:4;430:1;423:15;449:380;528:1;524:12;;;;571;;;592:61;;646:4;638:6;634:17;624:27;;592:61;699:2;691:6;688:14;668:18;665:38;662:161;;745:10;740:3;736:20;733:1;726:31;780:4;777:1;770:15;808:4;805:1;798:15;662:161;;449:380;;;:::o;960:545::-;1062:2;1057:3;1054:11;1051:448;;;1098:1;1123:5;1119:2;1112:17;1168:4;1164:2;1154:19;1238:2;1226:10;1222:19;1219:1;1215:27;1209:4;1205:38;1274:4;1262:10;1259:20;1256:47;;;-1:-1:-1;1297:4:38;1256:47;1352:2;1347:3;1343:12;1340:1;1336:20;1330:4;1326:31;1316:41;;1407:82;1425:2;1418:5;1415:13;1407:82;;;1470:17;;;1451:1;1440:13;1407:82;;;1411:3;;;960:545;;;:::o;1681:1352::-;1801:10;;-1:-1:-1;;;;;1823:30:38;;1820:56;;;1856:18;;:::i;:::-;1885:97;1975:6;1935:38;1967:4;1961:11;1935:38;:::i;:::-;1929:4;1885:97;:::i;:::-;2037:4;;2101:2;2090:14;;2118:1;2113:663;;;;2820:1;2837:6;2834:89;;;-1:-1:-1;2889:19:38;;;2883:26;2834:89;-1:-1:-1;;1638:1:38;1634:11;;;1630:24;1626:29;1616:40;1662:1;1658:11;;;1613:57;2936:81;;2083:944;;2113:663;907:1;900:14;;;944:4;931:18;;-1:-1:-1;;2149:20:38;;;2267:236;2281:7;2278:1;2275:14;2267:236;;;2370:19;;;2364:26;2349:42;;2462:27;;;;2430:1;2418:14;;;;2297:19;;2267:236;;;2271:3;2531:6;2522:7;2519:19;2516:201;;;2592:19;;;2586:26;-1:-1:-1;;2675:1:38;2671:14;;;2687:3;2667:24;2663:37;2659:42;2644:58;2629:74;;2516:201;-1:-1:-1;;;;;2763:1:38;2747:14;;;2743:22;2730:36;;-1:-1:-1;1681:1352:38:o;3038:127::-;3099:10;3094:3;3090:20;3087:1;3080:31;3130:4;3127:1;3120:15;3154:4;3151:1;3144:15;3170:422;3259:1;3302:5;3259:1;3316:270;3337:7;3327:8;3324:21;3316:270;;;3396:4;3392:1;3388:6;3384:17;3378:4;3375:27;3372:53;;;3405:18;;:::i;:::-;3455:7;3445:8;3441:22;3438:55;;;3475:16;;;;3438:55;3554:22;;;;3514:15;;;;3316:270;;;3320:3;3170:422;;;;;:::o;3597:806::-;3646:5;3676:8;3666:80;;-1:-1:-1;3717:1:38;3731:5;;3666:80;3765:4;3755:76;;-1:-1:-1;3802:1:38;3816:5;;3755:76;3847:4;3865:1;3860:59;;;;3933:1;3928:130;;;;3840:218;;3860:59;3890:1;3881:10;;3904:5;;;3928:130;3965:3;3955:8;3952:17;3949:43;;;3972:18;;:::i;:::-;-1:-1:-1;;4028:1:38;4014:16;;4043:5;;3840:218;;4142:2;4132:8;4129:16;4123:3;4117:4;4114:13;4110:36;4104:2;4094:8;4091:16;4086:2;4080:4;4077:12;4073:35;4070:77;4067:159;;;-1:-1:-1;4179:19:38;;;4211:5;;4067:159;4258:34;4283:8;4277:4;4258:34;:::i;:::-;4328:6;4324:1;4320:6;4316:19;4307:7;4304:32;4301:58;;;4339:18;;:::i;:::-;4377:20;;-1:-1:-1;3597:806:38;;;;;:::o;4408:140::-;4466:5;4495:47;4536:4;4526:8;4522:19;4516:4;4495:47;:::i;4553:168::-;4626:9;;;4657;;4674:15;;;4668:22;;4654:37;4644:71;;4695:18;;:::i;5086:125::-;5151:9;;;5172:10;;;5169:36;;;5185:18;;:::i;5216:177::-;429:2121:36;;;;;;",
    "deployedSourceMap": "429:2121:36:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4433:197;;;;;;:::i;:::-;;:::i;:::-;;;1211:14:38;;1204:22;1186:41;;1174:2;1159:18;4433:197:9;1046:187:38;3244:106:9;3331:12;;3244:106;;;1384:25:38;;;1372:2;1357:18;3244:106:9;1238:177:38;5192:286:9;;;;;;:::i;:::-;;:::i;3093:91::-;;;3175:2;2023:36:38;;2011:2;1996:18;3093:91:9;1881:184:38;508:25:36;;;;;;5873:234:9;;;;;;:::i;:::-;;:::i;1381:335:36:-;;;;;;:::i;:::-;;:::i;:::-;;609:37;;;;;-1:-1:-1;;;;;609:37:36;;;;;;-1:-1:-1;;;;;2250:55:38;;;2232:74;;2220:2;2205:18;609:37:36;2070:242:38;3408:125:9;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;1081:140:36;;;;;;:::i;:::-;;:::i;572:20::-;;;;;-1:-1:-1;;;;;572:20:36;;;2367:102:9;;;:::i;1726:122:36:-;;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;1882:279:36:-;;;;;;:::i;:::-;;:::i;3976:149:9:-;;;;;;:::i;:::-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149;2195:352:36;;;:::i;2156:98:9:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;5192:286::-;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;719:10:19;5961:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;5961:4;;719:10:19;6015:64:9;;719:10:19;;6031:7:9;;6068:10;;6040:25;:38;;;;:::i;:::-;6015:8;:64::i;1381:335:36:-;1014:5;;-1:-1:-1;;;;;1014:5:36;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:36;;4430:2:38;992:42:36;;;4412:21:38;4469:2;4449:18;;;4442:30;-1:-1:-1;;;4488:18:38;;;4481:40;4538:18;;992:42:36;;;;;;;;;-1:-1:-1;;;;;1465:21:36;::::1;1457:65;;;::::0;-1:-1:-1;;;1457:65:36;;4769:2:38;1457:65:36::1;::::0;::::1;4751:21:38::0;4808:2;4788:18;;;4781:30;4847:33;4827:18;;;4820:61;4898:18;;1457:65:36::1;4567:355:38::0;1457:65:36::1;1605:10;;1595:6;1579:13;3331:12:9::0;;;3244:106;1579:13:36::1;:22;;;;:::i;:::-;:36;;1571:65;;;::::0;-1:-1:-1;;;1571:65:36;;5129:2:38;1571:65:36::1;::::0;::::1;5111:21:38::0;5168:2;5148:18;;;5141:30;5207:18;5187;;;5180:46;5243:18;;1571:65:36::1;4927:340:38::0;1571:65:36::1;1670:39;1676:7:::0;1694:14:::1;3175:2:9::0;1694::36::1;:14;:::i;:::-;1685:23;::::0;:6;:23:::1;:::i;:::-;1670:5;:39::i;:::-;1381:335:::0;;:::o;1081:140::-;1014:5;;-1:-1:-1;;;;;1014:5:36;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:36;;4430:2:38;992:42:36;;;4412:21:38;4469:2;4449:18;;;4442:30;-1:-1:-1;;;4488:18:38;;;4481:40;4538:18;;992:42:36;4228:334:38;992:42:36;1164:2:::1;::::0;-1:-1:-1;;;;;1164:2:36::1;1156:25:::0;1148:48:::1;;;::::0;-1:-1:-1;;;1148:48:36;;7030:2:38;1148:48:36::1;::::0;::::1;7012:21:38::0;7069:2;7049:18;;;7042:30;7108:12;7088:18;;;7081:40;7138:18;;1148:48:36::1;6828:334:38::0;1148:48:36::1;1206:2;:8:::0;;;::::1;-1:-1:-1::0;;;;;1206:8:36;;;::::1;::::0;;;::::1;::::0;;1081:140::o;2367:102:9:-;2423:13;2455:7;2448:14;;;;;:::i;1726:122:36:-;1014:5;;-1:-1:-1;;;;;1014:5:36;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:36;;4430:2:38;992:42:36;;;4412:21:38;4469:2;4449:18;;;4442:30;-1:-1:-1;;;4488:18:38;;;4481:40;4538:18;;992:42:36;4228:334:38;992:42:36;1802:39:::1;1808:7:::0;1826:14:::1;3175:2:9::0;1826::36::1;:14;:::i;:::-;1817:23;::::0;:6;:23:::1;:::i;:::-;1802:5;:39::i;6594:427:9:-:0;719:10:19;6687:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;6687:4;;719:10:19;6831:15:9;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;7369:2:38;6803:85:9;;;7351:21:38;7408:2;7388:18;;;7381:30;7447:34;7427:18;;;7420:62;7518:7;7498:18;;;7491:35;7543:19;;6803:85:9;7167:401:38;6803:85:9;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;1882:279:36:-;2086:10;1982:4;4091:18:9;;;:11;:18;;;;;;;;2106:4:36;4091:27:9;;;;;;;;1998:134:36;;2020:6;;2048:8;;2115:7;;2076:36;3976:149:9;1998:134:36;-1:-1:-1;2150:4:36;1882:279;;;;;:::o;2195:352::-;1014:5;;-1:-1:-1;;;;;1014:5:36;1000:10;:19;992:42;;;;-1:-1:-1;;;992:42:36;;4430:2:38;992:42:36;;;4412:21:38;4469:2;4449:18;;;4442:30;-1:-1:-1;;;4488:18:38;;;4481:40;4538:18;;992:42:36;4228:334:38;992:42:36;2254:20:::1;2286:14;3175:2:9::0;2286::36::1;:14;:::i;:::-;2277:23;::::0;:6:::1;:23;:::i;:::-;2349:2;::::0;2254:46;;-1:-1:-1;2310:57:36::1;::::0;2334:4:::1;::::0;-1:-1:-1;;;;;2349:2:36::1;2254:46:::0;2310:15:::1;:57::i;:::-;2422:4;2378:23;3508:18:9::0;;;;;;;;;;;2477:14:36::1;::::0;3508:18:9;;2438:72:36::1;::::0;-1:-1:-1;;;;;2477:14:36::1;3508:18:9::0;2438:15:36::1;:72::i;:::-;2525:15;::::0;::::1;::::0;;;::::1;2244:303;;2195:352::o:0;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;7775:2:38;10233:68:9;;;7757:21:38;7814:2;7794:18;;;7787:30;7853:34;7833:18;;;7826:62;7924:6;7904:18;;;7897:34;7948:19;;10233:68:9;7573:400:38;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;8180:2:38;10311:68:9;;;8162:21:38;8219:2;8199:18;;;8192:30;8258:34;8238:18;;;8231:62;8329:4;8309:18;;;8302:32;8351:19;;10311:68:9;7978:398:38;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1384:25:38;;;10441:32:9;;1357:18:38;10441:32:9;;;;;;;10110:370;;;:::o;10761:441::-;-1:-1:-1;;;;;4091:18:9;;;10891:24;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;-1:-1:-1;;10957:37:9;;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;8583:2:38;11010:68:9;;;8565:21:38;8622:2;8602:18;;;8595:30;8661:31;8641:18;;;8634:59;8710:18;;11010:68:9;8381:353:38;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;1228:147:36:-;1326:42;1342:6;1350:9;1361:6;1326:15;:42::i;:::-;1228:147;;;:::o;8402:389:9:-;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4769:2:38;8477:65:9;;;4751:21:38;4808:2;4788:18;;;4781:30;4847:33;4827:18;;;4820:61;4898:18;;8477:65:9;4567:355:38;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;1384:25:38;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;1372:2:38;1357:18;8688:37:9;;;;;;;1381:335:36;;:::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;8941:2:38;9186:67:9;;;8923:21:38;8980:2;8960:18;;;8953:30;9019:34;8999:18;;;8992:62;9090:3;9070:18;;;9063:31;9111:19;;9186:67:9;8739:397:38;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;9343:2:38;9377:71:9;;;9325:21:38;9382:2;9362:18;;;9355:30;9421:34;9401:18;;;9394:62;9492:4;9472:18;;;9465:32;9514:19;;9377:71:9;9141:398:38;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;1384:25:38;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;1372:2:38;1357:18;9584:37:9;;;;;;;1228:147:36;;;:::o;7475:651:9:-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;9879:2:38;7593:68:9;;;9861:21:38;9918:2;9898:18;;;9891:30;9957:34;9937:18;;;9930:62;10028:7;10008:18;;;10001:35;10053:19;;7593:68:9;9677:401:38;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;10285:2:38;7671:64:9;;;10267:21:38;10324:2;10304:18;;;10297:30;10363:34;10343:18;;;10336:62;10434:5;10414:18;;;10407:33;10457:19;;7671:64:9;10083:399:38;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;10689:2:38;7842:72:9;;;10671:21:38;10728:2;10708:18;;;10701:30;10767:34;10747:18;;;10740:62;10838:8;10818:18;;;10811:36;10864:19;;7842:72:9;10487:402:38;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;1384:25:38;;1372:2;1357:18;;1238:177;8045:26:9;;;;;;;;8082:37;1228:147:36;14:548:38;126:4;155:2;184;173:9;166:21;216:6;210:13;259:6;254:2;243:9;239:18;232:34;284:1;294:140;308:6;305:1;302:13;294:140;;;403:14;;;399:23;;393:30;369:17;;;388:2;365:26;358:66;323:10;;294:140;;;298:3;483:1;478:2;469:6;458:9;454:22;450:31;443:42;553:2;546;542:7;537:2;529:6;525:15;521:29;510:9;506:45;502:54;494:62;;;;14:548;;;;:::o;567:154::-;-1:-1:-1;;;;;646:5:38;642:54;635:5;632:65;622:93;;711:1;708;701:12;622:93;567:154;:::o;726:315::-;794:6;802;855:2;843:9;834:7;830:23;826:32;823:52;;;871:1;868;861:12;823:52;910:9;897:23;929:31;954:5;929:31;:::i;:::-;979:5;1031:2;1016:18;;;;1003:32;;-1:-1:-1;;;726:315:38:o;1420:456::-;1497:6;1505;1513;1566:2;1554:9;1545:7;1541:23;1537:32;1534:52;;;1582:1;1579;1572:12;1534:52;1621:9;1608:23;1640:31;1665:5;1640:31;:::i;:::-;1690:5;-1:-1:-1;1747:2:38;1732:18;;1719:32;1760:33;1719:32;1760:33;:::i;:::-;1420:456;;1812:7;;-1:-1:-1;;;1866:2:38;1851:18;;;;1838:32;;1420:456::o;2317:247::-;2376:6;2429:2;2417:9;2408:7;2404:23;2400:32;2397:52;;;2445:1;2442;2435:12;2397:52;2484:9;2471:23;2503:31;2528:5;2503:31;:::i;:::-;2553:5;2317:247;-1:-1:-1;;;2317:247:38:o;3074:388::-;3142:6;3150;3203:2;3191:9;3182:7;3178:23;3174:32;3171:52;;;3219:1;3216;3209:12;3171:52;3258:9;3245:23;3277:31;3302:5;3277:31;:::i;:::-;3327:5;-1:-1:-1;3384:2:38;3369:18;;3356:32;3397:33;3356:32;3397:33;:::i;:::-;3449:7;3439:17;;;3074:388;;;;;:::o;3467:437::-;3546:1;3542:12;;;;3589;;;3610:61;;3664:4;3656:6;3652:17;3642:27;;3610:61;3717:2;3709:6;3706:14;3686:18;3683:38;3680:218;;-1:-1:-1;;;3751:1:38;3744:88;3855:4;3852:1;3845:15;3883:4;3880:1;3873:15;3680:218;;3467:437;;;:::o;3909:184::-;-1:-1:-1;;;3958:1:38;3951:88;4058:4;4055:1;4048:15;4082:4;4079:1;4072:15;4098:125;4163:9;;;4184:10;;;4181:36;;;4197:18;;:::i;5272:422::-;5361:1;5404:5;5361:1;5418:270;5439:7;5429:8;5426:21;5418:270;;;5498:4;5494:1;5490:6;5486:17;5480:4;5477:27;5474:53;;;5507:18;;:::i;:::-;5557:7;5547:8;5543:22;5540:55;;;5577:16;;;;5540:55;5656:22;;;;5616:15;;;;5418:270;;;5422:3;5272:422;;;;;:::o;5699:806::-;5748:5;5778:8;5768:80;;-1:-1:-1;5819:1:38;5833:5;;5768:80;5867:4;5857:76;;-1:-1:-1;5904:1:38;5918:5;;5857:76;5949:4;5967:1;5962:59;;;;6035:1;6030:130;;;;5942:218;;5962:59;5992:1;5983:10;;6006:5;;;6030:130;6067:3;6057:8;6054:17;6051:43;;;6074:18;;:::i;:::-;-1:-1:-1;;6130:1:38;6116:16;;6145:5;;5942:218;;6244:2;6234:8;6231:16;6225:3;6219:4;6216:13;6212:36;6206:2;6196:8;6193:16;6188:2;6182:4;6179:12;6175:35;6172:77;6169:159;;;-1:-1:-1;6281:19:38;;;6313:5;;6169:159;6360:34;6385:8;6379:4;6360:34;:::i;:::-;6430:6;6426:1;6422:6;6418:19;6409:7;6406:32;6403:58;;;6441:18;;:::i;:::-;6479:20;;5699:806;-1:-1:-1;;;5699:806:38:o;6510:140::-;6568:5;6597:47;6638:4;6628:8;6624:19;6618:4;6597:47;:::i;6655:168::-;6728:9;;;6759;;6776:15;;;6770:22;;6756:37;6746:71;;6797:18;;:::i;9544:128::-;9611:9;;;9632:11;;;9629:37;;;9646:18;;:::i",
    "source": "// SPDX-License-Identifier: GPL-3.0-only\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/security/Pausable.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/security/ReentrancyGuard.sol\";\nimport \"@openzeppelin/contracts/utils/Strings.sol\";\nimport \"@openzeppelin/contracts/utils/Context.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract VJMToken is ERC20 {\n    event TreasuryMoved(); // 자산이동  \n\n    uint256 public MAX_SUPPLY; // 발행량 jmt : vjmt == 1:10 \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 재무 계좌\n    LiquidityPool lp;\n   \n    constructor(address payable treasury) ERC20(\"vJMT Token\", \"vJMT\") {\n        MAX_SUPPLY = 600000 * 10**decimals();\n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    // set lp address \n    function setLPAddress(LiquidityPool _lp) public ownerOnly {\n       require(address(lp) == address(0), \"WRITE_ONCE\");\n        lp = _lp;\n    }\n \n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        super._transfer(sender, recipient, amount);\n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    // 거래 제한 해제\n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount) public returns (bool) {\n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 재무 지갑 이동\n    function MoveToTreasuryWallet() public ownerOnly {\n        uint256 lpSwapAmount = 100000 * 10**decimals();\n        super._transfer(address(this), address(lp), lpSwapAmount);\n\n        uint256 remainingAmount = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingAmount);\n        emit TreasuryMoved();\n    }\n\n}",
    "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/VJMToken.sol",
    "ast": {
      "absolutePath": "project:/contracts/VJMToken.sol",
      "exportedSymbols": {
        "Context": [
          4290
        ],
        "ERC20": [
          2473
        ],
        "IERC20": [
          2551
        ],
        "IERC20Metadata": [
          2576
        ],
        "LiquidityPool": [
          7043
        ],
        "Ownable": [
          112
        ],
        "Pausable": [
          220
        ],
        "ReentrancyGuard": [
          260
        ],
        "Strings": [
          4590
        ],
        "VJMToken": [
          11290
        ]
      },
      "id": 11291,
      "license": "GPL-3.0-only",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 11032,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "41:23:36"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "id": 11033,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 2474,
          "src": "66:55:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/security/Pausable.sol",
          "file": "@openzeppelin/contracts/security/Pausable.sol",
          "id": 11034,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 221,
          "src": "122:55:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 11035,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 113,
          "src": "178:52:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
          "file": "@openzeppelin/contracts/security/ReentrancyGuard.sol",
          "id": 11036,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 261,
          "src": "231:62:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Strings.sol",
          "file": "@openzeppelin/contracts/utils/Strings.sol",
          "id": 11037,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 4591,
          "src": "294:51:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
          "file": "@openzeppelin/contracts/utils/Context.sol",
          "id": 11038,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 4291,
          "src": "346:51:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/LiquidityPool.sol",
          "file": "./LiquidityPool.sol",
          "id": 11039,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 11291,
          "sourceUnit": 7044,
          "src": "398:29:36",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 11040,
                "name": "ERC20",
                "nameLocations": [
                  "450:5:36"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2473,
                "src": "450:5:36"
              },
              "id": 11041,
              "nodeType": "InheritanceSpecifier",
              "src": "450:5:36"
            }
          ],
          "canonicalName": "VJMToken",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 11290,
          "linearizedBaseContracts": [
            11290,
            2473,
            2576,
            2551,
            4290
          ],
          "name": "VJMToken",
          "nameLocation": "438:8:36",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "anonymous": false,
              "eventSelector": "ede40e57f47ee7d3737450b9e0e25fc56b11ce89ebac5d06dd834fe351418fa7",
              "id": 11043,
              "name": "TreasuryMoved",
              "nameLocation": "468:13:36",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 11042,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "481:2:36"
              },
              "src": "462:22:36"
            },
            {
              "constant": false,
              "functionSelector": "32cb6b0c",
              "id": 11045,
              "mutability": "mutable",
              "name": "MAX_SUPPLY",
              "nameLocation": "523:10:36",
              "nodeType": "VariableDeclaration",
              "scope": 11290,
              "src": "508:25:36",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 11044,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "508:7:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "8da5cb5b",
              "id": 11047,
              "mutability": "mutable",
              "name": "owner",
              "nameLocation": "587:5:36",
              "nodeType": "VariableDeclaration",
              "scope": 11290,
              "src": "572:20:36",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 11046,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "572:7:36",
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
              "id": 11049,
              "mutability": "mutable",
              "name": "treasuryWallet",
              "nameLocation": "632:14:36",
              "nodeType": "VariableDeclaration",
              "scope": 11290,
              "src": "609:37:36",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              },
              "typeName": {
                "id": 11048,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "609:15:36",
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
              "id": 11052,
              "mutability": "mutable",
              "name": "lp",
              "nameLocation": "683:2:36",
              "nodeType": "VariableDeclaration",
              "scope": 11290,
              "src": "669:16:36",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                "typeString": "contract LiquidityPool"
              },
              "typeName": {
                "id": 11051,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 11050,
                  "name": "LiquidityPool",
                  "nameLocations": [
                    "669:13:36"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 7043,
                  "src": "669:13:36"
                },
                "referencedDeclaration": 7043,
                "src": "669:13:36",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                  "typeString": "contract LiquidityPool"
                }
              },
              "visibility": "internal"
            },
            {
              "body": {
                "id": 11087,
                "nodeType": "Block",
                "src": "761:194:36",
                "statements": [
                  {
                    "expression": {
                      "id": 11068,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 11061,
                        "name": "MAX_SUPPLY",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11045,
                        "src": "771:10:36",
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
                        "id": 11067,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "363030303030",
                          "id": 11062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "784:6:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_600000_by_1",
                            "typeString": "int_const 600000"
                          },
                          "value": "600000"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3130",
                            "id": 11063,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "793:2:36",
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
                              "id": 11064,
                              "name": "decimals",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1962,
                              "src": "797:8:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                "typeString": "function () view returns (uint8)"
                              }
                            },
                            "id": 11065,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "797:10:36",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "793:14:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "784:23:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "771:36:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 11069,
                    "nodeType": "ExpressionStatement",
                    "src": "771:36:36"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 11073,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "831:4:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            ],
                            "id": 11072,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "823:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11071,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "823:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11074,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "823:13:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11075,
                          "name": "MAX_SUPPLY",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11045,
                          "src": "838:10:36",
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
                        "id": 11070,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2290,
                        "src": "817:5:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 11076,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "817:32:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11077,
                    "nodeType": "ExpressionStatement",
                    "src": "817:32:36"
                  },
                  {
                    "expression": {
                      "id": 11081,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 11078,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11047,
                        "src": "860:5:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "expression": {
                          "id": 11079,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "868:3:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 11080,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "872:6:36",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "868:10:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "860:18:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 11082,
                    "nodeType": "ExpressionStatement",
                    "src": "860:18:36"
                  },
                  {
                    "expression": {
                      "id": 11085,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 11083,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11049,
                        "src": "889:14:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 11084,
                        "name": "treasury",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11054,
                        "src": "906:8:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "889:25:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "id": 11086,
                    "nodeType": "ExpressionStatement",
                    "src": "889:25:36"
                  }
                ]
              },
              "id": 11088,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "764a4d5420546f6b656e",
                      "id": 11057,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "739:12:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_ea4d8c69a65fad034f10740b7a1ab2a34b81adbe1d188ce9216ee6a8758bdcb4",
                        "typeString": "literal_string \"vJMT Token\""
                      },
                      "value": "vJMT Token"
                    },
                    {
                      "hexValue": "764a4d54",
                      "id": 11058,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "753:6:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_7918aede97f2be136e5c3df0d3ecbe7d26bc3fc14d0e3b20723408605d8f5a0e",
                        "typeString": "literal_string \"vJMT\""
                      },
                      "value": "vJMT"
                    }
                  ],
                  "id": 11059,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 11056,
                    "name": "ERC20",
                    "nameLocations": [
                      "733:5:36"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2473,
                    "src": "733:5:36"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "733:27:36"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11055,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11054,
                    "mutability": "mutable",
                    "name": "treasury",
                    "nameLocation": "723:8:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11088,
                    "src": "707:24:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 11053,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "707:15:36",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "706:26:36"
              },
              "returnParameters": {
                "id": 11060,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "761:0:36"
              },
              "scope": 11290,
              "src": "695:260:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 11099,
                "nodeType": "Block",
                "src": "982:70:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 11094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 11091,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "1000:3:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 11092,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1004:6:36",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1000:10:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 11093,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11047,
                            "src": "1014:5:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1000:19:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4f574e45525f4f4e4c59",
                          "id": 11095,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1021:12:36",
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
                        "id": 11090,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "992:7:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 11096,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "992:42:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11097,
                    "nodeType": "ExpressionStatement",
                    "src": "992:42:36"
                  },
                  {
                    "id": 11098,
                    "nodeType": "PlaceholderStatement",
                    "src": "1044:1:36"
                  }
                ]
              },
              "id": 11100,
              "name": "ownerOnly",
              "nameLocation": "970:9:36",
              "nodeType": "ModifierDefinition",
              "parameters": {
                "id": 11089,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "979:2:36"
              },
              "src": "961:91:36",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 11125,
                "nodeType": "Block",
                "src": "1139:82:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 11117,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "id": 11111,
                                "name": "lp",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 11052,
                                "src": "1164:2:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                                  "typeString": "contract LiquidityPool"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                                  "typeString": "contract LiquidityPool"
                                }
                              ],
                              "id": 11110,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1156:7:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 11109,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1156:7:36",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 11112,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1156:11:36",
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
                                "id": 11115,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1179:1:36",
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
                              "id": 11114,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1171:7:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 11113,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1171:7:36",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 11116,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1171:10:36",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1156:25:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "57524954455f4f4e4345",
                          "id": 11118,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1183:12:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                            "typeString": "literal_string \"WRITE_ONCE\""
                          },
                          "value": "WRITE_ONCE"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b2a82e4e45b336ce6c44d9804b6c2ced0fb24d6ef1a76c7dfe3cfb5d8d132923",
                            "typeString": "literal_string \"WRITE_ONCE\""
                          }
                        ],
                        "id": 11108,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1148:7:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 11119,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1148:48:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11120,
                    "nodeType": "ExpressionStatement",
                    "src": "1148:48:36"
                  },
                  {
                    "expression": {
                      "id": 11123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 11121,
                        "name": "lp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11052,
                        "src": "1206:2:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 11122,
                        "name": "_lp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11103,
                        "src": "1211:3:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                          "typeString": "contract LiquidityPool"
                        }
                      },
                      "src": "1206:8:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "id": 11124,
                    "nodeType": "ExpressionStatement",
                    "src": "1206:8:36"
                  }
                ]
              },
              "functionSelector": "7a351a1d",
              "id": 11126,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 11106,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 11105,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "1129:9:36"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 11100,
                    "src": "1129:9:36"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1129:9:36"
                }
              ],
              "name": "setLPAddress",
              "nameLocation": "1090:12:36",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11104,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11103,
                    "mutability": "mutable",
                    "name": "_lp",
                    "nameLocation": "1117:3:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11126,
                    "src": "1103:17:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                      "typeString": "contract LiquidityPool"
                    },
                    "typeName": {
                      "id": 11102,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 11101,
                        "name": "LiquidityPool",
                        "nameLocations": [
                          "1103:13:36"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 7043,
                        "src": "1103:13:36"
                      },
                      "referencedDeclaration": 7043,
                      "src": "1103:13:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                        "typeString": "contract LiquidityPool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1102:19:36"
              },
              "returnParameters": {
                "id": 11107,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1139:0:36"
              },
              "scope": 11290,
              "src": "1081:140:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                2234
              ],
              "body": {
                "id": 11144,
                "nodeType": "Block",
                "src": "1316:59:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 11139,
                          "name": "sender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11128,
                          "src": "1342:6:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11140,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11130,
                          "src": "1350:9:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11141,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11132,
                          "src": "1361:6:36",
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
                          "id": 11136,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "1326:5:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_VJMToken_$11290_$",
                            "typeString": "type(contract super VJMToken)"
                          }
                        },
                        "id": 11138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1332:9:36",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2234,
                        "src": "1326:15:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 11142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1326:42:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11143,
                    "nodeType": "ExpressionStatement",
                    "src": "1326:42:36"
                  }
                ]
              },
              "id": 11145,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_transfer",
              "nameLocation": "1237:9:36",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 11134,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "1307:8:36"
              },
              "parameters": {
                "id": 11133,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11128,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1255:6:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11145,
                    "src": "1247:14:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11127,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1247:7:36",
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
                    "id": 11130,
                    "mutability": "mutable",
                    "name": "recipient",
                    "nameLocation": "1271:9:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11145,
                    "src": "1263:17:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11129,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1263:7:36",
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
                    "id": 11132,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1290:6:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11145,
                    "src": "1282:14:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 11131,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1282:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1246:51:36"
              },
              "returnParameters": {
                "id": 11135,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1316:0:36"
              },
              "scope": 11290,
              "src": "1228:147:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "body": {
                "id": 11184,
                "nodeType": "Block",
                "src": "1447:269:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 11160,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11155,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11147,
                            "src": "1465:7:36",
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
                                "id": 11158,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1484:1:36",
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
                              "id": 11157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1476:7:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 11156,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1476:7:36",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 11159,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1476:10:36",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1465:21:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                          "id": 11161,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1488:33:36",
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
                        "id": 11154,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1457:7:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 11162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1457:65:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11163,
                    "nodeType": "ExpressionStatement",
                    "src": "1457:65:36"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 11170,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 11168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 11165,
                                "name": "totalSupply",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1972,
                                "src": "1579:11:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 11166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1579:13:36",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "id": 11167,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11149,
                              "src": "1595:6:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "1579:22:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "id": 11169,
                            "name": "MAX_SUPPLY",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11045,
                            "src": "1605:10:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1579:36:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "41424f56455f4d41585f535550504c59",
                          "id": 11171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1617:18:36",
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
                        "id": 11164,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1571:7:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 11172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1571:65:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11173,
                    "nodeType": "ExpressionStatement",
                    "src": "1571:65:36"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 11175,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11147,
                          "src": "1676:7:36",
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
                          "id": 11181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11176,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11149,
                            "src": "1685:6:36",
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
                            "id": 11180,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "3130",
                              "id": 11177,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1694:2:36",
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
                                "id": 11178,
                                "name": "decimals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1962,
                                "src": "1698:8:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                  "typeString": "function () view returns (uint8)"
                                }
                              },
                              "id": 11179,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1698:10:36",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1694:14:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1685:23:36",
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
                        "id": 11174,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2290,
                        "src": "1670:5:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 11182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1670:39:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11183,
                    "nodeType": "ExpressionStatement",
                    "src": "1670:39:36"
                  }
                ]
              },
              "functionSelector": "40c10f19",
              "id": 11185,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 11152,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 11151,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "1437:9:36"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 11100,
                    "src": "1437:9:36"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1437:9:36"
                }
              ],
              "name": "mint",
              "nameLocation": "1390:4:36",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11150,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11147,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1403:7:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11185,
                    "src": "1395:15:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11146,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1395:7:36",
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
                    "id": 11149,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1420:6:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11185,
                    "src": "1412:14:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 11148,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1412:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1394:33:36"
              },
              "returnParameters": {
                "id": 11153,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1447:0:36"
              },
              "scope": 11290,
              "src": "1381:335:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 11204,
                "nodeType": "Block",
                "src": "1792:56:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 11195,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11187,
                          "src": "1808:7:36",
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
                          "id": 11201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 11196,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11189,
                            "src": "1817:6:36",
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
                            "id": 11200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "3130",
                              "id": 11197,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1826:2:36",
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
                                "id": 11198,
                                "name": "decimals",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1962,
                                "src": "1830:8:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                  "typeString": "function () view returns (uint8)"
                                }
                              },
                              "id": 11199,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1830:10:36",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "src": "1826:14:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1817:23:36",
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
                        "id": 11194,
                        "name": "_burn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2362,
                        "src": "1802:5:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 11202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1802:39:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11203,
                    "nodeType": "ExpressionStatement",
                    "src": "1802:39:36"
                  }
                ]
              },
              "functionSelector": "9dc29fac",
              "id": 11205,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 11192,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 11191,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "1782:9:36"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 11100,
                    "src": "1782:9:36"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1782:9:36"
                }
              ],
              "name": "burn",
              "nameLocation": "1735:4:36",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11190,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11187,
                    "mutability": "mutable",
                    "name": "account",
                    "nameLocation": "1748:7:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11205,
                    "src": "1740:15:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11186,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1740:7:36",
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
                    "id": 11189,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "1765:6:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11205,
                    "src": "1757:14:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 11188,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1757:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1739:33:36"
              },
              "returnParameters": {
                "id": 11193,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1792:0:36"
              },
              "scope": 11290,
              "src": "1726:122:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 11233,
                "nodeType": "Block",
                "src": "1988:173:36",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 11217,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11207,
                          "src": "2020:6:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11218,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11209,
                          "src": "2048:8:36",
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
                          "id": 11228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 11220,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "2086:3:36",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 11221,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2090:6:36",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "2086:10:36",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 11224,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967268,
                                    "src": "2106:4:36",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_VJMToken_$11290",
                                      "typeString": "contract VJMToken"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_VJMToken_$11290",
                                      "typeString": "contract VJMToken"
                                    }
                                  ],
                                  "id": 11223,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2098:7:36",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 11222,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2098:7:36",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 11225,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2098:13:36",
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
                              "id": 11219,
                              "name": "allowance",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2029,
                              "src": "2076:9:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address,address) view returns (uint256)"
                              }
                            },
                            "id": 11226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2076:36:36",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 11227,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11211,
                            "src": "2115:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2076:46:36",
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
                        "id": 11216,
                        "name": "_approve",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2407,
                        "src": "1998:8:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 11229,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1998:134:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11230,
                    "nodeType": "ExpressionStatement",
                    "src": "1998:134:36"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 11231,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2150:4:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 11215,
                    "id": 11232,
                    "nodeType": "Return",
                    "src": "2143:11:36"
                  }
                ]
              },
              "functionSelector": "d83a2bf3",
              "id": 11234,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "increaseContractAllowance",
              "nameLocation": "1891:25:36",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11212,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11207,
                    "mutability": "mutable",
                    "name": "_owner",
                    "nameLocation": "1925:6:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11234,
                    "src": "1917:14:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11206,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1917:7:36",
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
                    "id": 11209,
                    "mutability": "mutable",
                    "name": "_spender",
                    "nameLocation": "1940:8:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11234,
                    "src": "1932:16:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 11208,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1932:7:36",
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
                    "id": 11211,
                    "mutability": "mutable",
                    "name": "_amount",
                    "nameLocation": "1957:7:36",
                    "nodeType": "VariableDeclaration",
                    "scope": 11234,
                    "src": "1949:15:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 11210,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1949:7:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1916:49:36"
              },
              "returnParameters": {
                "id": 11215,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11214,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 11234,
                    "src": "1982:4:36",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 11213,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1982:4:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1981:6:36"
              },
              "scope": 11290,
              "src": "1882:279:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 11288,
                "nodeType": "Block",
                "src": "2244:303:36",
                "statements": [
                  {
                    "assignments": [
                      11240
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 11240,
                        "mutability": "mutable",
                        "name": "lpSwapAmount",
                        "nameLocation": "2262:12:36",
                        "nodeType": "VariableDeclaration",
                        "scope": 11288,
                        "src": "2254:20:36",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 11239,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2254:7:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 11247,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 11246,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "hexValue": "313030303030",
                        "id": 11241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2277:6:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000_by_1",
                          "typeString": "int_const 100000"
                        },
                        "value": "100000"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 11245,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "hexValue": "3130",
                          "id": 11242,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2286:2:36",
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
                            "id": 11243,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1962,
                            "src": "2290:8:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                              "typeString": "function () view returns (uint8)"
                            }
                          },
                          "id": 11244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2290:10:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2286:14:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2277:23:36",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2254:46:36"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 11253,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2334:4:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            ],
                            "id": 11252,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2326:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11251,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2326:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11254,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2326:13:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 11257,
                              "name": "lp",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11052,
                              "src": "2349:2:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                                "typeString": "contract LiquidityPool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_LiquidityPool_$7043",
                                "typeString": "contract LiquidityPool"
                              }
                            ],
                            "id": 11256,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2341:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11255,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2341:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11258,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2341:11:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11259,
                          "name": "lpSwapAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11240,
                          "src": "2354:12:36",
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
                          "id": 11248,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2310:5:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_VJMToken_$11290_$",
                            "typeString": "type(contract super VJMToken)"
                          }
                        },
                        "id": 11250,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2316:9:36",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2234,
                        "src": "2310:15:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 11260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2310:57:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11261,
                    "nodeType": "ExpressionStatement",
                    "src": "2310:57:36"
                  },
                  {
                    "assignments": [
                      11263
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 11263,
                        "mutability": "mutable",
                        "name": "remainingAmount",
                        "nameLocation": "2386:15:36",
                        "nodeType": "VariableDeclaration",
                        "scope": 11288,
                        "src": "2378:23:36",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 11262,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2378:7:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 11270,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 11267,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2422:4:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            ],
                            "id": 11266,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2414:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11265,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2414:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11268,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2414:13:36",
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
                        "id": 11264,
                        "name": "balanceOf",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1986,
                        "src": "2404:9:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view returns (uint256)"
                        }
                      },
                      "id": 11269,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2404:24:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2378:50:36"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 11276,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2462:4:36",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_VJMToken_$11290",
                                "typeString": "contract VJMToken"
                              }
                            ],
                            "id": 11275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2454:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11274,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2454:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2454:13:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 11280,
                              "name": "treasuryWallet",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11049,
                              "src": "2477:14:36",
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
                            "id": 11279,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2469:7:36",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 11278,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2469:7:36",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 11281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2469:23:36",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 11282,
                          "name": "remainingAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11263,
                          "src": "2494:15:36",
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
                          "id": 11271,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2438:5:36",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_VJMToken_$11290_$",
                            "typeString": "type(contract super VJMToken)"
                          }
                        },
                        "id": 11273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2444:9:36",
                        "memberName": "_transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2234,
                        "src": "2438:15:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 11283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2438:72:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11284,
                    "nodeType": "ExpressionStatement",
                    "src": "2438:72:36"
                  },
                  {
                    "eventCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 11285,
                        "name": "TreasuryMoved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11043,
                        "src": "2525:13:36",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 11286,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2525:15:36",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 11287,
                    "nodeType": "EmitStatement",
                    "src": "2520:20:36"
                  }
                ]
              },
              "functionSelector": "f3748af9",
              "id": 11289,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 11237,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 11236,
                    "name": "ownerOnly",
                    "nameLocations": [
                      "2234:9:36"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 11100,
                    "src": "2234:9:36"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "2234:9:36"
                }
              ],
              "name": "MoveToTreasuryWallet",
              "nameLocation": "2204:20:36",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 11235,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2224:2:36"
              },
              "returnParameters": {
                "id": 11238,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2244:0:36"
              },
              "scope": 11290,
              "src": "2195:352:36",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 11291,
          "src": "429:2121:36",
          "usedErrors": []
        }
      ],
      "src": "41:2509:36"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.9",
    "updatedAt": "2022-09-27T15:21:47.139Z",
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
module.exports = VTOKEN;