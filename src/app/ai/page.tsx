import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";

export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#D3D7DF] px-10 py-1 ">
      <DocsNavBar />
      <div className="w-6/8 m-auto">
        <h1 className="inline-block text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          AI Documentation
        </h1>
        <h1 className="text-3xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-[20px] text-[#05192F] mb-4">
         The AI layer of Zeno AI is the core intelligence engine that powers forecasting, scenario simulation, and evidence-based policy recommendations. It is designed as a hybrid system that combines Machine Learning (ML) techniques with Retrieval-Augmented Generation (RAG) to deliver accurate, context-aware insights to economists. </p>
      <p className="text-[20px] text-[#05192F] mb-4">The AI is built to augment human expertise rather than replace it. Economists bring domain knowledge and policy experience, while Zeno AI enhances decision-making by automating data retrieval, validating scenarios, and surfacing insights that would be difficult to uncover manually.
</p>

        <h1 className="text-3xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/AI-tech-stack.png" 
            alt="Tech Stack"
            width={1600} 
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl mb-13"
            priority
          />
        </div>
      </div>
      <section className="w-full py-16 px-2 md:px-10 bg-[#D3D7DF] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-start">
            <p className="text-base text-[#232C3B] mb-2">
              layout and modular design of the frontend
              <br />
              codebase, within the application
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#232C3B] font-montserrat">
              Coding Structure
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center pt-2">
                <div className="w-4 h-4 bg-[#232C3B] rounded-full mb-1" />
                <div className="w-1 h-36 bg-[#232C3B] rounded py-20" />
              </div>
              <div className="bg-transparent">
                <p
                  className=" text-3xl text-[#232C3B] text-base md:text-lg mb-5 text-xl"
                  style={{ maxWidth: 400 }}
                >
                  The frontend of this project is organized using a
                  feature-based folder structure under <code>src/app/</code>,
                  which promotes modularity, scalability, and maintainability.
                  Each major feature or domain, such as analytics, dashboard,
                  profile, and user-related flows (signin, signup,
                  usermanagement, etc.), has its own dedicated directory.
                </p>
                <p
                  className="text-[#232C3B] text-2xl md:text-lg"
                  style={{ maxWidth: 400 }}
                >
                  This structure enhances developer productivity by making it
                  easy to find, develop, and test features in isolation, while
                  also supporting the growth and evolution of the codebase as
                  new functionalities are added.
                </p>
              </div>
            </div>
          </div>
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
      </section>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center bg-[#232C3B] py-15">
        <div className="bg-[#D3D7DF] rounded-2xl shadow-lg px-8 py-8 w-[350px] flex flex-col">
          <h2 className="text-2xl font-bold text-[#232C3B] mb-1">
            Zeno locally set up
          </h2>
          <p className="text-[18px] text-[#232C3B] text-sm mb-5 leading-relaxed">
            Zeno locally set up Zeno locally set up Zeno locally set up Zeno
            locally set up .
          </p>
          <ol className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                1
              </span>
              <span className="text-[#232C3B] text-[18px]">
                Navigate to frontend directory
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className=" bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                2
              </span>
              <span className="text-[#232C3B] text-[18px]">
                Install dependencies
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                3
              </span>
              <span className="text-[#232C3B] text-[18px]">
                Run in development
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                4
              </span>
              <span className="text-[#232C3B] text-[18px]">
                Build for production
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#232C3B] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                5
              </span>
              <span className="text-[#232C3B] text-[18px]">npm start</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-[#D3D7DF] mb-4 mt-4 md:mt-0">
            Setup Instructions
          </h2>
          <div className="relative">
            <div className="bg-[#D3D7DF] rounded-t-lg px-4 py-2 w-[480px]">
              <span className="text-2xl text-[#232C3B] font-semibold">
                ZenoStaff:
              </span>
            </div>
            <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-16 w-[480px] shadow-lg font-mono text-[20px] text-[#232C3B]">
              <div>
                <span className="font-bold">ZenoStaff: $</span> cd zeno-frontend
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span>{" "}
                npm install
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span>{" "}
                npm run dev
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span>{" "}
                npm run build
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-frontend$</span>{" "}
                npm start
              </div>
            </div>
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
      <h1 className="text-3xl font-bold text-[#232C3B] mb-10 mt-30 max-w-7xl m-auto">
        Code Standard
      </h1>
      <div className="w-full flex justify-center mt-20">
        <Image
          src="/code-standard.png"
          alt="Code standard"
          width={1400}
          height={700}
          className="max-w-8xl m-auto"
        />
      </div>
    </main>
  );
}
