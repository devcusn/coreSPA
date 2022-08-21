import HTML from "../../core/class/coreHTML.js";

const template = new HTML(/*html*/ `
<div class="container-fluid flex-center" >
  <div class='modal'>
    <div class='modal_title'>coreSPA</div>
    <div class='modal_content'>
      <div> Welcome To coreSPA</div>
      <div> Minimalist Single Page Aplication JavaScript library</div>
    </div>
    <div class='modal_footer'>
      <a href='https://github.com/devcusn/coreSPA'>Source Code</a>
      <a class='blue' href='https://github.com/devcusn/coreSPA/blob/main/README.md'>Documentation</a>
    </div>
  </div>
</div>
`);
export default template.build();
