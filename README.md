# OSX Ethereum

A guide for working with ethereum on osx.

NOT SAFE FOR PRODUCTION USE... this is for testing...

Currently docker-compose is not working correctly... see `./swarm/start-swarm`

After running the setup steps below, run geth and swarm together:

```
yarn docker:geth:start
yarn docker:swarm:start
```

## Getting Started

These instructions assume you clone this repo into your home folder.

```
cd;
git clone https://github.com/transmute-industries/osx-ethereum
cd osx-ethereum;
yarn install
```

Manage where your ethereum data will be stored:

```
DATADIR=~/osx-ethereum/data/
```

Maybe you need to create a new geth account...

```
geth --testnet --datadir $DATADIR account new
```

Run geth from local dockerfile:

```
yarn docker:geth:build
yarn docker:geth:start
```

Run swarm from local dockerfile:

```
yarn docker:swarm:build
yarn docker:swarm:start
```

Run geth from remote docker image:

```
yarn geth:prod
yarn geth:test
```

Using docker-compose:

```
yarn up
yarn up --build
```

http://localhost:8500/bzz:/theswarm.eth/

Test running services with jest:

```
yarn test
```