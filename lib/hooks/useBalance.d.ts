import { ethers } from "ethers";
export interface Balance {
    value: number | null;
    symbol: string | null;
    decimals: number | null;
}
export interface ReturnBalance {
    getBalance: () => Promise<Balance>;
    balance: Balance;
    contract: ethers.Contract;
}
export declare function useBalance(address: string, contract: ethers.Contract): ReturnBalance;
//# sourceMappingURL=useBalance.d.ts.map