require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note snow collect harvest option bottom total'; 
let testAccounts = [
"0x0f98db9d8653970c2cdd656e1df8446f8a826e68dd5d8b88867863896d9d094c",
"0x44e5b46cad12a3f75f5f828730a628a15a2c05d234dccea576bb1174317871eb",
"0x4fe3f4e7549eadd52adff9f60c8dd68877691d9ee62dadd8ddb2e8da6539f9fb",
"0x018a152aabd68de56b369558231e8e1f572cc908b8f8e6a4d68b524f361e74eb",
"0x191dcbc323290ed40273a3b94b7888afaf41989d8b4f9f934f343f423251828f",
"0x0cc645a73ef1c7915515bf4439283a370ad80852fc4596d9b7d51815a25e4f92",
"0xa2b43e8d860b6669b6cc7ec08ac34f39ab945e93ec623f29c293731e6682ec7d",
"0x8bd43dc085a0d4f7687be3b169e5a9ab8e511409c02d82a0f554467ba5c579f7",
"0x9349263803863a276ed9cd3b100e08a809e1d8c49c92d070dfb746acfe4055b8",
"0x03742ac09c045504926796327d82fc9e70bfd4ccbb16c14796e43527a00ec582"
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


