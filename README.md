# Daft Hack

Don't Try This at Home!

## The Demo

```sh
$ truffle compile
$ truffle migrate --network development
$ truffle console --network development
$
$ let store = await EtherStore.deployed()
$ store.deposit({ from: 'address', value: web3.utils.toWei(web3.utils.toBN(1), "ether") })
$
$ let balance = store.getBalance()
$
$ let attack = await Attack.deployed()
$ attack.attack({ from: 'address', value: web3.utils.toWei(web3.utils.toBN(1), "ether") })
$
$ let balance = attack.getBalance()
```

## Famous DAO Attack

A DAO is a Decentralized Autonomous Organization. Its goal is to codify the rules and decision making apparatus of an organization, eliminating the need for documents and people in governing, creating a structure with decentralized control.

Contract that was attacked - https://etherscan.io/address/0xbb9bc244d798123fde783fcc1c72d3bb8c189413

3.6M ether drained to this account - https://etherchain.org/account/0x304a554a310c7e546dfe434669c62820b7d83490

Open letter from the attacker - https://pastebin.com/CcGUBgDG