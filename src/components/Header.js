/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const onClick = () => {
  console.log("clicked");
};
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 style={{ color: "red" }}>{title}</h1>
      <Button onClick={onClick} color="green" text="hello" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

const HeadingStyle = {
  color: "red",
};

export default Header;
