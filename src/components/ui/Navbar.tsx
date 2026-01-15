import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="font-display text-2xl font-semibold">
          JG<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 font-body text-sm font-medium hover:opacity-90 transition-opacity rounded-full"
          >
            Let's Talk
          </a>
          
          <button className="md:hidden flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-foreground" />
            <span className="w-6 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
