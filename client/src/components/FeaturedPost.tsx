import React from "react";
function FeaturedPost() {
  //TIME PASSED FORM SPECIFIC TIME
 
  return (
    <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
      <div className="post-card-1 border-radius-10 hover-up">
        <div className="post-thumb thumb-overlay img-hover-slide position-relative">
          <a className="img-link" href="single.html"></a>
          <ul className="social-share">
            <li>
              <a href="#">
                <i className="elegant-icon social_share"></i>
              </a>
            </li>
            <li>
              <a
                className="fb"
                href="#"
                title="Share on Facebook"
                target="_blank"
              >
                <i className="elegant-icon social_facebook"></i>
              </a>
            </li>
            <li>
              <a className="tw" href="#" target="_blank" title="Tweet now">
                <i className="elegant-icon social_twitter"></i>
              </a>
            </li>
            <li>
              <a className="pt" href="#" target="_blank" title="Pin it">
                <i className="elegant-icon social_pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="post-content p-30">
          <div className="entry-meta meta-0 font-small mb-10">
            <a href="category.html">
              <span className="post-cat text-warning">Fashion</span>
            </a>
          </div>
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 font-weight-900">
              <a href="single.html">Put Yourself in Your Customers Shoes</a>
            </h5>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">17 July</span>
              <span className="time-reading has-dot">8 mins read</span>
              <span className="post-by has-dot">12k views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default FeaturedPost;
