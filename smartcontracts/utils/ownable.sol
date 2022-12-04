//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

interface IERC20MIN{
  function balanceOf(address) external view returns (uint256);
  function transfer(address, uint256) external returns (bool);
}

contract Ownable
{

  /**
   * @dev Error constants.
   */
  string public constant NOT_CURRENT_OWNER = "018001";
  string public constant CANNOT_TRANSFER_TO_ZERO_ADDRESS = "018002";
  string public constant NOT_ACTIVE = "018003";
  string public constant ACTIVE = "018004";

  /**
   * @dev Current owner address.
   */
  address public owner;
  bool isActive;

  /**
   * @dev An event which is triggered when the owner is changed.
   * @param previousOwner The address of the previous owner.
   * @param newOwner The address of the new owner.
   */
  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );

  /**
   * @dev The constructor sets the original `owner` of the contract to the sender account.
   */
  constructor(){
    owner = msg.sender;
    isManager[owner] = true;
    isActive = true;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner()
  {
    _isOwner();
    _;
  }
  
  function _isOwner() internal view
  {
    require(msg.sender == owner, NOT_CURRENT_OWNER);
  }

   /**
   * @dev The constructor sets it to active.
   */

  modifier onlyIfActive()
  {
    _isActive();
    _;
  }

  modifier onlyIfNotActive()
  {
    _isNotActive();
    _;
  }
  
  function _isActive() internal view
  {
    require(isActive, NOT_ACTIVE);
  }

  function _isNotActive() internal view
  {
    require(!isActive, ACTIVE);
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param _newOwner The address to transfer ownership to.
   */
  function transferOwnership(
    address _newOwner
  )
    public
    onlyOwner
  {
    require(_newOwner != address(0), CANNOT_TRANSFER_TO_ZERO_ADDRESS);
    emit OwnershipTransferred(owner, _newOwner);
    owner = _newOwner;
  }


  function deactivate() public onlyOwner{
    isActive = false;
  }

  function activate() public onlyOwner{
    isActive = true;
  }


  mapping (address => bool) public isManager;

  
  /**
  * @dev - modifier for access to functions for approved artists
  */
  modifier onlyManager() {
        _isManager();
        _;
  }
  
  /**
  * @dev - utility function for modifier above
  */      
  function _isManager() internal view {
    require(
        isManager[msg.sender],
        "only manager can call this function"
        );
  }
  
  /**
  * @dev - add/remove manager, for checking - function is generated from mapping by compiler
  */ 
  function addManager(address mgr) public onlyOwner {
      isManager[mgr] = true;
  }

  function removeManager(address mgr) public  onlyOwner {
      isManager[mgr] = false;
  }


 // ***  owner withrawal functions ***  

  function ownerWithdrawTokens(address tokenAddress, uint256 realAmountTokens) public onlyOwner{
       
      IERC20MIN token = IERC20MIN(tokenAddress);
     
     
      uint256 contractTokenBalance = token.balanceOf(address(this));
      
      // if 0 - it means we withdraw max amount
      if (realAmountTokens == 0) realAmountTokens = contractTokenBalance;
    
      require(contractTokenBalance >= realAmountTokens, "not enough on balance"); 
      
     

      //ensure we revert in case of failure 
      try token.transfer(msg.sender, realAmountTokens) returns (bool result) { 
          require(result,"tokens transfer failed");
          //just continue if all good..
      } catch {
          require(false,"tokens transfer failed - catch");
         
      }
           
    
  }


  function ownerWithdrawEther(uint256 amount) public onlyOwner {
      require((address(this)).balance >= amount, "not enough on balance");
      
      (bool success, ) = (payable(msg.sender)).call{value: amount}("");
      require(success, "withdraw failed");
  }
}
