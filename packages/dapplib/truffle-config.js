require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name return pitch uncover just opera food giant'; 
let testAccounts = [
"0xa1f33552c53c5b6e7aedeae5ff9a709ec9ca2df7587006f6216067eb4241faca",
"0x56f520a415a86e452f5b41a76dc7c311260da6d88d01ba1da11aa870d3e404ee",
"0xcb89aab9122ee07133496cb3c6227d09aec9a1545874ff5ae2df5b3cadd1a934",
"0x23533410dc403e04059dbc1f47e9cb91b09f5c6f57a6bd5a2d35d87005ef11a8",
"0xc44abf901dfd843dc4b2a6f0ca00e10051c43af0ba3e4ccefadf30b09e7b50a4",
"0x73d922371bc2b0770d18eab1f125c00bda4c41231bc681eb4841f1c55566fa4b",
"0xbcffe4f5a3f1e1274c7f72534c345808867e86a3c79ab65a1f7bd5a88ff7ba81",
"0x3f8a0c5517ac58916ed50ad9be3dc1f82aedf700c24d18f9199c0acc2e1fe930",
"0x3a7a5ed8f7a46a46e9d6bf3a433c87a06e6224cc1c4b68370319d233d2092c63",
"0x49cfd69a8f99b3ff0f3feb21ed81507fabf38908e0035c87d25990fa58a99533"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


