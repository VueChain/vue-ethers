import { ethers } from "ethers";
export interface ReturnEtherJs {
    provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;
    contract?: ethers.Contract;
    ethers: typeof ethers;
}
export interface ParamEtherJs {
    providerUrl: ethers.providers.JsonRpcFetchFunc | ethers.providers.ExternalProvider | string;
    contractAddress?: string;
    ABI?: ethers.ContractInterface;
}
export declare function useEther({ providerUrl, contractAddress, ABI }: ParamEtherJs): ReturnEtherJs;
//# sourceMappingURL=useEther.d.ts.map