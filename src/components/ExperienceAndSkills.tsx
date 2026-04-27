import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "IT Specialist @ TUSECS",
      company: "Islamabad & Peshawar",
      period: "Current",
      details: [
        "Delivering advanced MS Office and WordPress training modules.",
        "Managing university IT infrastructure and ensuring zero downtime.",
        "Conducting workshops on Digital Marketing and Freelancing.",
        "Developing and maintaining university web assets via WordPress."
      ]
    },
    {
      role: "WordPress Developer",
      company: "Freelance Specialist",
      period: "2022 - Present",
      details: [
        "Building responsive, high-performance websites for global clients.",
        "Optimizing site core vitals and SEO strategies.",
        "Providing custom technical consultation and IT troubleshooting."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-brand-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-blue-600 font-extrabold uppercase tracking-[0.2em] text-xs"
            >
              Career Path
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-brand-slate-900 tracking-tight"
            >
              Professional Experience
            </motion.h2>
            <p className="text-brand-slate-500 text-lg font-medium leading-relaxed">
              Consistently delivering excellence in IT education and technical management.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-[2rem] card-shadow border border-brand-slate-100 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 rounded-lg bg-brand-slate-100 text-brand-slate-500 text-[10px] font-extrabold uppercase tracking-widest">{exp.period}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-blue-600/10 flex items-center justify-center text-brand-blue-600"><Briefcase size={14} /></div>
                </div>
                <h3 className="text-xl font-extrabold text-brand-slate-900 mb-2 tracking-tight">{exp.role}</h3>
                <h4 className="text-sm text-brand-blue-600 font-bold mb-6 italic">{exp.company}</h4>
                <ul className="space-y-3 mt-auto">
                  {exp.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-brand-slate-500 text-sm font-medium">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-brand-blue-600 rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const skills = [
    { name: "MS Office", level: 95 },
    { name: "WordPress", level: 90 },
    { name: "Hardware & Networking", level: 85 },
    { name: "System Troubleshooting", level: 88 },
    { name: "SEO & Digital Marketing", level: 82 },
    { name: "Python / Web Dev", level: 70 }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-slate-50 p-10 rounded-[3rem] card-shadow border border-brand-slate-100"
          >
            <h2 className="text-sm font-extrabold text-brand-slate-400 uppercase tracking-[0.2em] mb-8">Technical Expertise</h2>
            
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-extrabold text-brand-slate-900 uppercase tracking-wide">{skill.name}</span>
                    <span className="text-xs font-extrabold text-brand-blue-600">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="skill-progress"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-brand-slate-900 tracking-tight leading-tight">Education & <br /> Certification</h2>
            <div className="grid gap-6">
              {[
                { title: "BS Computer Science", icon: <GraduationCap />, meta: "University of Malakand (2018-2022)" },
                { title: "IT Certifications", icon: <Award />, meta: "Google SEO, AI Tools, Advanced WordPress" }
              ].map((box, i) => (
                <motion.div
                  key={box.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[1.5rem] bg-brand-slate-50 border border-brand-slate-100 flex items-center gap-6"
                >
                  <div className="w-12 h-12 bg-white rounded-xl card-shadow flex items-center justify-center text-brand-blue-600">{box.icon}</div>
                  <div>
                    <h4 className="text-brand-slate-900 font-extrabold tracking-tight">{box.title}</h4>
                    <p className="text-xs text-brand-slate-400 font-bold uppercase mt-1">{box.meta}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4 text-center">
              <div className="flex-1 p-4 border border-brand-slate-200 rounded-2xl">
                <p className="text-[10px] font-extrabold text-brand-slate-400 uppercase tracking-widest mb-1">Portfolio</p>
                <p className="text-lg font-extrabold text-brand-slate-900 tracking-tight">15+ Projects</p>
              </div>
              <div className="flex-1 p-4 border border-brand-slate-200 rounded-2xl">
                <p className="text-[10px] font-extrabold text-brand-slate-400 uppercase tracking-widest mb-1">Global Clients</p>
                <p className="text-lg font-extrabold text-brand-slate-900 tracking-tight">Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
