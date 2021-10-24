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

                    <Grid item xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget sodales ipsum. Donec in laoreet nisl, ac maximus arcu. Aliquam facilisis finibus sapien, vitae fermentum ipsum fringilla eu. Suspendisse fermentum turpis vel varius euismod. Donec mollis varius rhoncus. Fusce dapibus, dolor a vulputate ultrices, nibh tellus euismod mauris, ut pellentesque nisi diam nec mauris.
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
                            <Typography variant="body1" component="span" gutterBottom >
                                Quisque ut nulla auctor, sollicitudin justo ullamcorper, viverra massa. Nulla facilisi. Nunc vitae interdum ligula. Fusce iaculis dapibus augue, nec tempor nisi scelerisque eu.
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
                            <Typography variant="body1" component="span" gutterBottom >
                                Suspendisse potenti. Sed eget ultricies mauris. Etiam congue pulvinar mi ac interdum. Fusce elementum risus eu dui tempus, sed semper risus semper.
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
                            <Typography variant="body1" component="span" gutterBottom >
                                Nulla facilisi. Nunc gravida et ex ac aliquam. Nulla et lorem urna. Ut et felis lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default WhyUs;