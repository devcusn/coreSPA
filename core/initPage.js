import { getElementById } from "../lib/document.js";

const root = getElementById("root");
const liks = getElementById("links");
const scripts = getElementById("scripts");

const createScript = (pageName, script) => {
  const scriptElement = document.createElement("script");
  scriptElement.type = "module";
  scriptElement.src = `./pages/${pageName}/${script}`;
  return scriptElement;
};
const createLink = (pageName, link) => {
  const linkElement = document.createElement("link");
  linkElement.href = `./pages/${pageName}/${link}`;
  linkElement.rel = "stylesheet";
  linkElement.type = "text/css";

  return linkElement;
};

const initPage = (route) => {
  scripts.appendChild(createScript(route.page.pageName, route.page.script));
  liks.appendChild(createLink(route.page.pageName, route.page.link));
  root.innerHTML = route.page.htmlTemplate;
};

export default initPage;
