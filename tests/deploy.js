//run with parameters - JSONRPCURL ADMIN_WALLET_ADDR ADMIN_WALLET_PRIVATEKEY CONTRACT_ADDRESS
//FOR GANACHE:
//node test.js http://127.0.0.1:8545 0x6dE47FC3cA6DBE83a0cbc3b0F4AF79809eD43749 0670559f1384d63515ca4a433e17e9b00e91de7615da040719de39a7139a11ba

// run ganache locally with the following command and leave terminal window open, and run script (this file) in another terminal window,
// NOTE: we are forking BSC mainnet
// terminal 1>ganache-cli -f https://bsc-mainnet.nodereal.io/v1/f18df2bd22bb4ce0b2761418395b9e33 --account="0x0670559f1384d63515ca4a433e17e9b00e91de7615da040719de39a7139a11ba,100000000000000000000" --account="0x9ccb8579243c6fad3ebccaf5a990e5fa8f56f8f34e7c45db8a191586cb85a903,100000000000000000000" --account="0xd343a508a76d511222c76d10ac3c500f9aa36795f1cfd12454939ca176004b88,100000000000000000000" --account="0x3b5ca1527b422b1230978a0018c30d26773f689d9ff9c6d91ac7d2e713267582,100000000000000000000" --account="0x9f82d19e7267ae36ab4c2649f923464c4ac5643fed506c74b3ccddb44abfbc1e,100000000000000000000" --account="0x11b55a6a116516f027a2f0078f7961aa5d8ab0130debc34639766cb4c7c50f9c,100000000000000000000" --account="0x4a6177f095081d427e0a4dd8a3c93badff6f70cb776c4756761c442e89551117,100000000000000000000" --account="0xce67e77c6b1c4a581c1a06da2aff9531fed8001fb4ebe36ad9b9a60aa9a94ad0,100000000000000000000" --account="0xad730bdc3a8c50982525c1b9c3ad369c2a3d7b359a60302b2c60754f772002bf,100000000000000000000" --account="0xbf50fc70182e9c99338751a8f54a0504504cc496486504abef339d53f3e51335,100000000000000000000" --secure -u 0 -u 1 -u 2 -u 3 -u 4 -u 6 -u 7 -u 8 -u 9 --gasLimit 50000000 --gasPrice 5000 -b 1
// terminal 2>node test.js
//
//! make sure for each test you restart ganache (specific balances are checked..)
//
const { ethers } = require("ethers");

const fs = require('fs');



const contractsPath = '/Users/serg/eth/pasha_dipl4/smartcontracts/';


let all_source = fs.readFileSync("../smartcontracts/compiled/contracts.json");
let nft_contract_obj = JSON.parse(all_source)["contracts"][contractsPath+'nft/nft.sol:NFTPass'];
let nft_contract;

let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));




function requireCondition(condition, err_msg, success_msg) {
	if (condition){
		console.log(success_msg);
	} else {
		console.log(err_msg);
		process.exit(0);
	}
}



testall();







async function testall(){

	
	const myArgs = process.argv.slice(2);
	console.log('myArgs=', myArgs);

	if (myArgs.length < 3) {
		console.log('run with arguments: JsonRpcProviderUrl admin_wallet_addr admin_wallet_private_key');
		process.exit(0);
	}

	let JsonRpcProviderUrl = myArgs[0];

	console.log('JsonRpcProviderUrl=',JsonRpcProviderUrl);

	


	const provider = new ethers.providers.JsonRpcProvider(JsonRpcProviderUrl); //like, ganache - http://127.0.0.1:8545

	
	let admin_wallet = new ethers.Wallet(myArgs[2], provider);
	const admin_wallet_addr = myArgs[1];

	

	console.log('admin balance:', ethers.utils.formatEther( await provider.getBalance(admin_wallet_addr)) );



		
	
	console.log('/* 1.deploy nft contract */');

	try {
		
	    let contract_factory = new ethers.ContractFactory(nft_contract_obj.abi, nft_contract_obj.bin, admin_wallet);
	  
	    nft_contract = await contract_factory.deploy();
	  	
	  	
	    await nft_contract.deployTransaction.wait(5); //after that it is deployed;
	
	    console.log ('nft contract address =',nft_contract.address);
	    
	  
	}  catch (e) {
		
		console.log('== 1.deploy nft contract - failed ==');
		console.log(e.message);
		process.exit(0);
	}

	 


	console.log('== 1.deploy nft contract - passed ==');
  	
	

 	process.exit(0);
}



