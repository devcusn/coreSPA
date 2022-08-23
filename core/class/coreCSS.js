import cssStore from "../store/cssStore.js";

class CSS {
  css;
  constructor(css) {
    this.css = css;
  }
  build() {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(this.css);
    cssStore.push(...cssStore, styleSheet);
    return this.css;
  }
}
export default CSS;
