import { useContext, createContext, useState, useMemo } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    // Context to toggle sidebar menu state
    const [activeMenu, setActiveMenu] = useState(true);
    const state = useMemo(() => ({ activeMenu, setActiveMenu }), [activeMenu]);
    return (
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
