import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import blog from "../../assests/images/1.png";
import crms from "../../assests/images/2.png";
import event from "../../assests/images/3.png";
import hrdash from "../../assests/images/4.svg";

export default function GithubRepoCard({ repo, theme, index }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const getImage = (index) => {
    if (index == 0) {
      return crms;
    } else if (index == 1) {
      return blog;
    } else if (index == 2) {
      return event;
    } else if (index == 3) {
      return hrdash;
    }
  };

  return (
    <div className="repo-card-div" style={{ backgroundColor: "#8b5cf6" }}>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          className="repo-layout"
          onClick={() => openRepoinNewTab(repo.url)}
        >
          <div style={{ flex: 1 }}>
            <div className="repo-name-div">
              <svg
                aria-hidden="true"
                className="octicon repo-svg"
                height="16"
                role="img"
                viewBox="0 0 12 16"
                width="12"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
            {repo.description?.map((item, i) => (
              <p
                title={item}
                key={i}
                className="repo-description"
                style={{ color: theme.text }}
              >
                {" "}
                {item}{" "}
              </p>
            ))}
            <div className="repo-details">
              <p
                className="repo-creation-date subTitle"
                style={{ color: theme.text, fontSize: 14 }}
              >
                Created on {repo.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
          <img
            style={{ minWidth: 100, maxWidth: 300 }}
            src={getImage(index)}
            alt="project-image"
          />
        </div>
      </Fade>
    </div>
  );
}
