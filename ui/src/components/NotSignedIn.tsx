import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "@caranmegil/react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
import { useCookies } from "react-cookie";
import Avatar from "react-avatar";

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

    props.isLoggedIn(res.profileObj);
  };

  const logOut = () => {
    setProfile(emptyData);
  };
  const onFailure = (err: Error) => {
    console.log("failed:", err);
  };

  const list = `[ " ${profile.email} ", " ${profile.googleId} " ]`;
  return (
    <div className="featured-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <p className="text-muted">
              <span
                className="typewrite d-inline"
                data-period="2000"
                data-type={list}
              ></span>
            </p>

            {profile.name !== "" ? (
              
                <img
                  alt="Profile_Pic"
                  width="80px"
                  className="btn"
                  onClick={() => {}}
                  src={profile.imageUrl}
                  style={{
                    display: "inline-block",
                    marginBottom: 23,
                    marginRight: 5,
                  }}
                />
               
            
            ) : (
              ""
            )}

            <h4 style={{ display: "inline-block", marginBottom: 0 }}>
              {profile.name !== "" ? "Welcome" : ""} <span>{profile.name}</span>
            </h4>

            {profile.name === "" ? (
              <GoogleLogin
                className="btn"
                clientId={process.env.REACT_APP_CLIENT_ID || ""}
                buttonText="Log in with Google ‎ ‎"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-6 text-right d-none d-lg-block">
            <Avatar 
              src={profile.imageUrl}
              googleId={profile.googleId}
              size="100"
              round={true}
              onClick={(e) => {
                props.onCompose();
              }}
            />
            <div    style={{paddingTop: 5}}>
             <GoogleLogout
          
             className="btn"
                  clientId={process.env.REACT_APP_CLIENT_ID || ""}
                  buttonText="Log out ‎ ‎"
                  onLogoutSuccess={logOut }
                /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotSignedIn;
