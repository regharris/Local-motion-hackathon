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
        <h2 className="WorkshopsTitle">Resume Workshop</h2>
        <ul className="listWorkshopsContainer">
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
        </ul>
        <h2 className="WorkshopsTitle">Financial Workshop</h2>
        <ul className="listWorkshopsContainer">
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
        </ul>
        <h2 className="WorkshopsTitle">Communications Workshop</h2>
        <ul className="listWorkshopsContainer">
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
          <li className="descriptionList">stuff</li>
        </ul>
      </div>
    </>
  );
}

export default Workshops;
