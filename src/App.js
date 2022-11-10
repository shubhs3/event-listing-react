import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/adminpage/adminpage";

import HomePage from "./components/homepage/homepage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

      
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/admin" element={<AdminPage/>}></Route>



      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
