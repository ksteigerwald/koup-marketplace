pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//https://github.com/dvaleri/token-practice/blob/49249849302668e566fa996a7bcf815bb52f38f2/contracts/MyToken.sol

contract Coupons is ERC1155 {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address contractAddress;

  enum CouponType { DISCOUNT, REBATE, COLLECTIBLE }

  struct Meta {
      CouponType _type;
      uint256 discountValue;
      uint256 rebateAmount;
  }

  mapping (uint256 => address) public promoters;
  mapping (uint256 => Meta) public _meta;
  mapping (uint256 => string) customUri;

  event TokenMinted (
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed tokenId
  );

  constructor() ERC1155("http://127.0.0.1:8000/{id}.json") {
      //_mint(msg.sender, {_type: 0, 25, 0}, 1000, "");
      _mint(msg.sender, 1, 500, "");
      //_mint(msg.sender, COLLECTIBLE, 1, "");
  }

  function createToken( uint256 _initialSupply) public returns (uint256) {
      _tokenIds.increment();
      uint256 _id = _tokenIds.current();
      _mint(msg.sender, _id, _initialSupply, "");
      setApprovalForAll(contractAddress, true);
      emit TokenMinted(
           _id,
           contractAddress,
           _id
      );
      return _id;
  }
}
