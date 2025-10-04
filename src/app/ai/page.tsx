"use client";
import Image from "next/image";
import DocsNavBar from "../shared-components/NavBar";
import React from "react";
import Footer from "../shared-components/footer";
import clsx from "clsx";
import { useState } from "react";
import {
  FaStore,
  FaFileAlt,
  FaDollarSign,
  FaCogs,
  FaBullhorn,
  FaRocket,
  FaDatabase,
  FaProjectDiagram,
  FaCloudDownloadAlt,
  FaCheckCircle,
  FaRegFilePdf,
  FaPython,
  FaChartLine,
  FaRobot,
  FaCode,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiLangchain,
  SiGooglecloud,
  SiPostgresql,
  SiScikitlearn,
  SiSqlalchemy,
} from "react-icons/si";

const pipelineSteps = [
  {
    icon: <FaCloudDownloadAlt />,
    title: "Data Collection",
    step: 1,
    description: (
      <>
        Aggregates and centralizes economic and trade datasets (PDF, JSON, CSV) into a unified repository.<br />
        Automated scanning, downloading, and ingestion from cloud and web sources, with systematic file naming and organization, enabling reproducibility and downstream processing.
      </>
    ),
    details: (
      <div className="text-xs md:text-sm mt-2 mb-2 text-left">
        <span className="font-bold text-[#05192F]">Data Sources:</span>
        <ul className="list-disc ml-5">
          <li>Statista (global economics/trade)</li>
          <li>KNBS (official Kenya data)</li>
          <li>Trading Economics (real-time indicators, prices, tariffs, policies)</li>
          <li>Curated news/economic reports</li>
        </ul>
      </div>
    ),
    frameworks: [
      { name: "os", icon: <FaPython /> },
      { name: "glob", icon: <FaPython /> },
      { name: "pandas", icon: <SiPandas /> },
      { name: "PDFPlumber", icon: <FaRegFilePdf /> },
      { name: "tika", icon: <FaCode /> },
      { name: "BeautifulSoup4", icon: <FaCode /> },
    ],
  },
  {
    icon: <FaCheckCircle />,
    title: "Data Cleaning & Preprocessing",
    step: 2,
    description: (
      <>
        Converts raw data into a clean, normalized, analysis-ready format.<br />
        Includes missing value audits, outlier detection (IQR), type coercion, duplicate removal, domain filtering, scaling, and persistent storage as CSV/JSON.
      </>
    ),
    frameworks: [
      { name: "pandas", icon: <SiPandas /> },
      { name: "numpy", icon: <SiNumpy /> },
    ],
  },
  {
    icon: <FaRegFilePdf />,
    title: "Text Extraction & Chunking",
    step: 3,
    description: (
      <>
        Extracts structured/unstructured text from documents and prepares chunks for embedding.<br />
        Utilizes PDFPlumber/Tika for extraction, appends metadata, and applies adaptive chunking (LangChain) for semantic search.
      </>
    ),
    frameworks: [
      { name: "PDFPlumber", icon: <FaRegFilePdf /> },
      { name: "tika", icon: <FaCode /> },
      { name: "LangChain", icon: <SiLangchain /> },
    ],
  },
  {
    icon: <FaProjectDiagram />,
    title: "Embedding Generation",
    step: 4,
    description: (
      <>
        Converts text chunks into semantic vectors for search and ML.<br />
        Uses Google Generative AI’s embedding model (via langchain-google-genai), with batch processing and error handling for reliability.
      </>
    ),
    frameworks: [
      { name: "Google Generative AI", icon: <SiGooglecloud /> },
      { name: "langchain-google-genai", icon: <SiLangchain /> },
      { name: "Python logging", icon: <FaPython /> },
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Vector Database Storage",
    step: 5,
    description: (
      <>
        Stores embeddings and metadata in PostgreSQL with pgvector for fast semantic search.<br />
        Uses SQLAlchemy ORM and psycopg2 for robust database integration.
      </>
    ),
    frameworks: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "pgvector", icon: <FaDatabase /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
      { name: "psycopg2", icon: <FaPython /> },
    ],
  },
  {
    icon: <FaCogs />,
    title: "Orchestration & Analysis",
    step: 6,
    description: (
      <>
        Agent orchestration for advanced analytics (forecasting, simulation, scenario analysis) exposed via API.<br />
        Uses Google AI Dev Kit, Gemini 2.5 Flash, and integrates time-series/ML models (Prophet, ARIMA, XGBoost).
      </>
    ),
    frameworks: [
      { name: "Google AI Dev Kit", icon: <SiGooglecloud /> },
      { name: "Gemini 2.5 Flash", icon: <FaRobot /> },
      { name: "Prophet", icon: <FaChartLine /> },
      { name: "ARIMA", icon: <FaChartLine /> },
      { name: "XGBoost", icon: <SiScikitlearn /> },
    ],
  },
];

const steping = [
  {
    icon: <FaStore size={28} className="text-white" />,
    title: "Market Research and Analysis",
    subtitle: "STEP 1",
    description:
      "Conduct comprehensive market research to understand industry trends, target audience, and competitive landscape.",
  },
  {
    icon: <FaFileAlt size={28} className="text-white" />,
    title: "Business Plan Development",
    subtitle: "STEP 2",
    description:
      "Develop a detailed business plan outlining the business model, value proposition, revenue streams, and financial projections.",
  },
  {
    icon: <FaDollarSign size={28} className="text-white" />,
    title: "Securing Funding",
    subtitle: "STEP 3",
    description:
      "Identify potential investors and secure initial funding through venture capital, angel investors, or crowdfunding.",
  },
  {
    icon: <FaCogs size={28} className="text-white" />,
    title: "Product Development",
    subtitle: "STEP 4",
    description:
      "Design and develop the core product or service, ensuring it meets market needs and quality standards.",
  },
  {
    icon: <FaBullhorn size={28} className="text-white" />,
    title: "Marketing and Branding",
    subtitle: "STEP 5",
    description:
      "Create a strong brand identity and launch a marketing campaign to build awareness and attract early adopters.",
  },
  {
    icon: <FaRocket size={28} className="text-white" />,
    title: "Launch, Evaluation, and Scaling",
    subtitle: "STEP 6",
    description:
      "Officially launch the product or service, focus on customer acquisition, evaluate business performance, gather feedback, and scale operations.",
  },
];

const steps = [
  {
    title: "Create Dockerfile",
    code: `FROM python:3.11-slim
WORKDIR /app
ENV PYTHONPATH=/app
RUN pip install --no-cache-dir -r zeno_agent/requirements.txt
RUN pip install fastapi uvicorn
EXPOSE 8080
CMD ["uvicorn", "zeno_agent.agent:app", "--host", "0.0.0.0", "--port", "8080"]`,
    desc: "Use the lightweight Python 3.11 slim image to optimize container size and performance.",
  },
  {
    title: "Create .dockerignore",
    code: `__pycache__/
.env
venv/
*.log
*.pyc`,
    desc: "Exclude unnecessary files to keep the image lean and secure.",
  },
  {
    title: "Set Environment Variables",
    code: `env:
 GOOGLE_GENAI_USE_VERTEXAI: \${{ secrets.GOOGLE_GENAI_USE_VERTEXAI }}
 GOOGLE_API_KEY: \${{ secrets.GOOGLE_API_KEY }}
 DATABASE_URL: \${{ secrets.DATABASE_URL }}
 PROJECT_ID: \${{ secrets.GCP_PROJECT_ID }}
 SERVICE_NAME: zeno-agent
 REGION: europe-west1
 IMAGE: \${{ secrets.DOCKERHUB_USERNAME }}/zeno-economist`,
    desc: "Manage sensitive credentials and deployment-specific configs securely using CI/CD secrets.",
  },
  {
    title: "Build Docker Image",
    code: `docker build -t zeno-ai:latest .`,
    desc: "Build locally or in CI/CD pipelines.",
  },
  {
    title: "Run Locally for Testing",
    code: `docker run -p 8080:8080 zeno-ai:latest`,
    desc: (
      <>
        Map container port to local machine and verify API responsiveness.
        <br />
        <span className="block mt-1">
          Access the API at{" "}
          <span className="underline text-[#263C61]">
            http://localhost:8080
          </span>
          .
        </span>
      </>
    ),
  },
  {
    title: "Push Docker Image to Registry",
    code: `docker push \${{ secrets.DOCKERHUB_USERNAME }}/zeno-economist`,
    desc: "Push to your Docker Hub or GCR repository for remote deployment.",
  },
  {
    title: "Deploy to Google Cloud Run",
    code: `gcloud run deploy zeno-ai \\
 --image \${{ secrets.DOCKERHUB_USERNAME }}/zeno-economist \\
 --region europe-west1 \\
 --platform managed \\
 --set-env-vars GOOGLE_API_KEY=\${{ secrets.GOOGLE_API_KEY }},DATABASE_URL=\${{ secrets.DATABASE_URL }},...`,
    desc: "Deploy the container with environment variables and managed scaling.",
  },
];

export default function RoutingCardsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-[#D3D7DF] pt-32">
      <DocsNavBar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="inline-block text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D3D7DF] mb-10 mt-10 bg-[#232C3B] px-4 py-2 rounded">
          AI Documentation
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#232C3B] mb-10 mt-5">
          Overview
        </h1>
        <p className="text-base sm:text-lg text-[#05192F] mb-4">
          The AI layer of Zeno AI is the core intelligence engine that powers
          forecasting, scenario simulation, and evidence-based policy
          recommendations. It is designed as a hybrid system that combines
          Machine Learning (ML) techniques with Retrieval-Augmented Generation
          (RAG) to deliver accurate, context-aware insights to economists.
        </p>
        <p className="text-base sm:text-lg text-[#05192F] mb-12">
          The AI is built to augment human expertise rather than replace it.
          Economists bring domain knowledge and policy experience, while Zeno AI
          enhances decision-making by automating data retrieval, validating
          scenarios, and surfacing insights that would be difficult to uncover
          manually.
        </p>

        <section className="w-full py-20 flex flex-col items-center font-sans">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#232C3B] mb-16 tracking-tight text-center">
              Data Pipeline
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-[#232C3B]/10 z-0 rounded-full" />
              <div className="flex flex-col gap-0">
                {pipelineSteps.map((step, idx) => {
                  const isLeft = idx % 2 === 0;
                  const delay = (idx + 1) * 150;
                  return (
                    <div
                      key={idx}
                      className={`relative flex min-h-[260px] md:mb-0 md:items-center ${isLeft ? "md:justify-end" : "md:justify-start"} opacity-0 animate-fade-in-slide`}
                      style={{
                        animationDelay: `${delay}ms`,
                        animationFillMode: 'forwards',
                      }}
                    >
                      <div className="md:hidden flex w-full justify-center relative pb-10">
                        <div className="flex flex-col items-center w-full">
                          <div className="bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-12 h-12 flex items-center justify-center mb-2 text-2xl">
                            {step.icon}
                          </div>
                          <div className="bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-6 py-6 w-full text-left transition-all min-h-[180px]">
                            <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                              STEP {step.step}
                            </div>
                            <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                              {step.title}
                            </div>
                            <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                              {step.description}
                            </div>
                            {step.details}
                            <div className="flex flex-wrap gap-2 mt-2">
                              {step.frameworks.map((fw, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                >
                                  {fw.icon}
                                  {fw.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:flex w-full items-center">
                        {isLeft && (
                          <>
                            <div className="w-1/2 flex justify-end relative">
                              <div className="absolute right-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                              <div className="absolute right-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                                {step.icon}
                              </div>
                              <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-right ml-auto mr-[48px]">
                                <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                                  STEP {step.step}
                                </div>
                                <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                                  {step.title}
                                </div>
                                <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                                  {step.description}
                                </div>
                                {step.details}
                                <div className="flex flex-wrap gap-2 mt-2 justify-end">
                                  {step.frameworks.map((fw, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                    >
                                      {fw.icon}
                                      {fw.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="w-1/2" />
                          </>
                        )}
                        {!isLeft && (
                          <>
                            <div className="w-1/2" />
                            <div className="w-1/2 flex justify-start relative">
                              <div className="absolute left-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                              <div className="absolute left-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                                {step.icon}
                              </div>
                              <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-left mr-auto ml-[48px]">
                                <div className="uppercase text-xs tracking-[.14em] text-[#05192F] font-bold mb-1">
                                  STEP {step.step}
                                </div>
                                <div className="text-[#232C3B] font-extrabold text-2xl leading-tight mb-2">
                                  {step.title}
                                </div>
                                <div className="text-[#232C3B] opacity-90 text-base leading-snug font-medium mb-2">
                                  {step.description}
                                </div>
                                {step.details}
                                <div className="flex flex-wrap gap-2 mt-2 justify-start">
                                  {step.frameworks.map((fw, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1 bg-[#F5F4FF] border border-[#05192F] text-[#05192F] px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition-all hover:bg-[#ede9fe]"
                                    >
                                      {fw.icon}
                                      {fw.name}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 px-4">
          <div className="max-w-7xl mx-auto rounded-lg p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#232C3B] mb-8 text-center">
              Economic Models used in Zeno AI
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <FaChartLine className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Trade Forecasting</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">ARIMA</span>
                      <p className="opacity-80">
                        A classical time-series model leveraging historical export/import and price data for accurate short- and medium-term trade forecasts. Ideal for predicting seasonal trends in agricultural markets.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Time-Series
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">Prophet</span>
                      <p className="opacity-80">
                        Handles complex seasonality and trend changes, enabling robust forecasting for volatile trade data. Excels in modeling irregular patterns like weather-driven price fluctuations.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Seasonal
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">XGBoost</span>
                      <p className="opacity-80">
                        A machine learning model capturing nonlinear relationships through decision trees. Predicts trade volumes under variable conditions, such as policy changes or market shocks, with high accuracy.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Nonlinear
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <FaProjectDiagram className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Scenario Simulation</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">CGE Models</span>
                      <p className="opacity-80">
                        Computable General Equilibrium models simulate economy-wide impacts of shocks like tariffs, droughts, or policy changes. Uses social accounting matrices to assess effects on GDP, welfare, and sector outputs, enabling what-if analysis for strategic planning.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Economy-Wide
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 opacity-80">
                    Applications: Policy evaluation, trade agreement analysis, and resilience planning for agricultural markets.
                  </p>
                </div>
              </div>
              <div className="relative bg-gradient-to-br from-[#232C3B] to-[#05192F] rounded-2xl shadow-xl p-6 text-white flex flex-col h-[400px]">
                <div className="absolute top-4 right-4 bg-[#D3D7DF] text-[#232C3B] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <FaCogs className="text-3xl mb-4 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Impact Analysis</h2>
                <div
                  className="space-y-4 text-sm sm:text-base overflow-y-auto pr-2 hide-scrollbar flex-grow"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-medium">Structural Econometric</span>
                      <p className="opacity-80">
                        Estimates elasticities and policy effects on trade volumes, assessing ripple effects across the economy. Combines scenario outputs with statistical methods to quantify impacts like price changes or supply chain disruptions.
                      </p>
                      <span className="inline-flex items-center gap-1 bg-[#D3D7DF] text-[#232C3B] px-2 py-1 rounded-full text-xs font-semibold mt-2">
                        Policy Impact
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 opacity-80">
                    Applications: Evaluating trade policies, subsidy impacts, and market interventions for informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <h1 className="text-3xl sm:text-4xl font-bold text-[#232C3B] mb-10 mt-10">
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
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#D3D7DF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <p className="text-sm md:text-base text-[#232C3B] mb-2">
                Layout and Modular design of the agentic AI
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
                    The Zeno AI repository, under zeno_agent/, uses a modular,
                    feature-based structure for scalability. Core modules
                    include agent.py (query routing), forecasting.py
                    (predictions), scenario.py (what-if analysis),
                    comparative.py (comparisons), and rag_tools.py (knowledge
                    base). Utilities (db_utils.py, embedding_utils.py,
                    log_utils.py) and tools (db.py, graphing.py, query.py)
                    manage data, visualizations, and queries. Prompt templates
                    in prompts/ guide interactions, and scenario_graphs/ stores
                    outputs.
                  </p>
                  <p className="text-[#232C3B] text-sm md:text-base max-w-prose">
                    Configuration files (Dockerfile, Procfile, requirements.txt)
                    support containerized deployment, enabling isolated
                    development and scaling for AI-driven agricultural trade
                    analysis.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono overflow-x-auto w-full sm:max-w-[280px] md:max-w-[360px] shadow-xl">
                  {`zeno-ai/
├── .git/
├── .github/
│   └── pull_request_template.md
├── .gitignore
├── Dockerfile
├── Procfile
├── README.md
└── zeno_agent/
    ├── __init__.py
    ├── agent.py
    ├── comparative.py
    ├── db_utils.py
    ├── embedding_utils.py
    ├── forecasting.py
    ├── log_utils.py
    ├── rag_tools.py
    ├── requirements.txt
    ├── root_agent.py
    ├── root_agent.yaml
    ├── scenario.py`}
                </pre>
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-[11px] sm:text-xs md:text-sm rounded-xl px-3 sm:px-4 md:px-6 py-3 md:py-4 leading-relaxed font-mono whitespace-pre-wrap break-words w-full sm:max-w-[260px] md:max-w-[320px] shadow-xl">
                  {`   ├── prompts/
    │   ├── missing_data.txt
    │   ├── root_agent.txt
    │   ├── router_prompt.txt
    │   ├── scenario_examples.txt
    │   ├── scenario_subagent.txt
    │   ├── scenario_template.txt
    │   └── scenario_what_if_prompt.txt
    ├── scenario_graphs/
    │   └── maize_kenya_scenario_drop20.png
    └── tools/
        ├── __init__.py
        ├── db.py
        ├── graphing.py
        └── query.py`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-12 sm:py-16 bg-[#232C3B] flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="bg-[#D3D7DF] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold text-[#232C3B] mb-2">
              Zeno local setup
            </h2>
            <p className="text-[#232C3B] text-sm mb-4">
              Steps to run Zeno AI ai locally.
            </p>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  1
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Navigate to zeno-ai directory
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  2
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Create virtual environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  3
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Activate virtual environment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  4
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  Start server
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#232C3B] text-white font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm flex-shrink-0 mt-0.5">
                  5
                </span>
                <span className="text-[#232C3B] text-sm md:text-base">
                  npm start
                </span>
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
                <div>
                  <span className="font-bold">ZenoStaff: $</span> cd zeno_agent
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span> uv
                  venv zenoenv
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span> source
                  zenoenv/bin/activate
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span> uv pip
                  install -r requirements.txt
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span> adk
                  web/
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-screen w-full flex items-center justify-center px-4 py-12 font-sans">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10">
          <section className="w-full md:w-3/4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#263C61] mb-12 text-center md:text-left tracking-tight">
              Zeno AI FastAPI Deployment Steps
            </h1>
            <ol className="relative border-l-[3px] sm:border-l-[5px] border-[#263C61]/30 ml-12 sm:ml-14 space-y-6 md:space-y-8">
              {steps.map((step, idx) => (
                <li key={idx} className="flex relative z-0">
                  <span className="absolute -left-10 sm:-left-12 top-4 flex flex-col items-center z-10 select-none">
                    <span
                      className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-[#263C61] bg-white rounded-full shadow border-2 border-[#263C61] text-base sm:text-xl font-extrabold"
                    >
                      {idx + 1}
                    </span>
                    {idx !== steps.length - 1 && (
                      <span className="w-0.5 h-full bg-gradient-to-b from-[#263C61]/30 via-[#CAD3E4] to-transparent mt-1" />
                    )}
                  </span>
                  <div
                    className="ml-12 sm:ml-14 flex-1 bg-white/90 rounded-2xl shadow-xl border border-[#CAD3E4] px-4 sm:px-6 py-4 sm:py-6 cursor-pointer text-left"
                    tabIndex={0}
                    onMouseEnter={() => setOpenIdx(idx)}
                    onMouseLeave={() => setOpenIdx(null)}
                    onFocus={() => setOpenIdx(idx)}
                    onBlur={() => setOpenIdx(null)}
                  >
                    <h2 className="text-base sm:text-xl font-bold text-[#263C61] mb-2">
                      {step.title}
                    </h2>
                    <p className="text-[#263C61] text-sm sm:text-base mb-4 leading-relaxed">
                      {step.desc}
                    </p>
                    <div
                      className={clsx(
                        "grid transition-all duration-300",
                        openIdx === idx
                          ? "max-h-[350px] opacity-100 scale-100 mt-0 mb-0"
                          : "max-h-0 opacity-0 scale-95 -mt-6 mb-0 pointer-events-none"
                      )}
                    >
                      <pre className="rounded-xl bg-[#263C61] text-[#CAD3E4] text-xs sm:text-sm py-3 sm:py-4 px-4 sm:px-6 overflow-x-auto font-mono whitespace-pre-wrap border border-[#CAD3E4] shadow-xl">
                        {step.code}
                      </pre>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <aside className="w-full md:w-1/4 flex-shrink-0 md:sticky md:top-40 self-start">
            <img
              src="/pics/robot.png"
              alt="Zeno AI Illustration"
              className="w-full max-w-[280px] mx-auto rounded-2xl shadow-lg border-[#263C61]"
              style={{ background: "#fff" }}
            />
          </aside>
        </div>
      </main>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <section className="w-full py-12 sm:py-16 bg-[#D3D7DF]">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#232C3B]">
              Model Exposure
            </h1>
            <p className="mb-8 text-sm sm:text-base text-[#232C3B] max-w-3xl">
              The Zeno AI model is exposed via a RESTful API built with FastAPI,
              providing a scalable and well-documented interface for querying
              agricultural trade analysis. The API is served using Uvicorn as
              the ASGI server, with endpoints defined in{" "}
              <span className="font-mono">zeno_agent/agent.py</span>. It
              supports JSON-based requests and responses, is Docker-ready for
              deployment, and includes automatic API documentation via FastAPI’s
              Swagger UI. The primary endpoint is{" "}
              <span className="font-mono">/query</span> for analysis requests,
              with a <span className="font-mono">/healthz</span> endpoint for
              system health checks.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#232C3B]">
              Example Requests & Responses
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#232C3B]">
              1. Query Endpoint
            </h3>
            <p className="text-sm sm:text-base mb-2 text-[#232C3B]">
              Purpose: Processes natural language queries for agricultural trade
              analysis (e.g., scenario, forecasting, comparative, or knowledge
              base queries).
            </p>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start mb-6 justify-center">
              <div className="flex-1 w-full">
                <div className="font-bold mb-1 text-[#232C3B]">Request</div>
                <pre className="bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 sm:p-4 text-xs sm:text-sm whitespace-pre-wrap font-mono overflow-x-auto">
                  {`POST /query HTTP/1.1
Host: localhost:8000
Content-Type: application/json
{
  "query": "What if maize price drops by 20% in Kenya?"
}`}
                </pre>
              </div>
              <div className="flex-1 w-full">
                <div className="font-bold mb-1 text-[#232C3B]">Response</div>
                <pre className="bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 sm:p-4 text-xs sm:text-sm whitespace-pre-wrap font-mono overflow-x-auto">
                  {`{
  "response": "A 20% price drop for maize in Kenya would reduce average prices from 850/kg to 680/kg over the next 6 months, impacting national supply. This could decrease farmer revenue but may potentially lift the reduced market value, trigger export flows and input inflation.",
  "graph_path": "zeno_agent/scenario_graphs/maize_drop20.png",
  "followup": "Would you like to analyze another scenario, such as a price increase or a different commodity?"
}`}
                </pre>
              </div>
            </div>
            <div className="mb-6 text-sm sm:text-base text-[#232C3B]">
              <div className="text-lg sm:text-xl font-semibold">Notes:</div>
              <ul className="list-disc pl-5 mt-2">
                <li>The response field contains the textual analysis.</li>
                <li>
                  The graph_path points to a generated visualization in{" "}
                  <span className="font-mono">zeno_agent/scenario_graphs/</span>
                  .
                </li>
                <li>
                  The followup suggests further queries to enhance user
                  interaction.
                </li>
              </ul>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#232C3B]">
              2. Health Check Endpoint
            </h3>
            <p className="text-sm sm:text-base mb-2 text-[#232C3B]">
              Purpose: Verifies the API&apos;s operational status.
            </p>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start mb-2">
              <div className="flex-1 w-full">
                <div className="font-bold mb-1 text-[#232C3B]">Request</div>
                <pre className="bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 sm:p-4 text-xs sm:text-sm overflow-x-auto font-mono">
                  {`GET /healthz HTTP/1.1
Host: localhost:8000`}
                </pre>
              </div>
              <div className="flex-1 w-full">
                <div className="font-bold mb-1 text-[#232C3B]">Response</div>
                <pre className="bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 sm:p-4 text-xs sm:text-sm overflow-x-auto font-mono">
                  {`{
  "status": "ok"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}