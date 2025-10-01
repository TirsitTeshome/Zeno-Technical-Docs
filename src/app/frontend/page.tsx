import Image from "next/image";
import NavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

export default function RoutingCardsPage() {
  return (
    <div className="min-h-screen bg-[#D3D7DF] px-10 py-1 ">
      <NavBar />
      <div className="w-6/8 m-auto">
        <h1 className="inline-block text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          Frontend Documentation
        </h1>
        <h1 className="text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-[20px] text-[#05192F] mb-4 m-auto mb-15">
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

        <h1 className="text-4xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/pics/tech-stack.png"
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
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[#232C3B] font-montserrat">
              Coding Structure
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center pt-2">
                <div className="w-4 h-4 bg-[#232C3B] rounded-full mb-1" />
                <div className="w-1 h-36 bg-[#232C3B] rounded py-20" />
              </div>
              <div className="bg-transparent">
                <p
                  className=" text-4xl text-[#232C3B] text-base md:text-lg mb-5 text-xl"
                  style={{ maxWidth: 400 }}
                >
                  The frontend of this project is organized using a
                  feature-based folder structure under <code>src/app/</code>,
                  which promotes modularity, scalability, and divtainability.
                  Each major feature or dodiv, such as analytics, dashboard,
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
          <h2 className="text-4xl font-bold text-[#D3D7DF] mb-4 mt-4 md:mt-0">
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
            
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-[#232C3B] mb-10 mt-30 max-w-7xl m-auto">
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

      <div className="bg-[#D3D7DF] min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-7xl flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1 min-w-[350px] mt-16 md:mt-40 ml-8">
              <h1 className="text-4xl font-bold text-[#232C3B] mb-8 font-montserrat">
                Route 
              </h1>
              <p className="text-lg md:text-xl text-[#232C3B] max-w-xl">
               The frontend of Zeno AI is built using Next.js with the App Router, meaning routes are defined by the folder and file structure inside src/app/. Each folder corresponds to a page or feature module, while shared UI elements are stored in reusable component directories.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-end mt-12 md:mt-0">
              <div className="bg-[#D3D7DF] border-2 border-[#232C3B] rounded-2xl px-10 py-8 w-full max-w-lg shadow-lg mb-8 mr-8">
                <h2 className="text-4xl font-semibold text-[#232C3B] mb-6">
                  Zeno Users
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                      /landing_page
                    </span>
                    <span className="text-base text-[#232C3B]">
                      The first interaction point for users in Zeno AI
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                      /signup
                    </span>
                    <span className="text-base text-[#232C3B]">
                      To join Zeno AI and create an account
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                      /signin
                    </span>
                    <span className="text-base text-[#232C3B]">
                      If a user already have an account they can jump to it
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                      /chat
                    </span>
                    <span className="text-base text-[#232C3B]">
                      Where users interact with our agent and view their history
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                      /profile
                    </span>
                    <span className="text-base text-[#232C3B]">
                      Users view and update their credentials in Zeno
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 m-autobg-[#E2E7F2] border-2 border-[#232C3B] rounded-2xl px-10 py-8 w-full max-w-lg shadow-lg mr-2 ">
            <h2 className="text-4xl font-semibold text-[#232C3B] mb-6 font-montserrat">
              Zeno Admin
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                  /analytics
                </span>
                <span className="text-base text-[#232C3B]">
                  Admins page to viewAgent and Module Usage of Zeno AI.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                  /dashboard
                </span>
                <span className="text-base text-[#232C3B]">
                  Over all view of users, users feedback, agent, ad system
                  health of Zeno AI.
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                  /system-health
                </span>
                <span className="text-base text-[#232C3B]">
                  Monitor database query, average response time
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                  /user_management
                </span>
                <span className="text-base text-[#232C3B]">
                  Users management for Admins to view list of users
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-4 py-1 font-mono text-base text-[#232C3B]">
                  /user_reviews
                </span>
                <span className="text-base text-[#232C3B]">
                  Admins page to view users review and feedback
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-20 flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-[1800px] flex flex-col lg:flex-row items-start justify-between mx-auto">
              <div className="flex-1 flex flex-col justify-start items-start pt-24 pl-4 lg:pl-24">
                <h1 className="text-4xl font-bold text-[#232C3B] mb-12 font-montserrat">
                  Testing (Jest)
                </h1>
                <p className="text-2xl text-[#232C3B] max-w-2xl font-normal mb-12">
                  The frontend is tested using Jest, a widely adopted JavaScript
                  testing framework.
                </p>
                <div className="border-l-[3px] border-[#232C3B] pl-8 mb-8">
                  <div className="mb-6">
                    <span className="font-bold text-[#232C3B] text-xl font-montserrat">
                      Purpose:
                    </span>
                    <p className="text-xl text-[#232C3B] font-normal mt-1">
                      Verify that UI components render correctly, handle user
                      interactions as expected, and integrate smoothly with
                      APIs.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-[#232C3B] text-xl font-montserrat">
                      Focus Areas
                    </span>
                    <ul className="text-xl text-[#232C3B] font-normal mt-2 list-none">
                      <li>Component rendering and props validation</li>
                      <li>State management and hooks behavior</li>
                      <li>API call mocking and response handling</li>
                      <li>Snapshot testing for UI consistency</li>
                      <li className="mt-2">
                        This ensures that the user interface redivs stable,
                        predictable, and resilient against unintended changes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center w-full relative mt-24 lg:mt-0 lg:pr-16">
                <div className="relative">
                  <Image
                   src="/jestt.png" 
                   alt="fetchAdmin.test.tsx example"
                   width={600}
                   height={100} 
                   className="mt-40"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
}
