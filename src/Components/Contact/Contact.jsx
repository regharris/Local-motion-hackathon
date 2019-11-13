import React from "react";
const thank = () => {
    alert("Thank you for your submission !");
    console.log("submission sent");
};

function Contact() {
    return (
        <div id="formfluid">
            <form id="form">
                <h1 id="form-title">Contact Us</h1>
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <textarea
                        className="form-control"
                        placeholder="Comments"
                        id="exampleFormControlTextarea3"
                        rows="7"
                    ></textarea>

                    <div class="invalid-feedback">Please input your first name</div>
                </div>
                <button className="contact-submit" onClick={thank}>
                    Submit
        </button>
            </form>
        </div>
    );
}


export default Contact;