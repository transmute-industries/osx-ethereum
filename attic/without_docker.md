# OSX Ethereum

A guide for working with ethereum on osx.

## Getting Started

Follow instructions here:

- http://swarm-guide.readthedocs.io/en/latest/installation.html

```
cd;
git clone https://github.com/transmute-industries/osx-ethereum
```

Add this to the end of your `~/.bash_profile` or `~/.profile`

```
source ~/osx-ethereum/.osx-ethereum
```

Reload your profile:

```
source ~/.bash_profile
```

You should now have swarm available in your path:

```
swarm version
```

Now create a data directory...

```
DATADIR=~/osx-ethereum/data/
```

Now create a new account:

```
geth --datadir $DATADIR account new
```

```
orie@host osx-ethereum (master) $ geth --datadir $DATADIR account new
WARN [11-15|19:59:36] No etherbase set and no accounts found as default 
Your new account is locked with a password. Please give a password. Do not forget this password.
Passphrase: 
Repeat passphrase: 
Address: {88be44a405689c4429b6369c63415e6c54184e09}
```

Update your .osx-ethereum

```
export BZZKEY='88be44a405689c4429b6369c63415e6c54184e09'
```

Reload your profile:

```
source ~/.bash_profile
```

Now start geth connected to ropsten:

```
nohup geth --rpc --datadir $DATADIR --unlock 0 --password <(echo -n "MYPASSWORD") --testnet 2>> $DATADIR/geth.log &
```

The ethereum testnet blockchain will need to sync... follow its progress like so:

```
tail $DATADIR/geth.log
```

Confirm account address is setup:

```
yarn test
```

Now launch swarm connecting it to the geth node:

```
swarm --bzzaccount $BZZKEY --datadir $DATADIR --keystore $DATADIR/testnet/keystore  --ens-api $DATADIR/testnet/geth.ipc 2>> $DATADIR/swarm.log < <(echo -n "MYPASSWORD") &
```