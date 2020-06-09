import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container, Grid } from '@material-ui/core'

//My Components
import Project from './Project'

//Image SRC
import ImageJubas from '../../assets/customerJubas.png'
// import Helpdesk from '../../assets/teste.png'


const Projects = () => (
    <div className="Projects">
        <p className="title">Projects</p>
        <p className="subtitle">Some of my projects, to customers and business.</p>
        <br/>
        <Container maxWidth="lg">
            <Grid container spacing={3} align="center">
                <Grid item lg={6}>
                    <Project
                        title="Jubas Barbershop"
                        description="Project designed by me, designed for a client and friend.
                        Institutional website of a barber shop. Project made in ReactJS and NodeJS.
                        Still in development, with only a few texts and photos missing"
                        github=""
                        fly=""
                        image={ImageJubas}

                    />
                </Grid>
                <Grid item lg={6}>
                    <Project
                        title="Base de Conhecimento para Helpdesk"
                        description=""
                        github=""
                        fly=""
                        image="a"

                    />
                </Grid>
            </Grid>
        </Container>
    </div>
)

export default Projects