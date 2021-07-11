import React, { useContext } from "react";
import { CssBaseline } from "@material-ui/core";
import PropTypes from "prop-types";
import "@fontsource/roboto";
import "../../src/main.css";
import { ThemeContext } from "./../ThemeContext";
import Header from "./Header";

const Layout = ({ children, headerInfo }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <CssBaseline>
      <Header
        themeHandler={() => setTheme(!theme)}
        themeState={theme}
        infoDisplay={headerInfo}
      />
      {children}
    </CssBaseline>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
