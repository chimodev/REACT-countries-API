import "./app.css"
import Nav from './nav.js'
import Filter from './filter.js';
import Country from "./country";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Filter/>}/>
        <Route exact path="/country/:name" element={<Country/>}/>
      </Routes>
    </>
  );
}

export default App;
