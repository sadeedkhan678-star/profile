import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full lg:px-12">
        <div className="gradient-bg rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl shadow-2xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 z-10"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm text-brand-blue-500 text-xs font-bold uppercase tracking-widest"
              >
                Available for New Projects
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Sadeed <br /> <span className="text-brand-blue-600 uppercase tracking-tighter">Khan</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-blue-500 font-bold">
                Computer Instructor | IT Specialist | WordPress Developer
              </p>
              
              <p className="text-lg text-brand-slate-400 font-medium leading-relaxed max-w-lg">
                Helping people learn technology and build digital careers through expert-led training and modern web solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-brand-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-brand-blue-600/30 hover:bg-brand-blue-500 transition-all"
              >
                Hire Me <ArrowRight size={18} />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/path-to-your-cv.pdf', '_blank')}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
              >
                Download CV <Download size={18} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 relative z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[6px] border-white/10 p-2 overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-brand-slate-800 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Sadeed Khan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-5 py-3 rounded-2xl shadow-xl border border-white/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">W</div>
                <p className="text-xs font-extrabold text-brand-slate-900 uppercase">WordPress Pro</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
