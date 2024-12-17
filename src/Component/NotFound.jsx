import React from "react";


const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Oops! Page Not Found</h1>
      <img
        src="https://media.giphy.com/media/3o7btQP6Zb3BfmYYzq/giphy.gif"
        alt="404 GIF"
        style={styles.gif}
      />
      <p style={styles.message}>The page you're looking for doesn't exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  gif: {
    maxWidth: "100%",
    height: "auto",
  },
  message: {
    fontSize: "1.2rem",
    color: "#666",
    marginTop: "20px",
  },
};

export default NotFoundPage;
