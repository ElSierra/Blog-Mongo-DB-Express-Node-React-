import React from "react";

function Header(){
    return(   <header className="main-header header-style-1 font-heading">
    <div className="header-top">
        <div className="container">
            <div className="row pt-20 pb-20">
                <div className="col-md-3 col-xs-6">
                    <a href="/"><img className="logo" src="/assets/imgs/theme/logo.png" alt=""/></a>
                </div>
               
            </div>
        </div>
    </div>
   
</header>);
}

export default Header;