import { useState } from "react";
import run from "../config/gemini";
import { Context } from "./contextProvider";

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [reecentPrompt, setRecentPrompt] = useState("");





    const onSent = async (prompt) => { 
        await run(prompt);
    };



    const contextValue = {};
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;