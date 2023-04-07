
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Person from "./components/Person";
import AdminPage from "./pages/AdminPage";
import Create from "./pages/Create";
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Main/>}  
      >
        
      </Route>
      <Route path="person" element={<Person/>} />
      <Route path="create" element={<Create/>} />
      <Route path="/admin/*" element={<AdminPage/>} />


    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
