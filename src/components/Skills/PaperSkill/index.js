import React from 'react';

import { Paper, Grid } from '@material-ui/core'

const PaperSkill = ({ hability, icon, content_paper, paperclass, briefText, subtitle }) => {

    return (
        <Grid item lg={4} align="center">
            <Paper elevation={3} className={paperclass}>
                <div className={content_paper}>
                    {icon}
                    <p className="title">{hability}</p>
                    <p>{briefText}</p>
                    <p>{subtitle}</p>
                </div>
            </Paper>
        </Grid>
    )

}

export default PaperSkill;