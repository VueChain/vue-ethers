import {reactive} from 'vue';
import { ethers } from "ethers";

export interface Balance {
   value: number | null;
   symbol: string | null;
   decimals: number | null;
}

export interface ReturnBalance {
  getBalance: () => Promise<Balance>
  balance: Balance
  contract: ethers.Contract
}

export function useBalance(address: string, contract: ethers.Contract): ReturnBalance {
  const balance = reactive({
   value: null,
   symbol: null,
   decimals: null
  })

  const getBalance = async () => {
     balance.value = await contract.getBalance(address)

     return balance;
  }

  getBalance();

  return {getBalance, contract, balance }
}
