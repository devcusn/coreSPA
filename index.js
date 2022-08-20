import { getElementById } from "./lib/document.js";
import Router from "./app/Router/Routers.js";
import initPage from "./core/initPage.js";

const root = getElementById("root");
const srcLink = getElementById("links");
const scripts = getElementById("scripts");

const setRoute = (event) => {
  const url = event.target.attributes["url-data"].value;
  history.pushState({}, "", url);
  controlRoute();
};

const controlRoute = () => {
  const url = location.pathname;
  const route = Router.find((route) => {
    return route.url === url;
  });

  if (route) {
    initPage(route);
  } else {
    root.innerHTML = "404Page";
  }
  eventListener();
};

const eventListener = () => {
  Array.from(document.getElementsByClassName(["link"])).forEach((link) =>
    link.addEventListener("click", setRoute)
  );
};
eventListener();

document.addEventListener("DOMContentLoaded", controlRoute);
