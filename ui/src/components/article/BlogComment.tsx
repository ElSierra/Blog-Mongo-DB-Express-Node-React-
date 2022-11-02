import React, { useState } from "react";
import axios, { Axios } from "axios";
function Comment(props: any) {
  const [comment, setcomment] = useState("");
  function updateContent(e: any) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    let date = mm + "/" + dd + "/" + yyyy;

    // console.log(formData);
    axios
      .post("/api/comments", {
        env: process.env.REACT_APP_API_KEY,
        id: props.id,
        comment: comment,
        name: props.name,
        img: props.imageUrl,
        date: date,

        // env: process.env.REACT_APP_API_KEY,
        // title: blogPost.title,
        // content: blogPost.content,
        // date: blogPost.date,
        // img: formData,
        // authorName: blogPost.authorName,
        // authorImg: blogPost.imgUrl,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    e.preventDefault();
  }

  return (
    <div className="comment-form wow fadeIn animated">
      <div className="widget-header-2 position-relative mb-30">
        <h5 className="mt-5 mb-30">Leave a Reply</h5>
      </div>
      <form className="form-contact comment_form" action="#" id="commentForm">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="comment"
                id="comment"
                cols={30}
                rows={5}
                placeholder="Write Comment"
                onChange={(e) => {
                  const value = e.target.value;
                  //ts-ignore
                  setcomment(value);
                  e.preventDefault();
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn button button-contactForm"
            onClick={updateContent}
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Comment;
