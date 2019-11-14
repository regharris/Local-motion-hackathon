import React from "react";

function Workshops() {
  return (
    <>
      <section className="heroContainer">
        <img
          src="../Images/heroWorkshops.jpg"
          className="heroImg"
          alt="Black and Purple Background"
        ></img>
        <div className="sloganContainerWork">
          <h1 className="sloganWork"> Contributing Towards Your Success!</h1>
          <ul className="workshopsListContainer">
            <li className="workshopsList">Resume Workshops</li>
            <li className="workshopsList">Financial Workshops</li>
            <li className="workshopsList">Communications Workshops</li>
          </ul>
        </div>
      </section>
      <div className="workshopsContainer">
        <h2 className="WorkshopsMainTitle">Intention Behind Workshops</h2>
        <p className="paragraph">
          Our purpose of this objective is to further the growth of each
          individual that joins as a member. This will help them sharpen the
          skills needed to join the workforce or astonish an interviewer!
          Everyone will learn something new out of these workshops and become
          even prouder of themselves!{" "}
        </p>
        <div className="columnContainer">
          <h2 className="WorkshopsTitle">Resume Workshop</h2>
          <ul className="listWorkshopsContainer">
            <li className="descriptionList">Organization and Neatness</li>
            <li className="descriptionList">Correctness and Precision</li>
            <li className="descriptionList">Persuasion and Credibility</li>
          </ul>
        </div>
        <div className="columnContainer">
          <h2 className="WorkshopsTitle">Financial Workshop</h2>
          <ul className="listWorkshopsContainer">
            <li className="descriptionList">Informative in decision making</li>
            <li className="descriptionList">Plan of action for savings</li>
            <li className="descriptionList">Arragements to meet goals</li>
          </ul>
        </div>
        <div className="columnContainer">
          <h2 className="WorkshopsTitle">Communications Workshop</h2>
          <ul className="listWorkshopsContainer">
            <li className="descriptionList">Improve effective communication</li>
            <li className="descriptionList">Use of suitable terminalogy</li>
            <li className="descriptionList">Enhance Network</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Workshops;
