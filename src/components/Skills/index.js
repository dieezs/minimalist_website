import React from 'react';

//Material UI
import { Container, Grid } from '@material-ui/core'

//My Components
import PaperSkill from './PaperSkill'

//React-icons
import { FaFileCode as Frontend } from 'react-icons/fa'
import { FiSettings as Backend } from 'react-icons/fi'
import { BsFillAwardFill as Other } from 'react-icons/bs'

const Skills = () => {

    const toolsFrontend = [
        'SASS', 'MaterializeCSS', 'Material UI', 'styled-components', 'styled-icons', 'react-icons', 'Github', 'Git', 'Typescript', 'Ux Design'
    ];

    const toolsBackend = [
        'cors', 'NodeMailer', 'API', 'Jest', 'Typescript', 'Github', 'Git', 'Template Engine: pug, ejs', 'Email Template'
    ];

    const otherSkills = [
        'Linux', 'MongoDB', 'MySQL', 'SQL', 'NoSQL', 'Office', 'AWS', 'Azure', 'Scrum'
    ];

    return (
        <div className="Skills">
            <Container maxWidth="lg">

                <div className="content-text">
                    <p className="title">Hi! I'm Diego Magalhães de Souza</p>
                    <p className="text">I'm very happy that you are here on my website! Welcome!</p>
                    <p className="text">I ❤ act with Frontend, that is my passion. I enjoy to learning new things and help others people to come to this world of programming!</p>
                </div>

                <div className="content-box">
                    <Grid container spacing={3}>
                        <PaperSkill
                            content_paper="content-paper"
                            paperclass="paper-class"
                            icon={<Frontend size={50} className="iconSkill" />}
                            hability="Frontend"
                            briefText="what users see"
                            skills="Skills"
                            textSkills="HTML, CSS, Javascript, ReactJS"

                            tools="Tools"
                            textTools={toolsFrontend}
                        />
                        <PaperSkill
                            content_paper="content-paper"
                            paperclass="paper-class"
                            icon={<Backend size={50} className="iconSkill" />}
                            hability="Backend"
                            briefText="what users don't see"
                            skills="Skills"
                            textSkills="NodeJS, MVC, Express, Javascript"

                            tools="Tools"
                            textTools={toolsBackend}
                        />
                        <PaperSkill
                            content_paper="content-paper"
                            paperclass="paper-class"
                            icon={<Other size={50} className="iconSkill" />}
                            hability="Other Skills"
                            briefText="what users think are strange"
                            skills="Skills"
                            textSkills="JIRA, Cloud Computing, Agile"

                            tools="Tools"
                            textTools={otherSkills}
                        />

                    </Grid>
                </div>

            </Container>
        </div>
    )
}

export default Skills