import { motion } from "framer-motion";

const dexListings = [
  { name: "DEXView", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/3-mxBMpngKGkiBqy8g.svg", link: "https://www.dexview.com/solana/8KDMkrHUjDG5dwjs2CrnNQy65DkZS7v186YQKMAxZD97" },
  { name: "SOLScan", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/5-YleqpxJKDWfkBNxB.svg", link: "https://solscan.io/token/8KDMkrHUjDG5dwjs2CrnNQy65DkZS7v186YQKMAxZD97#holders" },
  { name: "DEXTools", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/6-A3QOqXeVNkTGevKo.svg", link: "https://www.dextools.io/app/en/solana/pair-explorer/3nfFoBZ3JqpTHpt9y4VQTbr63yASVa3CVAvmLuSMgK9D?t=1740471322326" },
  { name: "DEX Screener", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/7-ALp7xkKy34hn5J2Z.svg", link: "https://dexscreener.com/solana/8KDMkrHUjDG5dwjs2CrnNQy65DkZS7v186YQKMAxZD97" },
  { name: "CoinMarketCap", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/9-YleqpxJKZPTVjqEM.svg", link: "https://coinmarketcap.com/dexscan/solana/3nfFoBZ3JqpTHpt9y4VQTbr63yASVa3CVAvmLuSMgK9D/" },
  { name: "CoinGecko", img: "https://assets.zyrosite.com/A0x177jpW6Fj8rga/10-YD0BMkJXnKSxNynk.svg", link: "https://www.geckoterminal.com/solana/pools/3nfFoBZ3JqpTHpt9y4VQTbr63yASVa3CVAvmLuSMgK9D" },
];

const ScrollableDexListings = () => {
  return (
    <div className="w-full overflow-hidden bg-[#96430f] py-4">
      <h2 className="text-center text-white text-2xl font-bold mb-4">LISTED ON:</h2>
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-8 flex-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...dexListings, ...dexListings].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.name} className="h-[250px] w-auto mt-[-50px] mb-[-50px]" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableDexListings;
