import { reactive, markRaw } from 'vue';
export function useSigner(provider) {
    const datas = reactive({
        signer: null
    });
    const getSigner = async () => {
        datas.signer = markRaw(provider.getSigner());
        return datas.signer;
    };
    return { datas, getSigner };
}
//# sourceMappingURL=useSigner.js.map