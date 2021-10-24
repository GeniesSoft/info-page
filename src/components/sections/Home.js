import ReactPlayer from "react-player";
import {Box, Typography} from "@mui/material";

const classes = {
    root: {
        width: "100%",
        height: "80vh",
        position: "absolute",
        top: 0,
        "& video": {
            objectFit: "cover",
        },

    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    title: {
        paddingBottom: "10px",
    },
}

const Home = () => {

    return (
        <Box id={"home"} sx={classes.root}>
            <a name={"home"} />
            <ReactPlayer
                url={`${process.env.PUBLIC_URL}/videos/video-3.mp4`}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <Box sx={classes.overlay}>
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                >
                    <Typography variant="h3" component="h1" sx={classes.title}>
                        Trip.ly
                    </Typography>
                    <Typography variant="h5" component="h2" sx={classes.title}>
                        “When all else fails, take a vacation.”
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;