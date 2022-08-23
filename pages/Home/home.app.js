import Page from "../../core/class/Page.js";
import homeStyle from "./home.css.js";
import homeHTML from "./home.html.js";

import Modal from "../../components/modal.component.js";

const HomePage = new Page({
  pageName: "home",
  css: homeStyle,
  htmlTemplate: homeHTML,
  script: "home.app.js",
  components: [Modal],
});

export default HomePage;
