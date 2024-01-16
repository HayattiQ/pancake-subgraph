/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "astarzk-testnet",
  wNativeAddress: "0x3362c76725702817bf3deef8a4d39d02752a27f4",
  v3: {
    wNativeStablePoolAddress: "0x20f668062799d344ec79721a8d13d7ff60efedc9",
    stableIsToken0: false,
    factoryAddress: "0xB1e42916769D61d83D0d427196dA32D32B93a3ee",
    startBlock: 335423,
    stableCoins: ["0x20f668062799d344ec79721a8d13d7ff60efedc9"],
    whitelistAddresses: ["0x54d31393822d65DD30955E2e600C352E517C0a75"],
    nonfungiblePositionManagerAddress: "0xE34cFb9b27D8F479305253a1E66903d444E6c955",
    nonfungiblePositionManagerStartBlock: 335423,
    minETHLocked: 30,
  },
  masterChefV3: {
    masterChefAddress: "0xbeb20011D43Fb706df9F6eB5bA0ce7C622b4EA01",
    startBlock: 335423,
  },
};
