import React from 'react'
import { NavLink } from 'react-router-dom'


export default function MyNavitem({ path, icon, routename }) {
    return (
        <NavLink
            to={path}
            className="link transition duration-300 mx-1 ease-in-out hover:scale-110 ml-1 mb-1"
            activeClassName="active"
        >
            <div className="icon">{icon}</div>
            {/* <AnimatePresence> */}

            <div
                className="link_text"
            >
                {routename}

            </div>
            {/* </AnimatePresence> */}
        </NavLink>

    )
}


