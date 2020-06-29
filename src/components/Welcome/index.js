import React from 'react';
import '../../public/css/main.scss'

import Image from '../../assets/clip-programming.png'

//Material UI
import { Container } from '@material-ui/core'

const Welcome = () => (
    <Container maxWidth="lg">
        <div className="Welcome">

            <p className="title">Frontend Developer</p>
            <p className="text">I love coding and do dumb code. Less is more!</p>

            <img src={Image} alt="Programmer" width={900} className="image" />
        </div>
    </Container>
)

export default Welcome;