# Vue 3 Ether.js composable

:warning: Do not use in production, it's currently in development :warning:

Example of use:

```js
  import {useEther} from '@vuechain/vue-ethers';
  import ContractJson from '../../build/contracts/MetaCoin.json';

  const etherConf = {
    providerUrl: "http://localhost:9545", 
    contractAddress: '0x000000000', 
    ABI: ContractJson.abi
  }

  const {provider, contract} = useEther(etherConf)

  // You are able to use the provider and contract 
  const signer = provider.getSigner();
  firstBalance.value = await contract.getBalance("0x77429de8180bf083b2843bf7c055414acd6844b9");
```

`useEther` expose a reactive variable that you can inject in child components like:

```js
import {inject} from 'vue'

const {provider, contract} = inject('ether')
```
