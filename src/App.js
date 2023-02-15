// import react from 'react'

import PropTypesPractice from "./PropTypesPractice";

function App(){
 const friends =["Aszad", "Athar", "Luqman"]
    return(
        <>
        <PropTypesPractice name="Musharraf" age={22 } isMarried={false}  arr={friends}/>
        <h1>this is App</h1>
        </>
    )
}
export default App;