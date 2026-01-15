import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground font-body text-lg mb-4 tracking-wide"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold mb-6 leading-[0.9]"
          >
            James <span className="text-gradient">Gatheru</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            A creative developer crafting digital experiences that blend 
            beautiful design with seamless functionality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-8"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-body font-medium hover:opacity-90 transition-opacity rounded-full"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-foreground font-body font-medium hover:text-primary transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary transition-colors"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
