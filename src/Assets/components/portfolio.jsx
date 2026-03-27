import React from "react";
import ReactDOM from "react-dom";

const Portfolio = () => {
  const styles = `
    .portfolio-container {
      padding: 50px;
      text-align: center;
    }
    .portfolio-title {
      font-size: 36px;
      margin-bottom: 20px;
    }
    .portfolio-description {
      font-size: 18px;
      margin-bottom: 30px;
    }
  `;

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfolio</h1>
      <p className="portfolio-description">
        Here are some of the projects I've worked on:
      </p>
      {/* Add your portfolio projects here */}
    </div>
  );
};

export default Portfolio;
