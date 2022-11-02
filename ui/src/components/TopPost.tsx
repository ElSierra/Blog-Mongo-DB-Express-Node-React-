import React from "react";

function TopPost(props: any) {
  const backend = props.backEndData;
  //Random number form 0 to 4
const backendLength= backend.length;
  const randomArticle = backend[backendLength-1];

  
  return (
    <div className="col-lg-8 mb-30">
 
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
              <a
                className="img-link"
                href=""
                onClick={() => {
                  props.setPage({
                    title: randomArticle.title,
                    content: randomArticle.content,
                    date: randomArticle.date,
                    postImg: randomArticle.img,
                    authorName: randomArticle.authorName,
                    authorImg: randomArticle.authorImg,
                  });
                }}
              ></a>

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
                  <a className="text-white" href="single.html">
                    {randomArticle.title || ""}
                  </a>
                </h3>
                <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                  <span className="post-on">20 minutes ago</span>
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
