import { useState } from "react";
import { ContextApi } from "./Contextapiseparete";


const ContextApiProvider = ({children}) => {
    const [audio,setaudion]=useState([]);
   const data={
    audio,
    setaudion
   }
    return <ContextApi.Provider value={data}>{children}</ContextApi.Provider>
};

export default ContextApiProvider;