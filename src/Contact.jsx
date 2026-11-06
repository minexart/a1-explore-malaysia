
import { useState } from "react";


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const [success, setSuccess] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setSuccess("");

        let isValid = true;

        if(name.trim() === "") {
            setNameError("Name is required.");
            isValid = false;
        } else {
            setNameError("");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === "") {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError("");
        }

        if(isValid) {
            setSuccess("Thank you, " + name + "! Your message has been sent. We will reply " + email + " soon.");
            setName("");
            setEmail("");
            setMessage("");
        }
    }
    return (

        <div className="container">
            <h2>Contact Us</h2>
            <p>Have a question or feedback? Send us a message.</p>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name" className={nameError ? "input-error" : ""}
                />
                {nameError && <small className="error">{nameError}</small>}

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" className={emailError ? "input-error" : ""}
                />
                {emailError && <small className="error">{emailError}</small>}

                <label htmlFor="message">Message / Feedback </label>
                <textarea id="message" rows="5" value={message} 
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here" className={messageError ? "input-error" : ""}
                />

                {messageError && <small className="error">{messageError}</small>}

                <button type="submit">Send Message</button>

            </form>

            {success && <p className="sucess">{success}</p>}
            
        </div>

    );


}
export default Contact;