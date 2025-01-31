const WETH = "0x3362c76725702817bF3dEEf8a4D39d02752a27f4";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "zkatana",
  wNativeAddress: WETH,
  v3: {
    // WETH-USDC 500
    wNativeStablePoolAddress: "0x291d9f9764c72c9ba6ff47b451a9f7885ebf9977",
    stableIsToken0: true,
    factoryAddress: "0xB1e42916769D61d83D0d427196dA32D32B93a3ee",
    startBlock: 335437,
    stableCoins: [
      "0x493257fd37edb34451f62edf8d2a0c418852ba4c", // USDT
      "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4", // USDC
      "0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181", // BUSD
    ],
    whitelistAddresses: [
      WETH,
      "0x493257fd37edb34451f62edf8d2a0c418852ba4c", // USDT
      "0x2039bb4116b4efc145ec4f0e2ea75012d6c0f181", // BUSD
      "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4", // USDC
      "0xbbeb516fb02a01611cbbe0453fe3c580d7281011", // WBTC
    ],
    nonfungiblePositionManagerAddress: "0xa815e2ed7f7d5b0c49fda367f249232a1b9d2883",
    nonfungiblePositionManagerStartBlock: 8640657,
    minETHLocked: 0,
  },
  masterChefV3: {
    masterChefAddress: "0xbeb20011D43Fb706df9F6eB5bA0ce7C622b4EA01",
    startBlock: 335437,
  }
};
