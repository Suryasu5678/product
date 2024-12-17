import React, { useRef } from "react";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log(formData);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage:
      "url(https://images6.alphacoders.com/134/thumbbig-1346530.webp)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "contrast(1)",
    fontFamily: "Arial, sans-serif",
  };

  const subContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const formStyle = {
    borderRadius: "50px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "400px",
    filter: "invert(99%)",
    border: "3px solid rgba(21, 26, 182, 0.79)",
    background: " rgba(201, 176, 176, 0.59)",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    marginBottom: "20px",
    border: "3px solid rgb(9, 241, 79)",
    borderRadius: "20px 70px ",
    fontSize: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#FF5722",
    color: "black",
    padding: "10px 15px",
    border: "none",
    borderRadius: "50px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={subContainer}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2 style={{ color: "blue", textAlign: "center" }}>Contact Us</h2>
          <hr style={{ border: "2px dashed white", marginBottom: "40px" }}></hr>
          <div>
            <label>
              Name
              <input
                type="text"
                ref={nameRef}
                style={{ ...inputStyle, marginTop: "10px", padding: "5px" }}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                ref={emailRef}
                style={{ ...inputStyle, marginTop: "10px", padding: "5px" }}
              />
            </label>
            <label>
              Message
              <textarea
                ref={messageRef}
                style={{ ...inputStyle, height: "200px", marginTop: "10px" }}
              />
            </label>
          </div>

          <button type="submit" style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
