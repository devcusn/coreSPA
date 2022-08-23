import CSS from "../../core/class/coreCSS.js";

const style = new CSS(/*css*/ `.modal {
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: 600px;
  background-color: #fafafa;
  box-shadow: 0px 0px 10px 1px #dbdada;
  border-radius: 15px;
  height: 60%;
}
`);

export default style.build();
