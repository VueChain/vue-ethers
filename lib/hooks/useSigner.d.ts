import { ethers } from "ethers";
export interface ReturnSigner {
    getSigner: () => Promise<ethers.providers.JsonRpcSigner>;
    datas: Record<string, any>;
}
export declare function useSigner(provider: ethers.providers.Web3Provider): ReturnSigner;
//# sourceMappingURL=useSigner.d.ts.map