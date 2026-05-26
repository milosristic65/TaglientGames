import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

export default function Contact(): React.JSX.Element {
  const apiUrl = import.meta.env.VITE_API_URL || "";

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<string>("");
  const [formError, setFormError] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // Recaptcha
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";
  const completeRecaptchaMessage = "Please complete the reCAPTCHA.";
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const onVerify = (token: string | null) => {
    setRecaptchaToken(token);
    if (responseMessage === completeRecaptchaMessage) {
      setResponseMessage("");
    }
  };
  const recaptchaSize = window.innerWidth < 600 ? "compact" : "normal";

  // Expand textarea during input
  const handleInput = (
    event: React.SyntheticEvent<HTMLTextAreaElement>,
  ): void => {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight + 20}px`;
    setMessage(textarea.value);
    setFormError("");
  };

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const email = e.target.value;
    setEmail(email);
    setFormError("");
    if (!validateEmail(email) && email.length > 0) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  // Handle name input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    setFormError("");
  };

  // Submit contact form
  const handleSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setFormError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!recaptchaToken) {
      setResponseMessage(completeRecaptchaMessage);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setFormError("");

    // Reset textarea height
    const textarea =
      document.querySelector<HTMLTextAreaElement>(".message-input");
    if (textarea) textarea.style.height = "100px";

    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }

    setStatus("sending");

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: name,
          user_email: email,
          user_message: message,
          recaptcha_token: recaptchaToken,
        }),
      });

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setResponseMessage("An unexpected error occurred!");
        setStatus("error");
      }
    } catch (error) {
      setResponseMessage("Error: " + (error as Error).message);
      setStatus("error");
    }
  };

  return (
    <form id="contact" className="contact" onSubmit={handleSubmit}>
      <div className="contact-content">
        <h1>Contact Us!</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            className="name-input"
            autoComplete="name"
            required
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="email-input"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <textarea
          placeholder="Message"
          className="message-input"
          required
          value={message}
          onInput={handleInput}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        ></textarea>
        <ReCAPTCHA
          className="recaptcha"
          ref={recaptchaRef}
          sitekey={recaptchaSiteKey}
          size={recaptchaSize}
          theme="dark"
          onChange={onVerify}
        />
        <br />
        <button
          type="submit"
          className={emailError || formError ? "button-disabled" : ""}
        >
          {status === "sending" ? "Sending" : "Send"}
        </button>
        {emailError && <p className="error">{emailError}</p>}
        {formError && <p className="error">{formError}</p>}
        <p>
          {status === "sent" && <p className="success">{responseMessage}</p>}
          {status === "error" && <p className="error">{responseMessage}</p>}
        </p>
      </div>
    </form>
  );
}
