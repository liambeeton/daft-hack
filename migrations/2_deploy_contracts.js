var EtherStore = artifacts.require("EtherStore");
var Attack = artifacts.require("Attack");

module.exports = (deployer, network) => {
  deployer.deploy(EtherStore).then(function () {
    return deployer.deploy(Attack, EtherStore.address);
  });
};
