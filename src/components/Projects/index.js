import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container, Grid } from '@material-ui/core'

//My Components
import Project from './Project'

//Image SRC
import ImageJubas from '../../assets/projectJubas.png'
import Helpdesk from '../../assets/projectHelpdesk.jpg'
import Code from '../../assets/codeProject.jpg';


const Projects = () => (
    <div className="Projects">
        <p className="title">Projects</p>
        <p className="subtitle">Some of my projects, to study purposes, customers or business.</p>
        <br/><br/>
        <Container maxWidth="lg">
            <Grid container spacing={3} align="center">
                <Grid item lg={6}>
                    <Project
                        title="Jubas Barbershop"
                        description="Project designed by me, to a client and friend.
                        Institutional website of a barber shop. Project made in ReactJS and NodeJS.
                        Still in development, with only a few texts and photos missing"
                        github="https://github.com/dieezs/Juba-sBarbearia"
                        fly=""
                        image={ImageJubas}

                    />
                </Grid>
                <Grid item lg={6}>
                    <Project
                        title="API Management"
                        description="To learning and consume some API calls, i made this little project with React and Material UI just for fun. APIs consumed: Spotify, Weather, Twitter and Github. "
                        github="https://github.com/dieezs/api_management"
                        fly=""
                        image={Code}

                    />
                </Grid>
                <Grid item lg={6}>
                    <Project
                        title="Helpdesk Knowledge Base"
                        description="Since the support area where I worked was lacking a knowledge base,
                        idealized by me, the project consisted of a system where Helpdesk technicians could
                        clarify recurring doubts that they had in their workday."
                        github="https://github.com/dieezs/newProjectBaseDeConhecimento"
                        fly=""
                        image={Helpdesk}

                    />
                </Grid>
            </Grid>
        </Container>
    </div>
)

export default Projects