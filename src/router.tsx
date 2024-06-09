import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "components/Header";
import About from "pages/About";
import Projects from "pages/Projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="*" />
        <Route element={<About />} path="/about" />
        <Route element={<Projects />} path="/projects" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
