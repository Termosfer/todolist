import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./Create";
import Modal from "./Modal";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Create/>}/>
      <Route path="edit/:id" element={<Modal/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


