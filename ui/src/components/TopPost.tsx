import React from "react";
function TopPost() {
  return (
    <div className="col-lg-8 mb-30">
      <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <div className="slide-fade">
          <div className="position-relative post-thumb">
            <div className="thumb-overlay img-hover-slide position-relative">
              <a className="img-link" href="single.html"></a>
              <span className="top-left-icon bg-warning">
                <i className="elegant-icon icon_star_alt"></i>
              </span>
              <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                <div className="entry-meta meta-0 font-small mb-20">
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
                </div>
                <h3 className="post-title font-weight-900 mb-20">
                  <a className="text-white" href="single.html">
                    Beachmaster Elephant Seal Fights off Rival Male, The match
                    is uncompromising
                  </a>
                </h3>
                <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                  <span className="post-on">20 minutes ago</span>
                  <span className="hit-count has-dot">23k Views</span>
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