import React from "react";
//get current year
var d = new Date();
var n = d.getFullYear();

function Footer(){
    return(
        <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
           
            <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                <p className="float-md-left font-small text-muted">© {n} | IOI </p>
                
            </div>
            </div>
       </footer>
    
    );
   
}
export default Footer;