import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { motion } from "framer-motion";
import { SingleProjectContext } from "../context/SingleProjectContext";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectSingle = () => {
  const { projectId } = useParams();
  const { singleProjectData } = useContext(SingleProjectContext);

  const project = singleProjectData.find(
    (project) => project.id === parseInt(projectId)
  );

  useEffect(() => {}, [project]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        Project not found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <ProjectHeader projectHeader={project.ProjectHeader} />
      <ProjectGallery projectImages={project.ProjectImages} />
      <ProjectInfo projectInfo={project.ProjectInfo} />
      <ProjectRelatedProjects relatedProject={project.RelatedProject} />
    </motion.div>
  );
};

export default ProjectSingle;
