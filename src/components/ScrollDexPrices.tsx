import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollableCoinData = () => {
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dexscreener.com/latest/dex/pairs/solana/3nfFoBZ3JqpTHpt9y4VQTbr63yASVa3CVAvmLuSMgK9D"
        );
        const data = await response.json();
        const pair = data.pairs[0];

        setCoinData([
          { label: "Price (USD)", value: `$${pair.priceUsd}` },
          { label: "Price (SOL)", value: `${pair.priceNative} SOL` },
          { label: "Liquidity (USD)", value: `$${pair.liquidity.usd}` },
          { label: "24h Volume", value: `$${pair.volume.h24}` },
          { label: "Buys (24h)", value: `${pair.txns.h24.buys}` },
          { label: "Sells (24h)", value: `${pair.txns.h24.sells}` },
          { label: "Market Cap", value: `$${pair.marketCap}` },
          { label: "Price Change (24h)", value: `${pair.priceChange.h24}%` },
        ]);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#96430f] text-white py-2">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="relative w-full flex overflow-hidden">
          <motion.div
            className="flex space-x-8 flex-nowrap min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...coinData, ...coinData].map((item, index) => (
              <div key={index} className="bg-[#f4d03f] py-4 px-4 rounded-lg min-w-[150px]">
                <div className="text-center text-sm font-medium">
                  <span className="block text-black">{item.label}</span>
                  <span className="text-black text-lg font-bold">{item.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ScrollableCoinData;
