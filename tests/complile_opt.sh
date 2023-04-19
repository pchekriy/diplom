solc ../smartcontracts/utils/*.sol ../smartcontracts/nft/*.sol --base-path . --include-path ./node_modules --optimize --optimize-runs 5  --combined-json abi,bin > ../smartcontracts/compiled/contracts.json

