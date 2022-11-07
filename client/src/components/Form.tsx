import React, { useEffect, useState } from "react";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginImagePreview);
export function Form(props: any) {
  useEffect(() => {
    console.log(`the google id is ${props.googleid}`);
  }, []);
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
  console.log(timeSince(new Date()));
  var today = new Date();
  console.log(today);
  interface contentInterface {
    title: String;
    content: String;
    date: String;
    img: { preview: String; data: Blob | string };
    authorName: String;
    imgUrl: String;
  }
  const [blogPost, setblogPost] = useState<contentInterface>({
    title: "",
    content: "",
    date: "",
    img: { preview: "", data: "" },
    authorName: "",
    imgUrl: "",
  });
  const [files, setFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { data } = blogPost.img;

  function handleChange(e: any) {
    console.log(files);
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
          authorName: props.uName,
          imgUrl: props.imageUrl,
        };
      } else if (name === "Compose") {
        return {
          title: prev.title,
          content: value,
          date: date,
          img: prev.img,
          authorName: props.uName,
          imgUrl: props.imageUrl,
        };
      } else if (name === "img") {
        return {
          title: prev.title,
          content: prev.content,
          date: date,
          img: {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
          },
          authorName: props.uName,
          imgUrl: props.imageUrl,
        };
      } else {
        return {
          title: "",
          content: "",
          date: "",
          img: { preview: "", data: "" },
          authorName: "",
          imgUrl: "",
        };
      }
    });
  }

  function updateContent(e: any) {
    const formData = new FormData();

    //  @ts-ignore
    console.log(files[0].file);
    const formatedContent = ` ${blogPost.content.replace(
      /\r\n/g,
      "</p>\n<p>"
    )} `;
    console.log(formatedContent);
    //  @ts-ignore
    formData.append("file", files[0].file);
    formData.append("env", process.env.REACT_APP_API_KEY || "");
    formData.append("title", blogPost.title.toString());
    formData.append("content", formatedContent);
    formData.append("date", blogPost.date.toString());
    formData.append("authorName", blogPost.authorName.toString());
    formData.append("authorImg", blogPost.imgUrl.toString());
    formData.append("timestamp", Date.now().toString());
    formData.append("authorGoogleId", props.googleid);

    //current timestamp

    // console.log(formData);
    axios
      .post("/api/blogpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
        if (response.data === "LIMIT_FILE_SIZE") {
          setFileLimit(true);
        } else if (response.data === "Successfully added ") {
          setFileLimit(false);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    setblogPost({
      title: "",
      content: "",
      date: "",
      img: { preview: "", data: "" },
      authorName: props.uName,
      imgUrl: props.imageUrl,
    });

    e.preventDefault();
  }
  return (
    <div className="container single-content">
      <FilePond
        files={files}
        // @ts-ignore
        onupdatefiles={(e) => setFiles(e)}
        allowMultiple={true}
        maxFiles={1}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <div className="comment-form wow fadeIn animated">
        <div>
          {fileLimit ? (
            <p>⚠️ File is too Large ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ ⚠️ </p>
          ) : (
            ""
          )}
        </div>
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">{props.name}</h5>
        </div>
        <form className="form-contact comment_form" action="#" id="commentForm">
          <Avatar
            src={props.imageUrl}
            size="30"
            round={true}
            onClick={(e) => {
              props.onCompose();
            }}
          />
          <p style={{ display: "inline-block" }}>{props.uName}</p>
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
            {files.length !== 0 ? (
              <button
                type="submit"
                className="btn button button-contactForm"
                onClick={(e) => {
                  updateContent(e);
                }}
              >
                {props.name}
              </button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
