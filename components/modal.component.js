import Component from "../core/class/coreComponent.js";
import modalStyle from "./modal.style.js";
import modalTemplate from "./modal.template.js";

const ModalComponent = new Component({
  selector: "modal",
  template: modalTemplate,
  style: modalStyle,
});

export default ModalComponent.build();
