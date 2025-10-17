import React from 'react';
import { Users, Shield, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Mentor Feedback',
    desc: 'Get code reviews and system critiques from senior engineers.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Interview Simulations',
    desc: 'Timed DSA rounds, design prompts, and behavioral drills.',
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Job-Ready Projects',
    desc: 'Build portfolio pieces with real requirements and constraints.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="inline-block w-fit rounded-2xl border-[6px] border-cyan-300 px-4 py-2 text-2xl font-extrabold text-cyan-300 shadow-[8px_8px_0_0_#22d3ee]">
            How it Works
          </h2>
          <p className="max-w-2xl text-white/80">
            Learn with a modern, structured approach—bold visuals, clear steps, and measurable outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border-[6px] border-white bg-white/5 p-6 shadow-[8px_8px_0_0_#111827]">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border-4 border-white/20 bg-white/10 p-3">
                {f.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
              <p className="text-white/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
