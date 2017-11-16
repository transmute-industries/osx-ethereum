var ipfsAPI = require("ipfs-api");

// connect to ipfs daemon API server
var ipfs = ipfsAPI("localhost", "5001", { protocol: "http" }); // leaving out the arguments will default to these values

// or connect with multiaddr
var ipfs = ipfsAPI("/ip4/127.0.0.1/tcp/5001");

// or using options
var ipfs = ipfsAPI({ host: "localhost", port: "5001", protocol: "http" });

test("has pins ", done => {
  ipfs.pin.ls((err, pinset) => {
    if (err) {
      throw err;
    }
    expect(pinset.length > 0)
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
