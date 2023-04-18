// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.17;


    
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract TestNFT is ERC721, ERC721Enumerable{

 

  constructor () ERC721("NFTT", "NFTT") {}

  function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId, batchSize);
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function mintToken(string memory _color) public{
    uint _id = totalSupply()+1;
    _mint(msg.sender, _id);
  }
}