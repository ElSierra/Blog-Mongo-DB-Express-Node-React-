import React from "react";
function NotSignedIn(){
    return(    <div className="featured-1">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 align-self-center">
                <p className="text-muted"><span className="typewrite d-inline" data-period="2000" data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'></span></p>
                <h2>Hello, I’m <span>Steven</span></h2>
                <h3 className="mb-20"> Welcome to my blog</h3>
                <h5 className="text-muted">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</h5>
                <button className="btn bg-primary text-white" type="submit">Signup</button>
            </div>
            <div className="col-lg-6 text-right d-none d-lg-block">
                <img src="assets/imgs/authors/featured.png" alt=""/>
            </div>
        </div>
    </div>
</div>);
}

export default NotSignedIn;