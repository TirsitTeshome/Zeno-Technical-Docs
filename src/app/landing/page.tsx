'use client';

import { useState } from 'react';
import Image from 'next/image';
import DocsNavBar from '../shared-components/NavBar';
import Footer from '../shared-components/footer';

const platforms = [
  {
    src: "/pics/value.png",
    alt: "Informational Website",
    href: "https://zeno-seven.vercel.app/",
    title: "Informational Website",
    desc: "Unlocking tomorrow's economy — explore how Zeno AI transforms data into actionable economic insights.",
  },
  {
    src: "/pics/dash.png",
    alt: "Admin Dashboard",
    href: "https://zeno-admin.vercel.app/dashboard",
    title: "Admin Dashboard",
    desc: "Monitor agent usage (Comparative Analysis, Scenario Explorer, Trade Forecast) and platform analytics.",
  },
  {
    src: "/pics/chatp.png",
    alt: "User Chat Interface",
    href: "https://zeno-admin.vercel.app/chat",
    title: "User Chat Interface",
    desc: "Interact directly with Zeno AI. Sign in required to access the intelligent agent.",
  },
];

function PlatformCard({
  platform,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  platform: (typeof platforms)[0];
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const showOverlay = isActive || isHovered;

  const baseX = (index - 1) * 60;
  const baseY = (index - 1) * 20;

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-1/2 left-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
      style={{
        zIndex: isActive ? 20 : 3 - index,
        transform: `translate(calc(-50% + ${baseX}px), calc(-50% + ${baseY}px)) rotate(${isActive ? 0 : -2}deg) scale(${isActive ? 1.1 : 1})`,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
    >
      <div className="w-[360px] sm:w-[400px] h-[520px] relative rounded-xl overflow-hidden">
        <Image
          src={platform.src}
          alt={platform.alt}
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 rounded-xl shadow-inner shadow-[#05192F]/20 pointer-events-none"></div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${
            showOverlay ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-white w-full">
            <h3 className="text-lg sm:text-xl font-bold mb-1">{platform.title}</h3>
            <p className="text-xs sm:text-sm mb-2">{platform.desc}</p>
            <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0A1F36] text-[#D3D7DF] rounded-full text-xs sm:text-sm font-semibold hover:bg-[#0D2A4A] transition-colors">
              Visit
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function LandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#D3D7DF]">
      <DocsNavBar variant="light" />
      
      <main className="flex-grow bg-[#D3D7DF] text-[#05192F] font-teachers py-36 sm:py-20 md:py-36 lg:py-40">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-10 xl:px-0">
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight">
              ZENO AI DATA DRIVEN DECISION SUPPORT FOR ECONOMISTS
            </h1>
            <div className="mt-6 flex justify-center">
              <span className="inline-block w-12 h-1 bg-[#05192F] rounded"></span>
            </div>
          </section>

          <section className="flex items-center justify-center mb-10">
            <div className="flex-grow border-t border-[#05192F]" />
            <span className="mx-6 text-xs font-semibold tracking-wide uppercase text-[#05192F]">
              Our Story
            </span>
            <div className="flex-grow border-t border-[#05192F]" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#05192F] divide-y lg:divide-y-0 lg:divide-x divide-[#05192F]">
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <Image
                src="/pics/robot.png"
                width={250}
                height={420}
                alt="Zeno AI Robot"
                className="mb-6 drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-6 text-center">
              <h2 className="text-2xl font-bold tracking-wide mb-2 uppercase">
                About Us
              </h2>
              <span className="inline-block w-10 h-1 bg-[#05192F] rounded mb-3"></span>
              <p className="text-[#05192F] mb-4 max-w-md mx-auto">
                Zeno is an AI-powered platform for economists, designed to
                transform complex data into clear, actionable insights. At its
                core, an intelligent AI agent gives professionals the power to
                instantly analyze vast amounts of information, run dynamic
                simulations, and generate precise forecasts, empowering them to
                make smarter decisions in a fast-paced global economy.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <div className="mb-8">
                <div className="uppercase tracking-widest text-xs mb-2">
                  Where insight emerges<br />
                  from paradox.
                </div>
                <div className="text-4xl font-bold tracking-wider mt-6">
                  2025
                </div>
                <span className="inline-block w-8 h-1 bg-[#05192F] rounded"></span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 bg-[#D3D7DF]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#05192F] mb-6">
          Zeno AI System Architecture
        </h1>
        <p className="text-base md:text-lg text-[#05192F] mb-10 max-w-3xl">
          The system architecture of Zeno shows how the main parts of the
          platform interact, including the frontend, backend, database, and AI
          components.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/pics/sys-arch.png"
            alt="Zeno AI System Architecture Diagram"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>

      <section className="w-full py-12 bg-[#D3D7DF]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-wide text-[#05192F]">
            Explore Zeno Platforms
          </h2>
          <p className="text-center text-base md:text-lg mb-10 max-w-2xl mx-auto text-[#05192F]">
            Discover the various platforms that power Zeno AI, designed to provide economists with intuitive tools for data analysis, administration, and direct AI interaction.
          </p>

          <div className="relative w-full h-[550px] sm:h-[600px] md:h-[700px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl">
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  platform={platform}
                  index={index}
                  isActive={hoveredIndex === index || (hoveredIndex === null && index === 0)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}