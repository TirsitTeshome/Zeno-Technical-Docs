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
          The AI layer of Zeno AI is the core intelligence engine that powers
          forecasting, scenario simulation, and evidence-based policy
          recommendations. It is designed as a hybrid system that combines
          Machine Learning (ML) techniques with Retrieval-Augmented Generation
          (RAG) to deliver accurate, context-aware insights to economists.
        </p>
        <p className="text-base md:text-lg text-[#05192F] mb-12">
          The AI is built to augment human expertise rather than replace it.
          Economists bring domain knowledge and policy experience, while Zeno AI
          enhances decision-making by automating data retrieval, validating
          scenarios, and surfacing insights that would be difficult to uncover
          manually.
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
                layout and modular design of the agentic AI
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
              <div className="flex flex-col sm:flex-row gap-6">
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-4 sm:px-6 py-4 md:px-8 md:py-6 leading-relaxed font-mono overflow-x-auto max-w-full sm:max-w-xs md:max-w-md shadow-xl">
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
                <pre className="bg-[#232C3B] text-[#D3D7DF] text-xs sm:text-sm md:text-base rounded-xl px-4 sm:px-6 py-4 md:px-8 md:py-6 leading-relaxed font-mono overflow-x-auto max-w-full sm:max-w-xs md:max-w-md shadow-xl">
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

      <div className="w-full py-12 md:py-16 bg-[#232C3B] flex flex-col items-center px-4 md:px-6 lg:px-8">
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
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span>source
                  zenoenv/bin/activate
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span>uv pip
                  install -r requirements.txt
                </div>
                <div>
                  <span className="font-bold">ZenoStaff: /zeno-ai$</span>adk
                  web/
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20">
        <section className="w-full py-12 md:py-16 bg-[#D3D7DF]">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#232C3B]">
              Model Exposure
            </h1>
            <p className="mb-10 text-base md:text-lg text-[#232C3B] max-w-6xl">
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

            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#232C3B]">
              Example Requests & Responses
            </h2>
            <h3 className=" text-3xl font-semibold mb-2 text-[#232C3B]">
              1. Query Endpoint
            </h3>
            <p className=" text-[18px] mb-2 text-[#232C3B]">
              Purpose: Processes natural language queries for agricultural trade
              analysis (e.g., scenario, forecasting, comparative, or knowledge
              base queries).
            </p>

            <div className=" text-[20px] flex flex-col md:flex-row gap-8 items-start mb-2 justify-center">
              <div className="flex-1 mb-4 md:mb-0 max-w-lg">
                <div className="font-bold mb-1 text-[#232C3B]">Request</div>
                <pre className=" text-[18px] bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 text-xs whitespace-pre-wrap font-mono">
                  {`POST /query HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
  "query": "What if maize price drops by 20% in Kenya?"
}`}
                </pre>
              </div>
              <div className="flex-1 max-w-lg">
                <div className="font-bold mb-1 text-[#232C3B]">Response</div>
                <pre className="text-[18px] bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 text-xs whitespace-pre-wrap font-mono">
                  {`{
  "response": "A 20% price drop for maize in Kenya would reduce average prices from 850/kg to 680/kg over the next 6 months, impacting national supply. This could decrease farmer revenue but may potentially lift the reduced market value, trigger export flows and input inflation.",
  "graph_path": "zeno_agent/scenario_graphs/maize_drop20.png",
  "followup": "Would you like to analyze another scenario, such as a price increase or a different commodity?"
}`}
                </pre>
              </div>
            </div>
            <div className="mb-6 text-sm text-[#232C3B]">
              <div className=" text-2xl font-semibold">Notes:</div>
              <ul className=" text-[18px] list-disc pl-5">
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

            <h3 className="text-3xl font-semibold mb-2 text-[#232C3B]">
              2. Health Check Endpoint
            </h3>
            <p className="text-[18px] mb-2 text-[#232C3B]">
              Purpose: Verifies the API&apos;s operational status.
            </p>
            <div className="flex flex-col md:flex-row gap-8 items-start mb-2">
              <div className="flex-1 mb-4 md:mb-0">
                <div className=" text-xl font-bold mb-1 text-[#232C3B]">
                  Request
                </div>
                <pre className="text-[18px] bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 text-xs overflow-x-auto font-mono">
                  {`GET /healthz HTTP/1.1
Host: localhost:8000`}
                </pre>
              </div>
              <div className="flex-1">
                <div className=" text-xl font-bold mb-1 text-[#232C3B]">
                  Response
                </div>
                <pre className="text-[18px] bg-[#232C3B] text-[#D3D7DF] rounded-md p-3 text-xs overflow-x-auto font-mono">
                  {`{
  "status": "ok"
}`}
                </pre>
              </div>
            </div>
            <div className="mb-10 text-sm text-[#232C3B]">
              <div className=" text-2xl font-semibold">Notes:</div>
              <ul className="text-[18px] list-disc pl-5">
                <li>Returns a simple JSON object indicating system health.</li>
                <li>Used for monitoring and debugging in production.</li>
              </ul>
            </div>

            <h2 className="md:text-2xl font-bold mt-10 mb-4 text-[#232C3B]">
              Economic Models used in Zeno AI
            </h2>
            <ol className="mb-6 list-decimal pl-5 text-[#232C3B]">
              <li className="mb-2">
                <span className="font-semibold">Trade Forecasting Models</span>
                <ul className=" text-[18px] list-disc pl-6">
                  <li>
                    <span className="font-semibold">ARIMA:</span> Classical
                    time-series model for short- and medium-term forecasting
                    using historical export/import and price data.
                  </li>
                  <li>
                    <span className="font-semibold">Prophet:</span> Handles
                    complex seasonality and trend changes in trade data for
                    robust forecasting.
                  </li>
                  <li>
                    <span className="font-semibold">XGBoost:</span> Machine
                    learning model capturing nonlinear relationships by
                    combining decision trees for accurate trade volume
                    prediction under variable conditions.
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  Scenario Simulation Models
                </span>
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-semibold">
                      Computable General Equilibrium (CGE) Models:
                    </span>{" "}
                    Economy-wide models using social accounting matrices and
                    policy variables to simulate impacts of shocks like tariffs
                    and drought on GDP, welfare, and sector outputs.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Impact Analysis Models</span>
                <ul className="list-disc pl-6">
                  <li>
                    <span className="font-semibold">
                      Structural Econometric Models:
                    </span>{" "}
                    Estimate elasticities and policy effects on trade volumes
                    and assess ripple economic impacts based on scenario
                    outputs.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
