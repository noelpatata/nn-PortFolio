import {
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
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/portfolio/random_pic.jpg';
import testimonialImage from '../images/black-comments.jpg';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Resume',
  description: "This is Noel Novo's web portfolio",
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
  name: `I'm Noel Novo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100"/>
      I am a <strong className="text-stone-100">Backend Software Engineer</strong>, currently working at <strong className="text-stone-100">Apen Soluciones Informáticas</strong> developing custom ERP modules and to our customers in .NET Framework.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside the office I can be building this kind of things to <strong className="text-stone-100">learn new technologies and stay tuned</strong>, or maybe I just went hiking to some random mountain.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/resume.pdf',
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
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, Spain', Icon: MapIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish / Swiss', Icon: FlagIcon},
    {label: 'Interests', text: 'Gym, Soccer, Learning new stuff', Icon: SparklesIcon},
    {label: 'Employment', text: 'Apen Soluciones Informaticas', Icon: BuildingOffice2Icon},
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
        name: 'English',
        level: 8,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Catalan',
        level: 10,
      },
      {
        name: 'Portuguese',
        level: 5,
      },
      {
        name: 'German',
        level: 2,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: '.NET',
        level: 9,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 6,
      }
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MSSQL',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 7,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      }
    ],
  },
  
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Android Studio',
        level: 9,
      },
      {
        name: 'React Native',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2024',
    location: 'IES Carles Vallbona',
    title: 'Cibersecurity Course',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'September 2022',
    location: 'IES Carles Vallbona',
    title: 'MULTIPLATFORM APPLICATIONS DEVELOPMENT',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'September 2020',
    location: 'IES Carles Vallbona',
    title: 'MULTIPLATFORM APPLICATIONS DEVELOPMENT',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2023 - Present',
    location: 'Apen Soluciones Informáticas',
    title: 'Software Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2021 - June 2022',
    location: 'Escola PIA',
    title: 'IT Assistant',
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
export const testimoni: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Aurelio Marquez',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.'
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).'
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'novocorboudnoel@gmail.com',
      href: 'novocorboudnoel@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://maps.app.goo.gl/epaTqQZ1zGtHCjJB9',
    },
    {
      type: ContactType.Instagram,
      text: '@novo',
      href: 'https://www.instagram.com/noel_novo/',
    },
    {
      type: ContactType.Github,
      text: 'noelpatata',
      href: 'https://github.com/noelpatata',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/noelpatata'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/noel-novo-corboud-86924a269/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/noel_novo/'},
];
