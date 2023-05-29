import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Gym/Home";
import Input from "./components/Input";
import Prog from "./Gym/Prog"
import { Fragment } from "react";
import Antrenori from "./Gym/Antrenor";



 function App() {
  return(
  <Fragment>
    <div className="container">
      <Home />
      <Input />
      
      <Prog />
      <Antrenori/>
      </div>
  </Fragment>
  );
 }

export default App;
