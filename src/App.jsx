import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog_form from "./Blog_form";
import CardDetail from "./CardDetail";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/form"
        element={<Blog_form blogs={blogs} setBlogs={setBlogs} />}
      />
      <Route path="/details/:id" element={<CardDetail blogs={blogs} />} />
    </Routes>
  );
};

export default App;
