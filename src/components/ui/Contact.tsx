import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gatheru-james-9b10ab26a/" },
  { name: "GitHub", href: "https://github.com/Jimdunc" },
  { name: "Discord", href: "https://discord.com/users/gath_e" },
  { name: "Twitter", href: "https://x.com/gatheruu" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mb-8">
              Let's create something{" "}
              <span className="text-gradient">amazing</span> together
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a
              href="mailto:hello@alexrivera.dev"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-body font-medium hover:opacity-90 transition-opacity rounded-full"
            >
              <Mail className="w-5 h-5" />
              gatheru048@gmail.com
            </a>
            <div className="flex items-center gap-2 text-muted-foreground font-body">
              <MapPin className="w-5 h-5" />
              Kilifi,Kenya
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group flex items-center gap-1 font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
