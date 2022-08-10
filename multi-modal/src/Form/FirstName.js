import classes from "./Email.module.css";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputContext from "./store/input-context";
import { useContext, useState, useEffect } from "react";

function FirstName() {
  const content = <p>Please enter some inputs</p>;
  const inputCtx = useContext(InputContext);
  const firstNameInputRef = useRef();
  const history = useHistory();
  const [helper, setHelper] = useState(false);

  function firstNameHandler(event) {
    event.preventDefault();
    if (firstNameInputRef.current.value !== "") {
      setHelper(false);
      history.push("/lastname");
      localStorage.setItem("firstname", firstNameInputRef.current.value);
      inputCtx.progress(90);
      inputCtx.lastNameInsideCircleFn(true);
    } else {
      setHelper(true);
    }
  }

  function firstNameprogressHandler(event) {
    event.preventDefault();
    history.push("/email");
    inputCtx.progress(30);
    inputCtx.firstNameInsideCircleFn(false);
  }

  window.onload = (event) => {
    window.location.reload(history.push("/"));
  };

  return (
    <div>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">firstname</label>
          <input type="text" id="email" required ref={firstNameInputRef} />
          {helper ? content : ""}
        </div>
      </form>
      <div className={classes.actions}>
        <button className={classes.button} onClick={firstNameprogressHandler}>
          Previous
        </button>

        <button className={classes.button} onClick={firstNameHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default FirstName;
