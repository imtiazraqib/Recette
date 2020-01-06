import React from 'react';
import { Container } from 'reactstrap';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <Container className="footer themed-container" fluid={true}>
            <hr />
            <p className="footerText">
                Made with <FontAwesomeIcon className="faIcon" icon={faHeart} /> by <a className="nameLink" href="https://www.imtiazraqib.com" target="_blank"><span className="myName">Imtiaz Raqib</span></a> &copy; 2020
            </p>
        </Container>
    );
}

export default Footer;