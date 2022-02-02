import { Ref } from 'vue';
import { ethers } from "ethers";
export interface ReturnConnect {
    getAccount: () => Promise<Ref<string | null> | undefined>;
    getChainId: () => Promise<Ref<string | number | null> | undefined>;
    getSigner: () => Promise<ethers.providers.JsonRpcSigner>;
    chainId: Ref<number | string | null>;
    connect: () => Promise<Record<string, any> | void>;
    disconnect: () => Promise<Record<string, any> | void>;
    switchChain: (localChainId: string) => Promise<void>;
    account: Ref<string | null>;
    data: Record<string, any>;
}
export declare function useConnect(): ReturnConnect;
//# sourceMappingURL=useConnect.d.ts.map