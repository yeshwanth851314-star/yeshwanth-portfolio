export interface ProjectItem {
  number: string;
  title: string;
  category: string;
  date: string;
  description: string;
  context?: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageKey: "sdgDashboard" | "tikiTopple";
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  isCurrent?: boolean;
}

export interface AchievementItem {
  title: string;
  year: string;
  description: string;
  tag: string;
}

export interface CertificateItem {
  title: string;
  date: string;
  link?: string;
}

export interface LearningItem {
  title: string;
  focus: string;
  iconName: "Code2" | "Layers" | "Cpu";
}

export const portfolioData = {
  personal: {
    name: "Madala Yashwanth Kumar",
    shortName: "Yeshwanth",
    role: "Computer Science Engineering Student",
    university: "Lovely Professional University, Phagwara, Punjab",
    location: "Phagwara, Punjab / Ongole, Andhra Pradesh",
    tagline:
      "Computer Science Engineering student building web applications, data-driven interfaces, and interactive digital experiences.",
    aboutBio:
      "I'm Yeshwanth, a Computer Science and Engineering student at Lovely Professional University (LPU). I build React applications, data dashboards, and interactive web projects—grounding my work in computer science fundamentals while learning actively through hands-on development and hackathons.",
    contactCta: "Open to internships, collaborations & interesting projects.",
    email: "yeshwanthkumarmadala123@gmail.com",
    phone: "+91 7780482826",
    githubUrl: "https://github.com/yeshwanth851314-star",
    linkedinUrl: "https://www.linkedin.com/in/yeshwanth-kumar-madala",
    resumeUrl:
      "https://docs.google.com/document/d/1liSrLpdMFnALI4Ojq_w4Ai3oBHrN0Yvd/edit?usp=sharing&ouid=102327901115861181878&rtpof=true&sd=true",
  },

  skills: [
    {
      category: "Languages",
      skills: ["C/C++", "Python", "SQL"],
    },
    {
      category: "Web / Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PL/SQL", "MongoDB"],
    },
    {
      category: "Data & Visualization",
      skills: ["Power BI", "Excel", "Recharts"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Lovable"],
    },
    {
      category: "Core CS Fundamentals",
      skills: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "OOP",
        "DBMS",
        "Computer Networks",
      ],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Team Player", "Adaptability", "Problem Solving"],
    },
  ],

  projects: [
    {
      number: "01",
      title: "SDG India Dashboard",
      category: "Data Visualization · April 2026",
      date: "April 2026",
      description:
        "An interactive React dashboard to visualize India's progress across all 17 UN Sustainable Development Goals with dynamic progress tracking and analytical tooling.",
      features: [
        "Dynamic progress tracking across all 17 UN Sustainable Development Goals",
        "Search, filtering, sorting, editable scores, and automated status classification",
        "Interactive Recharts visualizations for score comparisons, category-wise performance, and status distribution",
        "CSV report export for structured data analysis",
      ],
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Recharts", "GitHub"],
      githubUrl: "https://github.com/yeshwanth851314-star",
      liveUrl: "", // Ready for live URL
      imageKey: "sdgDashboard",
    },
    {
      number: "02",
      title: "Digital Tiki Topple Board Game",
      category: "Hackathon Project · October 2025",
      date: "October 2025",
      context: "Built for a hackathon, focusing on rapid prototyping, interactive design, and functional game mechanics.",
      description:
        "A digital adaptation of the traditional Tiki Topple strategy board game, translating physical tabletop mechanics into an engaging web application.",
      features: [
        "Turn management, strategic tiki piece movement, secret goal cards, and round progression",
        "Interactive real-time game board interface for piece manipulation and scoring",
        "Translation of board-game rules and action mechanics into digital game logic",
        "Rapidly prototyped and delivered under hackathon constraints",
      ],
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Lovable", "GitHub"],
      githubUrl: "https://github.com/yeshwanth851314-star",
      liveUrl: "", // Ready for live URL
      imageKey: "tikiTopple",
    },
  ] as ProjectItem[],

  currentlyLearning: [
    {
      title: "Data Structures & Algorithms",
      focus: "Strengthening problem-solving patterns, algorithmic efficiency, and coding interview readiness.",
      iconName: "Code2",
    },
    {
      title: "Modern Web Architecture",
      focus: "Building performant, accessible React applications with modern component patterns and state management.",
      iconName: "Layers",
    },
    {
      title: "Core CS Systems",
      focus: "Deepening practical and theoretical understanding in Database Systems, Operating Systems, and Computer Networks.",
      iconName: "Cpu",
    },
  ] as LearningItem[],

  achievements: [
    {
      title: "Hackathon Winner",
      year: "2025",
      description: "Won my first hackathon with the Digital Tiki Topple web board game project.",
      tag: "Competition",
    },
    {
      title: "Website Work",
      year: "2025",
      description: "Earned ₹2,500 by developing and delivering websites for clients.",
      tag: "Freelance",
    },
  ] as AchievementItem[],

  certifications: [
    {
      title: "Programming Fundamentals using Python",
      date: "June 2026",
      link: "",
    },
    {
      title: "Advanced Python Programming",
      date: "July 2026",
      link: "",
    },
  ] as CertificateItem[],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      period: "Aug 2025 — Present",
      score: "CGPA: 7.2",
      isCurrent: true,
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Saraswathi Junior College",
      location: "Ongole, Andhra Pradesh",
      period: "Apr 2023 — Mar 2025",
      score: "Percentage: 75%",
      isCurrent: false,
    },
    {
      degree: "Matriculation",
      institution: "B.S.M ZPH School",
      location: "Ongole, Andhra Pradesh",
      period: "Apr 2019 — Mar 2023",
      score: "Percentage: 78%",
      isCurrent: false,
    },
  ] as EducationItem[],
};
