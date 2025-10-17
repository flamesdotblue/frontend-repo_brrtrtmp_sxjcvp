import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aria K.',
    role: 'SWE @ Unicorn Startup',
    quote:
      'The system design drills and mentor feedback helped me jump from mid-level to senior in a single cycle.',
  },
  {
    name: 'Devon P.',
    role: 'Platform Engineer',
    quote:
      'The DSA track’s pattern-first approach clicked. I finally solved problems under pressure with confidence.',
  },
  {
    name: 'Maya R.',
    role: 'Backend Engineer',
    quote:
      'Their mock interviews felt like the real thing. I got two offers within a month.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="inline-block rounded-2xl border-[6px] border-white bg-white px-4 py-2 text-2xl font-extrabold text-black shadow-[8px_8px_0_0_#111827]">
              Success Stories
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Proof from engineers who used our tracks to land top roles.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border-[6px] border-purple-400 bg-purple-200/10 p-6 shadow-[8px_8px_0_0_#a78bfa]">
              <div className="mb-3 flex items-center gap-1 text-yellow-300">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="mb-4 text-white/90">“{t.quote}”</p>
              <div className="text-sm text-white/70">{t.name} · {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
