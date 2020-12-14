import React from 'react'
import PropTypes from "prop-types";

const ActionLink = (props) => {
    const handleClick = e => {
      e.preventDefault();
      alert(props.alert)
      console.log("The link was clicked.");
    };
   
    return (
      <a href="/" onClick={handleClick}>
        Click me
      </a>
    );
   };
   ActionLink.propTypes = {
     ActionLink: PropTypes.func
   }
   
export default ActionLink; 
