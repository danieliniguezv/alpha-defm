//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.20;

contract FuturesContractSpecs {
	struct Specs {
		string productCode;
		string settlementCoin;
		string quoteCoin;
	}

	Specs[] public specs;

	function setSpecs(
		string memory _productCode,
		string memory _settlementCoin,
		string memory _quoteCoin
	) public {
		specs.push(
			Specs(
				_productCode,
				_settlementCoin,
				_quoteCoin
			)
		);
	}

	function getSpecs(uint256 _index) external view returns (
		string memory productCode,
		string memory settlementCoin,
		string memory quoteCoin
	) {
		Specs memory spec = specs[_index];
		return (
			spec.productCode,
			spec.settlementCoin,
			spec.quoteCoin
		);
	}
} 
