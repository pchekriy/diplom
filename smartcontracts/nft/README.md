# NFTPass Smart Contract Documentation

The NFTPass smart contract is an ERC721-based contract that implements a pass system for authorizing access to resources. Each wallet can hold only one pass, and the passes cannot be transferred between wallets.
The NFTPass smart contract is an implementation of an ERC721 token with additional features such as access control and fee management. It is designed to be used for authorizing access to certain resources or platforms.

## Constructor

The constructor sets the name and symbol of the NFT to "NFTPass".

```solidity
constructor() {
    nftName = "NFTPass";
    nftSymbol = "NFTPass";   
}
```

## Functions

### setFee

Set the fee required for minting a pass. Only the contract owner can call this function.

```solidity
function setFee(uint256 newFee) external onlyOwner;
```

### setNFTName

Set the name of the NFT. This should only be used if you do not have minted tokens, as all minted tokens could become unusable. Only the contract owner can call this function.

```solidity
function setNFTName(string calldata newName) external onlyOwner;
```

### setNFTSymbol

Set the symbol of the NFT. This should only be used if you do not have minted tokens, as all minted tokens could become unusable. Only the contract owner can call this function.

```solidity
function setNFTSymbol(string calldata newSymbol) external onlyOwner;
```

### mintManager

Mint a pass for the specified wallet. This function can only be called by a manager and requires payment of the set fee. Each wallet can hold only one pass.

```solidity
function mintManager(address to) external payable onlyManager;
```

### massMintManager

Mint passes for multiple wallets at once. This function can only be called by a manager and requires payment of the set fee for each wallet. Each wallet can hold only one pass.

```solidity
function massMintManager(address[] calldata to) external payable onlyManager;
```

### setContractURI

Set the contract URI. Only the contract owner can call this function.

```solidity
function setContractURI(string calldata newContractUri) external onlyOwner;
```

### contractURI

Get the contract URI.

```solidity
function contractURI() external view returns (string memory);
```

### tokenURI

Get the token URI for the specified token ID.

```solidity
function tokenURI(uint256 tokenId) external view override returns (string memory);
```

### burn

Burn a pass with the specified token ID. A user can burn their own pass or an admin can burn the pass of any user.

```solidity
function burn(uint256 _tokenId) public;
```

### burnByAddress

Burn the pass of the specified user.

```solidity
function burnByAddress(address user) external;
```

### exist

Check if a pass with the specified token ID exists.

```solidity
function exist(uint256 _tokenId) external view returns(bool);
```

### safeTransferFrom (disabled)

This function has been disabled, as the transfer of passes is not allowed.

```solidity
function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata _data) external override;
```

### safeTransferFrom (disabled)

This function has been disabled, as the transfer of passes is not allowed.

```solidity
function safeTransferFrom(address _from, address _to, uint256 _tokenId) external override;
```

### transferFrom (disabled)

This function has been disabled, as the transfer of passes is not allowed.

```solidity
function transferFrom(address _from, address _to, uint256 _tokenId) external override canTransfer(_tokenId) validNFToken(_tokenId);
```

### hasPass

Check if the specified wallet has a pass.

```solidity
function hasPass(address wallet) external view returns (bool);
```

## Events

There are no events specific to this contract. However, the contract inherits events from the ERC721 standard, such as:

- `Transfer`
- `Approval`
- `ApprovalForAll`

## Additional Information

### _getName

Returns the name of the NFT Pass.

```solidity
function _getName() internal pure returns (string memory);
```

### _getSVG

Returns the SVG representation of the NFT Pass.

```solidity
function _getSVG() internal pure returns (string memory);
```

### _getDescription

Returns the description of the NFT Pass.

```solidity
function _getDescription() internal pure returns (string memory);
```

### _getBorderColor

Returns the border color of the NFT Pass.

```solidity
function _getBorderColor() internal pure returns (string memory);
```

### _exists

Checks if a pass with the specified token ID exists.

```solidity
function _exists(uint256 _tokenId) internal view returns (bool);
```

### _safeMint

Safely mints a pass with the specified token ID for the given address.

```solidity
function _safeMint(address holderAddress, uint256 tokenId) internal;
```