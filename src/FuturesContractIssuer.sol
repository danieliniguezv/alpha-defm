//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.20;

import "./FuturesContract.sol";

contract FuturesContractIssuer {
    FuturesContract futuresContract;

    address public futuresContractAddress;
    
    mapping(address => mapping(FuturesContract => uint256)) futuresContractBalance;

    constructor(address _futuresContractAddress, uint256 _amount) {
        futuresContractAddress = _futuresContractAddress;
        futuresContract = FuturesContract(address(_futuresContractAddress));
        futuresContractBalance[futuresContractAddress][futuresContract] = _amount;
    }

    function transferFuturesContracts(address _owner, uint _amount) external {
        futuresContractBalance[futuresContractAddress][futuresContract] -= _amount;
        futuresContractBalance[_owner][futuresContract] += _amount;
    }

    function getBalance(address _owner) public view returns(uint) {
        return futuresContractBalance[_owner][futuresContract];
    }

    function getSpecs() public view returns(
        string memory productCode,
        string memory settlementCoin,
        string memory quoteCoin,
        string memory expiryDate,
        string memory fileFormat,
        uint256 contractSize,
        uint256 minimumPriceIncrement,
        uint256 leverage,
        uint256 initialMargin,
        uint256 maintenanceMargin
    ) {
        return futuresContract.getSpecs();
    }
}
