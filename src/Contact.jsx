import { useState } from "react";

/**
 * Contact: controlled enquiry form (name, email, message) with client-side validation.
 * State: the three field values, one error message per field, and a success message.
 * The form uses noValidate so the inline React messages replace the browser's own popups.
 */
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

    // Every field is checked (no early return) so all errors show at once;
    // isValid records whether any check failed.
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    // Basic format check: text@text.text with no spaces. The empty check runs first
    // so each case gets its own message.
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

    if (message.trim() === "") {
      setMessageError("Message is required.");
      isValid = false;
    } else {
      setMessageError("");
    }

    // The fields are cleared only after a successful submit, so the user can correct errors.
    if (isValid) {
      setSuccess(
        "Thank you, " +
          name +
          "! Your message has been sent. We will reply to " +
          email +
          " soon.",
      );
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
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className={nameError ? "input-error" : ""}
        />
        {nameError && <small className="error">{nameError}</small>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={emailError ? "input-error" : ""}
        />
        {emailError && <small className="error">{emailError}</small>}

        <label htmlFor="message">Message / Feedback </label>
        <textarea
          id="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          className={messageError ? "input-error" : ""}
        />

        {messageError && <small className="error">{messageError}</small>}

        <button type="submit">Send Message</button>
      </form>

      {success && <p className="success">{success}</p>}
    </div>
  );
}
export default Contact;
