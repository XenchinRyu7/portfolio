import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { motion } from "framer-motion";
import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectSingle = () => {
  const { projectId } = useParams();
  const { rawProjects, isLoading, error } = useContext(ProjectsContext);

  const apiProject = useMemo(() => {
    if (!rawProjects || rawProjects.length === 0) return undefined;
    // projectId comes from grid link, we used item.id (uuid) there
    return rawProjects.find((p) => String(p.id) === String(projectId) || String(p.slug) === String(projectId));
  }, [rawProjects, projectId]);

  const mapped = useMemo(() => {
    if (!apiProject) return undefined;
    const firstImage = apiProject?.images?.[0]?.url || "";
    const tags = Array.isArray(apiProject?.tags) ? apiProject.tags.join(", ") : "";
    const techs = Array.isArray(apiProject?.technologies) ? apiProject.technologies : [];
    const github = apiProject?.links?.github || "";
    const demo = apiProject?.links?.demo || "";

    return {
      ProjectHeader: {
        title: apiProject.title || "Untitled",
        publishDate: apiProject.startDate || "",
        tags,
      },
      ProjectImages: [
        { id: 1, title: apiProject.title || "", img: firstImage },
      ],
      ProjectInfo: {
        ClientHeading: "Project Info",
        CompanyInfo: [
          { id: 1, title: "Role", details: apiProject.role || "" },
          { id: 2, title: "Status", details: apiProject.status || "" },
          { id: 3, title: "Period", details: `${apiProject.startDate || ""} - ${apiProject.endDate || ""}` },
          { id: 4, title: "Website", details: demo },
          { id: 5, title: "GitHub", details: github },
        ],
        ObjectivesHeading: "Features",
        ObjectivesDetails: (apiProject.features || []).join(", "),
        Technologies: [
          { id: 1, title: "Technologies", techs },
        ],
        SocialSharingHeading: "Links",
        SocialSharing: [
          { id: 1, icon: "🌐", url: demo },
          { id: 2, icon: "💻", url: github },
        ],
        ProjectDetailsHeading: "Description",
        ProjectDetails: [
          { id: 1, details: apiProject.description || apiProject.shortDescription || "" },
        ],
      },
      RelatedProject: {
        title: "Gallery",
        Projects: (apiProject.images || []).map((img, idx) => ({ id: idx + 1, title: apiProject.title || "", img: img.url })),
      },
    };
  }, [apiProject]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading project...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!mapped) {
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
      <ProjectHeader projectHeader={mapped.ProjectHeader} />
      <ProjectGallery projectImages={mapped.ProjectImages} />
      <ProjectInfo projectInfo={mapped.ProjectInfo} />
      <ProjectRelatedProjects relatedProject={mapped.RelatedProject} />
    </motion.div>
  );
};

export default ProjectSingle;
