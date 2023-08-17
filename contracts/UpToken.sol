// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UpToken is ERC20, Ownable {
    event SuccessfulTransaction(address indexed account, string action, uint256 amount);

    uint256 public constant MONTH_IN_SECONDS = 30 days;
    uint256 public constant MONTHLY_MINT_AMOUNT = 1;
    
    struct VestingSchedule {
        uint256 startTime;
        uint256 totalMonths;
        uint256 claimedMonths;
    }

    mapping(address => VestingSchedule) public vestingSchedules;

    constructor() ERC20("Up", "UP") {}

    function mintTokens(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
        emit SuccessfulTransaction(account, "Token(s) minted", amount);
    }

    function redeemTokens(uint256 amount) external {
        _burn(msg.sender, amount);
        emit SuccessfulTransaction(msg.sender, "Token(s) redemption", amount);
    }

    function createVestingSchedule(address account, uint256 totalMonths) external onlyOwner {
        require(totalMonths > 0, "Invalid total months");
        require(vestingSchedules[account].startTime == 0, "Vesting schedule already exists");

        vestingSchedules[account] = VestingSchedule({
            startTime: block.timestamp,
            totalMonths: totalMonths,
            claimedMonths: 0
        });
    }

    function claimMonthlyTokens() external {
        VestingSchedule storage vestingSchedule = vestingSchedules[msg.sender];
        require(vestingSchedule.startTime > 0, "No vesting schedule found");
        require(vestingSchedule.claimedMonths < vestingSchedule.totalMonths, "All tokens claimed");

        uint256 elapsedMonths = (block.timestamp - vestingSchedule.startTime) / MONTH_IN_SECONDS;
        uint256 claimableMonths = elapsedMonths - vestingSchedule.claimedMonths;
        if (claimableMonths > 0) {
            uint256 tokensToClaim = claimableMonths * MONTHLY_MINT_AMOUNT;
            _mint(msg.sender, tokensToClaim);
            vestingSchedule.claimedMonths += claimableMonths;

            emit SuccessfulTransaction(msg.sender, "Monthly tokens claimed", tokensToClaim);
        }
    }
}
