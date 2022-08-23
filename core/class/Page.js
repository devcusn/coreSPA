import { getElementById } from "../../lib/document.js";
import cssStore from "../store/cssStore.js";
class Page {
  pageName;
  css;
  script;
  htmlTemplate;
  roor;
  components;
  constructor(src) {
    this.pageName = src.pageName;
    this.css = src.css;
    this.script = src.script;
    this.htmlTemplate = src.htmlTemplate;
    this.root = getElementById("root");
    this.components = src.components;
  }
  cssBuild() {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(this.css);
    cssStore.push(styleSheet);
    document.adoptedStyleSheets = cssStore;
  }
  templateBuild() {
    this.root.innerHTML = this.htmlTemplate;
  }
  componentBuild() {
    let selector = this.components[0].componentSelector;
    const tag = document.getElementsByTagName(selector);
    tag[0].innerHTML = this.components[0].template;
  }
  build() {
    this.cssBuild();
    this.templateBuild();
    this.componentBuild();
  }
}

export default Page;
