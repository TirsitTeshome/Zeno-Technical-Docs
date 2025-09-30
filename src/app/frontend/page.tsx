
import Image from "next/image";
import DocsNavBar from "../shared-components/DocsNavBar";
import React from "react";



export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#D3D7DF] px-10 py-1 ">
      <DocsNavBar />
      <div className="w-6/8 m-auto">
        <h1 className="inline-block text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          Frontend Documentation
        </h1>
        <h1 className="text-3xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-2xl text-[#05192F] mb-4 m-auto mb-15">
          The frontend of Zeno AI is a web application built with Next.js that
          serves as the primary interface for economists interacting with the
          system. It provides an accessible and intuitive environment where
          users can explore trade forecasts, run scenario analyses, and review
          AI-generated insights. Designed with a focus on clarity and usability,
          the frontend transforms complex economic models and AI outputs into
          interactive visualizations, reports, and dashboards. It enables
          economists to input queries, navigate scenario simulations, and
          compare trade performance across commodities and regions without
          requiring technical expertise in data science or machine learning. The
          frontend communicates with the backend through REST APIs and
          integrates seamlessly with the AI engine, ensuring that predictions
          and recommendations are delivered in real time. Its role is to bridge
          data-driven intelligence with user-friendly interaction, making
          advanced policy analysis tools accessible to decision-makers.
        </p>

        <h1 className="text-3xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/tech-stack.png" // <-- path in public folder
            alt="Tech Stack"
            width={1600} // adjust to your image size
            height={500} // adjust to your image size
            className="w-full max-w-5xl h-auto rounded-xl shadow-2xl mb-13"
            priority
          />
        </div>
      </div>
      {/* Project Folder Structure Section */}
      <section className="w-full py-16 px-2 md:px-10 bg-[#D3D7DF] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          {/* Left: Description */}
          <div className="flex-1 flex flex-col items-start">
            <p className="text-base text-[#232C3B] mb-2">
              layout and modular design of the frontend<br />
              codebase, within the application
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#232C3B] font-montserrat">
           Coding Structure
            </h2>
            <div className="flex items-start gap-4">
              {/* Vertical line and circle */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-4 h-4 bg-[#232C3B] rounded-full mb-1" />
                <div className="w-1 h-36 bg-[#232C3B] rounded py-20" />
              </div>
              {/* Description text */}
              <div className="bg-transparent">
                <p className=" text-3xl text-[#232C3B] text-base md:text-lg mb-5 text-xl" style={{ maxWidth: 400 }}>
                  The frontend of this project is organized using a feature-based folder structure under <code>src/app/</code>, which promotes modularity, scalability, and maintainability. Each major feature or domain, such as analytics, dashboard, profile, and user-related flows (signin, signup, usermanagement, etc.), has its own dedicated directory.
                </p>
                <p className="text-[#232C3B] text-2xl md:text-lg" style={{ maxWidth: 400 }}>
                  This structure enhances developer productivity by making it easy to find, develop, and test features in isolation, while also supporting the growth and evolution of the codebase as new functionalities are added.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Folder Structure, 2 columns */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-row gap-6">
              <pre
                className="bg-[#232C3B] text-[#D3D7DF] text-sm md:text-base rounded-xl px-16 py-6 leading-6 font-mono overflow-x-auto max-w-md md:max-w-lg shadow-xl"
                style={{ minWidth: "180px" }}
              >{`src/app/
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
              <pre
                className="bg-[#232C3B] text-[#D3D7DF] text-sm md:text-base rounded-xl px-16 py-6 leading-6 font-mono overflow-x-auto max-w-md md:max-w-lg shadow-xl"
                style={{ minWidth: "180px" }}
              >{`│   ├── ProfileMenu/
│   └── Sidebar/
├── sharedComponents/
│   ├── Background/
│   ├── CalendarDropdown/
│   ├── chatInput/
│   ├── ChatInput/
│   ├── Navigation/
│   │   ├── index.test.tsx
│   │   └── index.tsx
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
      </section>
       <div className="flex flex-col md:flex-row gap-12 items-center justify-center bg-[#232C3B] py-15">
        {/* Left Card */}
        <div className="bg-[#D3D7DF] rounded-2xl shadow-lg px-8 py-8 w-[320px] flex flex-col">
          <h2 className="text-xl font-bold text-[#232C3B] mb-1">Zeno locally set up</h2>
          <p className="text-[#232C3B] text-sm mb-5 leading-relaxed">
            Zeno locally set up Zeno locally set up Zeno locally set up Zeno locally set up .
          </p>
          <ol className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">1</span>
              <span className="text-[#232C3B] text-base">Navigate to frontend directory</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">2</span>
              <span className="text-[#232C3B] text-base">Install dependencies</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">3</span>
              <span className="text-[#232C3B] text-base">Run in development</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">4</span>
              <span className="text-[#232C3B] text-base">Build for production</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">5</span>
              <span className="text-[#232C3B] text-base">npm start</span>
            </li>
          </ol>
        </div>

        {/* Right Terminal Window */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-[#D3D7DF] mb-4 mt-4 md:mt-0">Setup Instructions</h2>
          <div className="relative">
            {/* Terminal Window */}
            <div className="bg-[#D3D7DF] rounded-t-lg px-4 py-2 w-[380px]">
              <span className="text-[#232C3B] font-semibold">ZenoStaff:</span>
            </div>
            <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-6 w-[380px] shadow-lg font-mono text-base text-[#232C3B]">
              <div>
                <span className="font-bold">ZenoStaff: $</span> cd zeno-frontend
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm install
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm run dev
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm run build
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span> npm start
              </div>
            </div>
            {/* Decorative triangle (imitating window shadow/arrow) */}
            <div
              className="absolute right-[-24px] bottom-4 w-0 h-0"
              style={{
                borderLeft: "24px solid #E6E9EF",
                borderTop: "24px solid transparent",
                borderBottom: "24px solid transparent",
              }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
