import React, { Fragment } from 'react';

import { Paper, Grid, Hidden } from '@material-ui/core'

const PaperSkill = ({ hability, icon, content_paper, paperclass, briefText, skills, textSkills, tools, textTools }) => {

    //pega o ultimo item do array
    const lastItem = [...textTools].pop();
    const toolToBeRendered = textTools.map(tool => (<li key={tool} className="textSubtitle2">{tool}</li>))
    const toolToBeRenderedMobile = textTools.map(item => {
        if (lastItem == item) {
            return item;
        }else{
            return `${item}, `;
        }
    })


    return (
        <Fragment>
            <Hidden xsDown>
                <Grid item lg={4} md={4} sm={4} align="center">
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
            </Hidden>

            <Hidden smUp >
                <Grid item xs={12} align="center">
                    <Paper elevation={3} className="mobile">
                        <span className="icon">{icon}</span>
                        <p className="title">{hability}</p>
                        <p className="textSubtitle">{textSkills}</p>
                        <p className="subtitle2">{tools}</p>
                        <p className="skillsMobile">{toolToBeRenderedMobile}</p>
                    </Paper>
                </Grid>
            </Hidden>
        </Fragment>
    )

}

export default PaperSkill;