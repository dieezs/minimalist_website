import React from 'react';

//Material UI
import { Container, Grid } from '@material-ui/core'

//My Components
import PaperSkill from './PaperSkill'

//React-icons
import {FaFileCode} from 'react-icons/fa'

const Skills = () => (
    <div className="Skills">
        <Container maxWidth="lg">

            <div className="content-text">
                <p className="title">Hi! I'm Diego Magalhães de Souza</p>
                <p className="text">text text text text text text text text text text text text </p>
            </div>

            <div className="content-box">
                <Grid container spacing={3}>
                    <PaperSkill
                        content_paper="content-paper"
                        paperclass="paper-class"
                        icon={<FaFileCode size={50} className="iconSkill"/>}
                        hability="Frontend"
                        briefText="some text some text some text"
                        subtitle="haaha"
                    />
                </Grid>
            </div>

        </Container>
    </div>
)

export default Skills