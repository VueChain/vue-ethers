import { markRaw, reactive } from 'vue';
import { ethers } from "ethers";
export function useProvider(providerUrl) {
    let datas = reactive({
        provider: null
    });
    const getProvider = (url) => {
        if (typeof providerUrl === 'string') {
            datas.provider = markRaw(new ethers.providers.JsonRpcProvider(url));
        }
        else {
            datas.provider = markRaw(new ethers.providers.Web3Provider(url));
        }
        return datas;
    };
    getProvider(providerUrl);
    return { datas, getProvider };
}
//# sourceMappingURL=useProvider.js.map