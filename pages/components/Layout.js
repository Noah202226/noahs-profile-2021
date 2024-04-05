import Header from "./Header";

import { Box, Container, Stack, Typography } from "@mui/material";
import { ThemeProvider, colors, createTheme } from "@mui/material";

import Typer from "./TypingText/Typer";

const modifyTheme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[500],
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={modifyTheme}>
      {/* Hero */}
      <div className="hero">
        <video autoPlay muted loop id="video-bg">
          <source src="/coding-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box id="hero" className="content">
          <Header />
          <Stack
            className="card"
            marginBottom={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-around"
            sx={{
              height: { xs: "100vh", lg: "100vh" },
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                height: { xs: "80vh", lg: "75%" },
              }}
              alignItems={{ xs: "center", md: "center" }}
              justifyContent={{ xs: "space-around", md: "space-between" }}
            >
              <Box>
                <Typography
                  variant="h1"
                  textAlign={{ xs: "center", md: "center" }}
                  fontSize={{ xs: 60, md: 76, lg: 106 }}
                  marginY={{ xs: 6, md: 5 }}
                  marginLeft={{ xs: 2, md: 2 }}
                  letterSpacing={5}
                  sx={{
                    transition: ".5s ease",
                    textShadow: { xs: "2px 2px 2px black", md: "0" },
                  }}
                >
                  {<Typer textToType={"NOA LIGPITAN"} speed={100} />}
                </Typography>

                <Typography
                  variant="h3"
                  textAlign={{ xs: "left", md: "center" }}
                  fontSize={{ xs: 26, md: 76, lg: 50 }}
                  marginY={{ xs: 0, md: 2 }}
                  marginLeft={{ xs: 2, md: 2 }}
                  letterSpacing={5}
                  sx={{
                    transition: ".5s ease",
                    fontStyle: "italic",
                    color: "white",
                    letterSpacing: ".5rem",
                    textShadow: { xs: "2px 2px 2px black", md: "0" },
                  }}
                >
                  {<Typer textToType={"Software Developer"} speed={50} />}
                </Typography>
              </Box>

              <Typography
                variant="h6"
                textAlign={{ xs: "left", md: "center" }}
                fontSize={{ xs: 20, md: 28, lg: 30 }}
                marginLeft={{ xs: 2, md: 2 }}
                letterSpacing={2}
                mt={{ xs: 3, md: 28, lg: 12 }}
                sx={{ textShadow: { xs: "2px 2px 2px black", md: "0" } }}
              >
                Hi there, Let's{" "}
                <em className="font-highlighted" style={{ color: "white" }}>
                  Designs
                </em>{" "}
                and <em className="font-highlighted">Develop</em> your products.
              </Typography>

              <Typography
                variant="h6"
                textAlign={{ xs: "center", md: "center" }}
                fontSize={{ xs: 18, md: 28, lg: 30 }}
                letterSpacing={2}
                bgcolor={"#202124"}
                color={"black !important"}
                p={2}
                borderRadius={5}
                marginY={{ xs: 3, md: 2 }}
                width={{ xs: "90%", md: "100%" }}
              >
                <Typer
                  textToType={`Assists enterprises in developing apps to streamline operations.`}
                  speed={20}
                />
              </Typography>
            </Box>

            <section className="button-scroll-container">
              <div className="button-scroll"></div>
            </section>
          </Stack>
        </Box>
      </div>

      <Container container="true">{children}</Container>
    </ThemeProvider>
  );
}
