/* eslint-disable simple-import-sort/imports */

import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import FacebookIcon from '../components/Icon/FacebookIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import FacebookIcon from '../components/Icon/FacebookIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Pablo Muruaga OnLine Resume',
  description: "Example site built with Tim Baker's react resume template, updated by Pablo Muruaga showing his own information and professional life resume.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Pablo Muruaga.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a based in Frías, small town from Argentina, in the province of Santiago del Estero, near Córdoba. I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Launch Consulting Group</strong> participating in different projects for clients mostly in the US.
        Some times I work as a freelance developer, helping small business to get their online presence or building custom software for their needs.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me in some <strong className="text-stone-100">Padel</strong> court in my town,
        playing with my <strong className="text-stone-100">harmonic, guitar or keybord</strong> dreaming I'm the next music inspiration,
        or exploring beautiful{' '}<strong className="text-stone-100">Landscape</strong> taking pictures or videos with my cameras.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `System Analyst and Developer specialized in .Net Technologies C#/ASP.NET/MVC. Web technologies oriented with knowledge in 
React, Javascript, HTML5, CSS3. Experience on database SQL and NoSQL languages.
Currently working as .Net Developer at Launch, as a remote Fullstack Developer (Backend C# / MVC - FrontEnd React/NextJS).`,
  aboutItems: [
    {label: 'Location', text: 'Frías, Santiago del Estero, ARG', Icon: MapIcon},
    {label: 'Age', text: '42', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentinian', Icon: FlagIcon},
    {label: 'Interests', text: 'Padel, Photography, Guitar, Piano, Harmonic', Icon: SparklesIcon},
    {label: 'Study', text: 'Instituto Universitario Aeronáutico', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Launch Consulting Group - The Planet Group', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Portuguese',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'MVC',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: '.NET (C#)',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'PHP',
        level: 4,
      },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      {
        name: 'Azure',
        level: 7,
      },
      {
        name: 'SQL Server',
        level: 8,
      },
      {
        name: 'Graphic Design Tools',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Hotel Victoria',
    description: 'Local hotel in the city, project made using Wordpress',
    url: 'https://hotelvictoria-frias.com.ar/',
    image: porfolioImage1,
  },
  {
    title: 'Wellness Therapy',
    description: 'Project made using Google Sites, a simple landing page for a wellness therapist from New York',
    url: 'https://www.wellnesstherapyct.com/',
    image: porfolioImage2,
  },
  {
    title: 'La Chiri',
    description: 'Project made using C#, MVC 4, for a Bingo, allowing using to control if they cards are participating',
    url: 'http://lachiri.com.ar',
    image: porfolioImage3,
  },
  {
    title: 'Rental Martin',
    description: 'Web site for a local truck rental company, made using Joomla',
    url: 'https://rentalmartin.com.ar',
    image: porfolioImage4,
  },
  {
    title: 'Slanoa',
    description: 'Joomla site for a local company that bring services industrial security consulty',
    url: 'http://slanoa.com.ar',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2017',
    location: 'Instituto Universitario Aeronáutico, Cordoba, Argentina',
    title: 'Analista de Sistemas',
    content: <p>Finished my studies presenting a final work made with .NET MVC, SQL Server, web application for agriculture management.</p>,
  },
  {
    date: 'October 2023',
    location: 'Microsoft Certified',
    title: 'MS-900',
    content: <p>I have approved my MS-900 Certification</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can leave a message here, or you can find me on any of my social network profiles.',
  items: [
    {
      type: ContactType.Email,
      text: 'pmuruaga@gmail.com',
      href: 'mailto:pmuruaga@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Frías, Santiago del Estero, ARG',
      href: 'https://www.google.com/maps/place/Fr%C3%ADas,+Santiago+del+Estero+Province,+Argentina/@-28.6357042,-65.1467328,14z/data=!3m1!4b1!4m6!3m5!1s0x9425a84f49ae19cf:0xfaeb099e28896605!8m2!3d-28.6375538!4d-65.1287605!16s%2Fm%2F0bwhr62?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@pablomurdev',
      href: 'https://www.instagram.com/pablomurdev',
    },
    {
      type: ContactType.Github,
      text: 'pmuruaga',
      href: 'https://github.com/pmuruaga',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pmuruaga'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/pmuruaga/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/pablomurdev/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
