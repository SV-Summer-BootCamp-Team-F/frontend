import { Routes, Route } from "react-router-dom";
import RelationPage from "./pages/Relation/RelationPage.tsx";
import FirstPage from "./pages/FirstPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Second from "./pages/SecondPage";
import Main from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import EnrollPage from "./pages/Card/EnrollPage";
import UserPage from "./pages/User/UserPage";
import RelationGraph from "./components/relation/RelationGraph.tsx";
import TestPage from "./pages/test/TestPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/second" element={<Second />} />
        <Route path="/main" element={<Main />} />
        <Route path="/enrollPage" element={<EnrollPage />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/relationPage" element={<RelationPage />} />
        <Route path="/relationGraph" element={<RelationGraph />} />
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
