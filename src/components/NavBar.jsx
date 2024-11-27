import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.svg";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#0c0c0e",
        },
        text: {
            primary: "#bbbbbb",
        },
    },
    typography: {
        fontSize: 10,
        button: {
            fontSize: 14,
        },
    },
});


const pages = ["Home", "About Us", "Portfolio"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo */}
                        <Box
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: "none", md: "flex" },
                                mr: 1,
                                textDecoration: "none",
                            }}
                        >
                            <img src={logo} alt="U-Innova Logo" style={{ height: 40 }} />
                        </Box>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                color: "text.primary",
                                textDecoration: "none",
                            }}
                        >
                            <img src={logo} alt="U-Innova Logo" style={{ height: 30 }} />
                        </Typography>

                        {/* Menu Mobile */}
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="open menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: "text.primary" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                {/* Links */}
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign="center"
                                            sx={{ color: "text.primary" }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Menu Desktop + Ícones de Redes Sociais */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            {/* Links */}
                            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        href={`#${page.toLowerCase().replace(/\s+/g, '-')}`}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: "text.primary",
                                            display: "block",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            {/* Ícones de Redes Sociais */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <IconButton
                                    href="https://www.facebook.com/uinnova.studio"
                                    target="_blank"
                                    sx={{ color: "text.primary" }}
                                >
                                    <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: "24px" }} />
                                </IconButton>
                                <IconButton
                                    href="https://www.instagram.com/uinnova_studio"
                                    target="_blank"
                                    sx={{ color: "text.primary" }}
                                >
                                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px" }} />
                                </IconButton>
                                <IconButton
                                    href="https://wa.me/+818066557091"
                                    target="_blank"
                                    sx={{ color: "text.primary" }}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "24px" }} />
                                </IconButton>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
