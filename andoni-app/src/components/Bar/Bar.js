import React from "react";

const ProgressBar = (props) => {
  const { title, bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "70%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 70,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "black",
    fontWeight: "bold",
  };

  return (
    <>
      <h3>{title}</h3>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
