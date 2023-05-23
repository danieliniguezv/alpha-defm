//SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.20;

import "forge-std/Test.sol";
import "../src/FuturesContractSpecs.sol";

contract FuturesContractSpecsTest is Test {
	FuturesContractSpecs public futures;

	uint256 index;
	string s1;
	string s2;
	string s3;

	struct Struct {
		string sS1;
		string sS2;
		string sS3;
	}

	Struct myStruct;

	function setUp() public {
		futures = new FuturesContractSpecs();
		index = 0;
	}

	function testSetSpecs() public {
		futures.setSpecs(s1, s2, s3);
		(myStruct.sS1, myStruct.sS2, myStruct.sS3) = futures.getSpecs(index);
		assertEq(myStruct.sS1, s1);
		assertEq(myStruct.sS2, s2);
		assertEq(myStruct.sS3, s3);
	}

	function testGetSpecs() public {
		testSetSpecs();
		(myStruct.sS1, myStruct.sS2, myStruct.sS3) = futures.getSpecs(index);
		assertEq(myStruct.sS1, s1);
		assertEq(myStruct.sS2, s2);
		assertEq(myStruct.sS3, s3);
	} 
}
