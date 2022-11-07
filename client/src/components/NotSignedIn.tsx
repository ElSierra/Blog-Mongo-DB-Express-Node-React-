import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "@caranmegil/react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { useCookies } from "react-cookie";
import Avatar from "react-avatar";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import GoogleIcon from '@mui/icons-material/Google';

const emptyData = {
  email: "",
  familyName: "",
  givenName: "",
  googleId: "",
  imageUrl: "",
  name: "",
};

function NotSignedIn(props: any) {
  const [profile, setProfile] = useState(emptyData);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res: any) => {
    setProfile(res.profileObj);

    localStorage.setItem("dataKey", JSON.stringify(res.profileObj));
    console.log(localStorage.getItem("dataKey"))
  };

  const logOut = () => {
    setProfile(emptyData);
    localStorage.removeItem("dataKey");
  };
  const onFailure = (err: Error) => {
    console.log("failed:", err);
  };

  return (
    <div className="featured-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            {profile.name !== "" ? (
                <div style = {{display : 'inline-block'}}>
                  <div  className="logz" >
                  <GoogleLogout   style = {{display : 'inline-block', }}
                    
                    render={renderProps => (
                      <Fab variant="extended" onClick = {()=>{renderProps.onClick()}}>
<GoogleIcon/>
<div style = {{width:5}}></div>
  Logout
</Fab>         )}
                    clientId={process.env.REACT_APP_CLIENT_ID || ""}
                  
                    onLogoutSuccess={logOut}
                  />
                </div>
                <Avatar
                src={profile.imageUrl}
                googleId={profile.googleId}
                size="50"
                round={true}
                style={{
                  display: "inline-block",
                  marginBottom: 0,
                  marginRight: 5,
                }}
              />
          </div>
            ) : (
              <FidgetSpinner />
            )}

            <p style={{ display: "inline-block", paddingTop: 10, fontSize: 15}}>
              {profile.name !== "" ? "Welcome" : ""} <span>{profile.name}</span>
            </p>

            {profile.name === ("") ? (
              <GoogleLogin
                className="btn"
                clientId={process.env.REACT_APP_CLIENT_ID || ""}
                render={renderProps => (
                  <Fab variant="extended" onClick = {()=>{renderProps.onClick()}}>
<GoogleIcon/>
<div style = {{width:5}}></div>
Login
</Fab>         )}
             
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-6 text-right  d-lg-block ppic">
            <Link 
              className="author-bio-link mb-md-0 mb-3"
              to={`/compose`}
              state={{
                name: profile.name,
                imageUrl: profile.imageUrl,
                googleId: profile.googleId,
                // id: props.id,
                // title: props.title,
                // content: props.content,
                // date: props.date,
                // postImg: props.postImg,
                // authorName: props.authorName,
                // authorImg: props.authorImg,
              }}
            >
              {/* <Avatar
                src={profile.imageUrl}
                googleId={profile.googleId}
                size="100"
                round={true}
              /> */}
              <Fab color="primary" aria-label="add" >
  <AddIcon />
</Fab>
            </Link>
            <div style={{ paddingLeft: 5, display: 'inline-block' }}>
              {profile.name !== "" ? (
                <div className="logout" >
                  <GoogleLogout
                    
                    render={renderProps => (
                      <Fab variant="extended" onClick = {()=>{renderProps.onClick()}}>
<GoogleIcon/>
<div style = {{width:5}}></div>
  Logout
</Fab>         )}
                    clientId={process.env.REACT_APP_CLIENT_ID || ""}
                  
                    onLogoutSuccess={logOut}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotSignedIn;
