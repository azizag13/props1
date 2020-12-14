import React from 'react'
import PropTypes from "prop-types";

const Profession = (props) => {
    console.log(props)
    return (
        <div>
        <h2 className='proff'>Rappeur</h2>    
        </div>
    )
}
Profession.propTypes = {
    Profession: PropTypes.string
}

export default Profession
