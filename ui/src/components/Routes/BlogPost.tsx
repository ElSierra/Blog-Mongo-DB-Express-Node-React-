import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../Form";
function BlogPost() {


  const {state} = useLocation();
  const {title,content,date,postImg,link} = state;
  return (
    <main className="bg-grey pb-30">
      <div className="container single-content">
        <div className="entry-header entry-header-style-1 mb-50 pt-50">
          <h1 className="entry-title mb-50 font-weight-900">{title}</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                <p className="mb-5">
                  <a className="author-avatar" href="">
                    <img
                      className="img-circle"
                      src="assets/imgs/authors/author-3.jpg"
                      alt=""
                    />
                  </a>
                  By{" "}
                  <a href="author.html">
                    <span className="author-name font-weight-bold">
                      Barbara Cartland
                    </span>
                  </a>
                </p>
                <span className="mr-10"> {date}</span>
                <span className="has-dot"> 8 mins read</span>
              </div>
            </div>
            
          </div>
        </div>

        <figure className="image mb-30 m-auto text-center border-radius-10">
          <img className="border-radius-10" src={postImg} alt="post-title" />
        </figure>

        <article className="entry-wraper mb-50">
          <div className="excerpt mb-30">
            <p></p>
          </div>
          <div className="entry-main-content dropcap wow fadeIn animated">
            <hr className="wp-block-separator is-style-dots" />
            <p>{content}</p>

            <hr className="section-divider" />
          </div>

          <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
            <div className="author-image mb-30">
              <a href="author.html">
                <img
                  src="assets/imgs/authors/author-3.jpg"
                  alt=""
                  className="avatar"
                />
              </a>
            </div>
            <div className="author-info">
              <h4 className="font-weight-bold mb-20">
                <span className="vcard author">
                  <span className="fn">
                    <a
                      href="author.html"
                      title="Posted by Barbara Cartland"
                      rel="author"
                    >
                      Barbara Cartland
                    </a>
                  </span>
                </span>
              </h4>
              <h5 className="text-muted">About author</h5>
              <div className="author-description text-muted">
                You should write because you love the shape of stories and
                sentences and the creation of different words on a page.{" "}
              </div>
              <a href="author.html" className="author-bio-link mb-md-0 mb-3">
                View all posts (125)
              </a>
              <div className="author-social">
                <ul className="author-social-icons">
                  <li className="author-social-link-facebook">
                    <a href="#" target="_blank">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="author-social-link-twitter">
                    <a href="#" target="_blank">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="author-social-link-pinterest">
                    <a href="#" target="_blank">
                      <i className="ti-pinterest"></i>
                    </a>
                  </li>
                  <li className="author-social-link-instagram">
                    <a href="#" target="_blank">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comment-form wow fadeIn animated">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Leave a Reply</h5>
            </div>
            <form
              className="form-contact comment_form"
              action="#"
              id="commentForm"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="comment"
                      id="comment"
                      cols={30}
                      rows={9}
                      placeholder="Write Comment"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="website"
                      id="website"
                      type="text"
                      placeholder="Website"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn button button-contactForm">
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </main>
  );
}
export default BlogPost;
