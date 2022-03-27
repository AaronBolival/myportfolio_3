import react from 'react';
import './App.scss';
import {Container,Box,Grid,Button} from '@mui/material/';
import Typography from '@mui/material/Typography';

import php from "./progskills/php.png";
import csharp from "./progskills/csharp.png";
import java from "./progskills/java.png";
import mysql from "./progskills/mysql.png";
import htmlfive from "./progskills/htmlfive.png";
import javascript from "./progskills/js.png";
import reactjs from "./progskills/react.png";

import cssthree from "./progskills/cssthree.png";
import bootstrap from "./progskills/bootstrap.png";
import sass from "./progskills/sass.png";
import materialui from "./progskills/mui.png";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Techskills from "./images/techskills.gif";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const skills = [
    {
        name:"PHP",
        images:php
    },
    {
        name:"Java",
        images:java
    },
    {
        name:"C#",
        images:csharp
    },
    {
        name:"MySql",
        images:mysql
    },
    {
        name:"html",
        images:htmlfive
    },
    {
        name:"Javascript",
        images:javascript
    },
    {
        name:"ReactJs",
        images:reactjs
    },
    {
        name:"CSS",
        images:cssthree
    },
    {
        name:"Bootstrap",
        images:bootstrap
    },
    {
        name:"SASS",
        images:sass
    },
    {
        name:"Material UI",
        images:materialui
    },
]


export default function Techstack(){
    return(
        <Box className="techstack-container" container id="skill">
            
            <Box className="techstack-text-con" item order={{lg:1,xs:1}}>
                <Card sx={{ maxWidth: 700 }}>
                  
                        <CardMedia
                        component="img"
                  
                        image={Techskills}
                        alt="techskill image gif"
                        className="card-gif"
                        />
                 
                </Card>
            </Box>
            <Box item order={{lg:2 , xs:2}}>
            <Typography variant="h2" align="center" >
                    Tech Skills
             </Typography>
            <Box className="skills-list-con" >
           
                {
                    skills.map(skill => {
                        
                        return (
                            <>
                            <Box className="skills-list" >
                                
                                <Typography variant="subtitle1" align="center">{skill.name}</Typography>
                                <img src={skill.images} width="50" />
                                
                            </Box>
                            
                            </>
                            
                        )   
                    })
                }
            </Box>
            </Box>
        </Box>
    )
}