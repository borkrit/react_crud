
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from "./pages/Create";
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main/>}  />
      <Route path="create" element={<Create/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
