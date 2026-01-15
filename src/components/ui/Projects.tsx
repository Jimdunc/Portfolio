import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with seamless checkout and inventory management.",
    image: "/images/image4.jpeg",
  },
  {
    title: "graphic design Dashboard",
    category: "Poster Design",
    description: "Data visualization dashboard for tracking investments and market trends.",
    image: "/images/image 6.jpeg",
  },
  {
    title: "Travel App",
    category: "Mobile Development",
    description: "Companion app for travelers with itinerary planning and local recommendations.",
    image: "/images/image 1.jpeg",
    blur: true,
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete brand identity system for a sustainable fashion startup.",
    image: "/images/image3.jpeg",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Featured Projects
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className={`w-full aspect-[4/3] object-cover ${project.blur ? 'blur-sm' : ''}`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>
              <p className="text-primary font-body text-sm tracking-wide mb-2">
                {project.category}
              </p>
              <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {project.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
