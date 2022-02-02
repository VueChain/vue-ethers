import { reactive, markRaw } from 'vue';
import { ethers } from "ethers";
export function useContract({ address, ABI, signerOrProvider }) {
    let datas = reactive({
        contract: null
    });
    datas.contract = markRaw(new ethers.Contract(address, ABI, signerOrProvider));
    return datas;
}
//# sourceMappingURL=useContract.js.map