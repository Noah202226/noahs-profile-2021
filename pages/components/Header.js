import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-scroll";

import { AppBar, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import MenuItem from "@mui/material/MenuItem";

import { Facebook, HomeMax, MilitaryTech, YouTube } from "@mui/icons-material";
import Image from "next/image";

const pages = [
  // { name: "Services", path: "/services", id: 1, target: "services" },
  // { name: "Pricing", path: "/pricing", id: 2, target: "pricing" },
  { name: "Projects", path: "/services", id: 3, target: "projects" },
  { name: "Contact", path: "/contact", id: 4, target: "contact" },

  // { name: "Blog", path: "/blog", id: 5, target: "contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [navbarBackground, setnavbarBackground] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("g");
    setAnchorElNav(null);
  };

  const changeBackgroundColor = () => {
    if (window.scrollY >= 120) {
      setnavbarBackground(true);
    } else {
      setnavbarBackground(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeBackgroundColor);
  }, []);

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ opacity: 0.9, background: "transparent" }}
        className={navbarBackground ? "navbar" : ""}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              href={"/"}
              to="hero"
              smooth={true}
              offset={-100}
              duration={400}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Image src={"/nl.png"} alt="NL logo" width={26} height={26} />
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
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
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.length > 0 &&
                  pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Link
                        href={page.path}
                        to={page.target}
                        onClick={handleCloseNavMenu}
                        style={{ fontFamily: "Lato, sans-serif" }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>

            <Link
              href={"/"}
              to="hero"
              smooth={true}
              offset={-100}
              duration={400}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <Image src={"/nl.png"} alt="NL logo" width={26} height={26} />
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.length > 0 &&
                pages.map((page) => (
                  <Link
                    className="navlink"
                    // href={page.target}
                    to={page.target}
                    key={page.id}
                    smooth={true}
                    offset={-80}
                    duration={400}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      fontFamily: "Lato, sans-serif",
                    }}
                    download={true}
                  >
                    {page.name}
                  </Link>
                ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Tooltip title="Facebook" arrow>
                <IconButton
                  href="https://www.facebook.com/noaligpitan26"
                  target="_blank"
                >
                  <Facebook color="red" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Youtube" arrow>
                <IconButton
                  href="https://www.youtube.com/channel/UCY7RgjrnESF5AxgjF2PLyRw"
                  target="_blank"
                >
                  <YouTube />
                </IconButton>
              </Tooltip>

              <Tooltip title="Download CV" arrow>
                <IconButton href="/Noah-Update-CV.pdf" target="_blank" download>
                  <Image
                    src={"/file-new.svg"}
                    alt="download resume"
                    width={20}
                    height={20}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
