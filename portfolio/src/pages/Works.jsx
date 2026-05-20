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
      text: "DESKTOP APP",
    },
    {
      id: 3,
      text: "DATA",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Shopee Clone",
      description:
        "Full-stack e-commerce solution with real-time inventory management",
      category: "WEB",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "An e-commerce application used by sellers and customers to browse products, place orders, and manage accounts, supporting smooth online buying and selling operations",
      tech: ["Express.js", "MySQL", "ReactJS", "Postgre"],
      features: [
        "Customer and shop management with role-based access control.",
        "Product management with categories, inventory, pricing, and product variants.",
        "Shopping cart and order processing workflow for customers.",
        "Review and rating system for products and shops.",
      ],
      stats: {
        users: "10K+",
        uptime: "99.9%",
        performance: "95 Lighthouse",
      },
      githubUrl: "https://github.com/dhuy00/MDM_project",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Project management system with task tracking, issue management, and team collaboration features",
      category: "WEB",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "A collaborative task management platform inspired by Redmine, built to help teams organize projects, track tasks and issues, and manage daily workflows more efficiently. The application provides features for task assignment, progress tracking, team collaboration, and project management in a simple and user-friendly interface.",
      tech: ["React", "Node.js", "Postgre"],
      features: [
        "Task and issue tracking with status management",
        "Project and team collaboration workspace",
        "Role-based access control for members and managers",
        "Dashboard for monitoring project progress and activity",
      ],
      stats: {
        users: "5K+",
        uptime: "99.8%",
        performance: "92 Lighthouse",
      },
      githubUrl: "https://github.com/dhuy00/Knowly",
      liveUrl: "https://task-demo.com",
    },
    {
      id: 3,
      title: "University Management App",
      description: "A Windows Forms application for managing students, staff, and courses with role-based access control and auditing.",
      category: "DESKTOP APP",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "A Windows Forms university management application developed to support the administration of students, staff, and courses within an educational environment. The system includes role-based access control and auditing mechanisms to ensure secure data management and user accountability. Built with C# and Oracle, the application focuses on managing academic information efficiently while applying database security models such as DAC, RBAC, and OLS for authentication and authorization.",
      tech: ["C#", "Oracle"],
      features: [
        "Authentication and authorization using DAC, RBAC, and OLS",
        "Student, staff, and course management system",
        "Audit logging to track user activities and data changes",
        "Role-based dashboard and permission control for different user types",
      ],
      stats: {
        users: "5K+",
        uptime: "99.8%",
        performance: "92 Lighthouse",
      },
      githubUrl: "https://github.com/dhuy00/University-Management-App",
      liveUrl: "https://task-demo.com",
    },
    {
      id: 4,
      title: "Employee Management Project",
      description: "A web application for managing employee records, roles, and access with role-based control, attendance tracking, and payroll management.",
      category: "WEB",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        "A web-based enterprise management system designed to streamline employee operations and internal workflows. The application supports employee management, attendance tracking, payroll processing, and role-based access control to help organizations manage daily activities more efficiently. Built with ReactJS, Spring Boot, and PostgreSQL, the system focuses on providing a responsive user experience and scalable backend architecture for internal business management.",
      tech: ["ReactJS", "Spring Boot", "PostgreSQL", "Redux Toolkit"],
      features: [
        "Employee and department management system",
        "Attendance tracking and payroll management",
        "Role-based access control and permission handling",
        "Internal request and workflow management for employees",
      ],
      stats: {
        users: "5K+",
        uptime: "99.8%",
        performance: "92 Lighthouse",
      },
      githubUrl: "https://gitlab.com/ZR1ck/empmanagement",
      liveUrl: "https://task-demo.com",
    },
    {
      id: 5,
      title: "GeoMart Analytics Warehouse",
      description: "A data warehouse and OLAP analytics project that integrates multiple data sources into a centralized DW, enabling multidimensional analysis, reporting, and business insights through Cube design and visual dashboards..",
      category: "DATA",
      imageUrl:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
      longDescription:
        `GeoMart Analytics Warehouse is a Business Intelligence project that uses ETL processes to integrate data into a centralized Data Warehouse, supporting OLAP analysis, multidimensional reporting, and interactive dashboards for business insights.`,
      tech: ["SQL Server", "SSIS", "SSAS"],
      features: [
        "Extracts, transforms, cleans, and loads data from multiple sources into a centralized Data Warehouse.",
        "Designs Geography, Date, and other dimensions with hierarchical structures for efficient OLAP analysis.",
        "Supports multidimensional analysis with drill-down, roll-up, slicing, and dicing capabilities.",
        "Generates analytical dashboards and visual reports to provide actionable business insights.",
      ],
      stats: {
        users: "5K+",
        uptime: "99.8%",
        performance: "92 Lighthouse",
      },
      githubUrl: "https://github.com/dhuy00/project_BI",
      liveUrl: "https://task-demo.com",
    },
  ];
  const [selectedProject, setSelectedProject] = useState(null)
  const selectedProjectInfo = projects.find((project) => project.id === selectedProject)

  const closeDialog = () => {
    setSelectedProject(null)
  }

  const buttonStyle = `flex items-center gap-2 px-6 py-2 border-2 border-muted-foreground/30
    text-muted-foreground font-semibold cursor-pointer`;

  const filteredProjects =
  activeTab === 0
    ? projects
    : projects.filter((project) => project.category === tabs[activeTab].text);

  return (
    <div className="w-screen relative py-24" id="work">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent tracking-normal">
          MY <span className="text-primary">PROJECTS</span>
        </h1>
        <span className="font-orbitron text-muted-foreground">
          Things I’ve built while learning and growing as a developer
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
          {filteredProjects.map((project) => (
            <ProjectCard project={project} setSelectedProject={setSelectedProject}/>
          ))}
        </div>
      </div>
      <ProjectDialog onClose={closeDialog} isOpen={selectedProject != null} project={selectedProjectInfo}/>
    </div>
  );
};

export default Works;
