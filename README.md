contract address: 0x47446783032C47Be68036ED3A4AcbB271c428Daf, GOERLI

OPENSEA: https://testnets.opensea.io/collection/nftpass-fphjm9wkl3

API URL: https://nft-auth-api.id-chain.net

POC URL: https://nftpass-demo.id-chain.net/

## Advantages

1. more gas-efficient than current OpenZeppelin, see https://github.com/pchekriy/diplom/blob/main/tests/test.log
2. those 'pass' NFT doesn't require external storage, all stored in smartcontract (on-chain NFT)

## How to use

1. adjust for your needs (or leave as it is) and deploy smartcontract (just with remix or with deploy.js script in 'tests' subfolder)
2. deploy API (node.js), in API folder, on any platform which can run node.js, basic knowledge of node.js needed
3. create site, use POC site in UI folder for inspiration