import Modal from "./Model";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandeler() {
    setModalIsOpen(true);
  }
  function closeModelHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h1>{props.text}</h1>
      <div className="actions">
        <button className="btn" onClick={deleteHandeler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModelHandler} />}
    </div>
  );
}

export default Todo;
