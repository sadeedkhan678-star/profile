import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Monitor, Code, GraduationCap, PenTool, Layout } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-brand-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden card-shadow aspect-square relative z-10 border border-brand-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800" 
                alt="Teaching Tech"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-3xl shadow-lg z-20">
              <h4 className="text-brand-slate-900 font-extrabold text-sm uppercase tracking-widest mb-2">My Mission</h4>
              <p className="text-sm text-brand-slate-600 font-medium leading-relaxed">
                Empowering individuals through practical IT education and helping businesses scale with robust digital solutions.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-slate-900 tracking-tight leading-tight">
              A Dedicated Educator <br /> & Digital Architect
            </h2>
            <div className="space-y-6 text-lg text-brand-slate-500 font-medium leading-relaxed">
              <p>
                As a Computer Instructor and IT Specialist, I bridge the gap between complex technology and effective learning. My journey in tech is fueled by a passion for teaching and a deep understanding of IT systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Freelancing Training", color: "text-brand-blue-600" },
                { label: "IT System Management", color: "text-brand-blue-600" },
                { label: "WordPress Development", color: "text-brand-blue-600" },
                { label: "Custom Resume Design", color: "text-brand-blue-600" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-brand-slate-100 card-shadow">
                  <CheckCircle2 className={item.color} size={20} />
                  <span className="text-brand-slate-900 font-bold text-sm tracking-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "Freelancing Training",
      desc: "Guiding aspiring freelancers to build successful international careers on platforms like Upwork and Fiverr.",
      icon: "💻",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "WordPress Development",
      desc: "Creating professional, responsive, and SEO-optimized websites tailored to your business needs.",
      icon: "🌐",
      color: "bg-brand-slate-100 text-brand-slate-900"
    },
    {
      title: "IT Support & Networking",
      desc: "Hardware troubleshooting, software installation, and network security management for offices.",
      icon: "⚙️",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "CV/Resume Designing",
      desc: "Designing modern, ATS-friendly resumes that help professionals stand out in competitive job markets.",
      icon: "📝",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-slate-400 font-extrabold uppercase tracking-[0.2em] text-xs"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-slate-900 tracking-tight"
          >
            Specialized Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-brand-slate-50 border border-brand-slate-100 card-shadow transition-all group"
            >
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform shadow-sm`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-extrabold text-brand-slate-900 mb-3 tracking-tight">{s.title}</h3>
              <p className="text-brand-slate-500 text-sm font-medium leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
