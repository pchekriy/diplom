const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());


const ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.nodereal.io/v1/b490ab2554f54a459464800ababd523f'); //like, ganache - http://127.0.0.1:8545

const nft_contract_address = '0x47446783032C47Be68036ED3A4AcbB271c428Daf';  
const nft_contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ACTIVE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CANNOT_TRANSFER_TO_ZERO_ADDRESS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEVELOPED_BY_PAVEL_CHEKRIY","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DISCLAIMER_MY_CODE_COULD_BE_USED_FOR_MALICIOUS_OBJECTIVES_WITHOUT_MY_CONSENT_ALWAYS_DYOR","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NOT_ACTIVE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NOT_CURRENT_OWNER","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mgr","type":"address"}],"name":"addManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"administeredBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"burnByAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cleanup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deactivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"exist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"hasPass","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isManager","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"to","type":"address[]"}],"name":"massMintManager","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mintManager","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ownerWithdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"realAmountTokens","type":"uint256"}],"name":"ownerWithdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mgr","type":"address"}],"name":"removeManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newContractUri","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"setNFTName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newSymbol","type":"string"}],"name":"setNFTSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let nft_contract = new ethers.Contract( nft_contract_address, nft_contract_abi, provider);   

  

app.get('/status', (req, res) => {
  res.json({"status":"ok"});
});




app.post('/verify', async (req, res) => {
  try {
    let isVerified = await verify(req.body.signedMessage, req.body.address);
    let content = getContent(isVerified);
   
    res.json({ 
              "address" : req.body.address,
              "verified" : isVerified,
              "error" : false,
              "content": content
             })    
  } catch(e) {
      res.json({ 
              "address" : '',
              "verified" : false,
              "error" : true
             })   
  }
});

async function verify(signedMessage, addr) {

  try {
    const hash = await ethers.utils.keccak256(addr);

    const signerAddr = ethers.utils.verifyMessage(ethers.utils.arrayify(hash), signedMessage);
    
    return (signerAddr == addr && await nft_contract.hasPass(addr) )
  } catch(e){
    return false;
  }
}

//this is POC, in real project this function will get data from database, for instance
function getContent(isVerified){
  let content;
  if (isVerified){
      content =   'A purely peer-to-peer version of electronic cash would allow online<br>'+
                  'payments to be sent directly from one party to another without going through a<br>'+
                  'financial institution. Digital signatures provide part of the solution, but the main<br>'+
                  'benefits are lost if a trusted third party is still required to prevent double-spending.<br>'+
                  'We propose a solution to the double-spending problem using a peer-to-peer network.<br>'+
                  'The network timestamps transactions by hashing them into an ongoing chain of<br>'+
                  'hash-based proof-of-work, forming a record that cannot be changed without redoing<br>'+
                  'the proof-of-work. The longest chain not only serves as proof of the sequence of<br>'+
                  'events witnessed, but proof that it came from the largest pool of CPU power. As<br>'+
                  'long as a majority of CPU power is controlled by nodes that are not cooperating to<br>'+
                  "attack the network, they'll generate the longest chain and outpace attackers. The<br>"+
                  'network itself requires minimal structure. Messages are broadcast on a best effort<br>'+
                  'basis, and nodes can leave and rejoin the network at will, accepting the longest<br>'+
                  'proof-of-work chain as proof of what happened while they were gone.'
  } else {
      content = '<span style="color:red">you do not have NFTPass and do not have access</span>';
  }
  return content;
}


const PORT = 8549;
const server = require('http').createServer(app);
server.listen(PORT, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${PORT}`)
});


