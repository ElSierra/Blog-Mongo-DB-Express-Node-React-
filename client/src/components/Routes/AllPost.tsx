import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleBuilder from "../article/ArticleBuilder";

export default function AllPost() {
  const { id: google_id } = useParams();
  
  interface contentInterface {
    _id: String;
    title: String;
    content: String;
    date: String;
    img: String;
    authorName: String;
    authorImg: String;
    timestamp: String;
  }
  const [data, setData] = useState<Array<contentInterface>>([
    {
      _id: "",
      title: "",
      content: "",
      date: "",
      img: "",
      authorName: "",
      authorImg: "",
      timestamp: "",
    },
  ]);


  useEffect(() => {
    axios
      .get("/api/authorpost/" + google_id)
      .then(function (response) {
        //console.log(response.data);
        setData(response.data);
        console.log(response.data);
        // Sends the data response to the {backEndData constant}
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
      });

    // Get the notes in the Db
  });
  return (
    <div className="bg-grey pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="post-module-2">
              <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                <h5 className="mt-5 mb-30">Latest Post</h5>
              </div>

              {data.map((article, index) => {
                return (
                  <ArticleBuilder
                    key={article._id}
                    id={article._id}
                    title={article.title}
                    content={article.content}
                    desc={"..."}
                    date={article.date}
                    postImg={article.img}
                    authorName={article.authorName}
                    authorImg={article.authorImg}
                  
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
