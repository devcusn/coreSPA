class HTML {
  htmlTemplate;
  constructor(htmlTemplate) {
    this.htmlTemplate = htmlTemplate;
  }
  build() {
    return this.htmlTemplate;
  }
}

export default HTML;
