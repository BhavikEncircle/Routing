import React, { Fragment } from "react";

const Blogs = ({ blogs, index, deleteHandler }) => {
  return (
    <div
      className="flex flex-col border gap-2 my-2 rounded bg-violet-50 border-violet-200
"
    >
      <div className="m-2 flex justify-between px-3">
        <div>
          <h2 className="text-3xl font-black">{blogs.title}</h2>
          <p className="text-xl font-gray text-gray-600">{blogs.content}</p>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => deleteHandler(index)}
            className="bg-red-500 p-2 rounded"
          >
            Delete blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
