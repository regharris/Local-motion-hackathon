import React from "react";

function Home() {
  return (
    <>
      <section className="heroContainer">
        <img src="../Images/Hero.jpg" className="heroImg" alt="Hero"></img>
        <div className="sloganContainer">
          <h1 className="slogan">
            Micro Kickstarter Mending Economic Mobility!
          </h1>
          <button className="heroButton">
          <a href="/" className="heroLinkButton">Join Today!</a>
          </button>
        </div>
      </section>
      <container className="informationContainer">
        <div className="missionContainer">
          <h2 className="aboutUs">About Us!</h2>
          <p className="explanationText">
            {" "}
            Our mission is to help low-income individuals gain a better Economic
            Status. The LocalMotion team believes everyone can use a hand for a
            better outcome. We want to change and inspire lives, leaving an
            impact on our community. For anyone in the need of help to enter the
            workforce or obtain a better position of employment, we recommend
            becoming a member! Attentive of your goal and what you want to make
            out of yourself we will provide the resources necessary to achieve
            your success. Visit our Login page where you can make an account and
            join for <strong>free!</strong>
          </p>
        </div>
        <div className="offerContainer">
          <h3 className="offerh3">What Do We Offer?!</h3>
          <h4 className="titleh4">Preparation</h4>
          <ul className="lists">
            <li className="items">Mentorship</li>
            <li className="items">Resume and Financial Workshops</li>
            <li className="items">Recommendations</li>
          </ul>
          <h4 className="titleh4">Support</h4>
          <ul className="lists">
            <li className="items">Transportation Services</li>
            <li className="items">Supply Work Attire</li>
            <li className="items">Certifications</li>
            <li className="items">
              Materials (Ex. Laptops, Keyboards, Headphones etc..)
            </li>
          </ul>
        </div>
      </container>
    </>
  );
}

export default Home;
