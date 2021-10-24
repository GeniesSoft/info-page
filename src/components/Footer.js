import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

const classes = {

    root: {
        position: "relative",
        top: "78vh",
        py: "20px",
        width: "100%",
        backgroundColor: "black",
    },
}

const Footer = () => {
    return (
        <AppBar sx={classes.root} position="static" color="primary">
            <Typography align="center" variant="body1" color="inherit">
                &copy; 2021 · All rights reserved · Created by GeniesSoft
            </Typography>
        </AppBar>
    );
}

export default Footer;