// import LandingPage from "./landing/page";


// export default function Home() {
//   return (
//    <>
//    <LandingPage />
//    </>
//   );
// }
import {
  FaCloudDownloadAlt,
  FaCheckCircle,
  FaRegFilePdf,
  FaProjectDiagram,
  FaDatabase,
  FaCogs,
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

export default function DataPipelineTimeline() {
  return (
    <section className="w-full bg-[#E6E9EF] py-20 flex flex-col items-center font-sans">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#232C3B] mb-16 tracking-tight text-center drop-shadow-sm">
          Data Pipeline Documentation
        </h2>
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-[#232C3B]/10 z-0 rounded-full" />
          <div className="flex flex-col gap-0">
            {pipelineSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex min-h-[260px] md:mb-0 md:items-center ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                >
                  {/* Mobile stacked view */}
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
                  {/* Desktop alternating cards */}
                  <div className="hidden md:flex w-full items-center">
                    {isLeft && (
                      <>
                        {/* Left card */}
                        <div className="w-1/2 flex justify-end relative">
                          {/* Dotted connector */}
                          <div className="absolute right-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                          {/* Icon with overlap */}
                          <div
                            className="absolute right-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl"
                          >
                            {step.icon}
                          </div>
                          {/* Card */}
                          <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-right ml-auto mr-[48px] relative">
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
                        {/* Right card */}
                        <div className="w-1/2 flex justify-start relative">
                          {/* Dotted connector */}
                          <div className="absolute left-0 top-1/2 w-[60px] h-0 border-t-2 border-dotted border-[#05192F] z-10" />
                          {/* Icon with overlap */}
                          <div
                            className="absolute left-[-37px] top-1/2 -translate-y-1/2 z-20 bg-[#05192F] text-white border-4 border-white shadow-xl rounded-full w-14 h-14 flex items-center justify-center text-2xl"
                          >
                            {step.icon}
                          </div>
                          {/* Card */}
                          <div className="max-w-[500px] w-full bg-white rounded-2xl shadow-xl border border-[#232C3B]/10 px-8 py-8 text-left mr-auto ml-[48px] relative">
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
  );
}