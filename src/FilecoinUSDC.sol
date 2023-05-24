//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract FilecoinUSDC is IERC20 {
    string public constant name = "Filecoin USDC";
    string public constant symbol = "FUSDC";
    uint256 public constant decimals = 6;
    uint256 public constant _totalSupply = 27830018720000000;
    address public owner;

    mapping(address => uint256) balances;


    constructor() {
        owner = msg.sender;
        balances[owner] = _totalSupply;
    }
    
    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address _account) external view returns (uint256) {
        return balances[_account];
    }

    function transfer(address _to, uint256 _amount) external returns (bool) {
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        return true;
    }

    function allowance(address _owner, address _spender) external view returns (uint256) {}
    
    function approve(address _spender, uint256 _amount) external returns (bool) {}

    function transferFrom(address _from, address _to, uint256 _amount) external returns (bool) {
        balances[_from] -= _amount;
        balances[_to] += _amount;
        return true;
    }
}
