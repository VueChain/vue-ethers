import {reactive, markRaw, provide} from 'vue';
import { ethers } from "ethers";

export interface ReturnContract {
  contract: ethers.Contract | null
}

export interface ParamContract {
  address: string
  ABI: ethers.ContractInterface
  signerOrProvider: ethers.providers.JsonRpcSigner | ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
}

export function useContract({
  address, 
  ABI, 
  signerOrProvider
}: ParamContract): ReturnContract {
  let datas = reactive<ReturnContract>({
    contract: null
  });

  datas.contract = markRaw(new ethers.Contract(address, ABI, signerOrProvider))

  return <ReturnContract>datas; 
}
