import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#D3D7DF] pt-32">
      <DocsNavBar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="inline-block text-4xl md:text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          AI Documentation
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base md:text-lg text-[#05192F] mb-4">
          The AI layer of Zeno AI is the core intelligence engine that powers forecasting, scenario simulation, and evidence-based policy recommendations. It is designed as a hybrid system that combines Machine Learning (ML) techniques with Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware insights to economists.
        </p>
        <p className="text-base md:text-lg text-[#05192F] mb-12">
          The AI is built to augment human expertise rather than replace it. Economists bring domain knowledge and policy experience, while Zeno AI enhances decision-making by automating data retrieval, validating scenarios, and surfacing insights that would be difficult to uncover manually.
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/AI-tech-stack.png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>

      <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#D3D7DF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#232C3B] mb-2">
                layout and modular design of the frontend
                <br />
                codebase, within the application
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#232C3B] font-montserrat">
                Coding Structure
              </h2>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="flex flex-col items-center pt-1 md:pt-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#232C3B] rounded-full mb-1" />
                  <div className="w-1 h-24 md:h-36 bg-[#232C3B] rounded" />
                </div>
                <div>
                  <p className="text-[#232C3B] text-sm md:text-base mb-4 max-w-prose">
                    The frontend of this project is organized using a
                    feature-based folder structure under <code>src/app/</code>,
                    which promotes modularity, scalability, and maintainability.
                    Each major feature or domain, such as analytics, dashboard,
                    profile, and user-related flows (signin, signup,
                    usermanagement, etc.), has its own dedicated directory.
                  </p>
                  <p className="text-[#232C3B] text-sm md:text-base max-w-prose">
                    This structure enhances developer productivity by making it
                    easy to find, develop, and test features in isolation, while
                    also supporting the growth and evolution of the codebase as
                    new functionalities are added.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="flex flex-col sm:flex-row gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-4 sm:px-6 py-4 md:px-8 md:py-6 leading-relaxed font-mono overflow-x-auto max-w-full sm:max-w-xs md:max-w-md shadow-xl">
{`src/app/
├── analytics/
│   ├── components/
│   ├── page.test.tsx
│   └── page.tsx
├── api/
│   ├── admin/
│   ├── auth/
│   ├── runs/
│   ├── signup/
│   ├── steps/
│   ├── user_feedback/
│   └── users/
├── dashboard/
│   ├── ModuleUsage/
│   ├── RecentSignupCard/
│   ├── UserFeedback/
│   ├── UserGrowth/
│   ├── WeeklyUsageCard/
│   ├── page.test.tsx
│   └── page.tsx
├── hooks/
├── landing_page/
├── profile/`}</pre>
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-4 sm:px-6 py-4 md:px-8 md:py-6 leading-relaxed font-mono overflow-x-auto max-w-full sm:max-w-xs md:max-w-md shadow-xl">
{`│   ├── ProfileMenu/
│   └── Sidebar/
├── sharedComponents/
│   ├── Background/
│   ├── CalendarDropdown/
│   ├── chatInput/
│   ├── ChatInput/
│   ├── Navigation/
│       ├── index.test.tsx
│       └── index.tsx
├── signin/
├── signup/
├── systemHealth/
├── teaser/
├── user_reviews/
├── usermanagement/
├── utils/
├── welcome/
└── zeno-chat/`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 md:py-16 bg-[#232C3B] flex flex-col items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#D3D7DF] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#232C3B] mb-2">
              Zeno locally set up
            </h2>
            <p className="text-[#232C3B] text-sm mb-4">
              Steps to run Zeno AI frontend locally.
            </p>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Navigate to frontend directory
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Install dependencies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Run in development
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Build for production
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  5
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">npm start</span>
              </li>
            </ol>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-4 mt-8 md:mt-0">
              Setup Instructions
            </h2>
            <div className="relative">
              <div className="bg-[#D3D7DF] rounded-t-lg px-4 py-2">
                <span className="text-lg md:text-2xl text-[#232C3B] font-semibold">
                  ZenoStaff:
                </span>
              </div>
              <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-4 md:px-6 md:py-6 shadow-lg font-mono text-sm md:text-base text-[#232C3B] leading-relaxed">
                <div><span className="font-bold">ZenoStaff: $</span> cd zeno-frontend</div>
                <div><span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm install</div>
                <div><span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm run dev</div>
                <div><span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm run build</div>
                <div><span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm start</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10">
          Code Standard
        </h1>
        <div className="w-full flex justify-center">
          <Image
            src="/pics/code-standard.png"
            alt="Code standard"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}