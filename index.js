import { getElementById } from "../lib/document.js";
import { controlRouter } from "./Routers.js";

const root = getElementById("root");
const srcLink = getElementById("links");
const scripts = getElementById("scripts");

const home = `
<p>Hello</p>
`;

const getContent = (content) => {
  if (content == "home") {
    dynamicContent.innerHTML = home;
    let script = document.createElement("script");
    script.type = "module";
    script.src = "./static/home.js";
    scripts.append(script);
  }
};

const setRoute = (event) => {
  const url = event.target.attributes["url-data"].value;
  history.pushState({}, "", url);
  getContent(url);
};

const controlRoute = () => {
  if (true) {
    root.innerHTML = "hello World";
  }
};

Array.from(document.getElementsByClassName(["link"])).forEach((link) =>
  link.addEventListener("click", setRoute)
);

document.addEventListener("DOMContentLoaded", controlRoute);
