import {Box, Container, Grid, Typography} from "@mui/material";
import TimerIcon from '@mui/icons-material/Timer';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';


const classes = {

    root: {
        position: "relative",
        top: "74vh",
        width: "100%",
        backgroundColor: "whitesmoke"
    },
    content: {
        paddingBottom: 5,
    },
}

const WhyUs = () => {

    return (
        <Box id={"reason"} sx={classes.root}>
            <a name={"reason"} />
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
                        <Typography variant="h3" component="h3" align={"center"} gutterBottom > Why Us? </Typography>
                    </Grid>

                    <Grid item xs={12} align={"center"}>
                        We provide the most reliable service along with the best trip you will ever have.
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <TimerIcon fontSize={"large"} />
                            <Typography variant="h6" component="h6" gutterBottom > Time </Typography>
                            <Typography variant="body1" component="span" align={"center"} gutterBottom >
                                Faster than fast, quicker than quick. We are Lightning. Speed. We are Speed.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <SecurityIcon fontSize={"large"} />
                            <Typography variant="h6" component="h6" gutterBottom > Security </Typography>
                            <Typography variant="body1" component="span" align={"center"} gutterBottom >
                                We use the safest technologies in every field. Your personal information is safe with us ;)
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <PaymentIcon fontSize={"large"} />
                            <Typography variant="h6" component="h6" gutterBottom > Payment </Typography>
                            <Typography variant="body1" component="span" align={"center"} gutterBottom >
                                We work with the easiest, fastest and most reliable payment methods.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default WhyUs;