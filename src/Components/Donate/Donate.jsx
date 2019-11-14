import React from "react";

function Donate() {
    return(
        <div className="mainContainer">
            <h1 className="donateTitle">Donate and Contribute Today!</h1>
        <div>
        <form className="formconatiner">
            <label for="fullname" className="labels">Your Full Name:</label>
            <input type="text" className="fullname" name="fullname" placeholder=" Enter here ..." />

            <label for="country" className="labels">Select Country:</label>
            <select className="selectCountry" name="country">
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="qatar">Qatar</option>
                <option value="uae">UAE</option>
            </select>

            <label for="donation" className="labels">Select Donation Type:</label>
            <select className="donationSelector" name="country">
                <option value="computer">Computer</option>
                <option value="currency">Currency</option>
                <option value="certification">Certification</option>
                <option value="workAttire">Work Attire</option>
            </select>
            <input type="submit" value="Submit" className="buttonSubmit"></input>
        </form>
        </div>
        </div>
    )
}

export default Donate;