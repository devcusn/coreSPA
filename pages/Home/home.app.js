import Page from "../../core/class/Page.js";
import homeStyle from "./home.css.js";
import homeHTML from "./home.html.js";

const HomePage = new Page({
  pageName: "home",
  css: homeStyle,
  htmlTemplate: homeHTML,
  script: "home.app.js",
});

HomePage.build();
