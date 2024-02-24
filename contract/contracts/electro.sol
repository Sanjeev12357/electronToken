//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract hack is ERC20, ERC20Burnable, ERC20Permit {
    address private owner;

    struct people {
        address people_address;
        uint256 waste;
        uint256 id;
        uint256 amount;
        uint256 total_amount;
        uint256 amount_deducted;
    }

    struct Data {
        address from;
        address to;
        uint256 value;
    }
    mapping(address => uint256[]) private map_uint;
    // mapping(uint => address) private map_address;
    mapping(uint256 => Data) private map_data;

    mapping(address => people) public People;

    constructor() ERC20("ElectroCoin", "ETC") ERC20Permit("MyToken") {
        _mint(msg.sender, 1000);
        owner = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == msg.sender);
        _;
    }

    function sendReward(
        address to,
        uint256 value,
        uint256 _waste
    ) public restricted {
        require(balanceOf(msg.sender) > 0, "Not enough Funds");
        People[to].people_address = to;
        People[to].waste = People[to].waste + _waste;
        People[to].id = People[to].id + 1;
        People[to].amount = value;
        People[to].total_amount = People[to].total_amount + People[to].amount;
        Data memory data1 = Data(msg.sender, to, value);
        map_uint[to].push(People[to].id);
        //   map_address[People[to].id]=to;
        map_data[People[to].id] = data1;

        transfer(to, value);
    }

    function people_spend(address to, uint256 value) public {
        require(balanceOf(msg.sender) > 0, "Not enough Funds");
        People[msg.sender].amount_deducted =
            People[msg.sender].amount_deducted +
            value;
        People[to].id = People[to].id + 1;

        Data memory data1 = Data(msg.sender, to, value);
        map_uint[to].push(People[to].id);
        // map_address[People[to].id]=msg.sender;
        map_data[People[to].id] = data1;
        transfer(to, value);
    }

    function people_total_amount() public view returns (uint256) {
        return People[msg.sender].total_amount;
    }

    function people_deducted_amount() public view returns (uint256) {
        return People[msg.sender].amount_deducted;
    }

    function people_waste() public view returns (uint256) {
        return People[msg.sender].waste;
    }

    function fetching_log_int() public view returns (uint256[] memory) {
        return map_uint[msg.sender];
    }

    function fetching_log_data(uint256 _id) public view returns (Data memory) {
        // require(map_address[_id]==msg.sender,"You are not");
        //     require(map_address[_id]==msg.sender,"dasda");

        return map_data[_id];
    }
}
