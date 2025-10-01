import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import Footer from "../shared-components/footer";
export default function LandingPage() {
  return (
    <div>
      <div>
        <DocsNavBar variant="light" />
      </div>
      <main className="min-h-screen bg-[#D3D7DF] text-[#05192F] font-teachers flex flex-col items-center py-20 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <section className="text-center mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight">
              ZENO AI DATA DRIVEN DECISION SUPPORT FOR ECONOMISTS <br />
            </h1>
            <div className="mt-8 flex justify-center">
              <span className="inline-block w-12 h-1 bg-[#05192F] rounded"></span>
            </div>
          </section>

          <section className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-[#05192F]" />
            <span className="mx-6 text-xs font-semibold tracking-wide uppercase text-[#05192F]">
              Our Story
            </span>
            <div className="flex-grow border-t border-[#05192F]" />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#05192F] divide-x divide-[#05192F]">
            <div className="flex flex-col items-center justify-center py-10 px-4">
              <Image
                src="/pics/robot.png"
                width={250}
                height={420}
                alt="Costa Rica Bag"
                className="mb-6 drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-8 text-center">
              <h2 className="text-2xl font-bold tracking-wide mb-2 uppercase">
                About Us
              </h2>
              <span className="inline-block w-10 h-1 bg-[#05192F] rounded mb-3"></span>
              <p className="text-[#05192F] mb-4">
                Zeno is an AI-powered platform for economists, designed to
                transform complex data into clear, actionable insights. At its
                core, an intelligent AI agent gives professionals the power to
                instantly analyze vast amounts of information, run dynamic
                simulations, and generate precise forecasts, empowering them to
                make smarter decisions in a fast-paced global economy.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-4">
              <div className="mb-12 text-center">
                <div className="uppercase tracking-widest text-xs  mb-2">
                 Where insight emerges 
                  <br />
                 from paradox.
                </div>
                <div className="text-4xl font-bold tracking-wider mt-10">
                  2025
                </div>
                <span className="inline-block w-8 h-1 bg-[#05192F] rounded"></span>
              </div>
              <div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
