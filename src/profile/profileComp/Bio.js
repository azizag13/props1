import React from 'react';
import PropTypes from "prop-types";


const Bio = (props) => {
    console.log(props)
    return (
        <div>
         <p className='bioo'>
         Drake , de son vrai nom Aubrey Drake Graham, est un rappeur-compositeur, chanteur et acteur canadien, né le 24 octobre 1986 à Toronto, au Canada. Longtemps affilié au label de Lil Wayne Young Money Entertainment, il y a signé officiellement en juin 2009
         </p>
        </div>
    )
                };
                    Bio.propTypes = {
                        Bio: PropTypes.string
                    };
                

export default Bio
 