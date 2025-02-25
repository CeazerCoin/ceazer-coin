import { motion } from "framer-motion";

const ScrollableDexMarkets = () => {
  // Hardcoded DEX market data
  const dexMarkets = [
    { label: "Raydium", value: "245 Pairs" },
    { label: "Orca", value: "180 Pairs" },
    { label: "Meteora", value: "75 Pairs" },
    { label: "Aldrin", value: "98 Pairs" },
    { label: "Serum", value: "312 Pairs" },
    { label: "Lifinity", value: "44 Pairs" },
    { label: "Step Finance", value: "120 Pairs" },
    { label: "GooseFX", value: "65 Pairs" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#96430f] text-white py-2">
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex space-x-8 flex-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...dexMarkets, ...dexMarkets].map((item, index) => (
            <div key={index} className="bg-[#f4d03f] py-4 px-4 rounded-lg min-w-[150px]">
              <div className="text-center text-sm font-medium">
                <span className="block text-black">{item.label}</span>
                <span className="text-black text-lg font-bold">{item.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableDexMarkets;
