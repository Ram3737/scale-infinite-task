import classes from "./Email.module.css";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputContext from "./store/input-context";
import { useContext, useState } from "react";

function LastName() {
  const content = <p>Please enter some inputs</p>;
  const lastNameInputRef = useRef();
  const inputCtx = useContext(InputContext);
  const history = useHistory();
  const [helper, setHelper] = useState(false);

  function lastNameHandler(event) {
    event.preventDefault();
    if (lastNameInputRef.current.value !== "") {
      setHelper(false);
      history.push("/gender");
      localStorage.setItem("lastname", lastNameInputRef.current.value);
      inputCtx.genderInsideCircleFn(true);
    } else {
      setHelper(true);
    }
  }

  function lastNameprogressHandler(event) {
    event.preventDefault();
    history.push("/firstname");
    inputCtx.progress(60);
    inputCtx.lastNameInsideCircleFn(false);
  }

  window.onload = (event) => {
    window.location.reload(history.push("/"));
  };

  return (
    <div>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Lastname</label>
          <input type="text" id="email" required ref={lastNameInputRef} />
          {helper ? content : ""}
        </div>
      </form>
      <div className={classes.actions}>
        <button className={classes.button} onClick={lastNameprogressHandler}>
          Previous
        </button>

        <button className={classes.button} onClick={lastNameHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LastName;
