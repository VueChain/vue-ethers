import {reactive, markRaw, provide} from 'vue';
import { ethers } from "ethers";

export interface ReturnEtherJs {
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | null
  contract: ethers.Contract | null 
}

export interface ParamEtherJs {
  providerUrl: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | string
  contractAddress: string
  ABI: ethers.ContractInterface
}

export function useEther({
  providerUrl, 
  contractAddress, 
  ABI
}: ParamEtherJs): ReturnEtherJs {
  let etherReturn = reactive<ReturnEtherJs>({provider: null, contract: null});

  if (typeof providerUrl === 'string') {
    etherReturn.provider = markRaw(new ethers.providers.JsonRpcProvider(providerUrl));
  } else {
    etherReturn.provider = markRaw(new ethers.providers.Web3Provider(<ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc>providerUrl));
  }

  etherReturn.contract = markRaw(new ethers.Contract(contractAddress, ABI, etherReturn.provider))

  provide('ether', etherReturn)

  return etherReturn; 
}
