"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <Section className="pb-24">
      <div className="relative rounded-3xl overflow-hidden bg-foreground p-8 md:p-16 lg:p-20 text-center">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="text-white mb-6">
              Ready to transform your digital presence?
            </Typography>
            <Typography variant="p" className="text-zinc-400 mb-10 text-lg">
              Let&apos;s build something incredible together. Whether you have a specific project in mind 
              or just want to explore the possibilities, we&apos;re here to help.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start a Project <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 gap-2">
                <MessageCircle className="w-5 h-5" /> Talk to Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
