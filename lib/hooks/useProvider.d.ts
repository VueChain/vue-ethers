import { ethers } from "ethers";
export declare function useProvider(providerUrl: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | ethers.utils.ConnectionInfo | string): {
    datas: {
        provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider | null;
    };
    getProvider: (url: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | ethers.utils.ConnectionInfo | string) => {
        provider: ethers.providers.JsonRpcProvider | ethers.providers.Web3Provider | null;
    };
};
//# sourceMappingURL=useProvider.d.ts.map