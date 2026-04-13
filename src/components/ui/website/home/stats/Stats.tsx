"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";

const stats = [
  { label: "Successful Projects", value: "250+" },
  { label: "Satisfied Clients", value: "100+" },
  { label: "Years Experience", value: "8+" },
  { label: "Team Experts", value: "25+" },
];

const Stats = () => {
  return (
    <Section className="bg-primary pt-16 pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <Typography
              variant="h2"
              className="text-primary-foreground text-4xl md:text-5xl font-extrabold mb-2"
            >
              {stat.value}
            </Typography>
            <Typography
              variant="p"
              className="text-primary-foreground/80 font-medium uppercase tracking-wider text-xs md:text-sm"
            >
              {stat.label}
            </Typography>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;
