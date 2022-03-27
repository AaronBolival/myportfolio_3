import react from 'react';
import './App.scss';
import {Container,Box,Grid,Button} from '@mui/material/';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';

import covidImg1 from "./projects-image/covidImg1.png";
import portfolioImgv1 from "./projects-image/portfolioImgv1.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const projects = [
    {
        name:"Portfolio V1",
        images:portfolioImgv1,
        href:"https://aaronbolival.github.io/portfolio/index.html",
        desc:"MY first Portfolio",
        category:"Simple task"
    },
    {
        name:"Covid Status",
        images:covidImg1,
        href:"https://aaronbolival.github.io/covid19status/",
        desc:"Status about Covid / Corona in all country",
        category:"Simple task"
    },
  
]
export default function Projects(){
    return(
        <Box className="projects-con" id="projects">
            <Typography variant="h2" align="center">Projects | Simple Tasks</Typography>
            <Divider/>
            <Container className="projects-con-list">
                {
                    projects.map(project=>{
                        return(
                            <Card sx={{ maxWidth: 445 }} className="projects-card"  data-aos="zoom-in">
                                <CardMedia
                                    component="img"
                                    image={project.images}
                                    alt="techskill image gif"
                                    className="project-img"
                                />
                                <CardContent>
                                    <Typography gutterbottom variant="h5" component="div" color="secondary">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        {project.desc}
                                    </Typography>
                                </CardContent>
                                <Divider/>
                                <CardContent>
                                    <Typography variant="body2">
                                        Category: {project.category}
                                    </Typography>
                                </CardContent>
                                <Divider/>
                                <CardActions>
                                    <Button size="snall" href={project.href} target="_blank">Open</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Container>
        </Box>
    )
}