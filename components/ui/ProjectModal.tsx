"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

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
    keyFeatures?: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // Format link to ensure it's a valid URL
  const formatLink = (link: string) => {
    if (!link) return "#";
    if (link.startsWith("http://") || link.startsWith("https://")) {
      return link;
    }
    if (link.startsWith("/")) {
      return link;
    }
    return `https://${link}`;
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cn(
                "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                "bg-black-100 border border-white/[0.1] rounded-3xl",
                "shadow-[0_8px_32px_rgb(0_0_0/0.6)]",
                "backdrop-blur-xl"
              )}
              style={{ backgroundColor: "#13162D" }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black-200 hover:bg-black-300 transition-colors border border-white/[0.1]"
                aria-label="Close modal"
              >
                <IoClose className="w-6 h-6 text-white" />
              </button>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Project Image */}
                <div className="relative w-full h-[40vh] md:h-[50vh] mb-6 rounded-2xl overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img
                      src="/bg.png"
                      alt="background"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-h-full object-contain z-10"
                  />
                </div>

                {/* Project Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {project.title}
                </h1>

                {/* Project Description */}
                <p
                  className="text-lg md:text-xl mb-6 leading-relaxed"
                  style={{ color: "#BEC1DD" }}
                >
                  {project.des}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {project.iconLists.filter((icon): icon is string => Boolean(icon)).map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-xl bg-black p-4 w-20 h-20 md:w-24 md:h-24 flex justify-center items-center hover:border-purple transition-colors hover:scale-110"
                      >
                        <img
                          src={icon}
                          alt={`tech-icon-${index}`}
                          className="w-full h-full p-1 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.keyFeatures.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3"
                          style={{ color: "#BEC1DD" }}
                        >
                          <span className="text-purple mt-1.5">▸</span>
                          <span className="text-base md:text-lg leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Live Site Link */}
                <div className="flex items-center justify-center pt-4 border-t border-white/[0.1]">
                  <a
                    href={formatLink(project.link)}
                    target={project.link.startsWith("/") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-full bg-black-200 hover:bg-black-300 border border-white/[0.1] hover:border-purple transition-all group"
                  >
                    <p className="text-lg text-purple font-semibold">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="text-purple group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

