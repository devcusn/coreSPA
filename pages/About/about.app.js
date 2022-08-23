import Page from "../../core/class/Page.js";
import homeStyle from "./about.css.js";
import homeHTML from "./about.html.js";

const AboutPage = new Page({
  pageName: "about",
  css: homeStyle,
  htmlTemplate: homeHTML,
  script: "about.app.js",
});

export default AboutPage;
