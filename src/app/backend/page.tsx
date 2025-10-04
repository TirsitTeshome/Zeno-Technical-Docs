import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";

const leftSteps = [
  {
    number: "01",
    title: "Prepared the Project for Heroku",
    desc: "Ensured requirements.txt included essential packages like gunicorn for the server and psycopg2-binary for PostgreSQL. Created a Procfile at the project root with: web: gunicorn zeno.wsgi --log-file-",
    color: "bg-[#5B80AC]",
  },
  {
    number: "02",
    title: "Specified Python Runtime",
    desc: "Added runtime.txt specifying the Python version: python-3.11",
    color: "bg-[#36496E]",
  },
  {
    number: "03",
    title: "Configured Django for Production",
    desc: "In zeno/settings.py, set DEBUG = False, configured ALLOWED_HOSTS to include the Heroku domain, and moved sensitive settings like SECRET_KEY into environment variables using os.getenv().",
    color: "bg-[#5B80AC]",
  },
  {
    number: "04",
    title: "Installed and Authenticated Heroku CLI",
    desc: "Installed the Heroku CLI and ran heroku login to securely connect the local environment with Heroku.",
    color: "bg-[#36496E]",
  },
  {
    number: "05",
    title: "Created the Heroku Application",
    desc: "From the backend root directory, ran: heroku create zeno-backend-api",
    color: "bg-[#5B80AC]",
  },
];

const rightSteps = [
  {
    number: "06",
    title: "Provisioned PostgreSQL Database",
    desc: "Added a free hobby-tier PostgreSQL add-on using: heroku addons:create heroku-postgresql:hobby-dev -a zeno-backend-api",
    color: "bg-[#5B80AC]",
  },
  {
    number: "07",
    title: "Set Environment Variables",
    desc: "Securely added critical environment variables via CLI: heroku config:set SECRET_KEY='...' DATABASE_URL='...' DJANGO_SETTINGS_MODULE='zeno.settings' -a zeno-backend-api",
    color: "bg-[#36496E]",
  },
  {
    number: "08",
    title: "Deployed Backend Code",
    desc: "Pushed the main branch to Heroku: git push heroku main",
    color: "bg-[#5B80AC]",
  },
  {
    number: "09",
    title: "Triggered Build and Launch",
    desc: "The push triggered a build, installed dependencies, and launched the Django application on Heroku.",
    color: "bg-[#36496E]",
  },
  {
    number: "10",
    title: "Tested API Endpoints",
    desc: "Used Postman to test all API endpoints, confirming functionality and catching issues early.",
    color: "bg-[#36496E]",
  },
];

export default function RoutingCardsPage() {
  return (
    <main className="min-h-screen bg-[#151E31] pt-32">
      <DocsNavBar variant="dark" />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="inline-block text-4xl md:text-6xl font-bold text-[#151E31] mb-10 mt-10 bg-[#D3D7DF] px-4 py-2 rounded">
          Backend Documentation
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base md:text-lg text-[#D3D7DF] mb-12">
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

        <h1 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-10 mt-10">
          Tech Stack
        </h1>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/back-tech-stack (1).png"
            alt="Tech Stack"
            width={1600}
            height={500}
            className="w-full max-w-7xl h-auto rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>

      <section className="w-full py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#151E31]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#D3D7DF] mb-2">
                layout and modular design of the backend
                <br />
                codebase, within the application
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D3D7DF] font-montserrat">
                Coding Structure
              </h2>
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="hidden md:flex flex-col items-center pt-1 md:pt-2">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-[#D3D7DF] rounded-full mb-1" />
                  <div className="w-1 h-24 md:h-36 bg-[#D3D7DF] rounded" />
                </div>
                <div>
                  <p className="text-[#D3D7DF] text-sm md:text-base mb-4 max-w-prose">
                    The backend of Zeno AI is structured as a modular Django
                    project. It is organized into multiple apps, each
                    responsible for a specific domain of the system, such as
                    user management, agent interactions, conversations, and API
                    handling. This structure ensures scalability,
                    maintainability, and clear separation of responsibilities.
                  </p>
                  <p className="text-[#D3D7DF] text-sm md:text-base max-w-prose">
                    This modular design allows the backend to evolve as new
                    features are added, while keeping individual components
                    decoupled and easy to maintain.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
                  {`├── agents/
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
│   └── views.py`}
                </pre>
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
                  {`├── runs/
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
│   └── views.py`}
                </pre>
                <pre className="bg-[#D3D7DF] text-[#151E31] text-xs sm:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full shadow-xl">
                  {`├── conversations/
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
│   └── wsgi.py`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D3D7DF]">
          Entity Relationship Diagram (ERD)
        </h2>
        <p className="text-base md:text-lg text-[#D3D7DF] mb-12 ">
          Zeno AI system&apos;s architecture is fundamentally supported by a
          robust data model. The following entity-relationship tables represent
          the relational database schema that underpins the system&apos;s core
          functions. This model defines how crucial information, including user
          interactions, analytical outputs, and underlying data sources, is
          structured, stored, and interconnected. The design prioritizes data
          integrity, transparency, and traceability, ensuring that every
          forecast, simulation, and insight is grounded in a verifiable and
          consistent data source. This relational schema is essential for
          enabling the root agent to orchestrate workflows, manage data flow
          between sub-agents, and provide a clear, auditable trail for
          economists to validate the system&apos;s outputs.
        </p>
        <div className="w-full flex justify-center mb-12">
          <Image
            src="/pics/erdd.png"
            alt="Zeno AI Entity Relationship Diagram"
            width={1400}
            height={700}
            className="w-full max-w-6xl h-auto"
          />
        </div>
      </div>

      <div className="w-full py-12 md:py-16 bg-[#D3D7DF] flex flex-col items-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#151E31] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#D3D7DF] mb-4">
              Steps to set up Zeno locally
            </h2>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Navigate to backend directory
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Create virtual environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Install dependencies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Run migrations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#D3D7DF] text-[#151E31] font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  5
                </span>
                <span className="text-[#D3D7DF] text-sm md:text-base">
                  Start dev server
                </span>
              </li>
            </ol>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#151E31] mb-4 mt-8 md:mt-0">
              Setup Instructions
            </h2>
            <div className="relative">
              <div className="bg-[#E6E9EF] rounded-b-xl rounded-tr-xl px-4 py-4 md:px-6 md:py-6 shadow-lg font-mono text-sm md:text-base text-[#151E31] leading-relaxed">
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
                  <span className="font-bold">ZenoStaff: /zeno-backend$</span>{" "}
                  pip install -r requirements.txt
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
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#151E31] py-12 md:py-16 px-4 md:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D3D7DF] mb-8 font-montserrat">
                Route
              </h1>
              <p className="text-base md:text-lg mb-6 text-[#D3D7DF] max-w-xl font-normal leading-relaxed font-montserrat border-b-2 border-[#D3D7DF] pb-4">
                The backend exposes a set of RESTful endpoints to manage
                multiple sub-agents within Zeno AI. These routes allow creating,
                retrieving, updating and deleting records.
              </p>
              <p className="text-base md:text-lg text-[#D3D7DF] max-w-xl font-normal leading-relaxed font-montserrat">
                Click on the image to see the full swagger documentation.
              </p>
            </div>
            <div className="relative group w-full max-w-md">
              <a
                href="https://zeno-ai-be14a438528a.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/pics/swagger.png"
                  alt="Swagger documentation"
                  width={600}
                  height={100}
                  className="w-full h-auto transition-all duration-100 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition-opacity duration-300 text-center px-4 bg-black bg-opacity-70 rounded">
                    Click here to see the swagger documentation
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full py-12 md:py-8 px-4 md:px-6 lg:px-8 bg-[#151E31]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D6DCE7] mb-8 font-montserrat">
                Testing (Pytest)
              </h1>
              <p className="text-base md:text-lg text-[#D6DCE7] max-w-2xl mb-8">
                The backend is tested with Pytest, a Python testing framework
                known for its simplicity and scalability.
              </p>
              <div className="border-l-2 md:border-l-4 border-[#D6DCE7] pl-4 md:pl-6 mb-8">
                <div className="mb-6">
                  <span className="font-bold text-[#D6DCE7] text-base md:text-xl font-montserrat">
                    Purpose
                  </span>
                  <p className="text-base md:text-lg text-[#D6DCE7] mt-1">
                    Validate business logic, database models, and API endpoints
                    to ensure data integrity and correct functionality.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-[#D6DCE7] text-base md:text-xl font-montserrat">
                    Focus Areas
                  </span>
                  <ul className="text-base md:text-lg text-[#D6DCE7] mt-2 space-y-1">
                    <li>Unit tests for models, serializers, and utilities</li>
                    <li>
                      Integration tests for API endpoints and authentication
                      flows
                    </li>
                    <li>Database migrations and schema validation</li>
                    <li>Error handling and permission enforcement</li>
                  </ul>
                </div>
              </div>
              <p className="text-base md:text-lg text-[#D6DCE7]">
                Through Pytest, we guarantee that the backend logic produces
                accurate outputs, maintains secure operations, and scales
                without regressions.
              </p>
            </div>
            <div className="flex-1 flex">
              <Image
                src="/pics/pytest.png"
                alt="Pytest example"
                width={700}
                height={100}
                className="w-full max-w-md 2xl:max-w-xl 2xl:h-100 2xl:ml-20 h-auto object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-12 md:py-8 px-4 md:px-6 lg:px-8 bg-[#151E31]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-12">
            <div className="max-w-3xl flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#D6DCE7] leading-tight mb-6">
                Automated API Tests Using <br /> Postman CLI
              </h1>
              <p className="text-base md:text-lg text-[#D6DCE7] mb-8 md:mb-10">
                The backend API testing pipeline used Postman CLI integrated
                with GitHub Actions, providing automated coverage upon every
                code update.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 md:gap-10">
                {[
                  {
                    bg: "bg-orange-500",
                    img: "/pics/post.png",
                    alt: "Postman Icon",
                    title: "Step 1",
                    desc: "Exported Postman Collection and Environment IDs",
                  },
                  {
                    bg: "bg-white",
                    img: "/pics/actions.png",
                    alt: "GitHub Actions Icon",
                    title: "Step 2",
                    desc: "Stored UIDs and Postman API Key in GitHub Secrets",
                  },
                  {
                    bg: "bg-[#121F3D]",
                    img: "/pics/junit.png",
                    alt: "JUnit Icon",
                    title: "Step 3",
                    desc: "Configured GitHub Actions Workflow",
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left"
                  >
                    <div
                      className={`${step.bg} w-16 h-16 rounded-full p-4 flex items-center justify-center`}
                    >
                      <Image
                        src={step.img}
                        alt={step.alt}
                        width={step.alt.includes("JUnit") ? 64 : 40}
                        height={step.alt.includes("JUnit") ? 24 : 40}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-base md:text-xl text-[#D6DCE7] font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#D6DCE7] max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full max-w-xl mx-auto">
              <div className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] overflow-hidden rounded-xl">
                <Image
                  src="/pics/api-test-light.png"
                  alt="API Test Light"
                  fill
                  className="object-contain opacity-70"
                  priority
                />
              </div>
              <div className="absolute rounded-xl w-[90%] h-[90%] sm:w-[92%] sm:h-[92%] md:w-[94%] md:h-[94%] xl:w-[94%] xl:h-[94%] 
              2xl:w-[124%] 2xl:h-[94%] top-4 sm:top-5 md:top-10 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0">
                <Image
                  src="/pics/api-test-dark.png"
                  alt="API Test Dark"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <div className="flex flex-col items-center justify-center py-6 lg:py-0">
        <div className="w-48 h-48 flex items-center justify-center">
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <path
              d="M150 90a60 60 0 1 0-120 0"
              stroke="#a9b9d3"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h2 className="font-bold text-[#fdfdfd] text-lg sm:text-xl text-center mt-4 px-2">
          BACKEND <span className="font-normal text-[#bfbff0]">DEPLOYMENT</span>
        </h2>
        <p className="text-sm sm:text-base text-[#a9b9d3] mt-2 text-center max-w-[260px] px-2">
           The backend was deployed to Heroku with a PostgreSQL database, environment variables for security, and automated build from the main branch.
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
    </main>
  );
}