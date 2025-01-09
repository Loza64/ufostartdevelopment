import { useState } from "react";
import { ContextConsumer } from "../../Context/ContextConsumer";
import Modal from "./Modal";

export default function Questions() {

  const [state, setstate] = useState(false);
  const [responce, setresponce] = useState("");
  const [Topic, setTopic] = useState("");
  const { Questions } = ContextConsumer();

  return (
    <section className="questions">
      <h2>Preguntas frecuentes</h2>
      <div className="list">
        {
          Questions.map((item, index) => {
            return (
              <div key={index} className="item" onClick={() => { setstate(true); setresponce(item.response); setTopic(item.question) }}>
                <label className="topic">{item.question}<i className="fa fa-angle-down buttom-question" /></label>
              </div>
            );
          })
        }
        <Modal modal={state} closemodal={setstate} responce={responce} topic={Topic} />
      </div>
    </section>
  );
}