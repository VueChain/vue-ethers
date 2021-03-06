[![Version](https://img.shields.io/npm/v/@vuechain/vue-ethers.svg)](https://npmjs.org/package/@vuechain/vue-ethers)
[![Downloads/week](https://img.shields.io/npm/dw/@vuechain/vue-ethers.svg)](https://npmjs.org/package/@vuechain/vue-ethers)

# Vue 3 Ether.js composable

:warning: Do not use in production, it's currently in development :warning:

Example of use:

## useEther
```js
  import {useEther} from '@vuechain/vue-ethers';
  import ContractJson from '../../build/contracts/MyContract.json';

  const etherConf = {
    // required parameter (URL or Web3Provider)
    providerUrl: "http://localhost:9545", 
    // No required parameters
    contractAddress: '0x000000000', 
    ABI: ContractJson.abi
  }

  // Contract is optional, ethers expose the full ether.js library
  const {provider, contract, ethers} = useEther(etherConf)

  // You are able to use the provider and contract 
  const signer = provider.getSigner();
```

`useEther` expose a reactive variable that you can inject in child components like:

```js
import {inject} from 'vue'

const {provider, contract} = inject('ether')
```

## useContract(address, ABI, signerOrProvider)
```js
  import {useProvider, useContract} from '@vuechain/vue-ethers';
  import ContractJson from '../../build/contracts/MyContract.json';
  const {datas, getProvider}  = useProvider(window.ethereum);

  const {contract} = useEther('http://localhost:9545', ContractJson.abi, datas.provider)
```

## useConnect
Used to connect with a wallet exposing a provider on `window.ethereum`;

- **account** (String): Address of the account
- **chainId** (String): Id of the chain 
- **data** (Object):  Object containing the *signer* attribute
- **connect** (Function): Connect to the wallet
- **disconnect** (Function): Disconnect from the wallet 
- **switchChain** ((chainId: string) => void): Switch wallet to a specific chain 

This composable use reactives variables so if the user change something on the wallet app, every variables are updated according to changes.
```js
  import {useConnect} from '@vuechain/vue-ethers';
  const {account, chainId, data, connect, switchChain}  = useConnect()
```

## useProvider(url: string | ethers.providers.ExternalProvider)
```js
  import {useProvider} from '@vuechain/vue-ethers';
  const {datas, getProvider}  = useProvider(window.ethereum);
```

## useSigner(provider: ethers.providers.Web3Provider)
Used to get the signer of a connected account

```js
  import {useSigner, useProvider} from '@vuechain/vue-ethers';
  const {datas: provider, getProvider}  = useProvider(window.ethereum);

  const {datas, getSigner}  = useSigner(provider);
```

## useBalance(address, contract)

address is the wallet address you want to get the balance of, contract is an ethers.Contract instance (you probably want to use useEther before using useBalance)

Returns:
- **balance** (Reactive number): Token numbers of the wallet
- **getBalance** (Function): Trigger getBalance again 

```js
const etherConf = {
  // required parameter (URL or Web3Provider)
  providerUrl: "http://localhost:9545", 
  // No required parameters
  contractAddress: '0x000000000', 
  ABI: ContractJson.abi
}

// Contract is optional, ethers expose the full ether.js library
const {provider, contract, ethers} = useEther(etherConf)
const {balance, getBalance}  = useBalance(<walletAddress>, contract)

```
