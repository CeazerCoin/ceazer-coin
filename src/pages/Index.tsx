import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Twitter, Telegram, Discord, Globe } from "lucide-react";

const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto bg-primary/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-primary text-2xl font-bold">$</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-white">
        <Link to="/" className="hover:opacity-80 transition-opacity">Home</Link>
        <Link to="/about" className="hover:opacity-80 transition-opacity">About Us</Link>
        <Link to="/roadmap" className="hover:opacity-80 transition-opacity">Roadmap</Link>
        <Link to="/tokenomics" className="hover:opacity-80 transition-opacity">Tokenomics</Link>
        <Link to="/faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
        <Link to="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
      </div>
      <button className="bg-[#f4d03f] text-black px-6 py-2 rounded-full font-bold hover:bg-[#f1c40f] transition-colors">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <div className="min-h-screen pt-24 pb-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
        <div className="flex flex-wrap gap-4">
          <button className="bone-button">
            <span>Buy Token</span>
          </button>
          <button className="bone-button">
            <span>DexTools</span>
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
          src="/lovable-uploads/2d1d6034-65ee-4644-a00f-6cbfa63dc5f5.png"
          alt="Cute Corgi"
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  </div>
);

const MarqueeText = () => (
  <div className="bg-primary/10 py-4 overflow-hidden whitespace-nowrap">
    <div className="animate-marquee inline-block">
      <div className="flex items-center gap-4">
        {Array(6).fill("CREATIVE MEMECOIN ").map((text, i) => (
          <span key={i} className="text-xl font-bold flex items-center gap-2">
            ⭐ {text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Features = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Community Driven",
            description: "Built by the community, for the community. Your voice matters in our ecosystem."
          },
          {
            title: "Secure & Reliable",
            description: "Advanced security measures and audited smart contracts for your peace of mind."
          },
          {
            title: "Innovative Features",
            description: "Constantly evolving with new features and improvements based on community feedback."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Tokenomics = () => (
  <section className="py-24 px-6 bg-secondary/30">
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
      </div>
    </div>
  </section>
);

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

const Community = () => (
  <section className="py-24 px-6 bg-primary/10">
    <div className="max-w-7xl mx-auto">
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
          className="bg-white p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6">Community Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Discord Members</span>
              <span className="font-bold">50,000+</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Telegram Members</span>
              <span className="font-bold">25,000+</span>
            </div>
            <div className="flex justify-between items-center">
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
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600">
            We're not just another meme coin - we're a movement. Born from the love of community and 
            powered by innovation, our project aims to bring fun and value to the crypto space.
          </p>
          <p className="text-lg text-gray-600">
            Our team consists of passionate developers, marketers, and community managers who work 
            tirelessly to ensure the success and longevity of the project.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: "Team Members", value: "20+" },
            { label: "Countries", value: "15+" },
            { label: "Community Projects", value: "50+" },
            { label: "Partners", value: "10+" }
          ].map((stat, i) => (
            <div key={i} className="bg-secondary/50 p-6 rounded-2xl text-center">
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const SocialLinks = () => (
  <section className="py-12 px-6 bg-primary">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
          { icon: <Telegram className="w-6 h-6" />, label: "Telegram" },
          { icon: <Discord className="w-6 h-6" />, label: "Discord" },
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MarqueeText />
      <Features />
      <About />
      <Tokenomics />
      <History />
      <Community />
      <SocialLinks />
    </div>
  );
};

export default Index;
