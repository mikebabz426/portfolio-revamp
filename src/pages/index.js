import React, { useState, useEffect, useContext } from "react";
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
import { ThemeContext } from "../ThemeContext";
import SEO from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = () => {
  const classes = useStyles();
  const [animation, setAnimation] = useState(false);
  const [theme] = useContext(ThemeContext);

  useEffect(() => setAnimation(true), []);

  return (
    <Layout headerInfo>
      <SEO title="Home" />
      <h1>Welcome to my site</h1>
    </Layout>
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

export default IndexPage;
