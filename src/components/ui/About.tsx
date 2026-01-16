import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "30+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Passionate about creating impactful digital solutions
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I am a graphic designer and software developer focused on crafting responsive websites and digital experiences that connect brands with their audiences. I design websites and graphics that are not only visually appealing but also aligned with brand goals and audience needs. My work spans branding, digital design, and print materials, and I enjoy turning ideas into clean, engaging visuals.

I value consistency, clarity, and creativity in every project I work on. Whether designing for startups, businesses, or personal brands, my goal is always to create designs that leave a lasting impression.
              </p>
              <p>
                My design approach emphasizes clarity, balance, and purpose. Every visual is carefully crafted to look great, communicate clearly, and leave a lasting impression.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-2xl"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
