import React, { useEffect, useState } from "react";
import NotSignedIn from "./NotSignedIn";
import FeaturedPost from "./FeaturedPost";
import TopPost from "./TopPost";
import ArticleBuilder from "./article/ArticleBuilder";
import Articles from "../Artcle";
import axios from "axios";
function Body(props: any) {
  interface contentInterface {
    title: String;
    content: String;
    date: String;
    img: String;
  }
  const [backEndData, setBackEndData] = useState<Array<contentInterface>>([]);

  useEffect(() => {
    // Get the notes in the Db
    axios
      .get("/api")
      .then(function (response) {
        // Sends the data response to the {backEndData constant}
        setBackEndData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  //console.log(backEndData);
  return (
    <main>
      <NotSignedIn />
      <div className="container">
        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
          <div className="widget-header-3">
            <div className="row align-self-center">
              <div className="col-md-4 align-self-center">
                <h5 className="widget-title">Featured posts</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="loop-grid mb-30">
          <div className="row">
            <TopPost />
            <FeaturedPost />
          </div>
        </div>
      </div>
      <div className="bg-grey pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-2">
                <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                  <h5 className="mt-5 mb-30">Travel tips</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <div className="row">
                     {backEndData.map((article, index) => {
                      return (
                        <ArticleBuilder
                          key={index}
                          title={article.title}
                          content={article.content}
                          desc={article.content.slice(0, 20) + "..."}
                          date={article.date}
                          postImg={article.img}
                          
                          setPage={props.setPage}
                        />
                      );
                    })} 
                    
                    
                  </div>
                </div>
              </div>

              <div className="pagination-area mb-30 wow fadeInUp animated">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="elegant-icon arrow_left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        04
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="elegant-icon arrow_right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget-area">
                <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                  <img
                    className="about-author-img mb-25"
                    src="assets/imgs/authors/author.jpg"
                    alt=""
                  />
                  <h5 className="mb-20">Hello, I'm Steven</h5>
                  <p className="font-medium text-muted">
                    Hi, I’m Stenven, a Florida native, who left my career in
                    corporate wealth management six years ago to embark on a
                    summer of soul searching that would change the course of my
                    life forever.
                  </p>
                  <strong>Follow me: </strong>
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <li className="list-inline-item">
                      <a
                        className="fb"
                        href="#"
                        target="_blank"
                        title="Facebook"
                      >
                        <i className="elegant-icon social_facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="tw"
                        href="#"
                        target="_blank"
                        title="Tweet now"
                      >
                        <i className="elegant-icon social_twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="pt" href="#" target="_blank" title="Pin it">
                        <i className="elegant-icon social_pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Most popular</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html">
                                Spending Some Quality Time with Kids? It’s
                                Possible
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">05 August</span>
                              <span className="post-by has-dot">150 views</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                              <img src="assets/imgs/news/thumb-6.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html">
                                Relationship Podcasts are Having “That” Talk
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">12 August</span>
                              <span className="post-by has-dot">6k views</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                              <img src="assets/imgs/news/thumb-7.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html">
                                Here’s How to Get the Best Sleep at Night
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">15 August</span>
                              <span className="post-by has-dot">16k views</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                              <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className=" wow fadeInUp animated">
                        <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href="single.html">
                                America’s Governors Get Tested for a Virus That
                                Is Testing Them
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">12 August</span>
                              <span className="post-by has-dot">3k views</span>
                            </div>
                          </div>
                          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                              <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Body;
