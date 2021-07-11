import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import {
  Container,
  IconButton,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  Collapse,
} from "@material-ui/core";
import ArrowDDIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { ThemeContext } from "../../ThemeContext";

const Hero = () => {
  const classes = useStyles();
  const [animation, setAnimation] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => setAnimation(true), []);

  return (
    <Container className={classes.hero} id="hero">
      <Collapse
        in={animation}
        timeout={1200}
        style={{ margin: "0 auto", width: "100%" }}
      >
        <Box className={classes.container}>
          <Typography
            variant="h1"
            className={classes.showcaseOne}
            style={theme ? { color: "#f2f2f2" } : { color: "#2e2e2e" }}
          >
            JS
          </Typography>
          <Typography
            variant="h1"
            className={classes.showcaseTwo}
            style={theme ? { color: "#f2f2f2" } : { color: "#2e2e2e" }}
          >
            React
          </Typography>
          <Typography
            variant="h1"
            className={classes.showcaseThree}
            style={theme ? { color: "#f2f2f2" } : { color: "#2e2e2e" }}
          >
            GraphQL
          </Typography>
          <Typography
            variant="h1"
            className={classes.showcaseFour}
            style={theme ? { color: "#f2f2f2" } : { color: "#2e2e2e" }}
          >
            CSS3
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.type}
            style={{ marginBottom: "1rem" }}
          >
            Hello
          </Typography>
          <Typography
            variant="h2"
            align="center"
            className={classes.type}
            style={{ marginBottom: "1rem" }}
          >
            My name is Mike,
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.type}
            style={{ marginBottom: "1rem" }}
          >
            and I turn your ideas into clean and user-friendly web solutions
          </Typography>
          <Box className={classes.buttonBox}>
            <Link to="#about" className={classes.link}>
              <Button variant="outlined" className={classes.btn}>
                About Me
              </Button>
            </Link>
            <Link to="#projects" className={classes.link}>
              <Button
                size="large"
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                My Work
              </Button>
            </Link>
          </Box>
          <Box className={classes.social}>
            <MuiLink
              style={{
                textDecoration: "none",
              }}
              target="_blank"
              href="https://www.linkedin.com/in/mike-babetchki-34a150102/"
            >
              <LinkedInIcon
                color="secondary"
                fontSize="large"
                className={classes.socialLink}
              />
            </MuiLink>
            <MuiLink
              style={{
                textDecoration: "none",
              }}
              target="_blank"
              href="https://github.com/mikebabz426"
            >
              <GitHubIcon
                color="secondary"
                fontSize="large"
                className={classes.socialLink}
              />
            </MuiLink>
          </Box>
          <IconButton color="secondary" className={classes.scroll}>
            <MuiLink href="#skills" className={classes.skills}>
              <ArrowDDIcon fontSize="large" />
            </MuiLink>
          </IconButton>
        </Box>
      </Collapse>
    </Container>
  );
};

//Custom Styles
const useStyles = makeStyles((theme) => ({
  hero: {
    width: "100vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    margin: "0 auto",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  btn: {
    margin: "1rem .5rem",
    [theme.breakpoints.down("sm")]: {
      margin: ".5rem .1rem",
    },
  },
  link: {
    textDecoration: "none",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  social: {
    marginTop: "1rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialLink: {
    margin: "0 .5rem",
    "&:hover": {
      color: theme.palette.secondary.light,
      textDecoration: "none",
      cursor: "pointer",
    },
  },
  scroll: {
    position: "absolute",
    bottom: "-50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  skills: {
    textDecoration: "none",
    color: "#3f51b5",
    background: "transparent",
    "&:visited": {
      textDecoration: "none",
      color: "#3f51b5",
    },
  },
  showcaseOne: {
    position: "absolute",
    color: "#f2f2f2",
    fontWeight: "bold",
    left: "10%",
    top: "-40%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  showcaseTwo: {
    position: "absolute",
    textTransform: "uppercase",
    color: "#f2f2f2",
    fontWeight: "bold",
    left: "75%",
    top: "-20%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  showcaseThree: {
    position: "absolute",
    fontStyle: "uppercase",
    color: "#f2f2f2",
    fontWeight: "bold",
    left: "60%",
    top: "90%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  showcaseFour: {
    position: "absolute",
    fontStyle: "uppercase",
    color: "#f2f2f2",
    fontWeight: "bold",
    left: "-20%",
    top: "70%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default Hero;
