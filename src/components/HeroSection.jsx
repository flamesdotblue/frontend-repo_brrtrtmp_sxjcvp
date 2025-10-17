import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Background grainy gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(120,119,198,0.25),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(56,189,248,0.2),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_20%_90%,rgba(168,85,247,0.2),rgba(0,0,0,0))]" />
      </div>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-2xl border-4 border-white/10 bg-white/5 px-4 py-2 font-medium backdrop-blur">
          <Rocket className="h-5 w-5 text-cyan-300" />
          Level up your tech career
        </span>

        <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
          Neo‑brutalist Upskilling for
          <span className="ml-3 inline-block rounded-2xl border-[6px] border-cyan-300 bg-cyan-200/10 px-3 py-1 text-cyan-300 shadow-[8px_8px_0_0_#22d3ee]">Software Engineers</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          Hands‑on tracks, interview prep, and mentor feedback to help you crack your next role. Built for ambitious engineers.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#tracks"
            className="rounded-2xl border-[6px] border-white bg-white px-6 py-3 font-semibold text-black shadow-[8px_8px_0_0_#111827] transition-transform hover:-translate-y-0.5"
          >
            Explore Tracks
          </a>
          <a
            href="#features"
            className="rounded-2xl border-[6px] border-cyan-300 bg-transparent px-6 py-3 font-semibold text-cyan-300 shadow-[8px_8px_0_0_#22d3ee] transition-transform hover:-translate-y-0.5"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
