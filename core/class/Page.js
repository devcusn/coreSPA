class Page {
  pageName;
  link;
  script;
  htmlTemplate;

  constructor(src) {
    this.pageName = src.pageName;
    this.link = src.link;
    this.script = src.script;
    this.htmlTemplate = src.htmlTemplate;
  }
}

export default Page;
