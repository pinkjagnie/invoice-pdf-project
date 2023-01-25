import React, { useRef } from "react";

import About from "./About";

import styles from "./form.module.css";

const Form = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const noteRef = useRef(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredNote = noteRef.current.value;

    console.log(enteredName, enteredEmail, enteredNote);

    nameRef.current.value = "";
    emailRef.current.value = "";
    noteRef.current.value = "";
  }

  return(
    <>
      <About />
      <div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="note">Note</label>
            <textarea id="note" rows="4" cols="50" required ref={noteRef} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
};

export default Form;