import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Facebook } from 'lucide-react';

export function Portfolio() {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { title: "University LMS", category: "WordPress", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600" },
    { title: "Tech Blog Portal", category: "WordPress", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" },
    { title: "Modern CV Design", category: "Design", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" },
    { title: "E-commerce Store", category: "WordPress", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600" }
  ];

  const categories = ['All', 'WordPress', 'Design'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-brand-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-slate-400 font-extrabold uppercase tracking-[0.2em] text-xs"
            >
              Selection of Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-brand-slate-900 tracking-tight"
            >
              Recent Projects
            </motion.h2>
          </div>
          
          <div className="flex gap-3 bg-brand-slate-200/50 p-1.5 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-extrabold transition-all uppercase tracking-widest ${
                  filter === cat ? 'bg-white text-brand-slate-900 shadow-sm' : 'text-brand-slate-500 hover:text-brand-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] bg-brand-slate-900 card-shadow border border-brand-slate-100"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-brand-blue-500 font-extrabold text-xs mb-3 uppercase tracking-[0.2em]">{project.category}</span>
                  <h3 className="text-3xl font-extrabold text-white mb-6 leading-tight tracking-tight">{project.title}</h3>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white rounded-xl text-brand-slate-900 text-xs font-extrabold uppercase tracking-widest hover:bg-brand-blue-600 hover:text-white transition-all">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gradient-bg rounded-[3.5rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue-600/5 rounded-full blur-[100px] -mr-[20rem] -mt-[20rem]" />

          <div className="flex flex-col lg:flex-row gap-20 relative z-10">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">Let's build <br /> something <span className="text-brand-blue-600">great.</span></h2>
                <p className="text-brand-slate-400 text-lg font-medium leading-relaxed">
                  Ready to take your digital presence or career to the next level? Get in touch and let's start the conversation.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <p className="text-[10px] text-brand-blue-600 uppercase tracking-[0.3em] font-extrabold">Email</p>
                  <a href="mailto:Sadeedkhan90905@gmail.com" className="text-white text-sm font-bold block hover:text-brand-blue-600 transition-colors">Sadeedkhan90905@gmail.com</a>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] text-brand-blue-600 uppercase tracking-[0.3em] font-extrabold">Phone</p>
                  <a href="tel:+923276509882" className="text-white text-sm font-bold block hover:text-brand-blue-600 transition-colors">+92 3276509882</a>
                </div>
                <div className="space-y-3">
                  <p className="text-[10px] text-brand-blue-600 uppercase tracking-[0.3em] font-extrabold">Location</p>
                  <p className="text-white text-sm font-bold">Dir Lower, Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-brand-blue-600 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-white">
                <h3 className="text-lg font-extrabold uppercase tracking-widest mb-8 text-blue-200">Contact Me</h3>
                <div className="space-y-6">
                   <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                     <div className="text-2xl">✉️</div>
                     <div>
                       <p className="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest">Email</p>
                       <p className="text-sm font-bold">Sadeedkhan90905@gmail.com</p>
                     </div>
                   </div>
                   <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                     <div className="text-2xl">📞</div>
                     <div>
                       <p className="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest">Phone</p>
                       <p className="text-sm font-bold">+92 3276509882</p>
                     </div>
                   </div>
                   <button 
                    onClick={() => window.open('https://wa.me/923276509882', '_blank')}
                    className="w-full bg-white text-brand-blue-600 py-5 rounded-2xl font-extrabold text-sm uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all"
                   >
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-brand-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-brand-slate-900 font-extrabold tracking-tight text-xl uppercase">
            Sadeed <span className="text-brand-blue-600 tracking-tighter">Khan</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-[11px] font-extrabold text-brand-slate-400 hover:text-brand-blue-600 uppercase tracking-widest transition-colors">LinkedIn</a>
            <a href="#" className="text-[11px] font-extrabold text-brand-slate-400 hover:text-brand-blue-600 uppercase tracking-widest transition-colors">Facebook</a>
          </div>

          <div className="text-[11px] text-brand-slate-400 font-bold uppercase tracking-widest">
            © 2026 Sadeed Khan | Professional Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
}
