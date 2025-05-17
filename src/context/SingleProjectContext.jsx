import { useState, createContext } from "react";
import { detailProject as singleProjectDataJson } from "../data/detailProject.jsx";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson
  );

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export { SingleProjectContext };
export default SingleProjectProvider;
