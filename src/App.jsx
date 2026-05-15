import { useEffect, useRef, useState } from 'react';

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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-low-a0252426a/', icon: 'linkedin', external: true },
  { label: 'Email', href: 'mailto:nickylow2002@gmail.com', icon: 'mail' },
];

const educationItems = [
  {
    school: 'National University of Singapore',
    location: 'Singapore',
    programme: 'Bachelor of Science in Mathematics and Statistics, Minor in Asian Studies',
    period: 'Expected 2027',
    highlights: [
      'Relevant coursework includes probability, linear algebra, multivariable calculus, statistical learning, time series analysis, data structures and algorithms, real analysis, and abstract algebra.',
      'Intended specialisation in pure mathematics with additional interest in statistical modelling, pricing, risk, quantitative strategy, and actuarial applications.',
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
      'A modular research stack for crypto signals, regime filters, and backtest diagnostics.',
    href: 'https://github.com/XtremeFire02/Quantitative-Framework-Version-1',
    cta: 'View repository',
    detailHref: '/quant-signal-research.html',
    detailCta: 'Extra details',
  },
  {
    eyebrow: 'Hackathon Project',
    title: 'Crypto AMM and Carbon Credit DEX',
    stack: 'Python, Web3, XRPL',
    description:
      'A hackathon build combining AMM design, carbon credits, and XRPL infrastructure.',
    href: 'https://github.com/XtremeFire02/fintech-summit',
    cta: 'Open hackathon repo',
  },
  {
    eyebrow: 'Math + Finance',
    title: 'Persistent Homology for Financial Time Series',
    stack: 'Algebraic Topology, Python',
    description:
      'Using topology to study structure and regime shifts in financial time series.',
    href: topologyPdfPath,
    cta: 'Preview PDF',
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

const profileHighlights = ['Mathematics', 'Pricing & Risk', 'Quantitative Strategy', 'Statistics'];

const portraitImagePath = '/portrait.jpg';

const portraitFallbackPath = '/portrait-placeholder.svg';

const topologyPdfPath = '/Alg_Topo_Final_Project.pdf';

const externalLinks = [
  {
    title: 'GitHub',
    description: 'Code, research systems, and public projects.',
    href: 'https://github.com/XtremeFire02',
    icon: 'github',
    cta: 'Open GitHub',
  },
  {
    title: 'Quant Framework Repo',
    description: 'A research framework showing quantitative modelling and backtesting workflow.',
    href: 'https://github.com/XtremeFire02/Quantitative-Framework-Version-1',
    icon: 'folder',
    cta: 'Open repository',
  },
  {
    title: 'Fintech Hackathon Repo',
    description: 'AMM and carbon credit DEX hackathon project.',
    href: 'https://github.com/XtremeFire02/fintech-summit',
    icon: 'code',
    cta: 'Open project',
  },
  {
    title: 'Topology Project PDF',
    description: 'Read the topology write-up directly in the browser.',
    href: topologyPdfPath,
    icon: 'external',
    cta: 'Open PDF',
  },
  {
    title: 'Email',
    description: 'Direct contact for internships and research.',
    href: 'mailto:nickylow2002@gmail.com',
    icon: 'mail',
    cta: 'Send email',
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile and background.',
    href: 'https://www.linkedin.com/in/nicholas-low-a0252426a/',
    icon: 'linkedin',
    cta: 'Open LinkedIn',
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

function handlePortraitError(event) {
  if (event.currentTarget.dataset.fallbackApplied === 'true') {
    return;
  }

  event.currentTarget.dataset.fallbackApplied = 'true';
  event.currentTarget.src = portraitFallbackPath;
}

function runSmokeTests() {
  const requiredIcons = ['github', 'mail', 'external', 'folder', 'briefcase', 'user', 'spark', 'linkedin', 'arrowRight', 'trophy', 'cap', 'code', 'fallback'];

  requiredIcons.forEach((name) => {
    console.assert(typeof iconPaths[name] === 'string' && iconPaths[name].length > 0, `Missing icon path: ${name}`);
  });

  console.assert(primaryNav.length === 6, 'Expected 6 primary nav items');
  console.assert(profileShortcuts.length === 3, 'Expected 3 profile shortcuts');
  console.assert(educationItems.length === 2, 'Expected 2 education items');
  console.assert(experienceItems.length === 2, 'Expected 2 experience items');
  console.assert(projectItems.every((item) => item.cta), 'Expected every project item to have a CTA');
  console.assert(externalLinks.some((link) => link.title === 'Topology Project PDF'), 'Expected topology PDF external link');
  console.assert(leadershipItems.length === 2, 'Expected 2 leadership items');
  console.assert(awardItems.length === 3, 'Expected 3 awards');
  console.assert(skillGroups.length === 4, 'Expected 4 skill groups');
}

if (typeof window !== 'undefined') {
  runSmokeTests();
}

const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">{eyebrow}</p>
      <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.04]">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p> : null}
      <div className="mt-8 md:mt-9">{children}</div>
    </div>
  </section>
);

const NavChip = ({ href, icon, label }) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-base font-medium text-slate-700 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white hover:text-slate-950"
  >
    <Icon name={icon} size={18} />
    <span>{label}</span>
  </a>
);

const ProfileChip = ({ href, icon, label, external = false }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    className="inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-950 px-5 py-2.5 text-base font-medium text-white shadow-[0_18px_40px_-22px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 hover:bg-slate-800"
  >
    <Icon name={icon} size={18} />
    <span>{label}</span>
  </a>
);

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-base font-medium text-slate-700 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.22)] backdrop-blur-md">
    {children}
  </span>
);

const PortraitCard = () => (
  <div className="rounded-[2.5rem] border border-white/70 bg-white/78 p-5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.45)] backdrop-blur-md xl:p-6">
    <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
      <img
        src={portraitImagePath}
        alt="Portrait of Nicholas Low Ying Ting"
        onError={handlePortraitError}
        className="h-[500px] w-full object-cover object-center md:h-[620px] xl:h-[700px]"
      />
    </div>
    <div className="mt-5 rounded-[1.75rem] bg-[linear-gradient(145deg,#0f172a,#1e293b)] p-7 text-white xl:p-8">
      <p className="text-base font-medium uppercase tracking-[0.2em] text-slate-400">Profile</p>
      <h2 className="mt-3 text-3xl font-semibold xl:text-[2rem]">Nicholas Low Ying Ting</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 xl:text-lg xl:leading-9">
        Mathematics and Statistics student interested in pricing, risk, strategy, and mathematically rigorous quantitative work.
      </p>
    </div>
  </div>
);

const DetailCard = ({ title, subtitle, meta, items }) => (
  <div className="h-full rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-8">
    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-base font-medium text-slate-600">{subtitle}</p>
      </div>
      <p className="text-base font-medium text-slate-500">{meta}</p>
    </div>
    <ul className="mt-6 space-y-4 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ eyebrow, title, stack, description, href, cta, detailHref, detailCta }) => {
  const content = (
    <>
      <p className="text-base font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-base font-medium text-slate-500">{stack}</p>
      <p className="mt-5 flex-1 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">{description}</p>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-base font-semibold text-slate-950 transition hover:text-slate-700"
          >
            {cta}
            <Icon name="arrowRight" size={18} className="transition group-hover:translate-x-0.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-base font-semibold text-slate-950">{cta}</span>
        )}
        {detailHref && detailCta ? (
          <a
            href={detailHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 transition hover:text-slate-800"
          >
            {detailCta}
            <Icon name="external" size={16} />
          </a>
        ) : null}
      </div>
    </>
  );

  if (!href) {
    return <div className="flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-8">{content}</div>;
  }

  return (
    <div className="group flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-34px_rgba(15,23,42,0.34)] xl:p-8">
      {content}
    </div>
  );
};

const ExternalLinkCard = ({ title, description, href, icon, cta }) => {
  const classes = 'group flex h-full flex-col rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-34px_rgba(15,23,42,0.34)] xl:p-8';

  if (!href) {
    return (
      <div className={`${classes} opacity-80`}>
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon name={icon} size={24} />
        </div>
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-4 flex-1 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">{description}</p>
        <span className="mt-7 text-base font-semibold text-slate-500">{cta}</span>
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
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 flex-1 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">{description}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-slate-950">
        {cta}
        <Icon name="arrowRight" size={18} className="transition group-hover:translate-x-0.5" />
      </span>
    </a>
  );
};

export default function App() {
  const mobileNavRef = useRef(null);
  const [mobileNavIndicators, setMobileNavIndicators] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

  useEffect(() => {
    const syncMobileNavIndicators = () => {
      const navElement = mobileNavRef.current;

      if (!navElement) {
        return;
      }

      const maxScrollLeft = navElement.scrollWidth - navElement.clientWidth;

      setMobileNavIndicators({
        canScrollLeft: navElement.scrollLeft > 8,
        canScrollRight: maxScrollLeft - navElement.scrollLeft > 8,
      });
    };

    syncMobileNavIndicators();

    const navElement = mobileNavRef.current;

    if (!navElement) {
      return undefined;
    }

    navElement.addEventListener('scroll', syncMobileNavIndicators, { passive: true });
    window.addEventListener('resize', syncMobileNavIndicators);

    return () => {
      navElement.removeEventListener('scroll', syncMobileNavIndicators);
      window.removeEventListener('resize', syncMobileNavIndicators);
    };
  }, []);

  const scrollMobileNav = (direction) => {
    const navElement = mobileNavRef.current;

    if (!navElement) {
      return;
    }

    navElement.scrollBy({
      left: direction === 'left' ? -220 : 220,
      behavior: 'smooth',
    });
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef2ff_0%,#f8fafc_16%,#f8fafc_100%)] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/50 bg-white/65 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 lg:hidden">
          <div className="relative">
            <div
              ref={mobileNavRef}
              className="flex items-center gap-3 overflow-x-auto whitespace-nowrap pr-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <a href="#top" className="shrink-0 pr-1 text-lg font-semibold tracking-tight text-slate-950">
                Nicholas Low Ying Ting
              </a>
              {primaryNav.map((item) => (
                <div key={item.label} className="shrink-0">
                  <NavChip href={item.href} icon={item.icon} label={item.label} />
                </div>
              ))}
              {profileShortcuts.map((item) => (
                <div key={item.label} className="shrink-0">
                  <ProfileChip href={item.href} icon={item.icon} label={item.label} external={item.external} />
                </div>
              ))}
            </div>

            {mobileNavIndicators.canScrollLeft ? (
              <button
                type="button"
                aria-label="Scroll navigation left"
                onClick={() => scrollMobileNav('left')}
                className="absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-700 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.4)] backdrop-blur-md"
              >
                <Icon name="arrowRight" size={16} className="rotate-180" />
              </button>
            ) : null}

            {mobileNavIndicators.canScrollRight ? (
              <button
                type="button"
                aria-label="Scroll navigation right"
                onClick={() => scrollMobileNav('right')}
                className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-700 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.4)] backdrop-blur-md"
              >
                <Icon name="arrowRight" size={16} />
              </button>
            ) : null}
          </div>
        </div>

        <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-8 lg:flex">
          <a href="#top" className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
            Nicholas Low Ying Ting
          </a>
          <div className="flex flex-wrap items-center gap-3.5">
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),_transparent_34%),radial-gradient(circle_at_78%_24%,_rgba(14,165,233,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.1),_transparent_26%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-base font-medium text-slate-700 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-md">
              <Icon name="spark" size={18} />
              Quantitative work · pricing · risk · strategy
            </div>
            <h1 className="max-w-5xl text-6xl font-semibold tracking-tight text-slate-950 md:text-7xl xl:text-[5.6rem] xl:leading-[1.02]">
              Mathematics for quantitative roles.
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600 xl:text-[1.4rem] xl:leading-10">
              NUS Mathematics and Statistics student aiming at pricing, risk, strategy, actuarial, and broader quantitative roles.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#0f172a,#1e293b)] px-7 py-4 text-base font-semibold text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.65)] transition hover:-translate-y-0.5"
              >
                Explore projects
                <Icon name="folder" size={20} />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/72 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.3)] backdrop-blur-md transition hover:-translate-y-0.5"
              >
                View experience
                <Icon name="briefcase" size={20} />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-3.5">
              {profileHighlights.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
            <div className="mt-8 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">
              <p>
                Singapore ·{' '}
                <a href="mailto:nickylow2002@gmail.com" className="font-medium text-slate-950 hover:text-slate-700">
                  nickylow2002@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <PortraitCard />
          </div>
        </div>
      </header>

      <Section
        id="education"
        eyebrow="Education"
        title="Strong mathematical training for quantitative work."
        description="Built on probability, statistics, modelling, and proof-based thinking."
      >
        <div className="grid gap-6 lg:grid-cols-2">
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
        title="Quantitative experience across research and analysis."
        description="Research structure, modelling, and technical rigor."
      >
        <div className="grid gap-6 lg:grid-cols-2">
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
        title="Selected technical work."
        description="Quantitative modelling, systems work, and mathematical applications."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 grid gap-6 xl:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Persistent Homology PDF Preview</h3>
              <p className="mt-2 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">
                Preview the write-up here or open the full PDF.
              </p>
            </div>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">
              <p>Topology methods applied to financial time series.</p>
              <p>Useful for readers who want the full write-up without leaving the site immediately.</p>
            </div>
            <a
              href={topologyPdfPath}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Open full PDF
              <Icon name="external" size={18} />
            </a>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-6">
            <iframe
              title="Persistent Homology for Financial Time Series PDF preview"
              src={`${topologyPdfPath}#view=FitH`}
              className="h-[620px] w-full rounded-[1.5rem] border border-slate-200 lg:h-[720px]"
            />
          </div>
        </div>
      </Section>

      <Section
        id="leadership"
        eyebrow="Leadership"
        title="Leadership beyond the classroom."
        description="Small teams, organisation, and initiative."
      >
        <div className="grid gap-6 lg:grid-cols-2">
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
        title="Selected results."
        description="Competition and hackathon outcomes."
      >
        <div className="rounded-[2rem] border border-white/70 bg-white/78 p-9 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-10">
          <ul className="space-y-5">
            {awardItems.map((item) => (
              <li key={item} className="flex gap-4 text-base leading-8 text-slate-600 xl:text-lg xl:leading-9">
                <span className="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-slate-950" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="Core tools and areas."
        description="Programming, quantitative methods, and applied modelling."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-[2rem] border border-white/70 bg-white/78 p-7 shadow-[0_22px_70px_-36px_rgba(15,23,42,0.28)] backdrop-blur-md xl:p-8">
              <h3 className="text-2xl font-semibold text-slate-950">{group.label}</h3>
              <div className="mt-5 flex flex-wrap gap-3.5">
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
        title="Links that matter."
        description="Profiles, repos, and contact."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {externalLinks.map((link) => (
            <ExternalLinkCard key={link.title} {...link} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Open to quantitative roles across pricing, risk, strategy, and analytics."
        description="If the fit is strong, reach out."
      >
        <div className="rounded-[2rem] bg-[linear-gradient(145deg,#0f172a,#1e293b)] p-9 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.55)] md:p-12">
          <p className="max-w-4xl text-lg leading-9 text-slate-300 xl:text-xl xl:leading-10">
            I work best where mathematics, statistics, and disciplined technical thinking meet real decision-making.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:nickylow2002@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Email me
              <Icon name="mail" size={20} />
            </a>
            <a
              href="https://github.com/XtremeFire02"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Visit GitHub
              <Icon name="github" size={20} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/50 bg-white/40 px-6 py-10 text-center text-base text-slate-500 backdrop-blur-md md:px-8">
        © 2026 Nicholas Low Ying Ting. Personal website.
      </footer>
    </main>
  );
}

