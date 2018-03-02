/* global artifacts */
/* eslint-disable prefer-reflect */

const Utils = artifacts.require('./Utils.sol');
const Token = artifacts.require('./Token.sol');

module.exports = function(deployer) {
    deployer.deploy(Utils);
    deployer.deploy(Token, 'ENRY Token', 'ENRY', 0);
  };
