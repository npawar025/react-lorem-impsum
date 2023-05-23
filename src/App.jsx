import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [numberOfPara, setNumberOfPara] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    let amount = parseInt(numberOfPara);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleChange}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={numberOfPara}
          onChange={(e) => setNumberOfPara(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
