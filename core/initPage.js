import { getElementById } from "../lib/document.js";

const scripts = getElementById("scripts");

const createScript = (pageComponent) => {
  const scriptElement = document.createElement("script");
  scriptElement.type = "module";
  scriptElement.src = `./pages/${pageComponent}`;
  return scriptElement;
};

const initPage = (route) => {
  scripts.appendChild(createScript(route.pageComponent));
};

export default initPage;
