import { AnimatePresence } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { FiGithub } from "react-icons/fi";

export function ProjectDialog({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
            fixed top-10 left-0 right-0 bottom-0 z-50
            bg-background/90 backdrop-blur-sm
            flex items-center justify-center
            p-4
          "
        >
          <div
            className="
              w-full max-w-5xl
              h-[95vh] md:h-[85vh]
              bg-background
              border-2 border-primary
              shadow-[0_0_20px_rgba(255,0,255,0.6)]
              flex flex-col
              overflow-hidden
            "
          >
            {/* Header */}
            <div
              className="
                flex justify-between items-start
                px-4 md:px-10
                py-4 md:py-6
                border-b-2
                gap-4
                shrink-0
              "
            >
              <div className="flex flex-col gap-2">
                <h3
                  className="
                    font-press-start
                    text-[10px] md:text-sm
                    text-primary
                    leading-relaxed
                  "
                >
                  {project.title}
                </h3>

                <span
                  className="
                    font-orbitron
                    text-accent
                    border border-accent/60
                    px-3 py-1
                    text-[10px] md:text-xs
                    font-semibold
                    w-fit
                  "
                >
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="
                  w-8 h-8 md:w-9 md:h-9
                  border-2 border-accent
                  text-accent
                  flex items-center justify-center
                  hover:bg-accent/20
                  transition-colors
                  shrink-0
                  cursor-pointer
                "
              >
                <IoMdClose className="text-lg" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Overview */}
              <div className="mt-4 px-4 md:px-10">
                <span
                  className="
                    font-press-start
                    text-[10px] md:text-xs
                    text-accent
                  "
                >
                  OVERVIEW
                </span>

                <p
                  className="
                    mt-2
                    font-orbitron
                    text-muted-foreground
                    text-sm md:text-base
                    leading-relaxed
                  "
                >
                  {project.longDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 px-4 md:px-10">
                <span
                  className="
                    font-press-start
                    text-[10px] md:text-xs
                    text-accent
                  "
                >
                  TECH STACK
                </span>

                <div className="mt-3 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        text-primary
                        font-orbitron
                        text-xs md:text-sm
                        border border-primary
                        font-semibold
                        px-3 md:px-4
                        py-1.5
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 px-4 md:px-10 pb-8">
                <span
                  className="
                    font-press-start
                    text-[10px] md:text-xs
                    text-accent
                  "
                >
                  KEY FEATURES
                </span>

                <div
                  className="
                    mt-3
                    grid grid-cols-1 md:grid-cols-2
                    gap-3 md:gap-4
                  "
                >
                  {project.features.map((item) => (
                    <span
                      key={item}
                      className="
                        text-muted-foreground
                        bg-card
                        border-2 border-primary/40
                        w-full
                        py-3 px-4
                        font-orbitron
                        text-sm
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed Bottom Section */}
            <div
              className="
                border-t-2
                px-4 md:px-10
                py-4
                shrink-0
              "
            >
              <a
                href="https://www.youtube.com/watch?v=rCKzH0VPVMM&list=RDGMyF41IxReo&index=3"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  w-full sm:w-fit
                  justify-center
                  border-2 border-primary
                  px-4 py-3
                  font-orbitron
                  text-primary
                  font-semibold
                  bg-primary/20
                  hover:bg-primary/40
                  transition-colors
                  cursor-pointer
                  text-sm
                "
              >
                <FiGithub />
                <span>VIEW SOURCE</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}