import React, { useEffect, useState } from "react";

import axios from "axios";

export function Form(props: any) {
  interface contentInterface {
    title: String;
    content: String;
    date: String;
    img: String;
  }
  const [blogPost, setblogPost] = useState<contentInterface>({
    title: "",
    content: "",
    date: "",
    img: "",
  });

  function handleChange(e: any) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    let date = mm + "/" + dd + "/" + yyyy;
    const value: String = e.target.value;
    const name: String = e.target.name;
    console.log(name);
    setblogPost((prev) => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content,
          date: date,
          img: prev.img,
        };
      } else if (name === "Compose") {
        return {
          title: prev.title,
          content: value,
          date: date,
          img: prev.img,
        };
      } else if (name === "img") {
        return {
          title: prev.title,
          content: prev.content,
          date: date,
          img: value,
        };
      } else {
        return {
          title: "",
          content: "",
          date: "",
          img: "",
        };
      }
    });

  }

  function updateContent(e: any) {
    axios
      .post("/api/blogpost", {
        title: blogPost.title,
        content: blogPost.content,
        date: blogPost.date,
        img: blogPost.img,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
      setblogPost({
        title: "",
        content: "",
        date: "",
        img: "",
      })

    e.preventDefault();

  }
  return (
    <div className="container single-content">
      <div className="comment-form wow fadeIn animated">
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">{props.name}</h5>
        </div>
        <form className="form-contact comment_form" action="#" id="commentForm">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="title"
                  id="title"
                  type="text"
                  value={blogPost.title.toString()}
                  placeholder="Title"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>{" "}
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  className="form-control"
                  name="img"
                  value={blogPost.img.toString()}
                  id="img-url"
                  type="text"
                  placeholder="https://{Image Url}"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100"
                  name={props.name}
                  id={props.id}
                  cols={30}
                  rows={9}
                  value={blogPost.content.toString()}
                  placeholder={props.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn button button-contactForm"
              onClick={(e) => {
                updateContent(e);
              }}
            >
              {props.name}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
