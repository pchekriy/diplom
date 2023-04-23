Title: Solidity Contract Test Script Documentation

This documentation describes how to use the test script for the Solidity contract written in Node.js. The script tests the deployment and functionality of a non-fungible token (NFT) contract using ethers.js library.

## Prerequisites

1. Node.js installed on your machine
2. Ganache-CLI installed globally

## Usage

1. Run Ganache-CLI using the command provided in the test script. Make sure to leave the terminal window open.
2. Open another terminal window and run the test script using the command `node test.js` along with the required arguments:
   - `JSONRPCURL`: URL of the JSON-RPC provider
   - `ADMIN_WALLET_ADDR`: Address of the admin wallet
   - `ADMIN_WALLET_PRIVATEKEY`: Private key of the admin wallet

Example:

```bash
node test.js http://127.0.0.1:8545 0x6dE47FC3cA6DBE83a0cbc3b0F4AF79809eD43749 0670559f1384d63515ca4a433e17e9b00e91de7615da040719de39a7139a11ba
```

## Test Flow

The test script performs the following actions:

1. Deploy the optimized NFT contract, OpenZeppelin (OZ) standard NFT contract, and OPT standard NFT contract (without all business logic implemented).
2. Configure the NFT contract by setting fees and adding a manager.
3. Test minting and burning NFT passes.
4. Check the status of NFT passes.

During the test process, the script will output the gas spent on various operations, such as contract deployment and minting.

If any of the tests fail, the script will display an error message and exit. If all tests pass, the script will display a success message and exit.