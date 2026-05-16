import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";
import ProjectCard from "../components/works/ProjectCard";
import { ProjectDialog } from "../components/works/ProjectDialog";

const Works = () => {
  const [activeTab, setIsActive] = useState(0);

  const tabs = [
    {
      id: 0,
      text: "ALL",
    },
    {
      id: 1,
      text: "WEB",
    },
    {
      id: 2,
      text: "MOBILE",
    },
    {
      id: 3,
      text: "OPEN SOURCE",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      category: "WEB",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "A modern e-commerce platform featuring authentication, payments, inventory management, analytics dashboard, and order tracking.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      features: [
        "Secure authentication",
        "Real-time inventory",
        "Stripe payment integration",
        "Admin dashboard",
      ],
      stats: {
        users: "10K+",
        uptime: "99.9%",
        performance: "95 Lighthouse",
      },
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
    },

    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative productivity app for teams and freelancers",
      category: "WEB",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "Task and project management application with drag-and-drop support, team collaboration, and analytics.",
      tech: ["React", "Node.js", "MongoDB"],
      features: [
        "Kanban board",
        "Team collaboration",
        "Task analytics",
        "Notifications",
      ],
      stats: {
        users: "5K+",
        uptime: "99.8%",
        performance: "92 Lighthouse",
      },
      githubUrl: "https://github.com/yourusername/task-app",
      liveUrl: "https://task-demo.com",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(null)
  const selectedProjectInfo = projects.find((project) => project.id === selectedProject)

  const closeDialog = () => {
    setSelectedProject(null)
  }

  const buttonStyle = `flex items-center gap-2 px-6 py-2 border-2 border-muted-foreground/30
    text-muted-foreground font-semibold`;

  return (
    <div className="w-screen relative py-24" id="work">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent">
          MY <span className="text-primary">WORK</span>
        </h1>
        <span className="font-orbitron text-muted-foreground">
          Featured projects that showcase my expertise
        </span>

        {/* Tabs */}
        <div className="flex gap-4 font-orbitron mt-12">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`${buttonStyle} ${
                activeTab === item.id
                  ? "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,0,255,0.4)] "
                  : "hover:border-accent hover:text-accent transition hover:scale-105 text-muted-foreground"
              }`}
            >
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          {projects.map((project) => (
            <ProjectCard project={project} setSelectedProject={setSelectedProject}/>
          ))}
        </div>
      </div>
      <ProjectDialog onClose={closeDialog} isOpen={selectedProject != null} project={selectedProjectInfo}/>
    </div>
  );
};

export default Works;
