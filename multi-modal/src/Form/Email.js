import classes from "./Email.module.css";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputContext from "./store/input-context";

function Email() {
  const content = <p>Please enter some inputs</p>;
  const inputCtx = useContext(InputContext);
  const history = useHistory();

  const [helper, setHelper] = useState(false);

  const emailInputRef = useRef();

  function emailHandler(event) {
    event.preventDefault();

    if (emailInputRef.current.value !== "") {
      setHelper(false);
      history.push("/firstname");
      localStorage.setItem("email", emailInputRef.current.value);
      inputCtx.progress(60);
      inputCtx.firstNameInsideCircleFn(true);
    } else {
      setHelper(true);
    }
  }

  return (
    <div>
      <form>
        <div className={classes.control}>
          <label className={classes.label} htmlFor="email">
            Your Email
          </label>
          <input type="email" id="email" required ref={emailInputRef} />
          {helper ? content : ""}
        </div>
      </form>
      <div className={classes.actions}>
        <button className={classes.button} onClick={emailHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Email;
