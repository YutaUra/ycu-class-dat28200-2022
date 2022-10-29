import JupyterViewer from "react-jupyter-notebook";
import notebook from "./Lessons/Lesson2.ipynb";

function Lesson02() {
  return (
    <div className="content mt-4 mb-4 main-content">
      <h1 className="has-text-success">Lesson 02</h1>

      <JupyterViewer
        rawIpynb={notebook}
        codeBlockStyles={{ hljsStyle: "monokai" }}
      />
    </div>
  );
}

export default Lesson02;
