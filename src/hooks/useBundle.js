import { useContext } from "react";
import BundleContext from "../context/BundleContext";

const useBundle = () => {
  const context = useContext(BundleContext);

  if (!context) {
    throw new Error("useBundle must be used within BundleProvider");
  }

  return context;
};

export default useBundle;
