import React from 'react'
import PropTypes from "prop-types";

const Fullname = (props) => {
    console.log(props) ;
    return (
        <div className ="name">
            <h1>{props.name}</h1>
        </div>
    )
}
Fullname.propTypes = {
    Fullname: PropTypes.string.isRequired
}

export default Fullname
