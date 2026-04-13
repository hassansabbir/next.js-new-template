"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import { ArrowRight, Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <Section className="relative overflow-hidden pt-32 md:pt-48 pb-20">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>New generation digital solutions</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="h1" className="max-w-4xl mx-auto mb-6 leading-[1.1]">
            Build Your <span className="text-gradient">Digital Future</span> With Excellence
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="lead" className="max-w-2xl mx-auto mb-10">
            We specialize in crafting exceptional web experiences that drive results. 
            From concept to deployment, we help you scale your digital presence.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="gap-2">
            Get Started Now <ArrowRight className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline">
            View Portfolio
          </Button>
        </motion.div>
      </div>

      {/* Decorative Mockup Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 relative"
      >
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-card p-2 shadow-2xl overflow-hidden">
          <div className="aspect-video rounded-xl bg-muted animate-pulse flex items-center justify-center">
             <Typography variant="p">Interactive Demo Preview</Typography>
          </div>
        </div>
        {/* Glow effect under mockup */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[100px]" />
      </motion.div>
    </Section>
  );
};

export default Banner;

