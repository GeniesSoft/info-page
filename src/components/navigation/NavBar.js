import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Box, Container, Drawer, List, ListItem, ListItemText} from "@mui/material";
import {useEffect, useState} from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {LINKS} from "./Links";
import styled from "@emotion/styled";

const appBarTransparent = "transparent";
const appBarSolid = "inherit";

const buttonWhite = { color: "white" }
const buttonBlack = { color: "black" }

const NavBar = () => {

    const links = LINKS;

    const [navBack, setNavBack] = useState(appBarTransparent);
    const [navButtons, setNavButtons] = useState(buttonWhite);
    const handleNavColorChange = () => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setNavBack(appBarSolid);
                setNavButtons(buttonBlack);
            }
            else {
                setNavBack(appBarTransparent);
                setNavButtons(buttonWhite);
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }
    useEffect( handleNavColorChange, []);

    const [mobileView, setMobileView] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleResponsiveness = () => {
        const setResponsiveness = () => {
            if (window.innerWidth < 960) {
                setMobileView(true );
            }
            else {
                setMobileView(false);
            }
        }
        setResponsiveness();
        window.addEventListener("resize", setResponsiveness);
        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    };
    useEffect(handleResponsiveness, []);

    const displayDesktop = () => {
        return (
            <Container>
                <Toolbar>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="h6" component="div" sx={navButtons}>
                            Upislands
                        </Typography>
                    </Box>

                    {links.map(link => <Button key={link.id} sx={navButtons} href={link.href}>{link.label}</Button>)}

                </Toolbar>
            </Container>
        );
    }

    const displayMobile = () => {
        const handleDrawerOpen = () => setDrawerOpen(true);
        const handleDrawerClose = () => setDrawerOpen(false);

        const DrawerHeader = styled('div')(({ theme }) => ({
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        }));

        return (
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon sx={navButtons} />
                </IconButton>

                <Box sx={{flexGrow: 1}}>
                    <Typography variant="h6" component="div" sx={navButtons}>
                        Upislands
                    </Typography>
                </Box>

                <Drawer
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                    anchor="left"
                    variant="persistent"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {links.map(link =>
                            <ListItem key={link.id}>
                                <Button href={link.href}>
                                    <ListItemText primary={link.label} />
                                </Button>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
            </Toolbar>
        );
    }

    return (
        <AppBar elevation={navBack === "transparent" ? 0 : 5} color={navBack} position="sticky">
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    );

}

export default NavBar;