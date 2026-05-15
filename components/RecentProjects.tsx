"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  Database,
  ExternalLink,
  Layers3,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { projects } from "@/data";
import { cn } from "@/lib/utils";
import ProjectModal from "./ui/ProjectModal";

type Project = (typeof projects)[number];
type ToolCategory = "all" | "frontend" | "backend" | "database" | "ai";

const toolFilters: {
  id: ToolCategory;
  label: string;
  icon: typeof Layers3;
}[] = [
  { id: "all", label: "All", icon: Layers3 },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "database", label: "Database", icon: Database },
  { id: "ai", label: "AI & Data", icon: Sparkles },
];

const tools = [
  {
    name: "Next.js",
    type: "Framework",
    category: "frontend",
    image: "/nextjs.png",
    level: 88,
    description: "Used for portfolio UI, API integration, routing, and production-ready React applications.",
    usedFor: "Frontend architecture",
  },
  {
    name: "React JS",
    type: "Library",
    category: "frontend",
    image: "/re.svg",
    level: 86,
    description: "Used to build interactive components, reusable UI patterns, and client-side experiences.",
    usedFor: "Component systems",
  },
  {
    name: "Tailwind CSS",
    type: "Styling",
    category: "frontend",
    image: "/tail.svg",
    level: 90,
    description: "Used for responsive layouts, modern interface styling, and consistent visual systems.",
    usedFor: "UI styling",
  },
  {
    name: "TypeScript",
    type: "Language",
    category: "frontend",
    image: "/ts.svg",
    level: 76,
    description: "Used to improve code reliability with typed components, props, and application contracts.",
    usedFor: "Type safety",
  },
  {
    name: "Laravel",
    type: "Framework",
    category: "backend",
    image: "/laravel.svg",
    level: 90,
    description: "Used for REST APIs, authentication flows, database-backed systems, and backend services.",
    usedFor: "REST API development",
  },
  {
    name: "Spring Boot",
    type: "Framework",
    category: "backend",
    image: "/springboot.svg",
    level: 78,
    description: "Used to build structured Java backend services and API layers for product workflows.",
    usedFor: "Java backend",
  },
  {
    name: "Node.js",
    type: "Runtime",
    category: "backend",
    image: "/nodejs.svg",
    level: 84,
    description: "Used for Express services, server-side logic, API routing, and integration work.",
    usedFor: "Server runtime",
  },
  {
    name: "FastAPI",
    type: "Framework",
    category: "backend",
    image: "/fastapi.png",
    level: 80,
    description: "Used for fast Python APIs, validation services, and OCR-backed workflows.",
    usedFor: "Python API",
  },
  {
    name: "MySQL",
    type: "Database",
    category: "database",
    image: "/mysql.svg",
    level: 86,
    description: "Used for relational schemas, registration records, attendance data, and transactional systems.",
    usedFor: "Relational data",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    category: "database",
    image: "/postgresql.svg",
    level: 82,
    description: "Used for structured data modeling and scalable backend persistence.",
    usedFor: "Data modeling",
  },
  {
    name: "Postman",
    type: "API Tool",
    category: "database",
    image: "/postman.svg",
    level: 88,
    description: "Used to test endpoints, document API behavior, and validate request-response flows.",
    usedFor: "API testing",
  },
  {
    name: "Python",
    type: "Language",
    category: "ai",
    image: "/python.png",
    level: 82,
    description: "Used for data processing, machine learning experiments, OCR, and automation scripts.",
    usedFor: "Data workflows",
  },
  {
    name: "Keras",
    type: "ML Library",
    category: "ai",
    image: "/keras.png",
    level: 74,
    description: "Used for LSTM experiments and deep-learning model exploration.",
    usedFor: "Deep learning",
  },
  {
    name: "PaddleOCR",
    type: "OCR Tool",
    category: "ai",
    image: "/paddleocr.png",
    level: 76,
    description: "Used for document text extraction and validation workflows.",
    usedFor: "OCR extraction",
  },
  {
    name: "YOLOv8",
    type: "Vision Model",
    category: "ai",
    image: "/yolov8.png",
    level: 72,
    description: "Used for computer vision experiments and object detection workflows.",
    usedFor: "Computer vision",
  },
];

const normalizeImagePath = (image: string) => {
  if (!image) return "/bg.png";
  if (image.startsWith("/") || image.startsWith("http")) return image;
  return `/${image}`;
};

const techNames: Record<string, string> = {
  laravel: "Laravel",
  tail: "Tailwind",
  postgresql: "PostgreSQL",
  postman: "Postman",
  next: "Next.js",
  mysql: "MySQL",
  springboot: "Spring Boot",
  kotlin: "Kotlin",
  re: "React",
  nodejs: "Node.js",
  python: "Python",
  keras: "Keras",
  googlecollabs: "Colab",
  fastapi: "FastAPI",
  paddleocr: "PaddleOCR",
  yolov8: "YOLOv8",
  flask: "Flask",
};

const getTechName = (icon: string) => {
  const fileName = icon.split("/").pop()?.split(".")[0] ?? icon;
  return techNames[fileName] ?? fileName;
};

const getProjectDocs = (project: Project) => {
  const docs =
    project.documentation && project.documentation.length > 0
      ? project.documentation
      : [{ title: "Project preview", image: project.img }];

  return docs.map((doc) => ({
    ...doc,
    image: normalizeImagePath(doc.image),
  }));
};

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeToolFilter, setActiveToolFilter] = useState<ToolCategory>("all");
  const [selectedToolName, setSelectedToolName] = useState(tools[0].name);

  const filteredTools = useMemo(() => {
    if (activeToolFilter === "all") return tools;
    return tools.filter((tool) => tool.category === activeToolFilter);
  }, [activeToolFilter]);

  const selectedTool =
    tools.find((tool) => tool.name === selectedToolName) ?? filteredTools[0] ?? tools[0];

  const handleToolFilterChange = (filter: ToolCategory) => {
    setActiveToolFilter(filter);

    const nextTool =
      filter === "all" ? tools[0] : tools.find((tool) => tool.category === filter);

    if (nextTool) setSelectedToolName(nextTool.name);
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 260);
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#000319_0%,#06081e_48%,#140022_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-small-white/[0.025]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-purple/60 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0d1f]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7 lg:p-9">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white-200 shadow-sm">
                  <Wrench className="h-4 w-4" />
                  Tools & Technologies
                </div>
                <h2 className="text-5xl font-bold tracking-normal text-white md:text-6xl">
                  Tools & Technologies
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white-200">
                  Explore the stack I use across backend APIs, product
                  interfaces, data systems, and AI-assisted workflows. Hover or
                  select a card to see where each technology fits in my work.
                </p>
              </div>

              <motion.div
                key={selectedTool.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="relative flex min-h-[13rem] items-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 p-6 shadow-xl shadow-black/20"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple/15 blur-3xl" />
                <div className="relative flex w-full items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white">
                    <Image
                      src={selectedTool.image}
                      alt=""
                      width={46}
                      height={46}
                      className="h-11 w-11 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-purple">
                      {selectedTool.usedFor}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {selectedTool.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white-200">
                      {selectedTool.description}
                    </p>
                  </div>
                </div>
                {/* <div className="relative mt-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-white-200">
                    <span>Working confidence</span>
                    <span>{selectedTool.level}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedTool.level}%` }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="h-full rounded-full bg-purple"
                    />
                  </div>
                </div> */}
              </motion.div>
            </div>

            <div className="mt-10 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/20 p-2">
              {toolFilters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeToolFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => handleToolFilterChange(filter.id)}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-purple",
                      isActive
                        ? "bg-white text-black shadow-lg shadow-purple/20"
                        : "text-white-200 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <motion.div
              layout
              className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {filteredTools.map((tool, index) => {
                const isSelected = selectedTool.name === tool.name;

                return (
                  <motion.button
                    layout
                    key={tool.name}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35, delay: index * 0.035 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    onMouseEnter={() => setSelectedToolName(tool.name)}
                    onFocus={() => setSelectedToolName(tool.name)}
                    onClick={() => setSelectedToolName(tool.name)}
                    className={cn(
                      "group relative flex min-h-[9rem] items-center gap-6 overflow-hidden rounded-2xl border bg-[#11152c] p-6 text-left shadow-sm transition focus:outline-none focus:ring-2 focus:ring-purple",
                      isSelected
                        ? "border-purple/70 shadow-xl shadow-purple/15"
                        : "border-white/10 hover:border-purple/40"
                    )}
                    aria-label={`Select ${tool.name}`}
                  >
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-purple opacity-0 transition group-hover:opacity-100" />
                    <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-white transition group-hover:scale-105">
                      <Image
                        src={tool.image}
                        alt=""
                        width={58}
                        height={58}
                        className="h-14 w-14 object-contain transition group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xl font-bold text-white">
                        {tool.name}
                      </span>
                      <span className="mt-1 block text-base font-medium text-purple">
                        {tool.type}
                      </span>
                      <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white-200">
                        {tool.usedFor}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white-200 backdrop-blur">
              <BookOpenCheck className="h-4 w-4 text-purple" />
              Project archive
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-normal text-white md:text-5xl">
              Selected project work across backend systems and applied AI.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white-200">
              Backend systems, data workflows, AI validation tools, and product
              integrations presented with richer visual documentation.
            </p>
          </div>

          <div className="flex lg:justify-end">
            <a
              href="https://github.com/denmaidenn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-purple/40 pb-2 text-sm font-bold uppercase tracking-[0.22em] text-purple transition hover:border-white hover:text-white"
            >
              View all projects
              <ExternalLink className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const docs = getProjectDocs(project);
            const techStack = project.iconLists
              .filter((icon): icon is string => Boolean(icon))
              .map(getTechName);

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#0a0d1f] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple/50"
              >
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple"
                  aria-label={`Open ${project.title} project details`}
                >
                  <div className="relative h-64 overflow-hidden bg-[#090b20]">
                    <Image
                      src={docs[0].image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 100vw"
                      className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000319]/10 via-[#000319]/20 to-[#0a0d1f]" />
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-5 p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple">
                        {project.type}
                      </p>
                      <h2 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-white">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase text-white-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {techStack.length > 3 && (
                        <span className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold uppercase text-white-200">
                          +{techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default RecentProjects;
