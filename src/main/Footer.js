import React from 'react';
import './style.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="w3-col m6 w3-large w3-margin-bottom info">
                <div className="titulo-contact">
                    <h2 >Contato</h2>
                </div>

                <i className="fa fa-map-marker"></i>  Rodovia SC 484 - Km 02, Fronteira Sul.<br />
                {/*  <i className="fa fa-phone" ></i> Phone: +00 151515-0000<br/> */}
                <i className="fa fa-envelope" > </i> contato.ccgirl@gmail.com <br />
            </div>


            <div className="social-container">
                <h3 className="titule-follow">Social Follow</h3>

                <a target="_blank" rel="noreferrer" href="https://t.me/joinchat/ccgirluffs" className="telegram social">
                    <FontAwesomeIcon icon={faTelegram} size="2x" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.twitter.com/ccgirluffs" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ccgirluffs" className="instagram social">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
                </a>
            </div>


            <div className="Copyright-origin">
                <span className="app-footer__message">
                    TODOS OS DIREITOS RESERVADOS.<br />
                    Copyright © 2021
                   
                </span>
            </div>

        </footer>
    )
}
export default Footer