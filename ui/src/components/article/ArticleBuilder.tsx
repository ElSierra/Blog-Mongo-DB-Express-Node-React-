import React from "react";
import Category from "./Category";
import { Outlet, Link } from "react-router-dom";
function ArticleBuilder(props: any) {
  return (
    <article className="col-md-6 mb-40 wow fadeInUp  animated">
      <div className="post-card-1 border-radius-10 hover-up">
        <div
          className="post-thumb thumb-overlay img-hover-slide position-relative"
          style={{ backgroundImage: `url(${props.postImg})` }}
        >
          <a
            className="img-link"
            href=""
            onClick={() => {
              props.setPage({
                title: props.title,
                content: props.content,
                date: props.date,
                postImg: props.postImg,
                link: props.link,
              });
            }}
          ></a>
        </div>
        <div className="post-content p-30">
          <Category />
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 font-weight-900">
              <a href="single.html">{props.title}</a>
            </h5>
            <div className="post-excerpt mb-25 font-small text-muted">
              <p>{props.desc}</p>
            </div>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">{props.date}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default ArticleBuilder;
