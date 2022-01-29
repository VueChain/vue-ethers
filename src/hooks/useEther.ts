import { ethers } from "ethers";

export interface ReturnEtherJs {
  provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider | undefined
  contract: ethers.Contract
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
  let provider;

  if (typeof providerUrl === 'string') {
    provider = new ethers.providers.JsonRpcProvider(providerUrl);
  } else {
    provider = new ethers.providers.Web3Provider(<ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc>providerUrl);
  }

  const contract = new ethers.Contract(contractAddress, ABI, provider)

  return {provider, contract}
}
