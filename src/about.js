import react from 'react';
import './App.scss';
import { styled, useTheme } from '@mui/material/styles';
import {Container,Box,Grid,Button} from '@mui/material/';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import aaron from "./images/aaron.jpg";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About(){
    return(
        <Box className="whoami-container" container id="about" >
            <Box>
                {/* <Typography variant="h4" align="center">Who am I?</Typography> */}
                <Card sx={{ maxWidth: 300 }} className="about-img" >
                    <CardMedia
                        component="img"
                        image={aaron}
                        alt="aaron picture"
                        
                    />
                </Card>
            </Box>
            <Box className="aboutme">
                <Typography variant="h6" classNam="aboutme-box">About me</Typography>
                <Divider/>
                <Typography variant="body1" classNam="aboutme-box">
                    I am Aaron John E. Bolival 22 years old from Caloocan City, Graduate from STI College Caloocan as a Bachelor of Science in Information Technology 
                    with background in programming and design. 
                    <br/>
                    What I liked in programming is the challenge to solve the coding problems and seeing the program and the design I made like developing 
                    a Website, Desktop and Mobile Application is successfuly deployed.             
                </Typography>
                <br/>
                <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1wDzigOQ9eH_Cpgbt_Q4Sfo2zN_IVctXj/view?usp=sharing" target="_blank">Resume</Button>
            </Box>
        </Box>
    )
}