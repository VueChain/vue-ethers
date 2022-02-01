import {markRaw, reactive} from 'vue';
import { ethers } from "ethers";

export function useProvider(providerUrl: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | ethers.utils.ConnectionInfo | string): {datas: {provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider | null}, getProvider: (url: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | ethers.utils.ConnectionInfo | string) => {provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider | null} }{
  let datas = reactive<{provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider | null}>({
    provider: null
  });

  const getProvider = (url: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | ethers.utils.ConnectionInfo | string) => {
    if (typeof providerUrl === 'string') {
      datas.provider = markRaw(new ethers.providers.JsonRpcProvider(<string>url));
    } else {
      datas.provider = markRaw(new ethers.providers.Web3Provider(<ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc>url));
    }

    return datas;
  }

  getProvider(providerUrl);

  return {datas, getProvider}; 
}
