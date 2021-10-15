const Migrations = artifacts.require("Migrations");
const CS721Listings = artifacts.require("CS721Listings");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(CS721Listings);
};
