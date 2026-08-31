import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Database,
  Sparkles,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Cpu,
  Layers,
  CircleCheck,
  Trophy,
  LayoutGrid,
  User,
  Wrench,
  FolderGit2,
  Send,
  Home,
} from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import portrait from "../assets/yeshwanth-portrait-cutout.png";
import sdgDashboard from "../assets/sdg-dashboard.jpg";
import tikiTopple from "../assets/tiki-topple.jpg";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

const { personal, skills, projects, currentlyLearning, achievements, certifications, education } =
  portfolioData;

export type TabId = "home" | "about" | "skills" | "projects" | "achievements" | "education" | "contact";

interface TabItem {
  id: TabId;
  label: string;
  icon: typeof Home;
}

const navTabs: TabItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "achievements", label: "Milestones", icon: Trophy },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Send },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ResumeButton({
  label = "View résumé",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={personal.resumeUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Open Google Docs résumé in new tab"
      className={`resume-button group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-on-accent transition-all duration-300 hover:scale-[1.03] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-text sm:px-6 sm:py-3 sm:text-sm ${className}`}
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

const highlightSkills = [
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Python", category: "Programming", icon: Cpu },
  { name: "JavaScript", category: "Frontend", icon: Code2 },
  { name: "C / C++", category: "Core", icon: Cpu },
  { name: "SQL & MySQL", category: "Databases", icon: Database },
  { name: "Tailwind CSS", category: "UI/UX", icon: Layers },
  { name: "Data Structures & Algorithms", category: "Core CS", icon: Cpu },
  { name: "Power BI & Recharts", category: "Data Viz", icon: Sparkles },
  { name: "MongoDB", category: "Databases", icon: Database },
  { name: "Git & GitHub", category: "Version Control", icon: Code2 },
  { name: "DBMS & Operating Systems", category: "Systems", icon: Database },
];

const highlightMilestones = [
  { title: "Hackathon Winner", detail: "Digital Tiki Topple Game", badge: "Competition", icon: Trophy },
  { title: "Freelance Website Work", detail: "Earned ₹2,500 delivering client sites", badge: "Milestone", icon: Award },
  { title: "Python Programming", detail: "Fundamentals & Advanced Certified", badge: "Credentials", icon: GraduationCap },
  { title: "B.Tech in CSE", detail: "Lovely Professional University · CGPA 7.2", badge: "Academics", icon: GraduationCap },
  { title: "SDG India Dashboard", detail: "17 Goals Dynamic Progress Tracking", badge: "React Project", icon: Sparkles },
];

function HomeView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden bg-white px-5 pb-8 pt-4 sm:px-8 md:px-10">
        {/* Main Display Headline */}
        <FadeIn delay={0.05} className="relative z-0 mt-4 overflow-hidden sm:mt-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-portfolio-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-portfolio-accent">
              Portfolio · 2026
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-portfolio-light-muted">
              Computer Science & Engineering
            </span>
          </div>
          <h1 className="hero-heading-dark mt-3 text-[clamp(2.9rem,11.2vw,8.8rem)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="block">Hi, I&apos;m Yeshwanth</span>
            <span className="block">Kumar</span>
          </h1>
        </FadeIn>

        {/* Portrait Cutout Asset */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[min(82vw,500px)] -translate-x-1/2 sm:w-[min(52vw,540px)] lg:w-[min(38vw,580px)]"
        >
          <div className="portrait-glow absolute inset-x-[15%] bottom-[6%] h-3/4 rounded-full opacity-30" />
          <img
            src={portrait}
            alt="Madala Yashwanth Kumar portrait"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="relative w-full object-contain object-bottom drop-shadow-xl"
          />
        </motion.div>

        {/* Bottom Hero Bar */}
        <div className="relative z-20 mt-auto flex flex-col items-start justify-between gap-5 pt-8 sm:flex-row sm:items-end">
          <FadeIn delay={0.2} className="max-w-[300px] sm:max-w-[340px] md:max-w-[400px]">
            <p className="text-[clamp(0.82rem,1.35vw,1.1rem)] font-light uppercase leading-snug tracking-wide text-portfolio-light-ink">
              {personal.tagline}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="text-portfolio-light-muted transition-colors hover:text-portfolio-light-ink"
              >
                <Github className="size-4" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="text-portfolio-light-muted transition-colors hover:text-portfolio-light-ink"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="text-portfolio-light-muted transition-colors hover:text-portfolio-light-ink"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTab("projects")}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-portfolio-light-line bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-portfolio-light-ink shadow-sm transition-all hover:bg-portfolio-light sm:px-6 sm:py-3 sm:text-sm"
            >
              View Projects
              <ChevronRight className="size-4" />
            </button>
            <ResumeButton />
          </FadeIn>
        </div>
      </header>

      {/* Floating Ribbons (Skills & Achievements) */}
      <section aria-label="Skills and achievements ticker" className="overflow-hidden border-y border-portfolio-light-line bg-white py-10 sm:py-14">
        <div className="marquee-track flex w-max gap-3.5 sm:gap-4">
          {[...highlightSkills, ...highlightSkills].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`skill-marquee-${i}`}
                className="flex items-center gap-3 rounded-full border border-portfolio-light-line bg-portfolio-light px-5 py-3 shadow-xs transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
              >
                <div className="grid size-8 place-items-center rounded-full bg-white text-portfolio-accent shadow-xs">
                  <Icon className="size-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-portfolio-light-ink sm:text-sm">
                    {item.name}
                  </span>
                  <span className="rounded-full bg-portfolio-light-line px-2 py-0.5 text-[10px] font-semibold uppercase text-portfolio-light-muted">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="marquee-track-reverse mt-3.5 flex w-max gap-3.5 sm:mt-4 sm:gap-4">
          {[...highlightMilestones, ...highlightMilestones].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`milestone-marquee-${i}`}
                className="flex items-center gap-3 rounded-full border border-portfolio-light-line bg-portfolio-light px-5 py-3 shadow-xs transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
              >
                <div className="grid size-8 place-items-center rounded-full bg-portfolio-accent/15 text-portfolio-accent shadow-xs">
                  <Icon className="size-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-portfolio-light-ink sm:text-sm">
                    {item.title}
                  </span>
                  <span className="hidden text-xs font-light text-portfolio-light-muted sm:inline">
                    • {item.detail}
                  </span>
                  <span className="rounded-full bg-portfolio-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase text-portfolio-accent">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Launch Cards Section */}
      <section className="bg-portfolio-dark px-5 py-20 text-portfolio-text sm:px-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
              Explore Portfolio Tabs
            </p>
            <h2 className="hero-heading mt-2 text-[clamp(2.4rem,6vw,4.5rem)] font-black uppercase leading-none">
              Direct Navigation
            </h2>
            <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted">
              Select any tab to open its dedicated view with detailed information.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <button
              onClick={() => onSelectTab("about")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <User className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  About Me
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  B.Tech CSE student narrative at Lovely Professional University, location, and background.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open About Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => onSelectTab("projects")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <FolderGit2 className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  Projects & Live Demos
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  SDG India Dashboard and Digital Tiki Topple Board Game with live web demos and GitHub links.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open Projects Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => onSelectTab("skills")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <Wrench className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  Skills & Toolkit
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  Languages (C/C++, Python, SQL), Frontend (React, Tailwind), Databases, and CS Fundamentals.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open Skills Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => onSelectTab("achievements")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <Trophy className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  Milestones & Certs
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  Hackathon victory, freelance client revenue (₹2,500), and Python certifications.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open Milestones Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => onSelectTab("education")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  Education & Academics
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  B.Tech CSE at LPU (CGPA 7.2), Intermediate Education (75%), and Matriculation (78%).
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open Education Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={() => onSelectTab("contact")}
              className="group flex flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 text-left transition-all duration-300 hover:border-portfolio-accent hover:bg-portfolio-surface/80"
            >
              <div>
                <div className="flex size-11 items-center justify-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                  <Send className="size-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-portfolio-text group-hover:text-portfolio-accent">
                  Get In Touch
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                  Direct email, phone, LinkedIn, GitHub, and full Google Docs résumé.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-accent">
                Open Contact Tab <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="min-h-[85vh] bg-portfolio-dark px-5 py-16 text-portfolio-text sm:px-8 md:px-10 md:py-24">
      <div className="relative mx-auto max-w-5xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
                Profile · Background
              </p>
              <h1 className="hero-heading mt-2 text-[clamp(3rem,8vw,6rem)] font-black uppercase leading-none">
                About Me
              </h1>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-muted hover:text-portfolio-text sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-3xl border border-portfolio-line bg-portfolio-surface p-8 sm:p-12">
            <p className="text-balance text-[clamp(1.1rem,2.2vw,1.6rem)] font-light leading-relaxed text-portfolio-text">
              {personal.aboutBio}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-wider text-portfolio-muted">
              <span className="rounded-full border border-portfolio-line bg-portfolio-dark px-4 py-2">
                📍 {personal.location}
              </span>
              <span className="rounded-full border border-portfolio-line bg-portfolio-dark px-4 py-2">
                🎓 B.Tech CSE (CGPA 7.2) · Lovely Professional University
              </span>
              <span className="rounded-full border border-portfolio-line bg-portfolio-dark px-4 py-2">
                ⚡ Practical Project Builder & Problem Solver
              </span>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 pt-8 border-t border-portfolio-line">
              <button
                onClick={() => onSelectTab("projects")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-portfolio-accent bg-portfolio-accent px-6 py-3 text-xs font-semibold uppercase tracking-widest text-on-accent shadow-md transition-all hover:bg-portfolio-accent-hover sm:text-sm"
              >
                Explore Projects
                <ChevronRight className="size-4" />
              </button>
              <button
                onClick={() => onSelectTab("contact")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-portfolio-line bg-portfolio-dark px-6 py-3 text-xs font-semibold uppercase tracking-widest text-portfolio-text transition-colors hover:bg-portfolio-line sm:text-sm"
              >
                Contact Me
              </button>
              <ResumeButton />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function SkillsView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="min-h-[85vh] bg-portfolio-light px-5 py-16 text-portfolio-light-ink sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-light-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-light-muted">
                Verified Toolkit
              </p>
              <h1 className="mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-none text-portfolio-light-ink">
                Skills & Toolkit
              </h1>
              <p className="mt-3 max-w-2xl text-sm font-light text-portfolio-light-muted sm:text-base">
                Core technologies, programming languages, and engineering concepts verified through coursework and projects.
              </p>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-light-line bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-light-muted hover:text-portfolio-light-ink sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <FadeIn key={category.category} delay={index * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-portfolio-light-line bg-white/90 p-6 shadow-xs backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-light-muted">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 text-lg font-bold uppercase tracking-tight text-portfolio-light-ink">
                    {category.category}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(category.skills || []).map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-portfolio-light-line bg-portfolio-light px-3 py-1.5 text-xs font-medium text-portfolio-light-ink transition-colors hover:bg-portfolio-light-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  const projectImages: Record<string, string> = {
    sdgDashboard,
    tikiTopple,
  };

  return (
    <div className="min-h-[85vh] bg-portfolio-dark px-5 py-16 text-portfolio-text sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-line pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-portfolio-accent">
                Verified Work
              </p>
              <h1 className="hero-heading mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-none">
                Projects
              </h1>
              <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted sm:text-base">
                Interactive web applications and algorithmic games built with React, JavaScript, and modern styling.
              </p>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-muted hover:text-portfolio-text sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-12">
          {projects.map((project, index) => {
            const projectImg = projectImages[project.imageKey];
            return (
              <FadeIn key={project.number} delay={index * 0.1}>
                <article className="overflow-hidden rounded-[32px] border border-portfolio-line bg-portfolio-surface p-6 sm:rounded-[40px] sm:p-8 md:p-10">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-portfolio-line pb-6">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none text-portfolio-text">
                        {project.number}
                      </span>
                      <div className="pt-1">
                        <span className="rounded-full border border-portfolio-line bg-portfolio-dark px-3 py-1 text-[10px] uppercase tracking-wider text-portfolio-accent">
                          {project.category} · {project.date}
                        </span>
                        <h3 className="mt-2 text-[clamp(1.25rem,2.4vw,2.2rem)] font-bold uppercase leading-tight text-portfolio-text">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="grid size-11 place-items-center rounded-full border border-portfolio-line bg-portfolio-dark text-portfolio-text transition-colors hover:border-portfolio-text"
                      >
                        <Github className="size-5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          className="inline-flex items-center gap-2 rounded-full border border-portfolio-accent bg-portfolio-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-on-accent shadow-md shadow-portfolio-accent/20 transition-all hover:scale-105 hover:bg-portfolio-accent-hover"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-sm font-light leading-relaxed text-portfolio-text sm:text-base">
                          {project.description}
                        </p>

                        <div className="mt-6 space-y-2.5">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-portfolio-accent">
                            Key Features & Capabilities
                          </p>
                          <ul className="space-y-2 text-xs text-portfolio-muted sm:text-sm">
                            {project.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <CircleCheck className="mt-0.5 size-4 shrink-0 text-portfolio-accent" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-portfolio-line flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-portfolio-line bg-portfolio-dark px-3 py-1 text-xs uppercase tracking-wider text-portfolio-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-portfolio-line bg-black/40 sm:min-h-[320px]">
                      <img
                        src={projectImg}
                        alt={`${project.title} interface preview`}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function AchievementsView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="min-h-[85vh] bg-portfolio-dark px-5 py-16 text-portfolio-text sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
                Milestones & Credentials
              </p>
              <h1 className="hero-heading mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-none">
                Achievements
              </h1>
              <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted sm:text-base">
                Competitions won, freelance client deliverables, and certified programming credentials.
              </p>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-muted hover:text-portfolio-text sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        {/* Achievements Section */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, idx) => (
            <FadeIn key={achievement.title} delay={idx * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-portfolio-line bg-portfolio-surface p-8 transition-all hover:border-portfolio-accent">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-portfolio-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-portfolio-accent">
                      {achievement.tag}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-portfolio-muted">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold uppercase tracking-tight text-portfolio-text">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-portfolio-muted sm:text-base">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16 border-t border-portfolio-line pt-12">
          <h2 className="text-xl font-bold uppercase tracking-wider text-portfolio-text">
            Verified Certifications
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className="flex items-center justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-portfolio-text sm:text-lg">{cert.title}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-portfolio-accent">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="min-h-[85vh] bg-portfolio-dark px-5 py-16 text-portfolio-text sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
                Academic Background
              </p>
              <h1 className="hero-heading mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-none">
                Education
              </h1>
              <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted sm:text-base">
                Computer Science & Engineering coursework, academic foundations, and institutional milestones.
              </p>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-muted hover:text-portfolio-text sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-6">
          {education.map((edu, idx) => (
            <FadeIn key={edu.institution} delay={idx * 0.1}>
              <div
                className={`rounded-3xl border p-8 transition-all ${
                  edu.isCurrent
                    ? "border-portfolio-accent bg-portfolio-surface shadow-lg shadow-portfolio-accent/5"
                    : "border-portfolio-line bg-portfolio-surface/60"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    {edu.isCurrent && (
                      <span className="inline-block rounded-full bg-portfolio-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-portfolio-accent">
                        Current Degree · In Progress
                      </span>
                    )}
                    <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight text-portfolio-text sm:text-3xl">
                      {edu.degree}
                    </h2>
                    <p className="mt-1 text-base font-medium text-portfolio-accent sm:text-lg">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-portfolio-muted">
                      📍 {edu.location}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="rounded-full border border-portfolio-line bg-portfolio-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-portfolio-text">
                      {edu.period}
                    </span>
                    <p className="mt-3 text-lg font-bold text-portfolio-accent sm:text-xl">
                      {edu.score}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactView({ onSelectTab }: { onSelectTab: (tab: TabId) => void }) {
  return (
    <div className="min-h-[85vh] bg-portfolio-dark px-5 py-16 text-portfolio-text sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="flex items-center justify-between border-b border-portfolio-line pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
                Direct Communication
              </p>
              <h1 className="hero-heading mt-2 text-[clamp(2.8rem,7vw,5.5rem)] font-black uppercase leading-none">
                Get In Touch
              </h1>
              <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted sm:text-base">
                Open to software engineering internships, developer roles, collaborations, and hackathon projects.
              </p>
            </div>
            <button
              onClick={() => onSelectTab("home")}
              className="hidden rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2 text-xs font-semibold uppercase tracking-wider text-portfolio-muted hover:text-portfolio-text sm:inline-flex"
            >
              ← Back Home
            </button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Contact Direct Box */}
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-portfolio-line bg-portfolio-surface p-8 sm:p-10">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-portfolio-text">
                  Direct Contact
                </h3>
                <p className="mt-2 text-sm font-light text-portfolio-muted">
                  Reach out directly via email or phone. I respond promptly!
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-portfolio-line bg-portfolio-dark p-4 transition-colors hover:border-portfolio-accent"
                  >
                    <div className="grid size-11 place-items-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                      <Mail className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-portfolio-muted">Email</p>
                      <p className="truncate font-medium text-portfolio-text text-sm sm:text-base">{personal.email}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl border border-portfolio-line bg-portfolio-dark p-4 transition-colors hover:border-portfolio-accent"
                  >
                    <div className="grid size-11 place-items-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-portfolio-muted">Phone / WhatsApp</p>
                      <p className="font-medium text-portfolio-text text-sm sm:text-base">{personal.phone}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <ResumeButton label="Download / Open Full CV" className="w-full justify-center" />
              </div>
            </div>
          </FadeIn>

          {/* Social Profiles Box */}
          <FadeIn delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-portfolio-line bg-portfolio-surface p-8 sm:p-10">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-portfolio-text">
                  Online Profiles
                </h3>
                <p className="mt-2 text-sm font-light text-portfolio-muted">
                  Inspect my codebase repositories, contributions, and professional network.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-portfolio-line bg-portfolio-dark p-4 transition-colors hover:border-portfolio-accent"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid size-11 place-items-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                        <Github className="size-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-portfolio-muted">GitHub</p>
                        <p className="font-medium text-portfolio-text text-sm sm:text-base">yeshwanth851314-star</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-portfolio-muted" />
                  </a>

                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-portfolio-line bg-portfolio-dark p-4 transition-colors hover:border-portfolio-accent"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid size-11 place-items-center rounded-xl bg-portfolio-accent/10 text-portfolio-accent">
                        <Linkedin className="size-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-portfolio-muted">LinkedIn</p>
                        <p className="font-medium text-portfolio-text text-sm sm:text-base">yeshwanth-kumar-madala</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-portfolio-muted" />
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-portfolio-line bg-portfolio-dark p-4 text-center">
                <span className="text-xs uppercase tracking-widest text-portfolio-accent font-semibold">
                  Location: Phagwara, Punjab / Ongole, AP
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  // Sync with URL query parameter (?tab=...) on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") as TabId | null;
      if (tabParam && ["home", "about", "skills", "projects", "achievements", "education", "contact"].includes(tabParam)) {
        setActiveTab(tabParam);
      }
    }
  }, []);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (tab === "home") {
        url.searchParams.delete("tab");
      } else {
        url.searchParams.set("tab", tab);
      }
      window.history.pushState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-portfolio-dark font-sans text-portfolio-text antialiased selection:bg-portfolio-accent selection:text-white">
      {/* Top Persistent Navigation Bar with Tab Indicators */}
      <header className="sticky top-0 z-50 border-b border-portfolio-light-line/60 bg-white/95 px-4 py-3 backdrop-blur-md transition-colors sm:px-8">
        <nav
          aria-label="Portfolio tabs navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-wider text-portfolio-light-ink"
        >
          {/* Badge indicator */}
          <div className="flex items-center gap-2 text-portfolio-accent">
            <span className="inline-block size-2 rounded-full bg-portfolio-accent animate-pulse" />
            <span className="font-bold tracking-widest text-xs">CSE STUDENT · LPU</span>
          </div>

          {/* Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`relative cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 sm:px-4 sm:py-2 ${
                    isActive
                      ? "text-white"
                      : "text-portfolio-light-ink hover:bg-portfolio-light hover:text-portfolio-accent"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full bg-portfolio-dark"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="size-3.5" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Tab Screen Content with Animated Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {activeTab === "home" && <HomeView onSelectTab={handleSelectTab} />}
          {activeTab === "about" && <AboutView onSelectTab={handleSelectTab} />}
          {activeTab === "skills" && <SkillsView onSelectTab={handleSelectTab} />}
          {activeTab === "projects" && <ProjectsView onSelectTab={handleSelectTab} />}
          {activeTab === "achievements" && <AchievementsView onSelectTab={handleSelectTab} />}
          {activeTab === "education" && <EducationView onSelectTab={handleSelectTab} />}
          {activeTab === "contact" && <ContactView onSelectTab={handleSelectTab} />}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-portfolio-line bg-portfolio-dark px-5 py-10 text-xs uppercase tracking-widest text-portfolio-muted sm:px-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleSelectTab("home")}
              className="hover:text-portfolio-text cursor-pointer transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleSelectTab("projects")}
              className="hover:text-portfolio-text cursor-pointer transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => handleSelectTab("contact")}
              className="hover:text-portfolio-text cursor-pointer transition-colors"
            >
              Contact
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-portfolio-text transition-colors"
            >
              Résumé
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
