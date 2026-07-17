import { useEffect, useReducer } from "react";
import BundleContext from "./BundleContext";
import bundleReducer, { initialState } from "./bundleReducer";
import { loadState, saveState } from "../utils/bundleStorage";

const BundleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    bundleReducer,
    initialState,
    () => loadState() || initialState,
  );

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <BundleContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
};

export default BundleProvider;
