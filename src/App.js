// import react from 'react'
// import PropTypesPractice from "./PropTypesPractice";
// import {ReactLifeCycle} from "./ReactLifeCycle"
import ListUpdate from "./ListUpdate";
import UseState from "./UseState";
// import UseEffectPractice from "./UseEffectPractice"
// import UseRefPractice from "./UseRefPractice";
// import { createContext, useRef, useState } from "react";
import ControlledForm from "./ControlledForm";
import MultiCheckbox from "./MultiCheckbox";
// import OtherInputs from "./OtherInputs";
// import UseContextPractice from "./UseContextPractice";
// import MultiCheck from "./MultiCheck";
// import UseRefPracitce from "./UseRefPracitce";
import RouterPractice from "./RouterPractice"
import "./App.css"
import { Route, Routes } from "react-router-dom";
import NavLink from "./NavLink";
import PageNotFound from "./PageNotFound";
// import BootstrapPractice from "./BootstrapPractice";
import GridBs from "./GridBs";

// export const myContext = createContext()
function App(){
//  const friends =["Aszad", "Athar", "Luqman"]
    // const [name, setName] = useState("Musharraf Panwar")
    // const myRef = useRef("Mohd Musharraf")
    // function handleClick(){
    //     setName("Aszad ")
    // }

    return(
        <>
        <NavLink/>
        <Routes>
            <Route path="/" element={ <RouterPractice/>}>
                <Route index element={<ControlledForm/>}/>
                <Route path={"signUp"} element={<ControlledForm/>}/>
                <Route path="login" element={<MultiCheckbox/>}/>
            </Route>
            <Route path="/about" element={ <ListUpdate/>}/>
            <Route path="/BootStrap" element={ <GridBs/>}/>
            <Route path="/use" element={<UseState/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
       
        {/* <UseRefPracitce/> */}
        {/* <MultiCheck/> */}
        {/* <MultiCheckbox/> */}
        {/* <OtherInputs/> */}
        {/* <ControlledForm/> */}
        {/* <myContext.Provider value={name}>

        <UseContextPractice/>
        </myContext.Provider> */}

        {/* <button onClick={handleClick}>Change name</button> */}
        {/* <UseRefPractice/> */}
        {/* <UseEffectPractice/> */}
        {/* <UseState/> */}
        {/* <ListUpdate/> */}
        {/* <ReactLifeCycle/> */}

        {/* <PropTypesPractice name="Musharraf" age={22 } isMarried={false}  arr={friends}/>
        <h1>this is App</h1> */}
        </>
    )
}
export default App;