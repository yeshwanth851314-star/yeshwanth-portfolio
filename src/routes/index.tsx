import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Trophy,
} from "lucide-react";
import { useRef, type ReactNode } from "react";

import portrait from "@/assets/yeshwanth-portrait-cutout.png";
import sdgDashboard from "@/assets/sdg-dashboard.jpg";
import tikiTopple from "@/assets/tiki-topple.jpg";
import { portfolioData, type ProjectItem } from "@/data/portfolioData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madala Yashwanth Kumar — Computer Science Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Madala Yashwanth Kumar, Computer Science Engineering student at Lovely Professional University building web applications, data dashboards, and interactive digital experiences.",
      },
      { property: "og:title", content: "Madala Yashwanth Kumar — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science Engineering student at LPU building React products, data dashboards, and interactive web experiences.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const { personal, skills, projects, currentlyLearning, achievements, certifications, education } =
  portfolioData;

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
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
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

function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pb-7 pt-6 sm:px-8 md:px-10 md:pb-10 md:pt-8">
      {/* Navigation */}
      <FadeIn className="relative z-30">
        <nav
          aria-label="Primary navigation"
          className="flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-wider text-portfolio-text sm:text-sm md:text-base"
        >
          <div className="flex items-center gap-2 text-portfolio-accent">
            <span className="inline-block size-2 rounded-full bg-portfolio-accent animate-pulse" />
            <span className="font-semibold tracking-widest text-xs">CS STUDENT · LPU</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </FadeIn>

      {/* Main Display Headline */}
      <FadeIn delay={0.1} className="relative z-0 mt-8 overflow-hidden sm:mt-4 md:mt-2">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-portfolio-accent sm:text-sm">
          Portfolio · 2026
        </p>
        <h1 className="hero-heading whitespace-nowrap text-[12.8vw] font-black uppercase leading-none tracking-tight">
          Hi, I&apos;m {personal.shortName}
        </h1>
      </FadeIn>

      {/* Portrait Cutout Asset */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 w-[min(82vw,520px)] -translate-x-1/2 sm:w-[min(54vw,560px)] lg:w-[min(40vw,600px)]"
      >
        <div className="portrait-glow absolute inset-x-[15%] bottom-[6%] h-3/4 rounded-full" />
        <img
          src={portrait}
          alt="Madala Yashwanth Kumar portrait"
          width={1024}
          height={1024}
          fetchPriority="high"
          className="relative w-full object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Bottom Hero Bar */}
      <div className="relative z-20 mt-auto flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <FadeIn delay={0.25} className="max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
          <p className="text-[clamp(0.78rem,1.3vw,1.1rem)] font-light uppercase leading-snug tracking-wide text-portfolio-text">
            {personal.tagline}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-portfolio-muted transition-colors hover:text-portfolio-text"
            >
              <Github className="size-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-portfolio-muted transition-colors hover:text-portfolio-text"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="text-portfolio-muted transition-colors hover:text-portfolio-text"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.35} className="flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-portfolio-line bg-portfolio-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-portfolio-text transition-all hover:bg-portfolio-line sm:px-6 sm:py-3 sm:text-sm"
          >
            View Projects
          </a>
          <ResumeButton />
        </FadeIn>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 text-portfolio-muted transition-colors hover:text-portfolio-text lg:block"
      >
        <ArrowDownRight className="size-7" />
      </a>
    </header>
  );
}

function Marquee() {
  const items = [sdgDashboard, tikiTopple, sdgDashboard, tikiTopple];
  return (
    <section aria-label="Selected work preview" className="overflow-hidden bg-portfolio-dark py-16 sm:py-24">
      <div className="marquee-track flex w-max gap-4">
        {[...items, ...items].map((image, i) => (
          <div
            key={`marquee-top-${i}`}
            className="h-[170px] w-[280px] shrink-0 overflow-hidden rounded-xl border border-portfolio-line bg-portfolio-surface sm:h-[220px] sm:w-[360px]"
          >
            <img
              src={image}
              alt="Project screen preview"
              loading="lazy"
              className="size-full object-cover opacity-80 transition duration-500 hover:scale-105 hover:opacity-100"
            />
          </div>
        ))}
      </div>
      <div className="marquee-track-reverse mt-4 flex w-max gap-4">
        {[...items, ...items].reverse().map((image, i) => (
          <div
            key={`marquee-bottom-${i}`}
            className="h-[170px] w-[280px] shrink-0 overflow-hidden rounded-xl border border-portfolio-line bg-portfolio-surface sm:h-[220px] sm:w-[360px]"
          >
            <img
              src={image}
              alt="Project screen preview"
              loading="lazy"
              className="size-full object-cover opacity-60 transition duration-500 hover:scale-105 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative flex min-h-[85vh] items-center overflow-hidden px-5 py-24 sm:px-8 md:px-10">
      <Code2
        className="absolute left-[4%] top-[12%] size-20 rotate-[-12deg] text-portfolio-line sm:size-28 md:size-36"
        strokeWidth={1}
        aria-hidden="true"
      />
      <Database
        className="absolute bottom-[12%] right-[6%] size-20 rotate-12 text-portfolio-line sm:size-28 md:size-36"
        strokeWidth={1}
        aria-hidden="true"
      />
      <Sparkles
        className="absolute right-[8%] top-[14%] size-12 text-portfolio-accent sm:size-16"
        strokeWidth={1.2}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-accent">
            Profile · Background
          </p>
          <h2 className="hero-heading text-[clamp(3.5rem,11vw,9rem)] font-black uppercase leading-none">
            About me
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-[clamp(1.05rem,2.1vw,1.5rem)] font-light leading-relaxed text-portfolio-text">
            {personal.aboutBio}
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-wider text-portfolio-muted">
          <span className="rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2">
            📍 {personal.location}
          </span>
          <span className="rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2">
            🎓 B.Tech CSE (CGPA 7.2)
          </span>
          <span className="rounded-full border border-portfolio-line bg-portfolio-surface px-4 py-2">
            ⚡ Practical Project Builder
          </span>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12 flex flex-wrap justify-center gap-4">
          <ResumeButton label="Open résumé" />
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-portfolio-line bg-portfolio-surface px-6 py-3 text-xs font-semibold uppercase tracking-widest text-portfolio-text transition-colors hover:bg-portfolio-line sm:text-sm"
          >
            Explore Projects
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-portfolio-light px-5 py-20 text-portfolio-light-ink sm:rounded-t-[52px] sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn>
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-light-muted">
          Technical Stack
        </p>
        <h2 className="text-center text-[clamp(3.2rem,11vw,9rem)] font-black uppercase leading-none text-portfolio-light-ink">
          Skills & Toolkit
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-light text-portfolio-light-muted sm:text-base">
          Core technologies, programming languages, and engineering concepts verified through coursework and projects.
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.05}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-portfolio-light-line bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-portfolio-light-muted">
                  0{i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold uppercase tracking-tight text-portfolio-light-ink">
                  {group.category}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((item) => (
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
    </section>
  );
}

const projectImages = {
  sdgDashboard,
  tikiTopple,
};

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], [0.96, 1, 0.97]);
  const image = projectImages[project.imageKey];

  return (
    <div ref={ref} className="h-[92vh] min-h-[680px]">
      <motion.article
        style={{ scale, top: `${88 + index * 24}px` }}
        className="sticky mx-auto flex h-[80vh] min-h-[600px] max-w-6xl flex-col overflow-hidden rounded-[32px] border-2 border-portfolio-text bg-portfolio-dark p-5 sm:rounded-[44px] sm:p-7 md:p-8"
      >
        {/* Header Bar */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4 sm:gap-8">
            <span className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-none text-portfolio-text">
              {project.number}
            </span>
            <div className="pt-1 sm:pt-2">
              <span className="rounded-full border border-portfolio-line bg-portfolio-surface px-3 py-1 text-[10px] uppercase tracking-wider text-portfolio-accent">
                {project.category}
              </span>
              <h3 className="mt-2 text-[clamp(1.25rem,2.8vw,2.5rem)] font-semibold uppercase leading-tight text-portfolio-text">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="grid size-10 sm:size-11 place-items-center rounded-full border border-portfolio-text text-portfolio-text transition-colors hover:bg-portfolio-surface"
              >
                <Github className="size-4 sm:size-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="grid size-10 sm:size-11 place-items-center rounded-full border border-portfolio-accent bg-portfolio-accent text-on-accent transition-transform hover:scale-105"
              >
                <ExternalLink className="size-4 sm:size-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content & Media Grid */}
        <div className="grid min-h-0 flex-1 gap-4 md:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col justify-between overflow-y-auto rounded-2xl bg-portfolio-surface p-5 sm:p-6">
            <div>
              <p className="text-sm font-light leading-relaxed text-portfolio-text sm:text-base">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-portfolio-accent">
                    Key Features
                  </p>
                  <ul className="space-y-1.5 text-xs text-portfolio-muted">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-portfolio-accent" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-portfolio-line flex flex-wrap gap-1.5">
              {project.techStack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-portfolio-line px-2.5 py-1 text-[10px] uppercase tracking-wider text-portfolio-text sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-0 overflow-hidden rounded-2xl border border-portfolio-line bg-black/40">
            <img
              src={image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative -mt-10 rounded-t-[40px] bg-portfolio-dark px-5 py-24 sm:-mt-12 sm:rounded-t-[52px] sm:px-8 md:px-10 md:py-32"
    >
      <FadeIn>
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.3em] text-portfolio-accent">
          Verified Work
        </p>
        <h2 className="hero-heading text-center text-[clamp(3.5rem,11vw,9rem)] font-black uppercase leading-none">
          Projects
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light text-portfolio-muted sm:text-base">
          Interactive web applications and algorithmic games built with React, JavaScript, and modern styling.
        </p>
      </FadeIn>

      <div className="mt-14 sm:mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function CurrentlyLearning() {
  const iconMap = {
    Code2: Code2,
    Layers: Layers,
    Cpu: Cpu,
  };

  return (
    <section className="bg-portfolio-dark px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-2 text-portfolio-accent">
            <BookOpen className="size-4" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">Student Trajectory</p>
          </div>
          <h2 className="hero-heading mt-2 text-[clamp(2.8rem,8vw,6.5rem)] font-black uppercase leading-none">
            Currently Learning
          </h2>
          <p className="mt-3 max-w-xl text-sm font-light text-portfolio-muted">
            Continuous growth areas where I am actively expanding theoretical understanding and practical problem-solving.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {currentlyLearning.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Code2;
            return (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-portfolio-line bg-portfolio-surface p-6 transition-all hover:border-portfolio-text">
                  <div>
                    <div className="grid size-11 place-items-center rounded-xl border border-portfolio-line bg-portfolio-dark text-portfolio-accent">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-portfolio-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-portfolio-muted">
                      {item.focus}
                    </p>
                  </div>
                  <span className="mt-5 text-[10px] font-bold uppercase tracking-widest text-portfolio-accent">
                    In Progress · 2026
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AchievementsAndCertifications() {
  return (
    <section id="achievements" className="bg-portfolio-dark px-5 py-20 sm:px-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Achievements */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-2 text-portfolio-accent">
                <Trophy className="size-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">Milestones</p>
              </div>
              <h2 className="hero-heading mt-2 text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-none">
                Achievements
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-4">
              {achievements.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-portfolio-line bg-portfolio-surface p-5 transition-colors hover:border-portfolio-text">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-portfolio-dark text-portfolio-accent">
                      <Award className="size-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-bold uppercase text-portfolio-text">
                          {item.title}
                        </h3>
                        <span className="rounded-full border border-portfolio-line px-2 py-0.5 text-[10px] uppercase text-portfolio-muted">
                          {item.year}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-light text-portfolio-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications">
            <FadeIn>
              <div className="flex items-center gap-2 text-portfolio-accent">
                <GraduationCap className="size-4" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">Verified Credentials</p>
              </div>
              <h2 className="hero-heading mt-2 text-[clamp(2.5rem,7vw,5rem)] font-black uppercase leading-none">
                Certifications
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-4">
              {certifications.map((cert, i) => (
                <FadeIn key={cert.title} delay={i * 0.08}>
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-portfolio-line bg-portfolio-surface p-5 transition-colors hover:border-portfolio-text">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-portfolio-accent">
                        {cert.date}
                      </span>
                      <h3 className="mt-1 text-base font-bold uppercase text-portfolio-text">
                        {cert.title}
                      </h3>
                      <p className="mt-1 text-xs text-portfolio-muted">
                        Certificate credential verified from official coursework.
                      </p>
                    </div>

                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="grid size-9 shrink-0 place-items-center rounded-full border border-portfolio-line text-portfolio-text hover:bg-portfolio-line"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wider text-portfolio-muted">
                        Verified
                      </span>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="bg-portfolio-dark px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-portfolio-accent">
            Academic Foundation
          </p>
          <h2 className="hero-heading text-[clamp(3.5rem,10vw,8rem)] font-black uppercase leading-none">
            Education
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-6">
          {education.map((item, i) => (
            <FadeIn key={item.institution} delay={i * 0.08}>
              <div
                className={`grid gap-4 rounded-2xl border p-6 sm:grid-cols-[200px_1fr] sm:p-8 ${
                  item.isCurrent
                    ? "border-portfolio-accent bg-portfolio-surface/90 shadow-lg shadow-portfolio-accent/5"
                    : "border-portfolio-line bg-portfolio-surface"
                }`}
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-portfolio-accent">
                    {item.period}
                  </span>
                  {item.isCurrent && (
                    <span className="mt-2 block w-fit rounded-full bg-portfolio-accent/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-portfolio-accent">
                      Current Degree
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase text-portfolio-text sm:text-2xl">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-portfolio-muted sm:text-base">
                    {item.degree}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-portfolio-muted">
                    <span>📍 {item.location}</span>
                    <span>•</span>
                    <span className="font-semibold text-portfolio-text">{item.score}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-portfolio-dark px-5 pb-8 pt-20 sm:px-8 md:px-10">
      <div className="rounded-t-[40px] bg-portfolio-light px-6 py-16 text-portfolio-light-ink sm:rounded-t-[52px] sm:px-10 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-portfolio-light-muted">
              Get in Touch
            </p>
            <h2 className="mt-4 max-w-4xl text-[clamp(2.8rem,8.5vw,7.5rem)] font-black uppercase leading-[0.92]">
              {personal.contactCta}
            </h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-portfolio-light-muted sm:text-lg">
              Feel free to reach out for student internship opportunities, open source collaborations, or web development projects.
            </p>
          </FadeIn>

          <div className="mt-12 flex flex-col gap-6 border-t border-portfolio-light-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 text-sm font-semibold sm:text-xl text-portfolio-light-ink hover:text-portfolio-accent transition-colors"
              >
                <Mail className="size-5 shrink-0" />
                <span className="break-all">{personal.email}</span>
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="flex items-center gap-2 text-xs font-medium text-portfolio-light-muted sm:text-sm">
                <Phone className="size-4" />
                <span>{personal.phone}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="social-link"
              >
                <Github className="size-5" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="social-link"
              >
                <Linkedin className="size-5" />
              </a>
              <ResumeButton label="View résumé" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-portfolio-line px-1 py-7 text-[10px] uppercase tracking-widest text-portfolio-muted sm:flex-row sm:text-xs">
        <span>© 2026 {personal.name}</span>
        <span>Built with React 19, TypeScript & Tailwind CSS</span>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="overflow-x-clip bg-portfolio-dark font-sans text-portfolio-text antialiased selection:bg-portfolio-accent selection:text-white">
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <CurrentlyLearning />
      <AchievementsAndCertifications />
      <Education />
      <Contact />
    </main>
  );
}
