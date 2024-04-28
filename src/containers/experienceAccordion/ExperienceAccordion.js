import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord" style={{ width: "100%" }}>
        {this.props.sections.map((section) => {
          return section["experiences"].map((experience, index) => {
            return (
              <ExperienceCard
                index={index}
                totalCards={section["experiences"].length}
                experience={experience}
                theme={theme}
              />
            );
          });
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
