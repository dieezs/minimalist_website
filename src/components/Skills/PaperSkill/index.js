import React from 'react';

import { Paper, Grid } from '@material-ui/core'

const PaperSkill = ({ hability, icon, content_paper, paperclass, briefText, skills, textSkills, tools, textTools }) => {

    const toolToBeRendered = textTools.map(tool => (<li  className="textSubtitle2">{tool}</li>))

    return (
        <Grid item lg={4} align="center">
            <Paper elevation={3} className={paperclass}>
                <div className={content_paper}>
                    {icon}
                    <p className="title">{hability}</p>
                    <p className="text">{briefText}</p>
                    <br />
                    <p className="subtitle">{skills}</p>
                    <p className="textSubtitle">{textSkills}</p>
                    <br />
                    <p className="subtitle2">{tools}</p>
                    {toolToBeRendered}
                </div>
            </Paper>
        </Grid>
    )

}

export default PaperSkill;