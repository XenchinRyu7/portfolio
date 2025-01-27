const ProjectRelatedProjects = ({ relatedProject }) => {
  if (!relatedProject) {
    return <div>Related Projects not found</div>;
  }

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {relatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {relatedProject.Projects.map((project) => {
          return (
            <img
              src={project.img}
              className="rounded-xl cursor-pointer w-full h-96 object-cover"
              alt={project.title}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
