import React from 'react';
import '../../public/css/main.scss'

//Material UI
import { Container } from '@material-ui/core'

const Education = () => (
    <div className="Education">
        <br />
        <p className="title">Education</p>
        <p className="subtitle">Academic Education</p>
        <br/><br/>
        <Container maxWidth="lg" align="center">
            <p className="nameCourse">Software Engineering</p>
            <p className="type">MBA</p>
            <p className="date">June 2019 - December 2020 | Faculdade Impacta</p>
            <br /><br />
            <p className="nameCourse">Analysis and Systems Development</p>
            <p className="type">BACHELOR OF TECHNOLOGY</p>
            <p className="date">January 2017 - June 2019 | Faculdade Drummond</p>
            <br /><br />
            <p className="nameCourse">Internet Computing</p>
            <p className="type">TECHNICIAN</p>
            <p className="date">June 2015 - January 2017 | ETEC Parque Belém - Centro Paula Souza</p>
        </Container>

    </div>
)

export default Education;