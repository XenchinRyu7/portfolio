import { useState, useEffect, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rawProjects, setRawProjects] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError("");
        // Use full URL in production, proxy in development
        const apiUrl = import.meta.env.PROD 
          ? 'https://saefulrdevs-portfolio-api.vercel.app/api/projects'
          : '/api/projects';
        const response = await fetch(apiUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const json = await response.json();
        const apiProjects = Array.isArray(json?.data) ? json.data : [];

        // Map API shape to UI needs
        const mapped = apiProjects.map((item, index) => {
          // Derive a compatible category for existing filters
          const tags = Array.isArray(item?.tags) ? item.tags : [];
          const lowerTags = tags.map((t) => String(t).toLowerCase());
          let category = "Other";
          if (lowerTags.includes("web")) category = "Web Application";
          else if (lowerTags.includes("android") || lowerTags.includes("mobile")) category = "Mobile Application";
          else if (lowerTags.includes("desktop")) category = "Desktop Application";

          const imageUrl = item?.images?.[0]?.url || "";

          return {
            id: item.id || String(index + 1),
            title: item.title || "Untitled",
            category,
            img: imageUrl,
          };
        });

        if (isMounted) {
          setRawProjects(apiProjects);
          setProjects(mapped);
        }
      } catch (err) {
        if (isMounted) {
          setError(err?.message || "Failed to load projects");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");

  const searchProjectsByTitle = projects.filter((item) => {
    const result = item.title
      .toLowerCase()
      .includes(searchProject.toLowerCase())
      ? item
      : searchProject === ""
      ? item
      : "";
    return result;
  });

  const selectProjectsByCategory = projects.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        rawProjects,
        isLoading,
        error,
        searchProject,
        setSearchProject,
        searchProjectsByTitle,
        selectProject,
        setSelectProject,
        selectProjectsByCategory,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
