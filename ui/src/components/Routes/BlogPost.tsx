import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../Form";
import Comment from "../article/BlogComment";
import axios from "axios";
import CommentBox from "../CommentBox";

function BlogPost() {
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
  const { state } = useLocation();
  const nullCheck = {
      userName: '',
      imageUrl: '',
      googleId:'',
      id:'',
      title:'',
      content:'',
      date:'',
      postImg:'',
      authorName:'',
      authorImage:''
    
  }
  

  const {
    userName ,
    imageUrl,
    googleId,
    id,
    title,
    content,
    date,
    postImg,
    authorName,
    authorImg,
  } = state || nullCheck;

  //console.log(state);
  //console.log(googleId);
  useEffect(() => {
    // Get the notes in the Db
    axios
      .get("/api/comments/" + id)
      .then(function (response) {
        //console.log(response.data);
        setbackEndData(response.data);
        // Sends the data response to the {backEndData constant}
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <main className="bg-grey pb-30">
      <div className="container single-content">
        <div className="entry-header entry-header-style-1 mb-50 pt-50">
          <h1 className="entry-title mb-50 font-weight-900">{title}</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                <p className="mb-5">
                  <a
                    className="author-avatar"
                    onClick={() => {
                      console.log(authorImg);
                    }}
                  >
                    <img className="img-circle" src={authorImg} alt="" />
                  </a>
                  By{" "}
                  <a href="author.html">
                    <span className="author-name font-weight-bold">
                      {authorName}
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

          <div className="author-bio p-10 mt-30 border-radius-10 bg-white wow fadeIn animated" >
            <div className="author-image "  >
              <a href="author.html">
                <img src={authorImg} alt="" className="avatar" />
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
                      {authorName}
                    </a>
                  </span>
                </span>
              </h4>
              
              <a href="author.html" className="author-bio-link mb-md-0 mb-3">
                View all posts (125)
              </a>
              
            </div>
          </div>
          <div className="comments-area">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Comments</h5>
            </div>
            {backEndData.map((comment, index) => {
              return (
                <CommentBox
                key = {index}
                  imgUrl={comment.img}
                  comment={comment.comment}
                  name={comment.name}
                  date={comment.date}
                />
              );
            })}
          </div>
          <Comment
            id={id}
            name={userName}
            imageUrl={imageUrl}
            googleId={googleId}
          />
        </article>
      </div>
    </main>
  );
}
export default BlogPost;
