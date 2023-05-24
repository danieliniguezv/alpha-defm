//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "./FuturesContractIssuer.sol";
import "./FilecoinUSDC.sol";


contract FuturesExchange {
    FuturesContractIssuer futuresContract;
    FilecoinUSDC fusdc;

    uint256 constant public DIGITAL_DATA_PRICE = 10330000;
    uint256 constant public LOT_PRICE = 413200000;
    uint256 constant public INITIAL_MARGIN = (50000 * LOT_PRICE)/1000000;
    uint256 public amountOfContractsToBuy;
    uint256 public amountOfContractsToSell;
    uint256 public totalBuyPrice;
    uint256 public totalSellPrice;
    uint256 public ask;
    address public seller;
    address constant public FUTURES_CONTRACT_ADDRESS = 0x5B1cB45B5C20a68660315F9AC13D326C93C66964;
    address constant public FUSDC_ADDRESS = 0x8A0C0417434a382604F0DD0aF3146dB6944331B7;

    constructor(address _issuerAddress) {
        futuresContract = FuturesContractIssuer(address(_issuerAddress));
        fusdc = FilecoinUSDC(FUSDC_ADDRESS);
    }

    function getBalance(address _userAddress) public view returns (uint) {
        return IERC20(FUSDC_ADDRESS).balanceOf(_userAddress);
    }

    function buyContract(address _to, uint256 _amountOfContractsToBuy, uint256 _initialMargin) payable public {
        amountOfContractsToBuy = _amountOfContractsToBuy;
        totalBuyPrice = amountOfContractsToBuy * INITIAL_MARGIN;
        if(_initialMargin < totalBuyPrice) revert("Payment is not enough!");
        fusdc.transferFrom(msg.sender, address(this), totalBuyPrice);
        futuresContract.transferFuturesContracts(_to, amountOfContractsToBuy);
    }

    function buyContractFrom(uint256 _amount, uint256 _priceToPay) payable public {
        if(_priceToPay < totalSellPrice) revert("Payment is not enough!");
        fusdc.transferFrom(msg.sender, seller, totalSellPrice);
        sellContract(msg.sender, _amount);
    }

    function setContractSale(uint256 _ask, uint256 _amount) public returns(bool) {
        seller = msg.sender;
        ask = _ask;
        amountOfContractsToSell = _amount;
        totalSellPrice = ask * amountOfContractsToSell;
        return true;
    }

    function sellContract(address _to, uint256 _amount) internal {
        futuresContract.transferFuturesContractsFrom(seller, _to, _amount);
    }

    function withdraw(address payable _to) public {
        _to.transfer(address(this).balance);
    }
}
