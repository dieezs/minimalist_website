import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Grid, Container, } from '@material-ui/core'

const Experience = () => (
    <div className="Experience">
        <br /><br /><br />
        <p className="title">Experience</p>
        <p className="subtitle">My Experience on IT business</p>
        <br /><br />
        <Container maxWidth="lg">
            <Grid container spacing={3} align="center">

                <Grid item lg={12} align="left" className="itemGrid">
                    <span className="timeAndCompany">IT COMMERCE | CURRENT</span>
                    <p className="role">Junior Analyst</p>
                    <p>Project: Enterprise Architecture at Arcos Dorados</p>
                    <ul>
                        <li>Modeling of high and low level diagrams</li>
                        <li>Documentation of system integrations (SOAP, REST, JSON, HTTP, ESB, TIBCO);</li>
                        <li>Application software architecture documentation</li>
                        <li>Management of the Corporate Architecture tool called Qualiware;</li>
                    </ul>
                    <br/>
                    <p>Project: Support at Prevent Senior | 11 months</p>
                    <ul>
                        <li>1st in the weekly and monthly top of call attendance in the Helpdesk;</li>
                        <li>Development of a knowledge base for the Helpdesk</li>
                        <li>Delegation / Management of calls to teams responsible teams</li>
                        <li>In person or remote support according to the need</li>
                        <li>Support to external and internal employees</li>
                        <li>Helpdesk team focal point to clarify team doubts</li>
                    </ul>
                </Grid>

                <Grid item lg={12} align="right" className="itemGrid">
                    <span className="timeAndCompany">PREVENT SENIOR | 9 MONTHS</span>
                    <p className="role">Young Apprentice</p>
                    <ul>
                        <li>IT inventory management and organization</li>
                        <li>Creation of an application for counting products in stock</li>
                        <li>Organization of spaces in the IT sector in order to provide the best handling of tools and find them more quickly.</li>
                    </ul>
                </Grid>

            </Grid>
        </Container>
    </div >
)

export default Experience;