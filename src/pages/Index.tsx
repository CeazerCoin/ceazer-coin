import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Twitter, MessageCircle, MessageSquare, Globe } from "lucide-react";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto bg-[#96430f] backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 pl-14 rounded-full flex items-center justify-center">
          <span className="text-[#AE673B] flex flex-row text-2xl font-bold"><img className="w-14 h-14" src="/lovable-uploads/logo.png" /> <span className="text-white text-4xl ml-1 mt-[0.45rem]">Ceazer</span></span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-white">
        <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
        <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
        <a href="#tokenomics" className="hover:opacity-80 transition-opacity">Tokenomics</a>
      </div>
  <a href="#community">
      <button className="bg-[#f4d03f] text-black px-6 py-2 rounded-full font-bold hover:bg-[#f1c40f] transition-colors">
        Get Started
      </button>
      </a>
    </div>
    
  </nav>
);

const Hero = () => (
  <div id="home" className="pt-24 pb-12 m-20 px-6 relative overflow-hidden">

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-7xl font-black text-black mb-6 leading-tight">
          Creative Meme<br />Coin Template
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad, labore delectus dolor sit amet, adipisicing elit. Eveniet ipsum dolor sit amet at dictum veniet dolorem blanditiis ad Eveniet.
        </p>
        <div className="flex flex-row items-center gap-4">
          <button className="bg-[#96430f] px-8 py-5 rounded-[2rem] bg-contain bg-no-repeat flex items-center justify-center text-white font-bold">
            <span>Buy Token</span>
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

const MarqueeText = () => (
  <div className="bg-[#96430f] py-4 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
      <div className="flex items-center gap-4">
        {Array(8).fill("🦮 WOOF TO THE MOON 🚀 CEAZER COIN 🦴 BARK BARK 💪").map((text, i) => (
          <span key={i} className="text-xl text-white font-bold flex items-center gap-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  </div>
);



const Tokenomics = () => (
  <section id="tokenomics" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Tokenomics</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { label: "Total Supply", value: "1,000,000,000" },
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
            <p className="text-gray-600 mb-2">{item.label}</p>
            <p className="text-3xl font-bold">{item.value}</p>
          </motion.div>
        ))}
         <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden sm:flex animate-float"
      >
        <img
          src="/lovable-uploads/tokenomics1.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden sm:flex animate-float"
      >
        <img
          src="/lovable-uploads/tokenomics2.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden sm:flex animate-float"
      >
        <img
          src="/lovable-uploads/about3.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden sm:flex animate-float"
      >
        <img
          src="/lovable-uploads/about2.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
      </div>
   
    </div>
    
    
  </section>
);

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
      <h2 className="text-4xl font-bold text-center mb-16">Join Our Community</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold mb-4">Be Part of Something Special</h3>
          <p className="text-gray-600 mb-6">
            Join our vibrant community of meme enthusiasts, traders, and crypto lovers. Together, we're building the future of meme coins.
          </p>
          <div className="flex gap-4">
            <button className="bone-button">
              <span>Join Discord</span>
            </button>
            <button className="bone-button">
              <span>Join Telegram</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#96430f] p-8 rounded-2xl"
        >
          <h3 className="text-2xl text-white font-bold mb-6">Community Stats</h3>
          <div className="space-y-4">
            <div className="flex text-white  justify-between items-center">
              <span>Discord Members</span>
              <span className="font-bold">50,000+</span>
            </div>
            <div className="flex text-white  justify-between items-center">
              <span>Telegram Members</span>
              <span className="font-bold">25,000+</span>
            </div>
            <div className="flex text-white  justify-between items-center">
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
      <h1 className="text-5xl font-bold text-white  text-center mb-10">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg text-white">
            We're not just another meme coin - we're a movement. Born from the love of community and
            powered by innovation, our project aims to bring fun and value to the crypto space.
          </p>
          <p className="text-lg text-white">
            Our team consists of passionate developers, marketers, and community managers who work
            tirelessly to ensure the success and longevity of the project.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Team Members", value: "20+" },
              { label: "Countries", value: "15+" },
              { label: "Community Projects", value: "50+" },
              { label: "Partners", value: "10+" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#96430f] p-6 rounded-2xl text-center">
                <p className="text-3xl text-[#fff] font-bold mb-2">{stat.value}</p>
                <p className="text-[#fff]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[600px]"
        >
          <motion.img
            src="/lovable-uploads/about1.png"
            alt="About Image 1"
            className="absolute w-full h-full  rounded-2xl transform -rotate-12 top-0 left-0 z-20"
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
        className="flex items-center gap-8 px-6 py-4"
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
              <span className="text-3xl w-[4rem] h-[4rem]"><img src="/lovable-uploads/logo.png" /></span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Ceazer Coin</h3>
              <p className="text-white">Much Strong! 💪</p>
            </div>
          </motion.div>
          <p className="text-white">
            The goodest boy in the crypto world! 🦮 
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>Quick Links</span>
            <span className="text-2xl">🔗</span>
          </h3>
          <ul className="space-y-4">
            {[
              { text: 'Home'},
              { text: 'About'},
              { text: 'Tokenomics'},
             
            ].map((item) => (
              <li key={item.text}>
                <a
                  href={`#${item.text.toLocaleLowerCase()}`}
                  className="text-white hover:text-white flex items-center gap-2 group"
                >
                  
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span>Join the Pack</span>
            <span className="text-2xl">🐾</span>
          </h3>
          <div className="space-y-4">
            <motion.a
              href="#"
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5" />
                <span>Follow us</span>
              </div>
            </motion.a>
            <motion.a
              href="#"
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>Join Telegram</span>
              </div>
            </motion.a>
            <motion.a
              href="#"
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5" />
                <span>Join Discord</span>
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
        <p className="text-gray-400">
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
      <About />
      <Tokenomics />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
