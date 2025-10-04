import Image from "next/image";
import NavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

const leftSteps = [
  {
    number: "01",
    title: "Prepared our Project Locally",
    desc: "Verified the package.json contains the correct build script, e.g., build: react-scripts build for React.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "02",
    title: "Connected our Repository to Vercel",
    desc: "Sign in to Vercel -> choose New Project. -> Get a token -> Import your Git repository by selecting the correct repository.",
    color: "bg-[#36496E]",
  },
  {
    number: "03",
    title: "Configure Build Settings on Vercel",
    desc: "Ensure the Build Command is set to npm run build or your custom script.-> Set the Output Directory (build for React, .next for Next.js).-> Specify the Node.js version by adding an engines field in package.json or environment variable to avoid build inconsistencies.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "04",
    title: "Added Environment Variables",
    desc: "Add all required variables (e.g., API URLs prefixed with BASE_URL) in Vercel’s project settings under Environment Variables.",
    color: "bg-[#36496E]",
  },
  {
    number: "05",
    title: "Deployed our Application",
    desc: "Deploy happens automatically on push to the main branch npx vercel --prod --confirm --token $VERCEL_TOKEN",
    color: "bg-[#5B80AC]",
  },
];

const rightSteps = [
  {
    number: "06",
    title: "Monitor Build Logs and Deployment",
    desc: "Watch the Vercel dashboard for build logs and error messages. If you use GitHub Actions, automatic deployments can be triggered on pushes with logs visible in the Actions tab.",
    color: "bg-[#5B80AC]",
  },
  {
    number: "07",
    title: "Final Testing and Validation",
    desc: "After deployment, visit the live URL provided by Vercel. Verify all assets load correctly, check for broken image links or missing icons. Use preview deployments from pull requests to test changes before merge.",
    color: "bg-[#36496E]",
  },
];

export default function Frontend() {
  return (
    <div className="min-h-screen bg-[#D3D7DF] pt-32">
      <NavBar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="inline-block text-4xl md:text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          Frontend Documentation
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base md:text-lg text-[#05192F] mb-12">
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

        <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/tech-stack.png"
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
                <div className="hidden md:flex flex-col items-center pt-1 md:pt-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#232C3B] rounded-full mb-1" />
                  <div className="w-1 h-24 md:h-36 bg-[#232C3B] rounded" />
                </div>
                <div>
                  <p className="text-[#232C3B] text-sm md:text-base mb-4 max-w-prose">
                    The frontend of this project is organized using a
                    feature-based folder structure under <code>src/app/</code>,
                    which promotes modularity, scalability, and maintainability.
                    Each major feature or module, such as analytics, dashboard,
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
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
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
├── profile/`}
                </pre>
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-hidden w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
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
└── zeno-chat/`}
                </pre>
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
              Steps to run Zeno frontend locally.
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-4">
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

      <div className="bg-[#D3D7DF] pt-12 md:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-6 font-montserrat">
                Route
              </h1>
              <p className="text-base md:text-lg text-[#232C3B] max-w-prose">
                The frontend of Zeno AI is built using Next.js with the App Router, meaning routes are defined by the folder and file structure inside src/app/. Each folder corresponds to a page or feature module, while shared UI elements are stored in reusable component directories.
              </p>
            </div>

            <div className="flex-1 min-w-0">
              <div className="bg-[#D3D7DF] border-2 border-[#232C3B] rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#232C3B] mb-4">
                  Zeno Users
                </h2>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /landing_page
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      The first interaction point for users in Zeno AI
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /signup
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      To join Zeno AI and create an account
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /signin
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      If a user already have an account they can jump to it
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /chat
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      Where users interact with our agent and view their history
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                      /profile
                    </span>
                    <span className="text-sm md:text-base text-[#232C3B]">
                      Users view and update their credentials in Zeno
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 bg-[#D3D7DF] border-2 border-[#232C3B] rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#232C3B] mb-4 font-montserrat">
              Zeno Admin
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /analytics
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  Admins page to view Agent and Module Usage of Zeno AI.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /dashboard
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  Over all view of users, users feedback, agent, and system health of Zeno AI.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /system-health
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  Monitor database query, average response time
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /user_management
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  Users management for Admins to view list of users
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <span className="bg-[#F2F4F8] border border-[#232C3B] rounded px-3 py-1 font-mono text-sm md:text-base text-[#232C3B] whitespace-nowrap">
                  /user_reviews
                </span>
                <span className="text-sm md:text-base text-[#232C3B]">
                  Admins page to view users review and feedback
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-[#232C3B] mb-8 font-montserrat">
                  Testing (Jest)
                </h1>
                <p className="text-base md:text-xl text-[#232C3B] max-w-2xl mb-8">
                  The frontend is tested using Jest, a widely adopted JavaScript
                  testing framework.
                </p>
                <div className="border-l-2 md:border-l-4 border-[#232C3B] pl-4 md:pl-6">
                  <div className="mb-6">
                    <span className="font-bold text-[#232C3B] text-base md:text-xl font-montserrat">
                      Purpose:
                    </span>
                    <p className="text-base md:text-xl text-[#232C3B] mt-1">
                      Verify that UI components render correctly, handle user
                      interactions as expected, and integrate smoothly with
                      APIs.
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-[#232C3B] text-base md:text-xl font-montserrat">
                      Focus Areas
                    </span>
                    <ul className="text-base md:text-xl text-[#232C3B] mt-2 space-y-1">
                      <li>Component rendering and props validation</li>
                      <li>State management and hooks behavior</li>
                      <li>API call mocking and response handling</li>
                      <li>Snapshot testing for UI consistency</li>
                      <li className="mt-2">
                        This ensures that the user interface remains stable,
                        predictable, and resilient against unintended changes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-start">
                <Image
                  src="/pics/jestt.png"
                  alt="fetchAdmin.test.tsx example"
                  width={600}
                  height={100}
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 my-16">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_auto_minmax(320px,1fr)] gap-8 lg:gap-12 w-full items-start justify-items-stretch">
            <div className="flex flex-col gap-3 w-full">
              {leftSteps.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[#becad6] font-bold text-xl sm:text-2xl border-2 border-white shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <div
                    className={`flex-1 ml-4 sm:ml-6 rounded-[32px] ${step.color} shadow-lg px-4 sm:px-6 py-4 border-2 border-[#cccccc]`}
                  >
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1">{step.title}</h3>
                    <p className="text-white text-xs sm:text-sm opacity-80 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center py-6 lg:py-0 ">
              <div className="w-48 h-48 flex items-center justify-center">
                <svg viewBox="0 0 180 180" className="w-full h-full">
                  <path
                    d="M150 90a60 60 0 1 0-120 0"
                    stroke="#36496E"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-[#232C3B] text-lg sm:text-xl text-center mt-4 px-2">
                FRONTEND <span className="font-normal text-[#36496E]">DEPLOYMENT</span>
              </h2>
              <p className="text-sm sm:text-base text-[#36496E] mt-2 text-center max-w-[260px] px-2">
                The front-end application was deployed using Vercel. The project was first prepared and built locally, and the GitHub repository was then connected to Vercel. After changes were pushed, the application was automatically built and deployed by Vercel.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full">
              {rightSteps.map((step, idx) => (
                <div key={idx} className="flex flex-row-reverse items-start">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[#becad6] font-bold text-xl sm:text-2xl border-2 border-white shadow-md">
                      {step.number}
                    </div>
                  </div>
                  <div
                    className={`flex-1 mr-4 sm:mr-6 rounded-[32px] ${step.color} shadow-lg px-4 sm:px-6 py-4 border-2 border-[#cccccc] text-right`}
                  >
                    <h3 className="font-bold text-white text-base sm:text-lg mb-1">{step.title}</h3>
                    <p className="text-white text-xs sm:text-sm opacity-80 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}