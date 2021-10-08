import react from 'react';
import './App.scss';
import {Container,Box,Grid,Button} from '@mui/material/';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



import Carousel from 'react-bootstrap/Carousel';

import clifton from "./certificates/clifton.jpg";
import javaoop from "./certificates/javaoop.jpg";
import javaprog from "./certificates/javaprog.jpg";
import mtsateamplayer from "./certificates/mtsateamplayer.jpg";
import responsiveweb from "./certificates/responsiveWeb.jpg";
import sqlcert from "./certificates/sql.jpg";
import webdevtesda from "./certificates/webdevtesda.jpg";
import webdevtraining from "./certificates/webdevtraining.jpg";

const certificates = [
    {
        name:"Responsive Web",
        images:responsiveweb,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"SQL",
        images:sqlcert,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"Java OOP",
        images:javaoop,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"Java Programming",
        images:javaprog,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"MTSA Teamplayer",
        images:mtsateamplayer,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"TESDA Web Development Training",
        images:webdevtraining,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"TESDA Web Development top",
        images:webdevtesda,
        href:"",
        desc:"",
        category:""
    },
    {
        name:"Clifton Strengths",
        images:clifton,
        href:"",
        desc:"",
        category:""
    }

    
  
]
export default function Certificate(){
    return(
        <Box className="certificate-con" container>
            <Box className="certificate-text-con" item>
                <Typography variant="h2" align="center">Certificates</Typography>
                <Divider/>
                <Typography variant="body1" align="center">
                    List of certificates from different websites, company, and trainings
                </Typography>
                <Card>
                    <CardMedia
                    component=""
                    image=""
                    alt=""
                    />
                </Card>
            </Box>
            <Box className="certificate-list-con" item>
                    <Carousel className="carousel-con">
                    {
                        certificates.map(certificate=>{
                            return(
                            <Carousel.Item interval={1000} className="carousel-item">
                                <img
                                className="d-block w-100 h-100"
                                src={certificate.images}    
                                className="cert-images"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            )
                        })
                    }
                    </Carousel>
            </Box>
        </Box>
    )
}