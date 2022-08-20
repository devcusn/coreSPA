import { getElementById } from "../lib/document.js";

const root = getElementById("root");
const liks = getElementById("links");
const scripts = getElementById("scripts");

const initPage = (page) => {
  root.innerHTML = "<p>Merhaba</p>";
};

export default initPage;
