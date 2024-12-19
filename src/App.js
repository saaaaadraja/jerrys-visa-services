import React from "react";

import Routs from "./Routs";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css' 
import './assets/css/mediaQueries.css'
import LoadingSpinner from "./component/LoadingSpinner";

function App() {
  let [isLoader , setIsLoader] = React.useState(true);
  React.useEffect(()=>{
    setTimeout(() => {
      setIsLoader(false);
    }, 2000);
  },[])
  return (
    <div style={{overflowX:'hidden'}}>
     {isLoader ?  <LoadingSpinner/>  :<Routs/>}
    </div>
  );
}

export default App;
