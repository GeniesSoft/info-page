import {Box, Container, Grid, Typography} from "@mui/material";
import TargetIcon from "../icons/TargetIcon";
import SuccessIcon from "../icons/SuccessIcon";

const classes = {

    root: {
        position: "relative",
        top: "70vh",
        width: "100%",
        backgroundColor: "white",
    },
    content: {
        paddingBottom: 5,
    },
}

const AboutUs = () => {

    return (
        <Box id={"about"} sx={classes.root}>
            <a name={"about"} />
            <Container
                sx={classes.content}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={5}
                >
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h3" align={"center"} gutterBottom > About Us </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <SuccessIcon />
                            <Typography variant="h4" component="h4" align={"center"} gutterBottom > Our Vision </Typography>
                            <Typography variant="body1" component="span">
                                Proin ut ipsum vel elit congue pulvinar eget non ligula. Ut faucibus mi et lectus venenatis, eget tincidunt odio fermentum. Vestibulum faucibus massa eu turpis pharetra venenatis.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <TargetIcon />
                            <Typography variant="h4" component="h4" align={"center"} gutterBottom > Our Mission </Typography>
                            <Typography variant="body1" component="span">
                                Sed eu dolor pharetra, pellentesque elit vel, finibus sapien. Aliquam bibendum lectus eros, sit amet placerat nibh hendrerit et.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutUs;