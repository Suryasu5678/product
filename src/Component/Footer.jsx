import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div style={layoutStyles.pageWrapper}>
      <footer style={footerStyles.footer}>
        <div style={footerStyles.footerContent}>
          <div style={footerStyles.footerText}>
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
          <div style={footerStyles.footerLinks}>
            {["SignUp", "Cart", "Contact"].map((link, index) => (
              <a
                key={index}
                href={`/${link.toLowerCase()}`}
                style={
                  hoveredLink === link
                    ? { ...footerStyles.footerLink, color: "#ff4081" }
                    : footerStyles.footerLink
                }
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link}
              </a>
            ))}
          </div>
          
          <div style={footerStyles.footerSocial}>
            {["facebook", "twitter", "instagram"].map((platform, index) => (
              <a
                key={index}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  hoveredIcon === platform
                    ? {
                        ...footerStyles.socialIcon,
                        transform: "scale(2.0)",
                        color: "#ff4081",
                      }
                    : footerStyles.socialIcon
                }
                onMouseEnter={() => setHoveredIcon(platform)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <i
                  className={`fab fa-${platform}`}
                  style={footerStyles.iconStyle}
                ></i>
              </a>
            ))}
          </div>
        </div>
       
      </footer>
    </div>
  );
};

const layoutStyles = {
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1",
  },
};

const footerStyles = {
  footer: {
    backgroundColor: "#222",
    color: "white",
    padding: "40px 10px",
    textAlign: "center",
    width: "100%",
    marginTop: "auto",
    bottom: "0",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerText: {
    fontSize: "14px",
    color: "#bbb",
    flex: "1 1 calc(25% - 30px)",
    maxWidth: "calc(25% - 30px)",
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  footerLink: {
    color: "violet",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.9s ease",
  },
  footerSocial: {
    display: "flex",
    justifyContent: "center",
    gap: "0px",
  },
  socialIcon: {
    color: "#fff",
    fontSize: "10px",
    transition: "transform 0.3s ease",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "#444",
    textAlign: "center",
    marginRight: "15px",
  },
  iconStyle: {
    fontSize: "20px", 
  },
  "@media screen and (max-width: 768px)": {
    footerContent: {
      flexDirection: "column",
      alignItems: "center",
    },
    footerLinks: {
      flexDirection: "column",
      gap: "10px",
    },
    footerSocial: {
      flexDirection: "column",
      gap: "10px",
    },
  },
};

export default Footer;
