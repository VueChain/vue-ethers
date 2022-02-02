import { reactive, markRaw, provide } from 'vue';
import { ethers } from "ethers";
export function useEther({ providerUrl, contractAddress, ABI }) {
    let provider;
    let contract;
    if (typeof providerUrl === 'string') {
        provider = markRaw(new ethers.providers.JsonRpcProvider(providerUrl));
    }
    else {
        provider = markRaw(new ethers.providers.Web3Provider(providerUrl));
    }
    if (contractAddress && ABI) {
        contract = markRaw(new ethers.Contract(contractAddress, ABI, provider));
    }
    const etherReturn = reactive({ provider, contract: contract ?? undefined, ethers: markRaw(ethers) });
    provide('ether', etherReturn);
    return etherReturn;
}
//# sourceMappingURL=useEther.js.map