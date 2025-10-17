import React from 'react';
import HeroSection from './components/HeroSection';
import TracksSection from './components/TracksSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12]">
      <HeroSection />
      <TracksSection />
      <FeaturesSection />
      <TestimonialsSection />

      {/* CTA Footer */}
      <footer className="bg-[#0b0b12] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-extrabold md:text-4xl">Ready to crack your next interview?</h3>
            <p className="max-w-2xl text-white/80">
              Join thousands of engineers levelling up with a bold, structured approach.
            </p>
            <a
              href="#tracks"
              className="rounded-2xl border-[6px] border-white bg-white px-6 py-3 font-semibold text-black shadow-[8px_8px_0_0_#111827] transition-transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
            <p className="pt-6 text-xs text-white/50">© {new Date().getFullYear()} Flames EdTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
