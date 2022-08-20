class Page {
  pageName;
  link;
  js;
  htmlTemplate;

  constructor(src) {
    this.pageName = src.pageName;
    this.link = src.link;
    this.js = src.js;
    this.htmlTemplate = src.html;
  }
}

export default Page;
