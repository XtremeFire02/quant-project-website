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
  fallback: 'M12 2a10 10 0 1 0 .01 0ZM11 6h2v8h-2V6Zm0 10h2v2h-2v-2Z',
};

const primaryNav = [
  { label: 'Projects', href: '#projects', icon: 'folder' },
  { label: 'Experience', href: '#experience', icon: 'briefcase' },
  { label: 'About', href: '#about', icon: 'user' },
  { label: 'Links', href: '#links', icon: 'external' },
  { label: 'Contact', href: '#contact', icon: 'mail' },
];

const profileShortcuts = [
  { label: 'GitHub', href: 'https://github.com/XtremeFire02', icon: 'github', external: true },
  { label: 'LinkedIn', href: '#links', icon: 'linkedin' },
];

const quickAccessCards = [
  {
    icon: 'folder',
    title: 'Browse projects',
    description: 'Jump straight to featured builds, case studies, and ongoing work.',
    href: '#projects',
  },
  {
    icon: 'briefcase',
    title: 'See experience',
    description: 'Scan roles, leadership, and the kind of work you want to be known for.',
    href: '#experience',
  },
  {
    icon: 'external',
    title: 'Open external links',
    description: 'GitHub, LinkedIn, and other profiles are grouped in one place.',
    href: '#links',
  },
  {
    icon: 'mail',
    title: 'Get in touch',
    description: 'Make it easy for recruiters, collaborators, and clients to reach out.',
    href: '#contact',
  },
];

const featuredProjects = [
  {
    eyebrow: 'Featured project',
    title: 'Quantitative Framework',
    description:
      'Your quant project still has a home here, but now it sits inside a broader personal site instead of dominating the whole landing page.',
    href: 'https://github.com/XtremeFire02/Quantitative-Framework-Version-1',
    cta: 'View repository',
  },
  {
    eyebrow: 'Add more work',
    title: 'Project shelf ready',
    description:
      'This slot can be reused for web apps, data tools, hackathon work, coursework, or anything else you want visitors to discover.',
    href: '#contact',
    cta: 'Plan next showcase',
  },
  {
    eyebrow: 'Flexible layout',
    title: 'Case study friendly',
    description:
      'Each card is intentionally simple, so you can swap in new projects without redesigning the page structure again.',
    href: '#about',
    cta: 'See site structure',
  },
];

const experienceItems = [
  {
    label: 'Work experience',
    title: 'Add roles people can scan quickly',
    body:
      'Use short entries for internships, part-time roles, freelance work, or research positions. Keep each one focused on responsibility and measurable impact.',
  },
  {
    label: 'Leadership',
    title: 'Highlight initiative beyond coursework',
    body:
      'This is a good place for student clubs, team projects, mentoring, or any role where you organised, led, or communicated clearly.',
  },
  {
    label: 'Strengths',
    title: 'Show what kind of teammate you are',
    body:
      'Pair technical depth with problem solving, ownership, and communication so visitors understand both what you build and how you work.',
  },
];

const skillPills = ['Quant Research', 'Frontend', 'Data Analysis', 'Python', 'React', 'Problem Solving', 'Technical Writing'];

const externalLinks = [
  {
    title: 'GitHub',
    description: 'Public code, experiments, and project repos.',
    href: 'https://github.com/XtremeFire02',
    icon: 'github',
    cta: 'Open GitHub',
  },
  {
    title: 'Email',
    description: 'Best for direct contact, collaboration, or opportunities.',
    href: 'mailto:nickylow2002@gmail.com',
    icon: 'mail',
    cta: 'Send email',
  },
  {
    title: 'LinkedIn',
    description: 'Add your LinkedIn profile URL here when you are ready.',
    icon: 'linkedin',
    cta: 'Profile link pending',
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
  const requiredIcons = ['github', 'mail', 'external', 'folder', 'briefcase', 'user', 'spark', 'linkedin', 'arrowRight', 'fallback'];

  requiredIcons.forEach((name) => {
    console.assert(typeof iconPaths[name] === 'string' && iconPaths[name].length > 0, `Missing icon path: ${name}`);
  });

  console.assert(primaryNav.length >= 5, 'Expected at least 5 primary nav items');
  console.assert(profileShortcuts.length === 2, 'Expected 2 profile shortcuts');
  console.assert(quickAccessCards.length === 4, 'Expected 4 quick access cards');
  console.assert(featuredProjects.length === 3, 'Expected 3 project cards');
  console.assert(experienceItems.length === 3, 'Expected 3 experience items');
  console.assert(skillPills.includes('React'), 'Expected React to be listed in skills');
  console.assert(externalLinks.some((link) => link.title === 'GitHub'), 'Expected GitHub external link');
}

if (typeof window !== 'undefined') {
  runSmokeTests();
}

const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-6 py-20">
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{description}</p> : null}
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

const ProjectCard = ({ eyebrow, title, description, href, cta }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noreferrer' : undefined}
    className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  >
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
    <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{description}</p>
    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
      {cta}
      <Icon name="arrowRight" size={16} className="transition group-hover:translate-x-0.5" />
    </span>
  </a>
);

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
            Nicholas Low
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
              General portfolio hub
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              One homepage for projects, experience, and links.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              This landing page now works like a central directory: visitors can jump straight to the section they care about instead of landing on a single project-specific story.
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
                href="#links"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
              >
                Open external links
                <Icon name="external" size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {skillPills.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
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
        id="about"
        eyebrow="About"
        title="A cleaner structure for a more general personal website."
        description="Instead of centering everything on one quant project, this layout gives each area its own destination. You can keep the quant work featured while leaving room for experience, other projects, and external profiles."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">What changed</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">Hub first</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Visitors can now scan the site from the top nav and choose the section they want immediately.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Project positioning</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">Still featured</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Your quant framework remains visible, but as one strong project inside a broader portfolio.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Future proofing</p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">Easy to expand</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              You can add more cards and update section text without redesigning the whole page again.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Featured work lives here."
        description="Use this section for selected projects, case studies, and anything you want people to click into first."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Work Experience"
        title="A section visitors can scan in under a minute."
        description="This area is ready for internships, leadership, part-time work, or research roles once you want to add those details."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {experienceItems.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="links"
        eyebrow="External Links"
        title="Put the important profiles in one obvious place."
        description="GitHub is wired up already. LinkedIn has a dedicated slot so you can drop in the real profile URL later."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {externalLinks.map((link) => (
            <ExternalLinkCard key={link.title} {...link} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Make the next click easy."
        description="Keep the closing section simple: one short message and a few direct ways to continue the conversation."
      >
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            If someone likes your work, they should not have to search for how to reach you. This section keeps the call to action clear and easy to act on.
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
        © 2026 Nicholas Low. Personal website hub.
      </footer>
    </main>
  );
}
