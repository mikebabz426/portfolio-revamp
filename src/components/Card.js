import React, { useState } from "react";
import * as cardStyles from "./card.module.css";
import { Button, Link as MuiLink, Card as CardCover } from "@material-ui/core";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Card = ({ project }) => {
  const [hoverClass, setHoverClass] = useState(false);

  const cardHoverStyle = {
    top: "200px",
  };

  return (
    <CardCover
      raised
      className={cardStyles.card}
      onClick={() =>
        setHoverClass((hoverClass) => (hoverClass === false ? true : false))
      }
    >
      {project.name === "Sunset Canines" ? (
        <StaticImage
          src="../images/sunsetcard2.png"
          alt="Sunset Canines Logo"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      ) : project.name === "My Fleet Tracker" ? (
        <StaticImage
          src="../images/volvocard.jpg"
          alt="picture of OTR truck"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      ) : (
        <StaticImage
          src="../images/luckyCharm.jpg"
          alt="Lucky Charm Logo"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      )}

      <div
        className={cardStyles.content}
        style={hoverClass ? cardHoverStyle : null}
      >
        <h3 className={cardStyles.heading}>{project.name}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 3px", textDecoration: "none", color: "#fff" }}
          >
            <Button size="small" color="secondary" variant="contained">
              Code
            </Button>
          </a>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 3px", textDecoration: "none", color: "#fff" }}
          >
            <Button size="small" color="secondary" variant="contained">
              Site
            </Button>
          </a>
          <MuiLink
            to="/projects"
            component={Link}
            style={{ margin: "0 3px", textDecoration: "none", color: "#fff" }}
            state={project}
          >
            <Button size="small" color="secondary" variant="contained">
              ...More
            </Button>
          </MuiLink>
        </div>
      </div>
    </CardCover>
  );
};

export default Card;
