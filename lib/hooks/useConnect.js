import { reactive, ref, markRaw } from 'vue';
import { ethers } from "ethers";
export function useConnect() {
    if (!window.ethereum) {
        throw 'No provider';
    }
    const provider = reactive(window.ethereum);
    const account = ref(null);
    const chainId = ref(null);
    const data = reactive({
        signer: null
    });
    const getAccount = async () => {
        if (!provider.request)
            return;
        const accounts = await provider.request({
            method: 'eth_requestAccounts',
        });
        account.value = ethers.utils.getAddress(accounts[0]);
        return account;
    };
    const getChainId = async () => {
        if (!provider.request)
            return;
        chainId.value = await provider.request({
            method: 'eth_chainId',
        });
        return chainId;
    };
    const getSigner = async () => {
        const localProvider = new ethers.providers.Web3Provider(provider);
        data.signer = markRaw(localProvider.getSigner(account.value));
        return data.signer;
    };
    const accountsChanged = (accounts) => {
        if (accounts.length === 0)
            disconnect();
        else
            account.value = ethers.utils.getAddress(accounts[0]);
    };
    const chainChanged = (localChainId) => {
        chainId.value = localChainId;
    };
    const switchChain = async (localChainId) => {
        if (!provider.request)
            return;
        try {
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: localChainId }],
            });
        }
        catch (error) {
            throw error;
        }
    };
    const connect = async () => {
        if (provider.on) {
            provider.on('accountsChanged', accountsChanged);
            provider.on('chainChanged', chainChanged);
            provider.on('disconnect', disconnect);
        }
        await getAccount();
        await getChainId();
        await getSigner();
        return { account, chainId, data };
    };
    const disconnect = async () => {
        if (!provider.removeListener)
            return;
        provider.removeListener('accountsChanged', accountsChanged);
        provider.removeListener('chainChanged', chainChanged);
        provider.removeListener('disconnect', disconnect);
        account.value = null;
        chainId.value = null;
        data.signer = null;
        return { account, chainId, data };
    };
    return { account, chainId, data, connect, switchChain, disconnect, getSigner, getAccount, getChainId };
}
//# sourceMappingURL=useConnect.js.map