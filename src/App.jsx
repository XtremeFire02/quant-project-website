const iconPaths = {
  github:
    'M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.09 10.09 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z',
  mail:
    'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5.1 8-5.1V7H4Zm16 10V9.7l-7.45 4.75a1 1 0 0 1-1.1 0L4 9.7V17h16Z',
  external:
    'M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
  folder:
    'M3 6a2 2 0 0 1 2-2h4.2a2 2 0 0 1 1.4.57l1.24 1.23A2 2 0 0 0 13.24 6H19a2 2 0 0 1 2 2v1H3V6Zm0 5h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z',
  briefcase:
    'M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H3V8a2 2 0 0 1 2-2h4V4Zm2 0v2h2V4h-2Zm10 9v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5h6v1h6v-1h6Z',
  user: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 9a8 8 0 1 1 16 0H4Z',
  spark:
    'm12 2 1.76 5.24L19 9l-5.24 1.76L12 16l-1.76-5.24L5 9l5.24-1.76L12 2Zm7 13 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM4 14l.75 2.25L7 17l-2.25.75L4 20l-.75-2.25L1 17l2.25-.75L4 14Z',
  linkedin:
    'M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20 12.73c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.37 1.86V8.5H8.94c.04.67 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.54V20H20v-7.27Z',
  arrowRight: 'M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z',
  trophy:
    'M7 4V2h10v2h3v4a5 5 0 0 1-5 5h-.1A5.98 5.98 0 0 1 13 16.92V20h4v2H7v-2h4v-3.08A5.98 5.98 0 0 1 9.1 13H9a5 5 0 0 1-5-5V4h3Zm10 2v2a3 3 0 0 0 3-3V6h-3ZM7 6H4v2a3 3 0 0 0 3 3V6Z',
  cap:
    'M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 9.72L5.48 9 12 5.45 18.52 9 12 12.72ZM5 12.27V16l7 3.82L19 16v-3.73l-7 3.82-7-3.82Z',
  code:
    'M8.7 16.6 3.1 11l5.6-5.6L10.1 6.8 5.9 11l4.2 4.2-1.4 1.4Zm6.6 0-1.4-1.4 4.2-4.2-4.2-4.2 1.4-1.4 5.6 5.6-5.6 5.6ZM10.7 19l2.6-16 2 .3-2.6 16-2-.3Z',
  fallback: 'M12 2a10 10 0 1 0 .01 0ZM11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z',
};

const primaryNav = [
  { label: 'Education', href: '#education', icon: 'cap' },
  { label: 'Experience', href: '#experience', icon: 'briefcase' },
  { label: 'Projects', href: '#projects', icon: 'folder' },
  { label: 'Leadership', href: '#leadership', icon: 'user' },
  { label: 'Awards', href: '#awards', icon: 'trophy' },
  { label: 'Links', href: '#links', icon: 'external' },
];

const profileShortcuts = [
  { label: 'GitHub', href: 'https://github.com/XtremeFire02', icon: 'github', external: true },
  { label: 'Email', href: 'mailto:nickylow2002@gmail.com', icon: 'mail' },
];

const quickAccessCards = [
  {
    icon: 'cap',
    title: 'Education',
    description: 'Mathematics and statistics at NUS, plus advanced exchange coursework in algebraic topology, PDEs, and stochastic processes.',
    href: '#education',
  },
  {
    icon: 'briefcase',
    title: 'Experience',
    description: 'Quant trading internship work and independent undergraduate research with strong emphasis on mathematical rigor.',
    href: '#experience',
  },
  {
    icon: 'folder',
    title: 'Projects',
    description: 'Quant research systems, DeFi hackathon builds, and mathematical finance work grounded in real technical depth.',
    href: '#projects',
  },
  {
    icon: 'trophy',
    title: 'Awards',
    description: 'Competition and hackathon results that reinforce both mathematical and applied problem-solving ability.',
    href: '#awards',
  },
];

const educationItems = [
  {
    school: 'National University of Singapore',
    location: 'Singapore',
    programme: 'Bachelor of Science in Mathematics and Statistics, Minor in Asian Studies',
    period: 'Expected 2027',
    highlights: [
      'Relevant coursework includes probability, linear algebra, multivariable calculus, statistical learning, time series analysis, data structures and algorithms, real analysis, and abstract algebra.',
      'Intended specialisation in pure mathematics with additional interest in quantitative finance, market microstructure, statistical modelling, and algorithmic trading.',
    ],
  },
  {
    school: 'Case Western Reserve University',
    location: 'Cleveland, Ohio',
    programme: 'Exchange Programme',
    period: '2026',
    highlights: [
      'Completed advanced mathematics coursework including graduate-level modules in partial differential equations, algebraic topology, and stochastic processes.',
      'Built project work connecting mathematical theory to financial modelling, including Black-Scholes-type PDE methods and persistent homology for time series analysis.',
    ],
  },
];

const experienceItems = [
  {
    role: 'Quantitative Trading Intern',
    organisation: 'Infrasingularity',
    location: 'Singapore',
    period: '2025',
    bullets: [
      'Conducted quantitative research on trading signals, regime filters, and market behaviour using Python-based data analysis.',
      'Built and evaluated systematic trading ideas through exploratory research, feature construction, backtesting, and performance review.',
      'Worked with financial time series data and studied signal robustness across changing market conditions.',
      'Gained practical exposure to the quantitative research workflow from hypothesis formation to strategy testing.',
    ],
  },
  {
    role: 'Undergraduate Researcher',
    organisation: 'NUS Undergraduate Research Opportunities Programme in Science',
    location: 'Singapore',
    period: '2025',
    bullets: [
      'Conducted independent mathematical research with emphasis on rigorous problem formulation and structured technical writing.',
      'Reviewed academic literature, developed research direction, and refined arguments into a coherent research deliverable.',
      'Strengthened the ability to work independently on open-ended technical problems requiring abstraction, precision, and proof-based reasoning.',
    ],
  },
];

const projectItems = [
  {
    eyebrow: 'Quant Research',
    title: 'Quantitative Trading Research Framework',
    stack: 'Python, Time Series, Backtesting',
    description:
      'Built a modular framework for studying crypto market inefficiencies, focused on BTCUSDT perpetual futures, volatility-related signals, hypothesis testing, regime filters, and performance diagnostics.',
    href: 'https://github.com/XtremeFire02/Quantitative-Framework-Version-1',
    cta: 'View repository',
  },
  {
    eyebrow: 'Hackathon Project',
    title: 'Crypto AMM and Carbon Credit DEX',
    stack: 'Python, Web3, XRPL',
    description:
      'Developed a carbon-credit DEX concept using AMM logic on XRPL-related infrastructure and presented it at NUS Fintech Summit 2025, where the team won the BGA Bounty Top 3 award.',
    href: 'https://github.com/XtremeFire02/fintech-summit',
    cta: 'Open hackathon repo',
  },
  {
    eyebrow: 'Math + Finance',
    title: 'Persistent Homology for Financial Time Series',
    stack: 'Algebraic Topology, Python',
    description:
      'Studied Vietoris-Rips filtrations, chain complexes, homology maps, and barcodes to interpret persistent features in financial time series as potential indicators of regime structure.',
    cta: 'Project summary on page',
  },
];

const leadershipItems = [
  {
    title: 'Captain, Running Buddies Interest Group',
    organisation: 'NUS Ridge View Residential College',
    bullets: [
      'Led a casual running group aimed at improving student wellbeing, reducing exam stress, and strengthening residential college community.',
      'Planned weekly running sessions, coordinated participants, and managed club activities and budget allocation.',
    ],
  },
  {
    title: 'Vice President, Strategy Games Club',
    organisation: 'Catholic Junior College',
    bullets: ['Organised club activities and supported the development of strategic thinking, planning, and problem solving among members.'],
  },
];

const awardItems = [
  'BGA Bounty Award, Top 3, NUS Fintech Summit 2025.',
  'Merit Award, International Math Modelling Competition, 2020.',
  'Credit Award, Australian Mathematics Competition, 2020.',
];

const skillGroups = [
  {
    label: 'Programming',
    items: ['Python', 'Java', 'C++', 'R', 'LaTeX', 'Typst'],
  },
  {
    label: 'Quantitative',
    items: ['Probability', 'Statistics', 'Time Series Analysis', 'Backtesting', 'Hypothesis Testing', 'Market Microstructure'],
  },
  {
    label: 'Data and Tools',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Git', 'Excel', 'Data Cleaning', 'Research Automation'],
  },
  {
    label: 'Finance and Crypto',
    items: ['Perpetual Futures', 'AMMs', 'Funding Rates', 'Slippage', 'Order Books', 'Volatility Signals', 'DeFi'],
  },
];

const profileHighlights = ['Mathematics & Statistics', 'Quant Research', 'Algorithmic Trading', 'Topological Data Analysis', 'DeFi', 'Technical Writing'];

const externalLinks = [
  {
    title: 'GitHub',
    description: 'Main profile for public repositories, research systems, and project code.',
    href: 'https://github.com/XtremeFire02',
    icon: 'github',
    cta: 'Open GitHub',
  },
  {
    title: 'Quant Framework Repo',
    description: 'Quantitative trading research framework focused on crypto market inefficiencies and backtesting.',
    href: 'https://github.com/XtremeFire02/Quantitative-Framework-Version-1',
    icon: 'folder',
    cta: 'Open repository',
  },
  {
    title: 'Fintech Hackathon Repo',
    description: 'Crypto AMM and carbon credit DEX project from the NUS Fintech Summit hackathon.',
    href: 'https://github.com/XtremeFire02/fintech-summit',
    icon: 'code',
    cta: 'Open project',
  },
  {
    title: 'Email',
    description: 'Direct contact for internships, research opportunities, and collaborations.',
    href: 'mailto:nickylow2002@gmail.com',
    icon: 'mail',
    cta: 'Send email',
  },
  {
    title: 'LinkedIn',
    description: 'Resume includes a LinkedIn placeholder, so this slot is ready once the final profile URL is available.',
    icon: 'linkedin',
    cta: 'Add LinkedIn URL',
  },
];

function Icon({ name = 'fallback', size = 20, className = '' }) {
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
  const requiredIcons = ['github', 'mail', 'external', 'folder', 'briefcase', 'user', 'spark', 'linkedin', 'arrowRight', 'trophy', 'cap', 'code', 'fallback'];

  requiredIcons.forEach((name) => {
    console.assert(typeof iconPaths[name] === 'string' && iconPaths[name].length > 0, `Missing icon path: ${name}`);
  });

  console.assert(primaryNav.length === 6, 'Expected 6 primary nav items');
  console.assert(profileShortcuts.length === 2, 'Expected 2 profile shortcuts');
  console.assert(educationItems.length === 2, 'Expected 2 education items');
  console.assert(experienceItems.length === 2, 'Expected 2 experience items');
  console.assert(projectItems.length === 3, 'Expected 3 project items');
  console.assert(leadershipItems.length === 2, 'Expected 2 leadership items');
  console.assert(awardItems.length === 3, 'Expected 3 awards');
  console.assert(skillGroups.length === 4, 'Expected 4 skill groups');
}

if (typeof window !== 'undefined') {
  runSmokeTests();
}

const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-20">
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{description}</p> : null}
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const NavChip = ({ href, icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
  >
    <Icon name={icon} size={16} />
    <span>{label}</span>
  </a>
);

const ProfileChip = ({ href, icon, label, external = false }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
  >
    <Icon name={icon} size={16} />
    <span>{label}</span>
  </a>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
    {children}
  </span>
);

const SurfaceCard = ({ icon, title, description, href }) => (
  <a
    href={href}
    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  >
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
      <Icon name={icon} size={22} />
    </div>
    <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
      Open section
      <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
    </span>
  </a>
);

const DetailCard = ({ title, subtitle, meta, items }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
      <div>
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-1 text-sm font-medium text-slate-600">{subtitle}</p>
      </div>
      <p className="text-sm font-medium text-slate-500">{meta}</p>
    </div>
    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ eyebrow, title, stack, description, href, cta }) => {
  const content = (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm font-medium text-slate-500">{stack}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
        {cta}
        {href ? <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" /> : null}
      </span>
    </>
  );

  if (!href) {
    return <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {content}
    </a>
  );
};

const ExternalLinkCard = ({ title, description, href, icon, cta }) => {
  const classes = 'group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md';

  if (!href) {
    return (
      <div className={`${classes} opacity-80`}>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon name={icon} size={22} />
        </div>
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
        <span className="mt-6 text-sm font-semibold text-slate-500">{cta}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={classes}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon name={icon} size={22} />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
        {cta}
        <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
      </span>
    </a>
  );
};

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" className="text-lg font-semibold tracking-tight text-slate-950">
            Nicholas Low Ying Ting
          </a>
          <div className="flex flex-wrap items-center gap-3">
            {primaryNav.map((item) => (
              <NavChip key={item.label} href={item.href} icon={item.icon} label={item.label} />
            ))}
            {profileShortcuts.map((item) => (
              <ProfileChip key={item.label} href={item.href} icon={item.icon} label={item.label} external={item.external} />
            ))}
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <Icon name="spark" size={16} />
              Mathematics, statistics, and quantitative research
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Building depth across mathematics, quant research, and technical projects.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
              I am a Mathematics and Statistics student at the National University of Singapore with interests in pure mathematics, quantitative finance, market microstructure, statistical modelling, and algorithmic trading.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Explore projects
                <Icon name="folder" size={18} />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                View experience
                <Icon name="briefcase" size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {profileHighlights.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
            <div className="mt-8 text-sm leading-7 text-slate-600">
              <p>
                Singapore ·{' '}
                <a href="mailto:nickylow2002@gmail.com" className="font-medium text-slate-950 hover:text-slate-700">
                  nickylow2002@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickAccessCards.map((card) => (
              <SurfaceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </header>

      <Section
        id="education"
        eyebrow="Education"
        title="Mathematics training with both theoretical depth and applied finance interest."
        description="The academic path combines rigorous mathematical foundations with growing focus on quantitative finance, time series analysis, and market-oriented modelling."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item) => (
            <DetailCard
              key={item.school}
              title={item.school}
              subtitle={`${item.programme} · ${item.location}`}
              meta={item.period}
              items={item.highlights}
            />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Early experience across quantitative trading research and independent mathematics research."
        description="These roles reflect a mix of applied market research and formal mathematical thinking, both of which shape how I approach technical work."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {experienceItems.map((item) => (
            <DetailCard
              key={item.role}
              title={item.role}
              subtitle={`${item.organisation} · ${item.location}`}
              meta={item.period}
              items={item.bullets}
            />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Projects spanning quant research, DeFi, and mathematical finance."
        description="The project work reflects both technical implementation and mathematical curiosity, from systematic trading research to market design and topological methods for financial data."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {projectItems.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section
        id="leadership"
        eyebrow="Leadership"
        title="Leadership experience centered on organisation, community, and structured thinking."
        description="Outside technical work, these roles reflect initiative, communication, and the ability to organise people around a shared activity or interest."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {leadershipItems.map((item) => (
            <DetailCard
              key={item.title}
              title={item.title}
              subtitle={item.organisation}
              meta="Leadership"
              items={item.bullets}
            />
          ))}
        </div>
      </Section>

      <Section
        id="awards"
        eyebrow="Awards"
        title="Competition and hackathon results that support the broader story."
        description="These awards reflect a combination of mathematical ability, modelling strength, and applied execution in competitive settings."
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <ul className="space-y-4">
            {awardItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-950" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="Technical tools and subject areas built through coursework, research, and projects."
        description="The mix here reflects programming ability, quantitative training, research tooling, and familiarity with financial and crypto market structure."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Pill key={`${group.label}-${item}`}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="links"
        eyebrow="External Links"
        title="Repositories and contact points in one place."
        description="The site now points directly to the projects mentioned in the resume, with a placeholder left for the final LinkedIn profile URL."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {externalLinks.map((link) => (
            <ExternalLinkCard key={link.title} {...link} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Open to quantitative research, trading, and mathematically rigorous technical work."
        description="If the fit is in quant research, quantitative development, market data work, or mathematically driven engineering, I would be glad to connect."
      >
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            The strongest parts of my profile sit at the intersection of mathematics, finance, and disciplined technical work. This site is meant to make that trajectory easy to see.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:nickylow2002@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Email me
              <Icon name="mail" size={18} />
            </a>
            <a
              href="https://github.com/XtremeFire02"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Visit GitHub
              <Icon name="github" size={18} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Nicholas Low Ying Ting. Personal website.
      </footer>
    </main>
  );
}

