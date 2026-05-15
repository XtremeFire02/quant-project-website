import React from "react";

const fadeUpClass = "transition duration-500 ease-out";

const iconPaths = {
  github: "M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.09 10.09 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
  mail: "M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5.1 8-5.1V7H4Zm16 10V9.7l-7.45 4.75a1 1 0 0 1-1.1 0L4 9.7V17h16Z",
  external: "M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  chart: "M4 19h16v2H4a2 2 0 0 1-2-2V3h2v16Zm2-2V9h3v8H6Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z",
  shield: "M12 2 4 5v6c0 5.1 3.43 9.88 8 11 4.57-1.12 8-5.9 8-11V5l-8-3Zm0 2.2 6 2.25V11c0 4.02-2.52 7.8-6 8.9-3.48-1.1-6-4.88-6-8.9V6.45l6-2.25Zm3.7 5.1 1.4 1.4-5.6 5.6-3.1-3.1 1.4-1.4 1.7 1.7 4.2-4.2Z",
  server: "M4 3h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v5h16V5H4Zm0 7h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Zm0 2v5h16v-5H4Zm2-7h2v2H6V7Zm0 9h2v2H6v-2Z",
  line: "M3 17.5 8.5 12l4 4L21 7.5 19.6 6l-7.1 7.1-4-4L1.6 16 3 17.5Z",
  brain: "M9 3a4 4 0 0 0-4 4c0 .3.03.58.1.85A4.48 4.48 0 0 0 3 11.7c0 1.45.69 2.74 1.76 3.56A4.5 4.5 0 0 0 9 21h1V3H9Zm5 0v18h1a4.5 4.5 0 0 0 4.24-5.74A4.48 4.48 0 0 0 21 11.7c0-1.62-.86-3.04-2.1-3.85.07-.27.1-.55.1-.85a4 4 0 0 0-4-4h-1Zm-5 2h-1a2 2 0 0 0-2 2c0 .31.07.6.2.86l.4.78-.77.43A2.5 2.5 0 0 0 4.5 11.7c0 .95.53 1.82 1.37 2.25l.86.45-.4.88A2.5 2.5 0 0 0 8.6 19H9V5Zm6 0h-1v14h.4a2.5 2.5 0 0 0 2.27-3.72l-.4-.88.86-.45a2.5 2.5 0 0 0 1.37-2.25c0-1.1-.7-2.1-1.83-2.63l-.77-.43.4-.78A2 2 0 0 0 15 5Z",
  database: "M12 2c5 0 9 1.8 9 4v12c0 2.2-4 4-9 4s-9-1.8-9-4V6c0-2.2 4-4 9-4Zm0 2C7.6 4 5 5.36 5 6s2.6 2 7 2 7-1.36 7-2-2.6-2-7-2ZM5 9v3c0 .64 2.6 2 7 2s7-1.36 7-2V9c-1.62.7-4.08 1-7 1S6.62 9.7 5 9Zm0 6v3c0 .64 2.6 2 7 2s7-1.36 7-2v-3c-1.62.7-4.08 1-7 1s-5.38-.3-7-1Z",
  flask: "M9 2h6v2h-1v5.3l5.4 8.65A2.65 2.65 0 0 1 17.15 22H6.85a2.65 2.65 0 0 1-2.25-4.05L10 9.3V4H9V2Zm3 8-5.7 9.02a.65.65 0 0 0 .55.98h10.3a.65.65 0 0 0 .55-.98L12 10Zm0-6v5h0V4Z",
  fallback: "M12 2a10 10 0 1 0 .01 0ZM11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z",
};

const steps = [
  {
    title: "1. Market hypothesis",
    body: "Start from an economically motivated inefficiency, such as volatility regime behaviour, funding pressure, liquidity imbalance, or cross market dislocation.",
  },
  {
    title: "2. Data engineering",
    body: "Collect and clean crypto market data, then standardise it into reusable datasets for research, backtesting, and paper trading.",
  },
  {
    title: "3. Statistical validation",
    body: "Test whether the pattern survives basic robustness checks before turning it into a model or trading rule.",
  },
  {
    title: "4. Backtesting engine",
    body: "Evaluate signal behaviour under realistic assumptions, including fees, slippage, hold period, turnover, and risk controls.",
  },
  {
    title: "5. Execution simulation",
    body: "Move from research to a controlled trading environment where live data can be processed without risking real capital.",
  },
];

const stack = [
  "Python",
  "Pandas",
  "NumPy",
  "Time Series Analysis",
  "Backtesting",
  "Crypto Market Microstructure",
  "Risk Analytics",
  "Paper Trading",
  "GitHub",
  "LLM Assisted Research",
];

const reports = [
  {
    title: "Market Inefficiency Research",
    text: "Sanitised write ups describing the economic intuition, statistical test design, and risk logic behind each research direction.",
  },
  {
    title: "Backtest Reports",
    text: "Performance summaries that separate raw signal behaviour from transaction costs, slippage, and implementation constraints.",
  },
  {
    title: "Engineering Notes",
    text: "Documentation on data pipelines, modular architecture, paper trading design, and future deployment plans.",
  },
];

const roadmap = [
  "Generalise the framework across more markets and regimes.",
  "Add stronger transaction cost and slippage modelling.",
  "Build a dashboard for signal monitoring and paper trading.",
  "Implement systematic risk limits before any real capital deployment.",
  "Publish only sanitised research to protect sensitive alpha.",
];

const capabilities = [
  {
    icon: "database",
    title: "Market data pipeline",
    body: "Collect, clean, and structure market data so that each research idea can be tested on consistent inputs.",
  },
  {
    icon: "flask",
    title: "Hypothesis testing",
    body: "Evaluate whether a proposed inefficiency has statistical support before converting it into a strategy.",
  },
  {
    icon: "chart",
    title: "Backtest analytics",
    body: "Measure performance with attention to drawdown, turnover, cost sensitivity, and regime dependence.",
  },
  {
    icon: "shield",
    title: "Risk controls",
    body: "Design risk constraints before deployment, including exposure limits, stop conditions, and capital allocation logic.",
  },
  {
    icon: "server",
    title: "Paper trading environment",
    body: "Move from static backtests to live simulation using real market data without risking capital.",
  },
  {
    icon: "brain",
    title: "LLM assisted workflow",
    body: "Use language models to speed up documentation, code review, experiment planning, and research iteration.",
  },
];

function Icon({ name = "fallback", size = 22, className = "" }) {
  const path = iconPaths[name] || iconPaths.fallback;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

function runSmokeTests() {
  const requiredIcons = ["github", "mail", "external", "chart", "shield", "server", "line", "brain", "database", "flask", "fallback"];

  requiredIcons.forEach((name) => {
    const path = iconPaths[name];
    console.assert(typeof path === "string" && path.length > 0, `Missing icon path: ${name}`);
  });

  console.assert(Array.isArray(steps), "Expected steps to be an array");
  console.assert(steps.length === 5, "Expected 5 workflow steps");
  console.assert(steps.every((step) => step.title && step.body), "Expected every workflow step to have a title and body");

  console.assert(Array.isArray(stack), "Expected stack to be an array");
  console.assert(stack.includes("Python"), "Expected Python in stack");

  console.assert(Array.isArray(reports), "Expected reports to be an array");
  console.assert(reports.length === 3, "Expected 3 research report cards");

  console.assert(Array.isArray(roadmap), "Expected roadmap to be an array");
  console.assert(roadmap.length >= 5, "Expected at least 5 roadmap items");

  console.assert(Array.isArray(capabilities), "Expected capabilities to be an array");
  console.assert(capabilities.length === 6, "Expected 6 capability cards");
  console.assert(capabilities.every((item) => iconPaths[item.icon]), "Expected every capability card to use a valid icon");
}

if (typeof window !== "undefined") {
  runSmokeTests();
}

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-20">
    <div className={fadeUpClass}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
    {children}
  </span>
);

const Card = ({ icon, title, children }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
      <Icon name={icon} size={22} />
    </div>
    <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{children}</p>
  </div>
);

const Metric = ({ label, value, note }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <p className="text-sm font-medium text-slate-500">{label}</p>
    <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
    <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p>
  </div>
);

export default function QuantProjectWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight text-slate-950">Nicholas Low</a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#project" className="hover:text-slate-950">Project</a>
            <a href="#workflow" className="hover:text-slate-950">Workflow</a>
            <a href="#research" className="hover:text-slate-950">Research</a>
            <a href="#roadmap" className="hover:text-slate-950">Roadmap</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(100,116,139,0.18),_transparent_30%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
          <div className={fadeUpClass}>
            <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Independent quant research and trading systems project
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Building a research first crypto trading framework.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              I am developing a modular quantitative framework for identifying market inefficiencies, validating signals statistically, and moving research ideas into controlled backtesting and paper trading environments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/XtremeFire02/Quantitative-Framework-Version-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                View GitHub <Icon name="github" size={18} />
              </a>
              <a
                href="#research"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                See research direction <Icon name="external" size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>Quant Research</Pill>
              <Pill>Quant Development</Pill>
              <Pill>Crypto Markets</Pill>
              <Pill>Risk First Design</Pill>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Framework status</p>
                  <h2 className="mt-1 text-2xl font-semibold">Research prototype</h2>
                </div>
                <Icon name="line" className="text-slate-300" size={34} />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">Core principle</p>
                  <p className="mt-2 text-xl font-semibold">Hypothesis before model.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Focus</p>
                    <p className="mt-2 font-semibold">BTCUSDT Perpetuals</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-slate-400">Mode</p>
                    <p className="mt-2 font-semibold">Backtest to paper</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">Disclosure stance</p>
                  <p className="mt-2 leading-6 text-slate-100">Public materials explain the framework, validation process, and engineering design without revealing exploitable trading rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section id="project" eyebrow="Project" title="A full stack quant project, not just a backtest.">
        <div className="grid gap-5 md:grid-cols-3">
          <Metric label="Research layer" value="Signals" note="Develops hypotheses from market structure rather than fitting models blindly." />
          <Metric label="Engineering layer" value="Framework" note="Turns research logic into reusable, modular, and extensible software components." />
          <Metric label="Trading layer" value="Simulation" note="Tests whether a signal can survive fees, slippage, turnover, and operational constraints." />
        </div>
        <p className="mt-8 max-w-4xl text-base leading-8 text-slate-600">
          The project is designed around one main idea: a trading model is only useful if the underlying market inefficiency is real, measurable, and implementable. The framework therefore separates research, data processing, backtesting, risk analysis, and execution simulation into distinct layers.
        </p>
      </Section>

      <Section id="capabilities" eyebrow="Capabilities" title="What the framework is being built to do.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title}>{item.body}</Card>
          ))}
        </div>
      </Section>

      <Section id="workflow" eyebrow="Workflow" title="The research process follows a hedge fund style pipeline.">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {steps.map((step) => (
            <div key={step.title} className="grid gap-4 border-b border-slate-200 p-6 last:border-b-0 md:grid-cols-[0.35fr_1fr] md:p-8">
              <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="research" eyebrow="Research" title="Public research should reveal process, not alpha.">
        <div className="grid gap-5 md:grid-cols-3">
          {reports.map((report) => (
            <div key={report.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{report.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{report.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">Sanitised disclosure policy</h3>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
            The website should show enough to prove technical depth, but not enough to let someone replicate the edge. Public write ups should focus on motivation, methodology, system architecture, robustness checks, and lessons learned. Sensitive details such as exact thresholds, signal transformations, parameter choices, and execution rules should remain private.
          </p>
        </div>
      </Section>

      <Section id="stack" eyebrow="Stack" title="The project sits at the intersection of mathematics, statistics, software, and markets.">
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </Section>

      <Section id="roadmap" eyebrow="Roadmap" title="Next steps toward a more professional system.">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <ul className="space-y-4">
            {roadmap.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to quant research, quant development, trading, and data driven finance roles.">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            I am interested in roles where mathematical thinking, statistical validation, market intuition, and engineering discipline come together. This project is my attempt to build that skill set from first principles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:nickylow2002@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Email me <Icon name="mail" size={18} />
            </a>
            <a
              href="https://github.com/XtremeFire02/Quantitative-Framework-Version-1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Project repository <Icon name="github" size={18} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Nicholas Low. Quantitative research project website.
      </footer>
    </main>
  );
}
