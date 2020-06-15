import React, { useEffect, useState } from 'react';

//Material UI
import { Container, Grid, Chip, Button } from '@material-ui/core'

const Article = () => {

    const [publications, setPublications] = useState([])

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@diegomagasouza")
            .then(result => { return result.json() })
            .then(data => {
                const setData = data.items;
                setPublications(setData);
            })
    }, [])

    const publicationsToBeRendered = publications.map(publication => (
        <Grid item lg={12} align="center">
            <div className="publication">
                <p className="titleArticle">{publication.title}</p>
                {publication.categories.map(tag => (
                    <Chip key={tag} label={tag} variant="outlined" className="tag" />
                ))}
                <br/>
                <Button href="#text-buttons" color="primary" href={publication.link} target="_blank" variant="outlined" className="button" >go to article</Button>
            </div>
        </Grid>
    ))


    return (
        <div className="Article">
            <p className="title">Articles</p>
            <p className="subtitle">Some of my articles, write by me and published on Medium</p>
            <br /><br />
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {publicationsToBeRendered}
                </Grid>
            </Container>

        </div>
    )
}

export default Article;