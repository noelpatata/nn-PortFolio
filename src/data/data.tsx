import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import CustomCarIcon from '../components/Icon/CustomCarIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import PythonIcon from '../components/Icon/PythonIcon';
import TicTacToeIcon from '../components/Icon/TicTacToeIcon';
import WebSiteIcon from '../components/Icon/WebSiteIcon';
import profilepic from '../images/portfolio/random_pic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Noel Novo',
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
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: `Noel Novo`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100"/>
      I am a <strong className="text-stone-100">Backend Software Engineer</strong>, currently working at <strong className="text-stone-100">Apen Soluciones Informáticas</strong> developing custom ERP modules and services to our customers in .NET Framework.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside the office I can be building this kind of things to <strong className="text-stone-100">learn new technologies and stay tuned</strong>, or maybe I just went hiking to some random mountain.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      target:'_blank',
      rel:'noopener noreferrer',
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
  description: `I am a passionate Backend Software Engineer currently working at Apen Soluciones Informáticas, where I specialize in developing custom ERP modules and services using the .NET Framework. As I continue to advance my career, I’m focused on incorporating security best practices into every aspect of my work to ensure robust, reliable, and secure applications. Currently, I’m deepening my understanding of security principles through a Cybersecurity Course at IES Carles Vallbona, which complements my earlier education in Multiplatform Application Development.`,
  aboutItems: [
    {label: 'Location', text: 'Barcelona, Spain', Icon: MapPinIcon},
    {label: 'Age', text: '20', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Spanish / Swiss', Icon: FlagIcon},
    {label: 'Interests', text: 'Lifelong learning, Challenges, Sports', Icon: SparklesIcon},
    {label: 'Employment', text: 'Apen Soluciones Informaticas', Icon: BuildingOffice2Icon},
    {label: 'Drivers license', text: '✅', Icon: CustomCarIcon},
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
        name: 'Spring',
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
        level: 7,
      }
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'C#/Visual Basic',
        level: 10,
      },
      {
        name: 'Java/Kotlin',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Javascript/Typescript',
        level: 6,
      },
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
    title: 'Friends Network',
    description: 'Full stack chat application with clean architecture.',
    url: 'https://github.com/noelpatata/FriendsNetwork/',
    Icon: TicTacToeIcon,
  },
  {
    title: 'Tic tac toe',
    description: 'Just a simple tic tac toe with react.',
    url: 'https://github.com/noelpatata/tic-tac-toe/',
    Icon: TicTacToeIcon,
  },
  {
    title: 'The resume itself',
    description: 'A web resume built with NextJS and TypeScript.',
    url: 'https://github.com/noelpatata/nn-PortFolio',
    Icon: WebSiteIcon,
  },
  {
    title: 'Spotify account checker',
    description: 'This console application checks if the given credentials are valid or not. Don\'t judge me its just for educational purposes.',
    url: 'https://github.com/noelpatata/SpotifyAccountChecker',
    Icon: PythonIcon,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2024',
    location: 'IES Carles Vallbona',
    title: 'Cibersecurity Course',
    content: <ul>
    <li>
      <strong>Cybersecurity Incidents:</strong> Understand the various types of cybersecurity incidents, their impact, and how to effectively respond to them.
    </li>
    <li>
      <strong>Network and System Hardening:</strong> Learn techniques to strengthen networks and systems against potential cyber threats, focusing on proactive security measures.
    </li>
    <li>
      <strong>Secure Production Deployment:</strong> Study best practices for securely deploying applications and systems into production environments to minimize vulnerabilities.
    </li>
    <li>
      <strong>Digital Forensics:</strong> Gain skills in forensic analysis of cyber incidents, including evidence collection, analysis, and reporting.
    </li>
    <li>
      <strong>Ethical Hacking:</strong> Explore ethical hacking techniques to identify vulnerabilities in systems and networks, while adhering to legal and ethical standards.
    </li>
    <li>
      <strong>Cybersecurity Regulations:</strong> Familiarize yourself with the legal and regulatory frameworks governing cybersecurity, ensuring compliance and best practices.
    </li>
    <li>
      <strong>Workplace Training:</strong> Participate in practical training in professional environments to apply learned skills and gain real-world experience in cybersecurity.
    </li>
  </ul>
  ,
  },
  {
    date: 'September 2022',
    location: 'IES Carles Vallbona',
    title: 'MULTIPLATFORM APPLICATIONS DEVELOPMENT',
    content: <ul>
    <li>
      <strong>IT Systems:</strong> Learn to install, configure, and manage computer systems, focusing on network resource management and the deployment of specific software.
    </li>
    <li>
      <strong>Databases:</strong> Gain deep knowledge of databases, including SQL languages for data manipulation (DML), definition (DDL), control (DCL), and procedural extensions. Also covers object-relational databases.
    </li>
    <li>
      <strong>Programming:</strong> Study structured programming, modular design, file management, and object-oriented programming (OOP), including class libraries and database persistence.
    </li>
    <li>
      <strong>Markup Languages and Information Management:</strong> Understand XML programming and its applications in business information management systems.
    </li>
    <li>
      <strong>Development Environments:</strong> Learn software development and optimization techniques, along with an introduction to object-oriented design.
    </li>
    <li>
      <strong>Data Access:</strong> Study data persistence using files, relational databases, and XML-based databases, and work with data access components.
    </li>
    <li>
      <strong>User Interface Development:</strong> Focus on designing and implementing user interfaces, and learn to package and distribute applications.
    </li>
    <li>
      <strong>Multimedia Programming and Mobile Devices:</strong> Develop applications for mobile devices, multimedia programming, and game development for mobile platforms.
    </li>
    <li>
      <strong>Service and Process Programming:</strong> Learn about security, cryptography, multi-threading, and socket programming to create network services.
    </li>
    <li>
      <strong>Enterprise Management Systems:</strong> Implement and manage ERP and CRM systems to optimize business processes.
    </li>
    <li>
      <strong>Workplace Training and Labor Market Preparation:</strong> Gain skills for job searching, labor law understanding, and workplace safety, as well as training in entrepreneurship.
    </li>
    <li>
      <strong>Multi-platform Application Development Project:</strong> Develop a full project focused on multi-platform application development, integrating the acquired knowledge.
    </li>
  </ul>,
  },
  {
    date: 'September 2020',
    location: 'IES Carles Vallbona',
    title: 'COMPUTER SYSTEMS AND NETWORKS',
    content: <ul>
    <li>
      <strong>Assembly and Maintenance of Equipment:</strong> Learn the principles of electricity for computers, hardware components, and how to assemble and maintain computer systems. This includes installing and configuring software.
    </li>
    <li>
      <strong>Single-user Operating Systems:</strong> Understand the basics of proprietary and open-source operating systems, including installation, configuration, and management on single-user machines.
    </li>
    <li>
      <strong>Office Applications:</strong> Gain proficiency in office tools such as word processing, spreadsheets, databases, email management, and presentations to improve productivity in business environments.
    </li>
    <li>
      <strong>Network Operating Systems:</strong> Learn to configure proprietary and open-source network operating systems, focusing on resource sharing, security, and system integration.
    </li>
    <li>
      <strong>Local Networks:</strong> Acquire skills in setting up and managing local area networks (LANs), including configuring switches and routers, and troubleshooting network issues.
    </li>
    <li>
      <strong>Computer Security:</strong> Study both passive and active security techniques, such as firewalls, backups, data protection laws, and network monitoring to secure IT systems.
    </li>
    <li>
      <strong>Network Services:</strong> Learn to configure essential network services like DNS, DHCP, web servers, email, file transfers, and remote access in professional network environments.
    </li>
    <li>
      <strong>Web Applications:</strong> Understand the basics of web development, including HTML, CSS, content management systems, and file management tools.
    </li>
    <li>
      <strong>Labor Market Training:</strong> Receive guidance on job searching, preparing for interviews, and understanding labor laws to facilitate the transition into the workforce.
    </li>
  </ul>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2023 - Present',
    location: 'Apen Soluciones Informáticas',
    title: 'Software Developer',
    content: (
      <ul>
        <li>
          <strong>App development:</strong> Built .NET programs with MVC pattern for managing every kind of ERP operation, such as creating customers, help with the supply chain management, project management, sales...
        </li>
        <li>
          <strong>API Consumtion and development:</strong> Created API's to create a connection between two different ERP systems. And consumed mostly OpenAI API's to integrate artificial within our programs.
        </li>
        <li>
          <strong>Database management:</strong> I've ackowledged how to synchronize tables amongst different databases with MS SQL, also maintained databases using stored procedures and functions.
        </li>
      </ul>
    ),
  },
  {
    date: 'October 2021 - June 2022',
    location: 'Escola PIA',
    title: 'IT Assistant (Internship)',
    content: (
      <ul>
        <li>
          <strong>Network Management:</strong> Setup and maintain the rack cabinet, and kept the acces points up to date.
        </li>
        <li>
          <strong>Computer Management:</strong> Made sure the software wasn't deprecated.
        </li>
        <li>
          <strong>IT Support:</strong> Helped employees with technical issues related to IT.
        </li>
      </ul>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'novocorboudnoel@gmail.com',
      href: 'mailto:novocorboudnoel@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Barcelona, Spain',
      href: 'https://maps.app.goo.gl/epaTqQZ1zGtHCjJB9',
    },
    {
      type: ContactType.Instagram,
      text: '@noel_novo',
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
