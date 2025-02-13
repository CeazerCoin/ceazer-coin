
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MarqueeText />
      <Features />
    </div>
  );
};

export default Index;
