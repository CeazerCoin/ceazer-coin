import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Twitter, MessageCircle, MessageSquare, Globe } from "lucide-react";
import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import ScrollableCoinData from "@/components/ScrollDexPrices";
import ScrollableDexMarkets from "@/components/ScrollMarkets";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-[#96430f] backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14  sm:pl-[4.5rem] rounded-full flex items-center justify-center">
            <span className="text-[#AE673B] flex flex-row text-2xl font-bold">
              <img className="w-14 h-14" src="/lovable-uploads/ceazer_logo.png" alt="Logo" />
              <span className=" text-white text-lg sm:text-4xl ml-1 mt-4 sm:mt-[0.50rem]">Ceazer</span>
            </span>
          </div>
        </div>

        {/* Desktop and larger screens */}
        <div className="hidden lg:flex items-center gap-8 text-white">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#htb" className="hover:opacity-80 transition-opacity">How To Buy</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
          <a href="#tokenomics" className="hover:opacity-80 transition-opacity">Tokenomics</a>
        </div>

        {/* Get Started Button */}
        <a className="hidden lg:flex" href="#community">
          <button className="bg-[#f4d03f] text-black px-6 py-2 rounded-full font-bold hover:bg-[#f1c40f] transition-colors">
            Get Started
          </button>
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#96430f] z-999 backdrop-blur-sm rounded-md  px-6 py-3 flex flex-col items-center gap-4 text-white">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#htb" className="hover:opacity-80 transition-opacity">How To Buy</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
          <a href="#tokenomics" className="hover:opacity-80 transition-opacity">Tokenomics</a>
          <a href="#community">
            <button className="bg-[#f4d03f] text-black px-6 py-2 rounded-full font-bold hover:bg-[#f1c40f] transition-colors">
              Get Started
            </button>
          </a>
        </div>
      )}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-[32rem] w-full bg-[#96430f] backdrop-blur-sm rounded-md px-6 py-3 flex flex-col items-center gap-4 text-white 
    md:w-[250px] md:right-4 md:top-20 md:rounded-lg md:p-4">
          <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
          <a href="#htb" className="hover:opacity-80 transition-opacity">How To Buy</a>
          <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
          <a href="#tokenomics" className="hover:opacity-80 transition-opacity">Tokenomics</a>
          <a href="#community">
            <button className="bg-[#f4d03f] text-black px-6 py-2 rounded-full font-bold hover:bg-[#f1c40f] transition-colors">
              Get Started
            </button>
          </a>
        </div>
      )}

    </nav>
  );
};



const Hero = () => (
  <div id="home" className="pt-24 pb-12 mt-10 sm:mt-20 sm:m-20 px-6 relative overflow-hidden">


    <div className="max-w-7xl mx-1 sm:mx-auto grid md:grid-cols-2 gap-12 items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl lg:text-7xl font-spicy font-black text-black mb-6 leading-tight flex flex-wrap items-center">
          <span>Stake, Govern and Earn <img src="/lovable-uploads/ceazer_logo.png" className="w-16 h-16 mr-20 inline-block" /></span>
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          Yet another dog coin? Absolutely. But this one isn’t just here to sit and roll over—it’s here to wag, bark, and maybe even overthrow the meme coin throne. No promises, but plenty of treats!
        </p>
        <div className="flex flex-row items-center gap-4">
          <button className="bg-[#96430f] px-8 py-5 rounded-[2rem] bg-contain bg-no-repeat flex items-center justify-center text-white font-bold">
            <span className="font-spicy">Buy Token <span className="text-white">🐾</span></span>
          </button>
        </div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="animate-float"
      >
        <img
          src="/lovable-uploads/HOME.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  </div>
);

const Howtobuy = () => (
  <div id="htb" className="pt-18 pb-6 mt-10 sm:mt-20 sm:m-20 px-6 relative overflow-hidden">


    <div className="max-w-7xl mx-1 sm:mx-auto grid md:grid-cols-2 gap-12 items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl lg:text-6xl font-spicy font-black text-black mb-6 leading-tight flex flex-wrap items-center">
          <span>How To Buy $CZR</span>
        </h1>

        <div className="text-lg text-gray-700 mb-8 max-w-lg">
        1. Have or create a Phantom wallet
        </div>
        <div className="text-lg text-gray-700 mb-8 max-w-lg">
        2. Buy SOLANA and send it your wallet
        </div>
        <div className="text-lg text-gray-700 mb-8 max-w-lg">
        3. Connect it to Raydium or Jupiter
        </div>
        <div className="text-lg text-gray-700 mb-8 max-w-lg">
        4. Swap SOLANA for $CZR
        </div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="animate-float"
      >
        <img
          src="/lovable-uploads/tokenomics1.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  </div>
);

const MarqueeText = () => (
  <div className="bg-[#96430f] py-4 overflow-hidden whitespace-nowrap">
    <ScrollableCoinData />
  </div>
);

const AvailableDex = () => (
  <div className="bg-[#96430f] py-4 overflow-hidden whitespace-nowrap">
    <ScrollableDexMarkets/>
  </div>
);




const Tokenomics = () => {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "8KDMkrHUjDG5dwjs2CrnNQy65DkZS7v186YQKMAxZD97";

  const handleCopy = () => {
    navigator.clipboard.writeText(tokenAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section id="tokenomics" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl flex flex-wrap font-spicy font-bold text-center mb-16">Tokenomics</h2>

        {/* Token Mint Address Section with Copy Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white  justify-center mb-10 flex flex-col sm:flex-row gap-10 p-6 rounded-2xl text-center items-center"
        >
          <p className="text-lg text-wrap sm:text-nowrap font-spicy font-bold">Token Mint Address</p>
          <p className="text-lg w-full break-all rounded-lg">{tokenAddress}</p>
          <button
            onClick={handleCopy}
            className="p-2 bg-[#F39C01] rounded-lg hover:bg-[#e38119] transition"
          >
            {copied ? <ClipboardCheck className="w-5 h-5 text-green-500" /> : <Clipboard className="w-5 h-5" />}
          </button>
        </motion.div>

        {/* Tokenomics Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: "Total Supply", value: "1 Billion" },
            { label: "Team Allocation", value: "10%" },
            { label: "Marketing", value: "15%" },
            { label: "Community", value: "75%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl text-center"
            >
              <p className="text-gray-600 font-spicy mb-2">{item.label}</p>
              <p className="sm:text-xl lg:text-3xl break-all font-bold">{item.value}</p>
            </motion.div>
          ))}


        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:flex my-0 pt-20 animate-float"
        >
          <img src={`/lovable-uploads/staking.png`} alt="Cute Corgi" />
        </motion.div>
      </div>

    </section>
  );
};



{/*
const History = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
      <div className="space-y-12">
        {[
          {
            year: "2024 Q1",
            title: "Project Launch",
            description: "Initial concept development and community building"
          },
          {
            year: "2024 Q2",
            title: "Platform Development",
            description: "Smart contract deployment and security audits"
          },
          {
            year: "2024 Q3",
            title: "Market Expansion",
            description: "Major exchange listings and partnerships"
          }
        ].map((milestone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-1/4 text-2xl font-bold text-primary">{milestone.year}</div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
*/}
const Community = () => (
  <section id="community" className="py-24 px-6 relative overflow-hidden">

    <div className="max-w-7xl mx-auto relative">
      <h2 className="text-4xl font-spicy font-bold text-center mb-16">Join Our Community</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-spicy font-bold mb-4">Be Part of Something Special</h3>
          <p className="text-gray-600 mb-6">
            Join our vibrant community of meme enthusiasts, traders, and crypto lovers. Together, we're building the future of meme coins in a fun and happy way.
          </p>
          <div className="flex gap-4">
            <button className="bone-button ">
              <span className="text-[#fff] font-spicy">Join Discord</span>
            </button>
            <button className="bone-button">
              <span className="text-[#fff] font-spicy">Join Telegram</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#96430f] p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-spicy text-white font-bold mb-6">Community Stats</h3>
          <div className="space-y-4">
            <div className="flex text-white justify-between items-center">
              <span>Discord Members</span>
              <span className="font-bold">50,000+</span>
            </div>
            <div className="flex text-white justify-between items-center">
              <span>Telegram Members</span>
              <span className="font-bold">25,000+</span>
            </div>
            <div className="flex text-white justify-between items-center">
              <span>Twitter Followers</span>
              <span className="font-bold">100,000+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className=" py-24 px-6 bg-[#F39C01] relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative">
      <h1 className="text-5xl font-bold text-white font-spicy  text-center mb-10">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg text-white">
            <span className="font-spicy">Ceazer Coin</span> is here to prove that meme coins can be fun without the hype machine. Inspired by legendary dog coins but with its own twist, <span className="font-spicy">Ceazer Coin</span> is a community-driven token built for <span className="font-spicy">laughs 🐾 loyalty</span>.
          </p>
          <p className="text-lg text-white">
            <span className="font-spicy">No overpromises, no gimmicks</span> just a coin that wags its way through the crypto world with <span className="font-spicy">pure meme energy</span>. Whether you're here for the memes, the vibes, or just a good time, <span className="font-spicy text-nowrap">Ceazer Coin</span> welcomes all who appreciate the art of not taking things too seriously. After all, in a world of serious tokens, <span className="font-spicy">someone’s gotta keep it fun. 🐾🎉</span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Community Members", value: "100+" },
              { label: "Total Supply", value: "1 Billion" },
              { label: "Treats Distributed", value: "10M+" },
              { label: "Memes Minted", value: "10+" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#96430f] flex flex-col items-center justify-center p-6 rounded-2xl text-center">
                <p className="text-sm xl:text-3xl break-all font-spicy text-[#fff] font-bold mb-2">{stat.value}</p>
                <p className="text-sm xl:text-3xl font-spicy text-[#fff]">{stat.label}</p>
              </div>

            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[300px] sm:h-[600px]"
        >
          <motion.img
            src="/lovable-uploads/about1.png"
            alt="About Image 1"
            className="absolute h-96 w-96 sm:w-full sm:h-full  rounded-2xl transform -rotate-12 top-0 left-0 z-20"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

        </motion.div>
      </div>
    </div>
  </section>
);

{/*
const SocialLinks = () => (
  <section className="py-12 px-6 bg-primary">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
          { icon: <MessageCircle className="w-6 h-6" />, label: "Telegram" },
          { icon: <MessageSquare className="w-6 h-6" />, label: "Discord" },
          { icon: <Globe className="w-6 h-6" />, label: "Website" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            {social.icon}
            <span>{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
*/}
const Footer = () => (
  <footer className="bg-[#96430f]  text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-16 bg-[#ba6530] overflow-hidden">
      <motion.div
        className="flex font-spicy items-center gap-8 px-6 py-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {Array(10).fill("🦮 WOOF TO THE MOON 🚀 GOOD BOY COIN 🦴 BARK BARK 💪").map((text, i) => (
          <span key={i} className="text-xl font-bold whitespace-nowrap">
            {text}
          </span>
        ))}
      </motion.div>
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-3xl w-[4rem] h-[4rem] items-center"><img className="mt-1" src="/lovable-uploads/ceazer_logo.png" /></span>
            </div>
            <div>
              <h3 className="text-xl font-spicy font-bold">Ceazer Coin</h3>
              <p className="text-white font-spicy">Much Strong! 💪</p>
            </div>
          </motion.div>
          <p className="text-white">
            The goodest boy in the crypto world! 🦮
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="font-spicy">Quick Links</span>
            <span className="text-2xl">🔗</span>
          </h3>
          <ul className="space-y-4">
            {[
              { text: 'Home', href : "#home"},
              { text: 'How To Buy', href : '#htb'},
              { text: 'About', href : "#about" },
              { text: 'Tokenomics', href : "#tokenomics"},

            ].map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  className="text-white hover:text-white flex items-center gap-2 group"
                >

                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-spicy font-bold mb-6 flex items-center gap-2">
            <span>Join the Pack</span>
            <span className="text-2xl">🐾</span>
          </h3>
          <div className="space-y-4">
            <motion.a
              href="https://x.com/Ceazercoin"
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5" />
                <span>Follow us</span>
              </div>
            </motion.a>
            <motion.a
              href="https://t.me/CeazerCoin"
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>Join Telegram</span>
              </div>
            </motion.a>
          </div>
        </div>
        {/*
        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>Treat Store</span>
            <span className="text-2xl">🦴</span>
          </h3>
          <motion.div
            className="p-6 bg-primary/10 rounded-xl text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">🐕</div>
            <p className="font-bold mb-2">Become a Pack Member</p>
            <p className="text-sm text-gray-400">Get exclusive treats and updates!</p>
          </motion.div>
        </div>
        */}
      </div>


      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-white font-spicy">
          © 2024 Ceazer Coin 🦮 The Goodest Memecoin Ever! All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MarqueeText />
      <Howtobuy/>
      <AvailableDex />
      <About />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
