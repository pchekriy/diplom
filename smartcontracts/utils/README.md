# Ownable Smart Contract (Solidity)

This document provides an overview of the `Ownable` smart contract written in Solidity language, explaining its purpose and functionalities.

```solidity
//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

interface IERC20MIN{
  function balanceOf(address) external view returns (uint256);
  function transfer(address, uint256) external returns (bool);
}

contract Ownable
{
  // ... (code omitted for brevity)
}
```

## Overview

The `Ownable` smart contract is an access control contract that establishes an owner and managers for the contract. It includes functions for transferring ownership, deactivating and activating the contract, and adding/removing managers. Additionally, it provides withdrawal functions for the owner to retrieve Ether and ERC20 tokens from the contract.

### Interface

1. `IERC20MIN`: A minimal ERC20 token interface, used to interact with ERC20 tokens. It contains two functions: `balanceOf()` and `transfer()`.

### Error Constants

1. `NOT_CURRENT_OWNER`: Error message for when the caller is not the current owner.
2. `CANNOT_TRANSFER_TO_ZERO_ADDRESS`: Error message for when attempting to transfer ownership to a zero address.
3. `NOT_ACTIVE`: Error message for when the contract is not active.
4. `ACTIVE`: Error message for when the contract is active.

### State Variables

1. `owner`: Public variable of type `address` representing the current owner of the contract.
2. `isActive`: Boolean variable indicating whether the contract is active or not.
3. `isManager`: Public mapping of type `address => bool` to store manager addresses and their status (true/false).

### Events

1. `OwnershipTransferred`: Event triggered when ownership of the contract is transferred.

### Constructor

The constructor sets the original `owner` of the contract to the sender account, marks the owner as a manager, and sets the contract status as active.

### Modifiers

1. `onlyOwner`: Ensures that the caller is the current owner of the contract.
2. `onlyIfActive`: Ensures that the contract is in an active state.
3. `onlyIfNotActive`: Ensures that the contract is in an inactive state.
4. `onlyManager`: Ensures that the caller is a manager.

### Functions

1. `transferOwnership(address _newOwner)`: Transfers ownership of the contract to a new address.
2. `deactivate()`: Deactivates the contract. Can only be called by the owner.
3. `activate()`: Activates the contract. Can only be called by the owner.
4. `addManager(address mgr)`: Adds a new manager. Can only be called by the owner.
5. `removeManager(address mgr)`: Removes an existing manager. Can only be called by the owner.
6. `ownerWithdrawTokens(address tokenAddress, uint256 realAmountTokens)`: Allows the owner to withdraw ERC20 tokens from the contract balance.
7. `ownerWithdrawEther(uint256 amount)`: Allows the owner to withdraw Ether from the contract balance.

## Use Cases

The `Ownable` smart contract can serve as a foundation for other smart contracts that require access control and ownership management. By extending the `Ownable` contract, developers can easily include owner and manager access control in their contracts, as well as provide withdrawal functionalities for the owner. Examples of potential use cases include:

- Token sales
- DAOs (Decentralized Autonomous Organizations)
- NFT marketplaces
- DeFi platforms
- Crowdfunding platforms

# PC Smart Contract (Solidity)

This document provides an overview of the `PC` smart contract written in Solidity language, explaining its purpose and functionalities.

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract PC{
     bool public constant DEVELOPED_BY_PAVEL_CHEKRIY = true;
     bool public constant DISCLAIMER_MY_CODE_COULD_BE_USED_FOR_MALICIOUS_OBJECTIVES_WITHOUT_MY_CONSENT_ALWAYS_DYOR = true;
     address payable internal immutable CREATOR_ADDRESS;
    
     constructor(){
         CREATOR_ADDRESS = payable(msg.sender);
     }

     //cleanup possibility
     function cleanup() public {
        require(msg.sender == CREATOR_ADDRESS,"no rights");     
        selfdestruct(CREATOR_ADDRESS);
     }
}
```

## Overview

The `PC` smart contract is a simple contract created by Pavel Chekriy. It has two public constants indicating the developer and a disclaimer, an internal immutable variable to store the creator's address, a constructor to initialize the creator's address, and a `cleanup` function to self-destruct the contract.

### Constants

1. `DEVELOPED_BY_PAVEL_CHEKRIY`: A public constant boolean that indicates the contract was developed by Pavel Chekriy, with a value of `true`.
2. `DISCLAIMER_MY_CODE_COULD_BE_USED_FOR_MALICIOUS_OBJECTIVES_WITHOUT_MY_CONSENT_ALWAYS_DYOR`: A public constant boolean with a disclaimer that the code could be used for malicious purposes without Pavel's consent, with a value of `true`.

### Internal Immutable Variable

1. `CREATOR_ADDRESS`: An internal immutable variable of type `address payable`, which stores the contract creator's Ethereum address.

### Constructor

The constructor is called when the contract is deployed. It sets the `CREATOR_ADDRESS` variable to the address of the deploying account (`msg.sender`). The `payable` keyword is used to allow the address to receive Ether.

### Functions

1. `cleanup()`: A public function that can be called by anyone. It checks if the caller is the contract creator by comparing `msg.sender` to `CREATOR_ADDRESS`. If they match, the contract self-destructs and sends its remaining Ether balance to the `CREATOR_ADDRESS`. If they don't match, the function reverts with the message "no rights".


