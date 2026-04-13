"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import { Laptop, Smartphone, Code2, Palette, BarChart, Rocket } from "lucide-react";

const features = [
  {
    title: "Web Development",
    description: "High-performance websites built with the latest technologies for maximum speed and SEO.",
    icon: Laptop,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Mobile Solutions",
    description: "Responsive designs and mobile applications that provide seamless user experiences.",
    icon: Code2,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "Modern, intuitive interfaces designed to engage users and reflect your brand identity.",
    icon: Palette,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Digital Strategy",
    description: "Data-driven consultations to help you navigate the complex digital landscape.",
    icon: BarChart,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Performance Optimization",
    description: "Enhancing every click and transition for the smoothest possible user journey.",
    icon: Rocket,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions to power your digital ecosystem.",
    icon: Laptop,
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

const Features = () => {
  return (
    <Section id="services" className="bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Typography variant="h2" className="mb-4">
          Our Specializations
        </Typography>
        <Typography variant="p">
          We combine technical expertise with creative vision to deliver 
          comprehensive digital solutions tailored to your unique needs.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <Typography variant="h4" className="mb-3 group-hover:text-primary transition-colors">
              {feature.title}
            </Typography>
            <Typography variant="p" className="text-sm">
              {feature.description}
            </Typography>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;
