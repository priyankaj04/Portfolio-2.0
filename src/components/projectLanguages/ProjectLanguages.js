import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import nextjs from "../../assests/images/nextjs.svg";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.name}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.name}</strong>
                    </Tooltip>
                  }
                >
                  <li
                    className="software-skill-inline-languages"
                    name={logo.name}
                  >
                    <img
                      src={require(`../../assests/icons/${logo.name}.svg`)}
                      style={{ width: 35 }}
                      alt={logo.name}
                    />
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
