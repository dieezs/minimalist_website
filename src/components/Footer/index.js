import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container } from '@material-ui/core'

//React-icons
import { AiFillLinkedin as Linkedin } from 'react-icons/ai';
import { AiFillGithub as Github } from 'react-icons/ai';
import { AiOutlineInstagram as Instagram } from 'react-icons/ai';
import { AiOutlineMail as Mail } from 'react-icons/ai';

const Footer = () => (
    <div className="Footer">
        <Container maxWidth="lg" align="center">
            <br/><br/><br/><br/>
            <a href="https://www.linkedin.com/in/diegozs/" target="_blank" rel="noopener noreferrer"><Linkedin size={30} className="icon" /></a>
            <a href="https://github.com/dieezs" target="_blank" rel="noopener noreferrer"><Github size={30} className="icon" /></a>
            <a href="https://www.instagram.com/dieegozs/" target="_blank" rel="noopener noreferrer"><Instagram size={30} className="icon" /></a>
            <a href="mailto:diegomagasouza@gmail.com" target="_blank" rel="noopener noreferrer" ><Mail size={30} className="icon" /></a>
        </Container>
    </div>
)

export default Footer;