export const projects = [
  {
    slug: 'terminal-portfolio',
    number: '01',
    title: 'Terminal Portfolio',
    eyebrow: 'This website!',
    summary: 'A portfolio experiment that turns personality into interface.',
    description:
      'A portfolio experiment that turns personality into interface. It is the project that ties together the terminal-inspired identity, the modular structure, and the black-and-white shell used throughout the site.',
    longOne:
      'This build focuses on presentation as much as it does on content. The aim is to make the layout feel intentional and memorable while still being easy to update as the portfolio grows.',
    longTwo:
      'The structure stays flexible enough for future screenshots, expanded work stories, and any extra pages Aftab wants to add later without rethinking the core system.',
    filters: ['Web Development', 'Personal Project'],
    tags: ['Portfolio', 'UI System', 'React'],
    liveUrl: null,
    toneA: '#111111',
    toneB: '#6f6f6f',
  },
  {
    slug: 'mercury',
    number: '02',
    title: 'Mercury',
    eyebrow: 'A decentralized, end-to-end encrypted mesh messenger.',
    summary:
      'Peers find each other, encrypt everything with Curve25519, and relay messages across a multi-hop mesh.',
    description:
      'No central server, no central registry — just peers finding each other, encrypting everything with Curve25519, and relaying messages across a multi-hop mesh. Built in a chaos-engineering layer to see how it holds up when the network misbehaves, plus a live topology dashboard to watch it happen.',
    longOne:
      'Mercury is a systems-heavy project built around resilience and privacy. The design challenge was as much about building a trustworthy network flow as it was about making the network state visible enough to debug and understand.',
    longTwo:
      'The topology dashboard and chaos-testing layer give the project a practical edge. They turn an abstract encrypted mesh into something you can inspect, stress, and learn from while the system is running.',
    filters: ['Systems', 'Security'],
    tags: ['Mesh Networking', 'Encryption', 'Distributed Systems'],
    liveUrl: null,
    toneA: '#13061f',
    toneB: '#8f4cff',
  },
  {
    slug: 'sentry',
    number: '03',
    title: 'Sentry',
    eyebrow: 'A behavioral biometric authentication system.',
    summary:
      'It learns how you type, move your mouse, and scroll — then quietly locks the workstation if someone else starts using it.',
    description:
      'Instead of a password, it learns how you type, move your mouse, and scroll — and quietly locks the workstation if someone else starts using it. Built while mentoring a group of engineering students through their final-year project, from architecture to the anomaly-detection pipeline.',
    longOne:
      'Sentry combines user behavior modelling with a practical workstation workflow. The project balances detection logic, data collection, and an interface that makes the authentication state easy to understand.',
    longTwo:
      'Mentoring was part of the build, so the project also became a teaching exercise. That makes it a good example of technically dense work that still needs to be explained clearly.',
    filters: ['Security', 'Machine Learning'],
    tags: ['Behavioral Biometrics', 'ML', 'Authentication'],
    liveUrl: null,
    toneA: '#08120e',
    toneB: '#31b06f',
  },
  {
    slug: 'araknid',
    number: '04',
    title: 'Araknid',
    eyebrow: 'Visual block-based coding platform for C.',
    summary: 'A more approachable way to organize logic and learn by building.',
    description:
      'A more approachable way to organize logic and learn by building — drag-and-drop blocks that compile down to real, runnable C.',
    longOne:
      'Araknid is a learning-first interface that lowers the barrier to working with C. The visual blocks are there to make the logic easier to compose before it ever becomes code.',
    longTwo:
      'The project sits between education and tooling, which makes it a useful pattern for future teaching products. It also gives the portfolio a playful but still technical example of interaction design.',
    filters: ['Education', 'Web Development'],
    tags: ['Interactive Learning', 'C', 'Visual Programming'],
    liveUrl: null,
    toneA: '#1d0f0b',
    toneB: '#d36e2f',
  },
  {
    slug: 'retail-management-system',
    number: '05',
    title: 'Retail Management System',
    eyebrow: 'A full-stack point-of-sale and operations platform.',
    summary: 'Inventory, sales, finance, loyalty customers, staff — all in one dashboard.',
    description:
      'Inventory, sales, finance, loyalty customers, staff — all in one dashboard, with a full audit trail of everything that happens in the system.',
    longOne:
      'This project sits in the space between internal operations and customer-facing control. The interface needs to carry a lot of detail without becoming noisy or difficult to scan.',
    longTwo:
      'The audit trail and dashboard structure make the system more useful than a generic point-of-sale layout. It is meant to feel practical first, with the right amount of density for day-to-day work.',
    filters: ['Web Development', 'Business Tools'],
    tags: ['Operations', 'Dashboard', 'Retail'],
    liveUrl: null,
    toneA: '#151515',
    toneB: '#7e7e7e',
  },
  {
    slug: 'high-school-robotics-bootcamp',
    number: '06',
    title: 'High School Robotics Bootcamp',
    eyebrow: 'Arduino-based learning experience.',
    summary: 'Hands-on teaching for students who wanted to make hardware do something useful.',
    description:
      'Hands-on teaching for students who wanted to make hardware do something useful.',
    longOne:
      'The bootcamp combines hardware, code, and demonstration into a learning format that is easier to follow than a pure lecture. It keeps the focus on making something observable and practical.',
    longTwo:
      'This is also the clearest sign of the teaching side of the practice. It turns the portfolio into more than a list of software products and shows the range of ways the work can be delivered.',
    filters: ['Education', 'Hardware'],
    tags: ['Arduino', 'Teaching', 'Robotics'],
    liveUrl: null,
    toneA: '#1c1d22',
    toneB: '#f1d15c',
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const portfolioTags = Array.from(new Set(projects.flatMap((project) => project.filters)));
