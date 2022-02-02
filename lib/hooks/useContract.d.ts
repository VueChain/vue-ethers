import { ethers } from "ethers";
export interface ReturnContract {
    contract: ethers.Contract | null;
}
export interface ParamContract {
    address: string;
    ABI: ethers.ContractInterface;
    signerOrProvider: ethers.providers.JsonRpcSigner | ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider;
}
export declare function useContract({ address, ABI, signerOrProvider }: ParamContract): ReturnContract;
//# sourceMappingURL=useContract.d.ts.map