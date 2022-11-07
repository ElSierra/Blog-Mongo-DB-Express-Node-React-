import React from "react";

function Category(props: any) {
  return (
    <div className="entry-meta meta-0 font-small mb-10">
      <a href={"/" + props.category}>
        <span className="post-cat text-success">{props.category}</span>
      </a>
    </div>
  );
}

export default Category;
