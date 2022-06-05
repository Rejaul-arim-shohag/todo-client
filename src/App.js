import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/createTodo" element={<CreatePage />}/>
        <Route path="/allTodos" element={<ReadPage/>}/>
        <Route path="/UpdateTodo/:id" element={<UpdatePage/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
