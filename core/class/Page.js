import { getElementById } from "../../lib/document.js";

class Page {
  pageName;
  css;
  script;
  htmlTemplate;
  roor;
  constructor(src) {
    this.pageName = src.pageName;
    this.css = src.css;
    this.script = src.script;
    this.htmlTemplate = src.htmlTemplate;
    this.root = getElementById("root");
  }
  cssBuild() {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(this.css);
    document.adoptedStyleSheets = [styleSheet];
  }
  templateBuild() {
    this.root.innerHTML = this.htmlTemplate;
  }
  build() {
    this.cssBuild();
    this.templateBuild();
  }
}

export default Page;
