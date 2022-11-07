import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Comment from "../article/BlogComment";
import axios from "axios";
import CommentBox from "../CommentBox";
import Header from "../Header";

function BlogPost() {
  interface contentInterface {
    _id: String;
    title: String;
    content: String;
    date: String;
    img: String;
    authorName: String;
    authorImg: String;
    timestamp: String;
    authorGoogleId: String;
  }
  const { id: single_id } = useParams();

  const [singleBlog, setSingleBlog] = useState<contentInterface>({
    _id: "",
    title: "",
    content: "",
    date: "",
    img: "",
    authorName: "",
    authorImg: "",
    timestamp: "",
    authorGoogleId: "",
  });
  const [backEndData, setbackEndData] = useState<
    [{ comment: ""; id: ""; name: ""; _id: ""; img: ""; date: "" }]
  >([
    {
      comment: "",
      id: "",
      name: "",
      _id: "",
      img: "",
      date: "",
    },
  ]);
  const [user, setuser] = useState<{
    name: "";
    imageUrl: "";
    googleId: "";
  }>({ name: "", imageUrl: "", googleId: "" });

  const wpm = singleBlog.content.length / 200;
  //console.log(singleBlog.content);
  ////console.log(state);
  ////console.log(googleId);
  useEffect(() => {
    axios
      .get("/api/singlepost/" + single_id)
      .then(function (response) {
        //console.log(response.data);
        setSingleBlog(response.data);
        // Sends the data response to the {backEndData constant}
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      });

    // Get the notes in the Db
    axios
      .get("/api/comments/" + single_id)
      .then(function (response) {
        ////console.log(response.data);
        setbackEndData(response.data);
        // Sends the data response to the {backEndData constant}
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  });
  function replaceWithBr() {
    return singleBlog.content.replace(/\n/g, "<br />");
  }
  //! -----------------------------------------------------------
  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem("dataKey") ||
        '{"googleId":"000000","imageUrl":"https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png","email":"null","name":"Anon","givenName":"Anon"}'
    );
    if (items !== "") {
      setuser(items);
      console.log(localStorage.getItem("dataKey"));
    }
  }, []);
  return (
    <div>
      <Header />
      <main className="bg-grey pb-30">
        <div className="container single-content">
          <div className="entry-header entry-header-style-1 mb-50 pt-50">
            <h1 className="entry-title mb-50 font-weight-900">
              {singleBlog.title}
            </h1>
            <div className="row">
              <div className="col-md-6">
                <div className="entry-meta align-items-center meta-2 font-small color-muted">
                  <p className="mb-5">
                    <a className="author-avatar" onClick={() => {}}>
                      <img
                        className="img-circle"
                        src={singleBlog.authorImg.toString()}
                        alt=""
                      />
                    </a>
                    By{" "}
                    <a href="author.html">
                      <span className="author-name font-weight-bold">
                        {singleBlog.authorName}
                      </span>
                    </a>
                  </p>
                  <span className="mr-10"> {singleBlog.date}</span>
                  <span className="has-dot"> {wpm} mins read</span>
                </div>
              </div>
            </div>
          </div>

          <figure className="image mb-30 m-auto text-center border-radius-10">
            <img
              width="50%"
              className="border-radius-10"
              src={singleBlog.img.toString()}
              alt="post-title"
            />
          </figure>

          <article className="entry-wraper mb-50">
            <div className="excerpt mb-30">
              <p></p>
            </div>
            <div className="entry-main-content dropcap wow fadeIn animated">
              <hr className="wp-block-separator is-style-dots" />
              <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />

              <hr className="section-divider" />
            </div>

            <div className="author-bio p-10 mt-30 border-radius-10 bg-white wow fadeIn animated">
              <div className="author-image ">
                <a href="author.html">
                  <img
                    src={singleBlog.authorImg.toString()}
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
                        {singleBlog.authorName}
                      </a>
                    </span>
                  </span>
                </h4>

                <Link
                  className="author-bio-link mb-md-0 mb-3"
                  to={`/allposts/${singleBlog.authorGoogleId}`}
                  state={
                    {
                      // id: props.id,
                      // title: props.title,
                      // content: props.content,
                      // date: props.date,
                      // postImg: props.postImg,
                      // authorName: props.authorName,
                      // authorImg: props.authorImg,
                    }
                  }
                >
                  View all posts
                </Link>

                <a
                  href="author.html"
                  className="author-bio-link mb-md-0 mb-3"
                ></a>
              </div>
            </div>
            <div className="comments-area">
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Comments</h5>
              </div>
              {backEndData.map((comment, index) => {
                return (
                  <CommentBox
                    key={index}
                    imgUrl={comment.img}
                    comment={comment.comment}
                    name={comment.name}
                    date={comment.date}
                  />
                );
              })}
            </div>
            <Comment
              id={single_id}
              name={user.name}
              imageUrl={user.imageUrl}
              googleId={user.googleId}
            />
          </article>
        </div>
      </main>
    </div>
  );
}
export default BlogPost;
