import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";

export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#151E31] px-10 py-1 ">
      <DocsNavBar variant="dark" />
      <div className="w-6/8 m-auto">
        <h1 className="inline-block text-6xl font-bold text-[#151E31] mb-10 mt-10 bg-[#D3D7DF] px-4 py-2 rounded">
          Backend Documentation
        </h1>
        <h1 className="text-4xl font-bold text-[#D3D7DF] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-[20px] text-[#D3D7DF] mb-4 m-auto mb-15">
          The backend of Zeno AI is built with Django REST Framework (DRF) and
          serves as the core service layer of the system. It is responsible for
          handling business logic, managing data flows, and ensuring secure
          communication between the frontend and the AI engine. By abstracting
          the complexity of data handling and AI model execution, the backend
          ensures that economists receive reliable insights with minimal
          latency. Its modular design allows for scalability, enabling the
          future integration of new data sources, models, or features without
          disrupting the existing system.
        </p>

        <h1 className="text-4xl font-bold text-[#D3D7DF] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/back-tech-stack (1).png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl mb-13"
            priority
          />
        </div>
      </div>
      <section className="w-full py-16 px-2 md:px-10 bg-[#151E31] flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-start">
            <p className="text-base text-[#D3D7DF] mb-2">
              layout and modular design of the backend
              <br />
              codebase, within the application
            </p>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[#D3D7DF] font-montserrat">
              Coding Structure
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center pt-2">
                <div className="w-4 h-4 bg-[#D3D7DF] rounded-full mb-1" />
                <div className="w-1 h-36 bg-[#D3D7DF] rounded py-20" />
              </div>
              <div className="bg-transparent">
                <p
                  className=" text-4xl text-[#D3D7DF] text-base md:text-lg mb-5 text-xl"
                  style={{ maxWidth: 400 }}
                >
                  The backend of Zeno AI is structured as a modular Django
                  project. It is organized into multiple apps, each responsible
                  for a specific domain of the system, such as user management,
                  agent interactions, conversations, and API handling. This
                  structure ensures scalability, maintainability, and clear
                  separation of responsibilities.
                </p>
                <p
                  className="text-[#D3D7DF] text-2xl md:text-lg"
                  style={{ maxWidth: 400 }}
                >
                  This modular design allows the backend to evolve as new
                  features are added, while keeping individual components
                  decoupled and easy to maintain.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-row gap-6">
              <pre
                className="bg-[#D3D7DF] text-[#151E31] text-sm md:text-base rounded-xl px-10 py-6 leading-6 font-mono overflow-x-auto max-w-xs md:max-w-sm shadow-xl"
                style={{ minWidth: "140px" }}
              >{`
├── agents/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── api/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── permissions.py
│   ├── serializers.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
`}</pre>
              <pre
                className="bg-[#D3D7DF] text-[#151E31] text-sm md:text-base rounded-xl px-10 py-6 leading-6 font-mono overflow-x-auto max-w-xs md:max-w-sm shadow-xl"
                style={{ minWidth: "140px" }}
              >{`
├── runs/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── uploads/
│   └── test.pdf
├── users/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
`}</pre>
              <pre
                className="bg-[#D3D7DF] text-[#151E31] text-sm md:text-base rounded-xl px-10 py-6 leading-6 font-mono overflow-x-auto max-w-xs md:max-w-sm shadow-xl"
                style={{ minWidth: "140px" }}
              >{`
├── conversations/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── zeno/
│   ├── __pycache__/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
`}</pre>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-4xl max-w-7xl m-auto font-bold mb-6 text-[#D3D7DF] mt-30">
        Zeno AI System Architecture
      </h1>
      <p className="text-2xl w-4/6 m-auto text-[#D3D7DF] mb-12">
        The system architecture of Zeno shows how the main parts of the platform
        interact, including the frontend, backend, database, and AI components.
      </p>
      <div className="w-full flex justify-center mb-20">
        <Image
          src="/sys-arch.png"
          alt="Zeno AI System Architecture Diagram"
          width={1400}
          height={700}
          className="w-full max-w-7xl h-auto rounded-lg shadow-xl"
          priority
        />
      </div>
      <h2 className="text-4xl font-bold mb-6 mt-30 text-[#D3D7DF] text-left max-w-7xl m-auto">
        Entity Relationship Diagram (ERD)
      </h2>
      <p className="text-xl text-[#D3D7DF] mb-12 text-left max-w-7xl m-auto">
        Zeno AI system’s architecture is fundamentally supported by a robust
        data model. The following entity-relationship tables represent the
        relational database schema that underpins the system's core functions.
        This model defines how crucial information, including user interactions,
        analytical outputs, and underlying data sources, is structured, stored,
        and interconnected. The design prioritizes data integrity, transparency,
        and traceability, ensuring that every forecast, simulation, and insight
        is grounded in a verifiable and consistent data source. This relational
        schema is essential for enabling the root agent to orchestrate
        workflows, manage data flow between sub-agents, and provide a clear,
        auditable trail for economists to validate the system's outputs.
      </p>
      <div className="w-full flex justify-center mb-20">
        <Image
          src="/erdd.png"
          alt="Zeno AI Entity Relationship Diagram"
          width={1400}
          height={700}
          className="w-full max-w-7xl h-auto"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center bg-[#D3D7DF] py-15">
        <div className="bg-[#151E31] rounded-2xl shadow-lg px-8 py-8 w-[350px] flex flex-col">
          <h2 className="text-2xl font-bold text-[#D3D7DF] mb-5">
            Steps to set up Zeno locally
          </h2>
       
          <ol className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-[#D3D7DF] text-[#151E31]  font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                1
              </span>
              <span className="text-[#D3D7DF] text-[18px]">
                Navigate to backend directory
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className=" bg-[#D3D7DF] text-[#151E31] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                2
              </span>
              <span className="text-[18px] text-[#D3D7DF]">
                Create virtual environment
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                3
              </span>
              <span className="text-[18px] text-[#D3D7DF]">
                Install dependencies
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                4
              </span>
              <span className="text-[#D3D7DF] text-[18px]">Run migrations</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-[#151E31] bg-[#D3D7DF] font-bold w-8 h-8 flex items-center justify-center rounded-full text-lg">
                5
              </span>
              <span className="text-[#D3D7DF] text-[18px]">
                Start dev server
              </span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-[#151E31] mb-4 -mt-40 md:mt-0">
            Setup Instructions
          </h2>
          <div className="relative">
            <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-16 w-[480px] shadow-lg font-mono  text-[20px] text-[#151E31]">
              <div>
                <span className="font-bold">ZenoStaff: $</span> cd backend
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-backend$</span>{" "}
                python -m venv venv
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-backend$</span>{" "}
                source venv/bin/activate
              </div>

              <div>
                <span className="font-bold">ZenoStaff: /zeno-backend$</span> pip
                install -r requirements.txt
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-backend$</span>{" "}
                python manage.py migrate
              </div>
              <div>
                <span className="font-bold">ZenoStaff: /zeno-backend$</span>{" "}
                python manage.py runserver
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

      <main className="bg-[#151E31] mt-20 w-full flex flex-col items-center justify-center py-10 px-4">
        <div className="w-4/5 m-auto flex flex-col lg:flex-row items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex-1 flex flex-col justify-center items-start pl-4 lg:pl-32 pt-24 lg:pt-0">
            <h1 className="text-4xl lg:text-4xl font-bold text-[#D3D7DF] mb-12 font-montserrat">
              Route
            </h1>
            <p className="text-2xl mb-10 text-[#D3D7DF] max-w-xl font-normal leading-snug font-montserrat border-b-2 border-[#D3D7DF] pb-5">
              The backend exposes a set of RESTful endpoints to manage multiple sub-agents within Zeno AI. These routes allow creating, retrieving, updating and deleting records.
            </p>
            <p className="text-1xl  text-[#D3D7DF] max-w-xl font-normal leading-snug font-montserrat">
              Click on the image to see the full swagger documentation.
            </p>
          </div>
          <div className="relative group w-fit">
            <a
              href="https://zeno-ai-be14a438528a.herokuapp.com"
              target="_blank"
              rel=""
            >
              <Image
                src="/swagger.png"
                alt="fetchAdmin.test.tsx example"
                width={600}
                height={100}
                className="block transition-all duration-100 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300 text-center px-4 bg-black bg-opacity-70 rounded">
                  Click here to see the swagger documentation
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <section className="w-full flex flex-col items-center justify-center px-2 py-16 bg-[#151E31]">
        <div className="w-full max-w-[1800px] flex flex-col lg:flex-row items-start justify-between mx-auto gap-10">
          <div className="flex-1 flex flex-col justify-start items-start pt-8 sm:pt-24 pl-2 sm:pl-4 lg:pl-24">
            <h1 className="text-4xl font-bold text-[#D6DCE7] mb-8 sm:mb-12 font-montserrat">
            Testing (Pytest)
            </h1>
            <p className="text-base sm:text-2xl text-[#D6DCE7] max-w-2xl font-normal mb-8 sm:mb-12">
              The backend is tested with Pytest, a Python testing framework
              known for its simplicity and scalability.
            </p>
            <div className="border-l-[3px] border-[#D6DCE7] pl-4 sm:pl-8 mb-8">
              <div className="mb-4 sm:mb-6">
                <span className="font-bold text-[#D6DCE7] text-base sm:text-xl font-montserrat">
                  Purpose
                </span>
                <p className="text-base sm:text-xl text-[#D6DCE7] font-normal mt-1">
                  Validate business logic, database models, and API endpoints to
                  ensure data integrity and correct functionality.
                </p>
              </div>
              <div>
                <span className="font-bold text-[#D6DCE7] text-base sm:text-xl font-montserrat">
                  Focus Areas
                </span>
                <ul className="text-base sm:text-xl text-[#D6DCE7] font-normal mt-2 list-none">
                  <li>Unit tests for models, serializers, and utilities</li>
                  <li>
                    Integration tests for API endpoints and authentication flows
                  </li>
                  <li>Database migrations and schema validation</li>
                  <li>Error handling and permission enforcement</li>
                </ul>
              </div>
            </div>
            <p className="text-2xl">
              Through Pytest, we guarantee that the backend logic produces
              accurate outputs, maintains secure operations, and scales without
              regressions.Outcome
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center w-full relative mt-12 lg:mt-0 lg:pr-16">
            <div className="relative w-full max-w-xl">
              <Image
                src="/pics/pytest.png"
                alt="test.py example"
                width={700}
                height={100}
                className="mt-40"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
