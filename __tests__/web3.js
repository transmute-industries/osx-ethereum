var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

test("is safe version  ", () => {
  expect(web3.version.api).toBe('0.20.2')
});

test("has account ", done => {
  web3.eth.getAccounts((err, accounts) => {
    if (err) {
      throw err;
    }
    expect(accounts.length).toBe(1);
    done();
  });
});

// web3 1.0.0 does not work :(
// test("can swarm ", done => {
//   // console.log(web3.bzz)

//   console.log(web3.bzz)
//   // web3.bzz.setProvider("http://localhost:8500");
//   web3.bzz.upload("test file").then(hash => {
//     console.log("Uploaded file. Address:", hash);
//     done();
//   });
// });
