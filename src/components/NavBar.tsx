import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import "../styles/NavBar.css";

// Define Props if any (Here no props are passed, but you can define them if needed)
interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Toolbar className='appbar'>


                {/* Title/Brand Name */}
                <Button href="#">
                    Eman Sherif
                </Button>


                {/* Navigation Links (can be buttons or links) */}
                <Button color="inherit" href="#about" sx={{ marginLeft: "auto" }}>
                    About
                </Button>
                <Button color="inherit" href="#experience">
                    Experience
                </Button>
                <Button color="inherit" href="#projects">
                    Projects
                </Button>
                <Button color="inherit" href="https://drive.google.com/file/d/1wIltX3uDRo8rtXrvoBs3o30oW9c0ZVrC/view?usp=sharing">
                    CV
                </Button>

                {/* Icons */}
                <IconButton color="inherit" href="emans@uw.edu">
                    <EmailRoundedIcon />
                </IconButton>
                {/* <IconButton
                    color="inherit"
                    href="#"
                    target="_blank"
                > */}
                {/* <GitHubIcon /> */}
                {/* </IconButton>
                <IconButton
                    color="inherit"
                    href="#"
                    target="_blank"
                > */}
                {/* <LinkedInIcon /> */}
                {/* </IconButton> */}

            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
