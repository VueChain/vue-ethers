import {reactive, ref, markRaw, Ref} from 'vue';
import { ethers } from "ethers";

export interface ReturnSigner {
  getSigner: () => Promise<ethers.providers.JsonRpcSigner>
  datas: Record<string, any>
}

export function useSigner(provider: ethers.providers.Web3Provider): ReturnSigner {
  const datas = reactive<{signer: ethers.providers.JsonRpcSigner | null}>({
    signer: null
  })

  const getSigner = async (): Promise<ethers.providers.JsonRpcSigner> => {
    datas.signer = markRaw(provider.getSigner());

    return datas.signer;
  }

  return {datas, getSigner}
}
