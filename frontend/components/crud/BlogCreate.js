import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createBlog } from "../../actions/blog";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import "../../node_modules/react-quill/dist/quill.core.css";

const CreateBlog = ({ router }) => {
  return (
    <div>
      <h2>create blog component</h2>
      {JSON.stringify(router)}
    </div>
  );
};

export default withRouter(CreateBlog);
