import React, { Fragment } from "react";
import Blog_form from "./Blog_form";

const App = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-black">Welcome to Blogs</h1>
        <br />
        <h2 className="text-xl font-bold">Share your thoughts here</h2>
        <Blog_form />
      </div>
    </Fragment>
  );
};

export default App;
