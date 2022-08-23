class Component {
  componentSelector;
  template;
  style;
  constructor(c) {
    this.componentSelector = c.selector;
    this.template = c.template;
    this.style = c.style;
  }
  build() {
    const styleSheet = new CSSStyleSheet();
    styleSheet.replaceSync(this.style);
    document.adoptedStyleSheets = [styleSheet];
    return this;
  }
}

export default Component;
