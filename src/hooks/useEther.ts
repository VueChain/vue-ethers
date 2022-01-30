import {reactive, markRaw, provide} from 'vue';
import { ethers } from "ethers";

export interface ReturnEtherJs {
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
  contract?: ethers.Contract 
  ethers: typeof ethers 
}

export interface ParamEtherJs {
  providerUrl: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | string
  contractAddress?: string
  ABI?: ethers.ContractInterface
}

export function useEther({
  providerUrl, 
  contractAddress, 
  ABI
}: ParamEtherJs): ReturnEtherJs {
  let provider;
  let contract;

  if (typeof providerUrl === 'string') {
    provider = markRaw(new ethers.providers.JsonRpcProvider(providerUrl));
  } else {
    provider = markRaw(new ethers.providers.Web3Provider(<ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc>providerUrl));
  }

  if(contractAddress && ABI) {
    contract = markRaw(new ethers.Contract(contractAddress, ABI, provider))
  }

  const etherReturn = reactive<ReturnEtherJs>({provider, contract: contract ?? undefined, ethers: markRaw(ethers)})

  provide('ether', etherReturn)

  return etherReturn; 
}
