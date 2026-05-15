"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type WheelEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  ImageIcon,
  Maximize2,
  Minimize2,
  Move,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ModalTab = "overview" | "docs" | "screenshots";
type ImageFit = "contain" | "cover";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: (string | undefined)[];
    link: string;
    role?: string;
    type?: string;
    year?: string;
    impact?: string;
    documentation?: {
      title: string;
      image: string;
      caption?: string;
    }[];
    keyFeatures?: string[];
  } | null;
}

const techNames: Record<string, string> = {
  laravel: "Laravel",
  tail: "Tailwind CSS",
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
  googlecollabs: "Google Colab",
  fastapi: "FastAPI",
  paddleocr: "PaddleOCR",
  yolov8: "YOLOv8",
  flask: "Flask",
};

const tabs: {
  id: ModalTab;
  label: string;
  icon: typeof FileText;
}[] = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "docs", label: "Docs", icon: BookOpen },
  { id: "screenshots", label: "Screenshots", icon: Globe2 },
];

const normalizeImagePath = (image: string) => {
  if (!image) return "/bg.png";
  if (image.startsWith("/") || image.startsWith("http")) return image;
  return `/${image}`;
};

const formatLink = (link: string) => {
  if (!link) return "#";
  if (link.startsWith("http://") || link.startsWith("https://")) return link;
  if (link.startsWith("/")) return link;
  return `https://${link}`;
};

const getTechName = (icon: string) => {
  const fileName = icon.split("/").pop()?.split(".")[0] ?? icon;
  return techNames[fileName] ?? fileName;
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<ModalTab>("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [imageFit, setImageFit] = useState<ImageFit>("contain");
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{
    pointerX: number;
    pointerY: number;
    panX: number;
    panY: number;
  } | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const documentation = useMemo(() => {
    if (!project) return [];

    const docs =
      project.documentation && project.documentation.length > 0
        ? project.documentation
        : [{ title: "Project preview", image: project.img }];

    return docs.map((doc) => ({
      ...doc,
      image: normalizeImagePath(doc.image),
    }));
  }, [project]);

  const activeImage = documentation[activeImageIndex];
  const projectLink = project ? formatLink(project.link) : "#";
  const isRepository = project?.link.toLowerCase().includes("github");
  const actionLabel = isRepository ? "Repository" : "Live Demo";
  const techStack =
    project?.iconLists
      .filter((icon): icon is string => Boolean(icon))
      .map(getTechName) ?? [];

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? documentation.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === documentation.length - 1 ? 0 : current + 1
    );
  };

  const resetImageView = () => {
    setZoom(1);
    setImageFit("contain");
    setPan({ x: 0, y: 0 });
    setDragStart(null);
  };

  const clampPan = (
    nextPan: { x: number; y: number },
    nextZoom: number
  ) => {
    const rect = viewerRef.current?.getBoundingClientRect();
    if (!rect || nextZoom <= 1) return { x: 0, y: 0 };

    const maxX = (rect.width * (nextZoom - 1)) / 2 + 120;
    const maxY = (rect.height * (nextZoom - 1)) / 2 + 120;

    return {
      x: Math.min(maxX, Math.max(-maxX, nextPan.x)),
      y: Math.min(maxY, Math.max(-maxY, nextPan.y)),
    };
  };

  const updateZoom = (
    nextZoom: number,
    anchor?: { x: number; y: number }
  ) => {
    const clampedZoom = Math.min(
      3.25,
      Math.max(0.8, Number(nextZoom.toFixed(2)))
    );

    if (!anchor || !viewerRef.current) {
      setZoom(clampedZoom);
      setPan((current) => clampPan(current, clampedZoom));
      return;
    }

    const rect = viewerRef.current.getBoundingClientRect();
    const anchorFromCenter = {
      x: anchor.x - rect.left - rect.width / 2,
      y: anchor.y - rect.top - rect.height / 2,
    };
    const ratio = clampedZoom / zoom;
    const nextPan = {
      x: anchorFromCenter.x - (anchorFromCenter.x - pan.x) * ratio,
      y: anchorFromCenter.y - (anchorFromCenter.y - pan.y) * ratio,
    };

    setZoom(clampedZoom);
    setPan(clampPan(nextPan, clampedZoom));
  };

  const handleViewerWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -0.16 : 0.16;
    updateZoom(zoom + direction, { x: event.clientX, y: event.clientY });
  };

  const handleViewerDoubleClick = (event: MouseEvent<HTMLDivElement>) => {
    updateZoom(zoom >= 2 ? 1 : zoom + 0.75, {
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleViewerPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragStart({
      pointerX: event.clientX,
      pointerY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    });
  };

  const handleViewerPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragStart || zoom <= 1) return;

    setPan(
      clampPan(
        {
          x: dragStart.panX + event.clientX - dragStart.pointerX,
          y: dragStart.panY + event.clientY - dragStart.pointerY,
        },
        zoom
      )
    );
  };

  const handleViewerPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragStart(null);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setActiveTab("overview");
    setActiveImageIndex(0);
    resetImageView();
  }, [project?.id]);

  useEffect(() => {
    resetImageView();
  }, [activeImageIndex, activeTab]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#02030f]/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-5"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
              className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-purple/35 bg-[#100d45] shadow-2xl shadow-black/50 md:grid-cols-[0.86fr_1.74fr]"
            >
              <div className="relative min-h-[18rem] overflow-hidden md:min-h-[42rem]">
                {activeImage && (
                  <Image
                    src={activeImage.image}
                    alt={activeImage.title}
                    fill
                    sizes="(min-width: 768px) 34vw, 100vw"
                    className="object-cover opacity-70"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#16283f]/35 via-[#0b0a20]/20 to-black/70" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur">
                  {project.type ?? project.role ?? "Project"}
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple">
                    {activeImage?.title ?? "Preview"}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white-200">
                    {activeImage?.caption ?? project.impact ?? project.des}
                  </p>
                </div>
              </div>

              <div className="relative max-h-[92vh] overflow-y-auto px-5 py-6 [scrollbar-width:none] sm:px-8 md:px-12 [&::-webkit-scrollbar]:hidden">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                  aria-label="Close project detail"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="mr-16 flex max-w-xl rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-bold uppercase tracking-[0.14em] transition focus:outline-none focus:ring-2 focus:ring-purple sm:text-sm",
                          isActive
                            ? "bg-white text-[#100d45]"
                            : "text-white-200 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {activeTab === "overview" && (
                  <div className="pt-11">
                    <h2
                      id="project-modal-title"
                      className="text-4xl font-bold leading-tight text-white md:text-5xl"
                    >
                      {project.title}
                    </h2>
                    <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aeb5df] md:text-xl">
                      {project.des}
                    </p>

                    <div className="mt-11">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white-200">
                        Core stack
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-xl border border-purple/40 bg-purple/20 px-5 py-3 text-sm font-medium text-[#c9cff6]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-16 flex gap-5">
                      <a
                        href={projectLink}
                        target={project.link.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex min-h-16 flex-1 items-center justify-center gap-3 rounded-2xl bg-white px-6 text-base font-bold text-[#090b1b] transition hover:bg-purple focus:outline-none focus:ring-2 focus:ring-purple"
                      >
                        {actionLabel}
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={projectLink}
                        target={project.link.startsWith("/") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        aria-label="Open project repository or link"
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-purple/35 bg-purple/20 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple sm:h-[4.25rem] sm:w-[4.25rem]"
                      >
                        <Github className="h-7 w-7" />
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === "docs" && (
                  <div className="pt-11">
                    <h2 className="text-3xl font-bold text-white">
                      Project Documentation
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#aeb5df]">
                      {project.impact ?? project.des}
                    </p>

                    <div className="mt-8 grid gap-4">
                      {(project.keyFeatures ?? []).map((feature, index) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                        >
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple">
                            Step {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-3 text-base leading-7 text-white">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "screenshots" && (
                  <div className="pt-11">
                    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          Screenshots
                        </h2>
                        <p className="mt-3 text-base text-[#aeb5df]">
                          {documentation.length} documentation shots available. Scroll over the image to zoom toward your cursor, then drag to explore.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {documentation.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={showPreviousImage}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                              aria-label="Previous screenshot"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                              type="button"
                              onClick={showNextImage}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                              aria-label="Next screenshot"
                            >
                              <ChevronRight className="h-5 w-5" />
                            </button>
                          </>
                        )}
                        <button
                          type="button"
                          onClick={() => updateZoom(zoom - 0.25)}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                          aria-label="Zoom out"
                        >
                          <ZoomOut className="h-5 w-5" />
                        </button>
                        <div className="flex h-11 min-w-16 items-center justify-center rounded-full border border-white/10 bg-black/25 px-3 text-xs font-bold text-white">
                          {Math.round(zoom * 100)}%
                        </div>
                        <button
                          type="button"
                          onClick={() => updateZoom(zoom + 0.25)}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                          aria-label="Zoom in"
                        >
                          <ZoomIn className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setImageFit((current) => (current === "contain" ? "cover" : "contain"));
                            setPan({ x: 0, y: 0 });
                          }}
                          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                          aria-label="Toggle image fit mode"
                        >
                          {imageFit === "contain" ? (
                            <Maximize2 className="h-4 w-4" />
                          ) : (
                            <Minimize2 className="h-4 w-4" />
                          )}
                          {imageFit === "contain" ? "Fill" : "Fit"}
                        </button>
                        <button
                          type="button"
                          onClick={resetImageView}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-[#100d45] focus:outline-none focus:ring-2 focus:ring-purple"
                          aria-label="Reset screenshot view"
                        >
                          <RotateCcw className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
                      <div
                        ref={viewerRef}
                        className="relative h-[min(58vh,34rem)] min-h-[18rem] touch-none overflow-hidden bg-[#060719]"
                        onWheel={handleViewerWheel}
                        onDoubleClick={handleViewerDoubleClick}
                        onPointerDown={handleViewerPointerDown}
                        onPointerMove={handleViewerPointerMove}
                        onPointerUp={handleViewerPointerUp}
                        onPointerCancel={handleViewerPointerUp}
                      >
                        <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                          <Move className="h-4 w-4 text-purple" />
                          {zoom > 1 ? "Drag to pan" : "Wheel or double click to zoom"}
                        </div>
                        {activeImage && (
                          <motion.div
                            key={`${activeImage.image}-${activeImageIndex}`}
                            className={cn(
                              "absolute inset-0",
                              zoom > 1
                                ? "cursor-grab active:cursor-grabbing"
                                : "cursor-zoom-in"
                            )}
                            animate={{
                              x: pan.x,
                              y: pan.y,
                              scale: zoom,
                            }}
                            transition={{
                              ...(dragStart
                                ? { duration: 0 }
                                : {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 30,
                                  }),
                            }}
                            style={{ transformOrigin: "center" }}
                          >
                            <Image
                              src={activeImage.image}
                              alt={activeImage.title}
                              fill
                              sizes="(min-width: 768px) 56vw, 100vw"
                              className={cn(
                                "select-none p-4",
                                imageFit === "contain" ? "object-contain" : "object-cover"
                              )}
                              draggable={false}
                            />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {documentation.map((doc, index) => (
                        <button
                          key={`${doc.title}-${index}`}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          className={cn(
                            "relative aspect-video overflow-hidden rounded-xl border bg-black/30 transition focus:outline-none focus:ring-2 focus:ring-purple",
                            activeImageIndex === index
                              ? "border-white"
                              : "border-white/10 hover:border-purple"
                          )}
                          aria-label={`Show ${doc.title}`}
                        >
                          <Image
                            src={doc.image}
                            alt=""
                            fill
                            sizes="180px"
                            className="object-cover opacity-75"
                          />
                          <div className="absolute left-2 top-2 rounded-full bg-black/60 p-1 text-white">
                            <ImageIcon className="h-3.5 w-3.5" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
