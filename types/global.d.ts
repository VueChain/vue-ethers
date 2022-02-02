import {ethers} from 'ethers';

declare global {
  interface Window {
    ethereum: CustomProvider; 
  }
}

interface CustomProvider extends ethers.providers.ExternalProvider {
  on: (event: string, callback: (data?: any) => any) => {}
  removeListener: (event: string, callback: (data?: any) => any) => {}
}
