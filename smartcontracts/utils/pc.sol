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
