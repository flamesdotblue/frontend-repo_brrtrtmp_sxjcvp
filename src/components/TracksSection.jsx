import React from 'react';
import { Code, BookOpen, Briefcase } from 'lucide-react';

const tracks = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Data Structures & Algorithms',
    desc: 'Master patterns and optimize solutions with timed practice and walkthroughs.',
    color: 'border-pink-400 shadow-[8px_8px_0_0_#f472b6] bg-pink-200/10',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'System Design',
    desc: 'Design scalable, fault-tolerant systems with real interview case studies.',
    color: 'border-cyan-300 shadow-[8px_8px_0_0_#22d3ee] bg-cyan-200/10',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Behavioral & Communication',
    desc: 'Sharpen storytelling, frameworks, and STAR answers with mock interviews.',
    color: 'border-amber-300 shadow-[8px_8px_0_0_#fcd34d] bg-amber-200/10',
  },
];

const TracksSection = () => {
  return (
    <section id="tracks" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 inline-block rounded-2xl border-[6px] border-white bg-white px-4 py-2 text-2xl font-extrabold text-black shadow-[8px_8px_0_0_#111827]">Learning Tracks</h2>
        <p className="mb-10 max-w-2xl text-white/80">
          Choose a guided path with projects, checkpoints, and interview-style challenges.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.title}
              className={`group rounded-2xl border-[6px] ${t.color} p-6 transition-transform hover:-translate-y-1`}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border-4 border-white/20 bg-white/10 p-3">
                {t.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{t.title}</h3>
              <p className="text-white/80">{t.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                Explore track →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
