import React from "react";
import { Link } from "react-router-dom";

function TopPost(props: any) {
  const backend = props.backEndData;
  //Random number form 0 to 4
  const backendLength = backend.length;
  const randomArticle = backend[backendLength - 1] || 0;

  function timeSince(date: any) {
    var seconds = Math.floor((new Date().getTime() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  console.log(timeSince(randomArticle.timestamp));

  return (
    <div className="col-lg-8 mb-30" style={{ maxWidth: "100%", flex: "100%" }}>
      <div
        className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated"
        style={{
          backgroundImage: `url(${randomArticle.img})`,
          backgroundSize: "cover",
        }}
      >
        <div className="arrow-cover"></div>
        <div className="slide-fade">
          <div className="position-relative post-thumb">
            <div className="thumb-overlay img-hover-slide position-relative">
           
              <Link
              className="img-link"
                to={"/blogPost/" + randomArticle._id}
                state={{
                  title: randomArticle.title,
                  content: randomArticle.content,
                  date: randomArticle.date,
                  postImg: randomArticle.img,
                  authorName: randomArticle.authorName,
                  authorImg: randomArticle.authorImg,
                }}
              ></Link>

              <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                {/* <div className="entry-meta meta-0 font-small mb-20">
                  <a href="category.html">
                    <span className="post-cat text-info text-uppercase">
                      Travel
                    </span>
                  </a>
                  <a href="category.html">
                    <span className="post-cat text-success text-uppercase">
                      Animal
                    </span>
                  </a>
                </div> */}
                <h3 className="post-title font-weight-900 mb-20">
                 
                    {randomArticle.title || "Refresh Page Please"}
                  
                </h3>
                <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                  <span className="post-on">{timeSince(randomArticle.timestamp)} ago</span>
                  <span className="hit-count has-dot">
                    {randomArticle.authorName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopPost;
