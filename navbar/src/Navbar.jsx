import React, { useState, useRef, useEffect } from 'react';
import logo from "./logo.svg"; 
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const [linkHeight, setLinkHeight] = useState(0);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    useEffect(() => {
        if (linksRef.current) {
            setLinkHeight(linksRef.current.getBoundingClientRect().height);
        }
    }, [showLinks]);

    const linkStyle = {
        height: showLinks ? `${linkHeight}px` : '0px',
    };

    return (
        <nav className='nav-center'>
            <div className="nav-header">
                <img src={logo} alt="Logo" className="logo" /> 
                <button className="nav-toggle" onClick={toggleLinks}>
                    <FaBars/>
                </button>
            </div>
            <div className="links-container" ref={linksContainerRef} style={linkStyle}>
                <ul className="links" ref={linksRef}>
                    {links.map((it) => {
                        const { id, url, text } = it;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ul className="social-icons">
                {social.map((socialIcon)=>{
                    const {id,url,icon} = socialIcon;
                    return <li key={id}><a href={url}></a>{icon}</li>
                }) 
                }
                

            </ul>
        </nav>
    );
};

export default Navbar;
