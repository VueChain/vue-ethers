import { reactive } from 'vue';
export function useBalance(address, contract) {
    const balance = reactive({
        value: null,
        symbol: null,
        decimals: null
    });
    const getBalance = async () => {
        balance.value = await contract.getBalance(address);
        return balance;
    };
    getBalance();
    return { getBalance, contract, balance };
}
//# sourceMappingURL=useBalance.js.map