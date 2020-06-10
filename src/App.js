import React, { Fragment } from 'react';
import './public/css/main.scss'

//My Components
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Article from './components/Article'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'

//Material UI
import { Container } from '@material-ui/core'

const App = () => {
    return (
        <Fragment>
            <Welcome />
            <Skills />
            <Projects />
            <Article />
            <Education />
            <Experience />
            <Footer />
        </Fragment>
    );
}

export default App;
