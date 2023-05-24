//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract FuturesContract {
    struct Specs {
        string productCode;
        string settlementCoin;
        string quoteCoin;
        string expiryDate;
        string fileFormat;
        uint256 contractSize;
        uint256 minimumPriceIncrement;
        uint256 leverage;
        uint256 initialMargin;
        uint256 maintenanceMargin;
    }

    Specs public specs;

    function setSpecs(
        string memory _productCode,
        string memory _settlementCoin,
        string memory _quoteCoin,
        string memory _expiryDate,
        string memory _fileFormat,
        uint256 _contractSize,
        uint256 _minimumPriceIncrement,
        uint256 _leverage,
        uint256 _initialMargin,
        uint256 _maintenanceMargin
    ) public {
        specs.productCode = _productCode;
        specs.settlementCoin = _settlementCoin;
        specs.quoteCoin = _quoteCoin;
        specs.expiryDate = _expiryDate;
        specs.fileFormat = _fileFormat;
        specs.contractSize = _contractSize;
        specs.minimumPriceIncrement = _minimumPriceIncrement;
        specs.leverage = _leverage;
        specs.initialMargin = _initialMargin;
        specs.maintenanceMargin = _maintenanceMargin;
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
        return(
            specs.productCode,
            specs.settlementCoin,
            specs.quoteCoin,
            specs.expiryDate,
            specs.fileFormat,
            specs.contractSize,
            specs.minimumPriceIncrement,
            specs.leverage,
            specs.initialMargin,
            specs.maintenanceMargin
        );
    }
}
