import {Box} from "@mui/material";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/WhyUs";
import Team from "../components/Team";


const HomeView = () => {

    return (
        <Box>
            <Hero />
            <AboutUs />
            <Services />
            <Team />
        </Box>
    )

}

export default HomeView;