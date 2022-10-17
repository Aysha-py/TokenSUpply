// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//A crotract that creates a token in my name and my initials as the symbol
contract myToken{
	mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply; //total supply of token
    string private _name;  //Name of token
    string private _symbol; //symbol of token

	//constructor is called automatically by Ethereum right after the contract is deployed
  constructor() {
    _name = "Aisha Muhammed";
   	_symbol = "AM";
				_totalSupply = 1000000;
								
    }
			//returns Token name
	function name() public view virtual  returns (string memory) {
        return _name;
    }
			//returns token symbol
		function symbol() public view virtual  returns (string memory) {
        return _symbol;
    }

	
  			//returns total supplu of token in the contract   
		function totalSupply() public view virtual returns (uint256) {
   			return _totalSupply ;
		
    }
			

		

}

