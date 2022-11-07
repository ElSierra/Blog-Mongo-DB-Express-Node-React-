import React, { useEffect, useState } from "react";
import NotSignedIn from "./NotSignedIn";
import FeaturedPost from "./FeaturedPost";
import TopPost from "./TopPost";
import ArticleBuilder from "./article/ArticleBuilder";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Articles from "../Artcle";
import axios from "axios";
import { FidgetSpinner } from "react-loader-spinner";
const queryClient = new QueryClient();

export default function Body(props: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <BodyComp
        setPage={props.setPage}
        isLoggedIn={props.isLoggedIn}
        onSuccess={props.onSuccess}
        onFailure={props.onFailure}
        profile={props.profile}
        onCompose={props.onCompose}
      />
    </QueryClientProvider>
  );
}
function BodyComp(props: any) {
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
  const [loading, setloading] = useState(false);
  const [backEndData, setBackEndData] = useState<Array<contentInterface>>([
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

  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () => {
    axios
      .get("/api")
      .then((res) => setBackEndData(res.data))
      .catch((err) => console.log(err));
  });

  // Get the notes in the Db
  // axios
  //   .get("/api")
  //   .then(function (response) {
  //     // Sends the data response to the {backEndData constant}
  //     setBackEndData(response.data);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
 console.log({error: error, isLoading: isLoading, data: data, isFetching: isFetching})
  return (
    <main>
      <NotSignedIn
        isLoggedIn={props.isLoggedIn}
        onSuccess={props.onSuccess}
        onFailure={props.onFailure}
        onCompose={props.onCompose}
      />
      {(!isLoading || isFetching)? (
        <div>
          <div className="container">
            <div className="hot-tags pt-30 pb-30 font-small align-self-center">
              <div className="widget-header-3">
                <div className="row align-self-center">
                  <div className="col-md-4 align-self-center"></div>
                </div>
              </div>
            </div>
            <div className="loop-grid mb-30">
              <div className="row">
                <TopPost backEndData={backEndData} setPage={props.setPage} />
                {/* <FeaturedPost /> */}
              </div>
            </div>
          </div>
          <div className="bg-grey pt-50 pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-module-2">
                    <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                      <h5 className="mt-5 mb-30">Latest Post</h5>
                    </div>

                    {backEndData.map((article, index) => {
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
                          profile={props.profile}
                          setPage={props.setPage}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
    
          <FidgetSpinner height={500} width={500} />
        </div>
      )}
    </main>
  );
}
