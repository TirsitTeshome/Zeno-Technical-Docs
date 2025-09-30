import Image from "next/image";
import DocsNavBar from "../shared-components/DocsNavBar";
import { FaHome, FaUserPlus, FaSignInAlt, FaComments, FaUser, FaTachometerAlt, FaUsers, FaStar, FaChartBar, FaHeartbeat } from "react-icons/fa";



export default function DocsPage() {
  return (
    <div>
      <DocsNavBar />
      <main className="min-h-screen bg-[#D3D7DF] flex flex-col items-left px-4 m-auto">
        {/* Roadmap (Image 8) at the top */}
        <h1 className="text-5xl font-bold mb-6 mt-20 text-[#05192F] m-auto w-4/5">
          Zeno AI From the start to the end
        </h1>
        <p className="text-2xl text-[#05192F] mb-4 m-auto w-4/5">
          The system architecture of Zeno shows how the main parts of the
          platform interact, including the frontend, backend, database, and AI
          components.
        </p>
        <section className="w-full flex flex-col items-center justify-center mb-24 pt-12 pb-5">
          <div className="w-full flex justify-center">
            <Image
              src="/processes.png"
              alt="Road Map"
              width={1280}
              height={616}
              className="w-full max-w-8xl h-auto rounded-lg"
              priority
            />
          </div>
        </section>
        <div className="w-full mx-auto py-10">
          <div className="max-w-6/8 w-full mx-auto">
            {/* System Architecture Section */}
            <h1 className="text-5xl font-bold mb-6 text-[#05192F]">
              Zeno AI System Architecture
            </h1>
            <p className="text-2xl text-[#05192F] mb-12">
              The system architecture of Zeno shows how the main parts of the
              platform interact, including the frontend, backend, database, and AI
              components.
            </p>
            <div className="w-full flex justify-center mb-20">
              <Image
                src="/sys-arch.png"
                alt="Zeno AI System Architecture Diagram"
                width={1400}
                height={700}
                className="w-full max-w-8xl h-auto rounded-lg shadow-xl"
                priority
              />
            </div>
            {/* ERD Section */}
            <h2 className="text-4xl font-bold mb-6 mt-30 text-[#05192F] text-left">
              Entity Relationship Diagram (ERD)
            </h2>
            <p className="text-xl text-[#05192F] mb-12 text-left">
              Zeno AI system’s architecture is fundamentally supported by a robust
              data model. The following entity-relationship tables represent the
              relational database schema that underpins the system's core functions.
              This model defines how crucial information, including user
              interactions, analytical outputs, and underlying data sources, is
              structured, stored, and interconnected. The design prioritizes data
              integrity, transparency, and traceability, ensuring that every
              forecast, simulation, and insight is grounded in a verifiable and
              consistent data source. This relational schema is essential for
              enabling the root agent to orchestrate workflows, manage data flow
              between sub-agents, and provide a clear, auditable trail for
              economists to validate the system's outputs.
            </p>
            <div className="w-full flex justify-center mb-20">
              <Image
                src="/erd.png"
                alt="Zeno AI Entity Relationship Diagram"
                width={1400}
                height={700}
                className="w-full max-w-7xl h-auto rounded-lg shadow-xl"
              />
            </div>
            
          </div>
          {/* Informational Website Section (from previous image) */}
          <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
            {/* Left: Overlapping Cards */}
            <div className="relative flex-shrink-0 w-[530px] h-[360px]">
              <div className="absolute left-0 top-0 z-10 w-[430px] h-[280px]">
                <Image
                  src="/value.png"
                  alt="Innovation and Accessibility"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute left-14 top-28 z-0 w-[430px] h-[280px] ">
                <Image
                  src="/feature.png"
                  alt="Innovation and Accessibility"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            {/* Right: Informational Website Content */}
            <div className="flex flex-col justify-center items-start max-w-xl">
              <h2 className="text-4xl font-bold mb-6 text-[#05192F]">
                Informational Website
              </h2>
              <p className="text-xl text-[#05192F] mb-8">
                The system architecture of Zeno shows how the main parts of the platform interact, including the frontend, backend, database, and AI components.
              </p>
              <h3 className="text-2xl font-bold mb-3 text-[#05192F]">
                User Interface
              </h3>
              <p className="text-lg text-[#05192F] mb-6">
                The user interface was built<br />using Next.JS
              </p>
              <Image
                src="/nextt.png"
                alt="Next.js Logo"
                width={60}
                height={60}
                className="mt-2"
              />
            </div>
          </section>
        </div>
        {/* Admin Dashboard Section (from new image) */}
        <section className="w-full px-0 py-0 bg-[#232f49] rounded-3xl mb-24 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-0 py-16 px-10">
            {/* Left: Admin Dashboard Text */}
            <div className="flex flex-col justify-center items-start max-w-3/4 m-auto">
              <h2 className="text-4xl font-bold mb-6 text-white w-3/ m-auto">
                Admin Dashboard and User Interface
              </h2>
              <p className="text-xl text-white mb-8 w-3/5 m-auto">
                The system architecture of Zeno shows how the main parts of the platform interact, including the frontend, backend, database, and AI components.
              </p>
              <div className="flex flex-row gap-16 items-end mt-8 w-3/5 m-auto">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white ">
                    User Interface
                  </h3>
                  <p className="text-lg text-white mb-4">
                    The user interface was built<br />using Next.JS
                  </p>
                  <Image
                    src="/nextt.png"
                    alt="Next.js Logo"
                    width={60}
                    height={60}
                    className="mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Unit Testing
                  </h3>
                  <p className="text-lg text-white mb-4">
                    It was tested using Jest<br />Testing.
                  </p>
                  <Image
                    src="/jest.png"
                    alt="Jest Logo"
                    width={60}
                    height={60}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
            {/* Right: Admin Dashboard Illustration */}
            <div className="relative flex-shrink-0 w-[530px] h-[360px] w-3/4 m-auto mr-30">
              <div className="absolute left-0 top-0 z-10 w-[430px] h-[280px]">
                <Image
                  src="/dash.png"
                  alt="Admin Dashboard"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute left-14 top-28 z-0 w-[430px] h-[280px] opacity-90">
                <Image
                  src="/chatp.png"
                  alt="Admin Dashboard"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}