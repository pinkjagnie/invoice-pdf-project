import React, { useState } from "react";

import About from "./About";
import GeneratedPdf from "./GeneratedPdf";

import styles from "./form.module.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredNote, setEnteredNote] = useState("")

  const [completedForm, setCompletedForm] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName, enteredEmail, enteredNote)

    setCompletedForm(true)
  }

  return(
    <>
    {!completedForm && <section>
      <About />
      <div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required value={enteredEmail} onChange={event => setEnteredEmail(event.target.value)}/>
          </div>
          <div className={styles.control}>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" required value={enteredQuantity} onChange={event => setEnteredQuantity(event.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="note">Note</label>
            <textarea id="note" rows="4" cols="50" required value={enteredNote} onChange={event => setEnteredNote(event.target.value)}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
      </section>}
      {completedForm && <GeneratedPdf enteredName={enteredName} enteredEmail={enteredEmail} enteredQuantity={enteredQuantity} enteredNote={enteredNote} />}
    </>
  )
};

export default Form;