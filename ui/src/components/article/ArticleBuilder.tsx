import React from "react";
import Category from "./Category";
import { Outlet, Link } from "react-router-dom";
function ArticleBuilder(props: any) {
  console.log(props.profile);
  return (
    <div className="post-module-3">
      <div className="loop-list loop-list-style-1">
        <article className="hover-up-2 transition-normal wow fadeInUp animated">
          <div className="row mb-40 list-style-2">
            <div className="col-md-4">
              <div className="post-thumb position-relative border-radius-5">
                <Link
                  to={"/blogPost"}
                  state={{
                    userName: props.profile.name,
                    imageUrl: props.profile.imageUrl,
                    googleId: props.profile.googleId,
                    id: props.id,
                    title: props.title,
                    content: props.content,
                    date: props.date,
                    postImg: props.postImg,
                    authorName: props.authorName,
                    authorImg: props.authorImg,
                  }}
                >
                  <div
                    className="img-hover-slide border-radius-5 position-relative"
                    style={{ backgroundImage: `url(${props.postImg})` }}
                  ></div>
                </Link>
              </div>
            </div>
            <div className="col-md-8 align-self-center">
              <div className="post-content">
                {/* <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"><span className="post-cat text-primary"></span></a>
                        </div> */}
                <h5 className="post-title font-weight-900 mb-20">
                  <Link
                    to={"/blogPost"}
                    state={{
                      id: props.id,
                      title: props.title,
                      content: props.content,
                      date: props.date,
                      postImg: props.postImg,
                      authorName: props.authorName,
                      authorImg: props.authorImg,
                    }}
                  >
                    {props.title}
                  </Link>
                  <a
                    href=""
                    onClick={() => {
                      props.setPage({
                        id: props.id,
                        title: props.title,
                        content: props.content,
                        date: props.date,
                        postImg: props.postImg,
                        authorName: props.authorName,
                        authorImg: props.authorImg,
                      });
                    }}
                  >
                    {props.title}
                  </a>
                </h5>
                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                  <span className="post-on">{props.date}</span>
                  <span className="time-reading has-dot">
                    {props.authorName}
                  </span>
                  <span className="post-by has-dot">3k views</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
export default ArticleBuilder;
