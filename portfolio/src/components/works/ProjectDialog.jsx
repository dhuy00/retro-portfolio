import { AnimatePresence } from "motion/react";
import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaBolt,
  FaStar,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiGithub } from "react-icons/fi";


export function ProjectDialog({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex
          justify-center items-center"
          >
            <div
              className="w-[60%] h-[75%] mt-10 border-primary border-2 
            shadow-[0_0_20px_rgba(255,0,255,0.6)] z-50 flex flex-col"
            >
              <div className="flex justify-between px-10 py-6 items-start border-b-2">
                <div className="flex flex-col gap-2">
                  <h3 className="font-press-start text-sm text-primary">
                    {project.title}
                  </h3>
                  <span
                    className="font-orbitron text-accent border-1 px-3.5 py-1 border-accent/60 text-xs
                font-semibold w-fit"
                  >
                    {project.category}
                  </span>
                </div>
                <div
                  className="text-accent w-9 h-9 border-accent border-2 items-center justify-center flex
              hover:bg-accent/20 cursor-pointer"
                >
                  <IoMdClose className="text-lg" />
                </div>
              </div>

              <div className="mt-4 px-10">
                <span className="font-press-start text-xs text-accent">
                  OVERVIEW
                </span>
                <p className="mt-2 font-orbitron text-muted-foreground">
                  {project.longDescription}
                </p>
              </div>

              <div className="mt-4 px-10">
                <span className="font-press-start text-xs text-accent">
                  TECH STACK
                </span>
                <div className="mt-2 flex flex-wrap gap-4">
                  {project.tech.map((item) => (
                    <span
                      className="text-primary font-orbitron text-[14px] border border-primary font-semibold
                    px-4 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 px-10">
                <span className="font-press-start text-xs text-accent">
                  KEY FEATURES
                </span>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {project.features.map((item) => (
                    <span
                      className="text-muted-foreground bg-card border-2 border-primary/40 w-[100%] py-2.5 px-4
                      font-orbitron"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <span className="w-full flex mt-8 px-10">
                <span className="bg-primary/30 h-[2px] w-full"></span>
              </span>

              <div className="px-10 mt-10">
                <div className="flex items-center">
                  <FiGithub />
                  VIEW SOURCE
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
