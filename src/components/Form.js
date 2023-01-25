import React from "react";

import About from "./About";

const Form = () => {
  return(
    <>
      <About />
      <div>
        <form>
          <div>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="note">Note</label>
            <textarea id="note" rows="4" cols="50" required />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
};

export default Form;