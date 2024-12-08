import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Internship UX/UI Design',
    company_name: 'Oakland University',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2020 - Dec 2020',
  },

     {
    title: "Bachelor's Degree in Graphic Design",
    company_name: 'Oakland University',
    icon: microverse, // Replace with a suitable education-related icon
    iconBg: '#292929',
    date: 'Sep 2016 - May 2020',
    type: 'education',
  },
  {
    title: 'Internship Graphic Designer',
    company_name: 'Ascension Macomb Hospital',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2021 - March 2021',
  },
  {
    title: 'UX/UI design Certification',
    company_name: 'CareerFoundry',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2021 - Oct 2022',
    type: 'education',
  },
  {
    title: 'Zouliful Jewelry',
    company_name: 'Graphic and UX UI designer',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Sep 2023',
  },
    {
    title: 'Full Stack Web Development Certification',
    company_name: 'Michigan State University',
    icon: microverse,
    iconBg: '#292929',
    date: 'May 2024',
    type: 'education',
  },
  {
    title: 'Freelance UX/UI Designer',
    company_name: 'Warren Podiatry',
    icon: dcc,
    iconBg: '#333333',
    date: 'June 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Znooz',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    caseStudyPath: '/projects/ZnoozCaseStudy', // Path to case study page
  },
  {
    id: 'project-2',
    name: 'Abile',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
caseStudyPath: '/projects/AbileCaseStudy', // Path to case study page
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
  },

  
];

export { services, technologies, experiences, projects };
