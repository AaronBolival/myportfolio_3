import react from 'react';
import './App.scss';
import { styled, useTheme } from '@mui/material/styles';
import {Container,Box,Grid,Button,TextareaAutosize} from '@mui/material/';
import Typography from '@mui/material/Typography';


import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import emailjs from 'emailjs-com';

import { Input,FormControl,TextField } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hcjya3w', 'template_6ywsagd', e.target, 'user_5ZxOpS022ZLcSvAwxKIPS')
      .then((result) => {
        //   console.log(result.text);
        alert('Your email has been sent')
        
      }, (error) => {
        //   console.log(error.text);
        alert('Sent failed');
      });
    }
export default function Contact(){
    return(
        <Box className="contact-con" container id="contact">
            <Box item className="contact-con-text">
                <Typography variant="h2" align="center">Want to Hire me?</Typography><br/>
                    <Stack direction="column" spacing={1}>
                        <Chip icon={<EmailSharpIcon />} label="aaronbolival@gmail.com" variant="outlined" /><br/>
                        <Chip icon={<CallSharpIcon />} label="Globe: (+63)995 4060 619" variant="outlined" /><br/>
                        <Chip icon={<FacebookSharpIcon />} label="Not available right now." variant="outlined" />
                    </Stack>
            </Box>
            <Box item className="contact-con-form">
                <form className="textfield-form" onSubmit={sendEmail} autoComplete="off">
                <input type="hidden" name="contact_number" />
                   <TextField type="text" name="from_name" required={true} id="standard-basic" label="Name/Company" variant="standard" helperText="Please Enter your name or company" className="textfield" />

                   <TextField type="email" name="from_name" required={true} id="standard-basic" label="Email" variant="standard" helperText="Please Enter your email" className="textfield" />
                   <br/>
                   <TextareaAutosize
                   name="message"
                   aria-label="Message"
                   placeholder="Message"
                   minRows={10}
                   maxRows={20}
                   className="textArea" 
                   />
                   <hr/>
                   <Stack direction="row" spacing={2}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    )
}