import { useEffect, useState } from 'react';
import { configureChains ,createClient,WagmiConfig  } from 'wagmi'
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";
import './App.css';
function App() {
  const [WagmiC , setWagmiC] = useState(null)
  useEffect(()=>{
    const klaytn = {
      "id": 8217,
      "network": "Klaytn Mainnet",
      "name": "Klaytn",
      "nativeCurrency": {
          "name": "klaytn",
          "symbol": "klay",
          "decimals": 18
      },
      "rpcUrls": {
          default : {
            "http": [
                "https://public-node-api.klaytnapi.com/v1/cypress"
            ]
        }
      },
    }
    const chainList = [arbitrum, mainnet, polygon]




    },[])
  return (
    <div className="App">
      <button>connect</button>
      
      
    </div>
  );
}

export default App;
