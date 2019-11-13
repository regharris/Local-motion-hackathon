import React from "react";

var tempDate = new Date();
var date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate();
var currDate = date;

function Footer() {
    return (
        <div>
            <div className="flex-box">
                <section id="lab_social_icon_footer">
                    <link
                        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
                        rel="stylesheet"
                    />
                    <div className="container">
                        <div className="text-center center-block">
                            <a href="https://www.facebook.com/bootsnipp">
                                <i
                                    id="social-fb"
                                    className="fa fa-facebook-square fa-3x social"
                                ></i>
                            </a>
                            <a href="https://twitter.com/">
                                <i
                                    id="social-tw"
                                    className="fa fa-twitter-square fa-3x social"
                                ></i>
                            </a>

                            <a href="https://www.linkedin.com/in/reginald-harris-7147a7194/">
                                <i
                                    id="social-li"
                                    className="fa fa-linkedin-square fa-3x social"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a href="https://github.com/regharris/">
                                <i
                                    className="fa fa-github fa-3x social"
                                    id="social-gh"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                    </div>
                    <h1 id="copyright">© Copyright 2019 </h1>
                    <section id="date">Last Updated: {currDate}</section>
                </section>
            </div>
        </div>
    );
}
export default Footer;
