import {Box} from "@mui/material";
import Home from "../components/sections/Home";
import AboutUs from "../components/sections/AboutUs";
import Team from "../components/sections/Team";
import WhyUs from "../components/sections/WhyUs";
import Footer from "../components/Footer";

const HomeView = () => {

    return (
        <Box>
            <Home />
            <AboutUs />
            <WhyUs />
            <Team />
            <Footer />
        </Box>
    )

}

export default HomeView;