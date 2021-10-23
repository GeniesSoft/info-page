import {Box, Container, Grid, Typography} from "@mui/material";
import TeamContainer from "../containers/TeamContainer";

const classes = {

    root: {
        position: "relative",
        top: "78vh",
        width: "100%",
    },
    content: {
        paddingBottom: 5,
    },
}

const Team = () => {

    return (
        <Box sx={classes.root}>
            <Container
                sx={classes.content}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                >

                    <Grid item xs={12}>
                        <Typography variant="h3" component="h3" align={"center"} gutterBottom > Meet Our Team </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TeamContainer />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );

}

export default Team;