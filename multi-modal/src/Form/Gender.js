import classes from "./Email.module.css";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import InputContext from "./store/input-context";
import { useContext, useState } from "react";

function Gender() {
  const content = <p>Please enter some inputs</p>;
  const genderInputRef = useRef();
  const inputCtx = useContext(InputContext);
  const history = useHistory();
  const [helper, setHelper] = useState(false);

  function genderHandler(event) {
    event.preventDefault();
    if (genderInputRef.current.value !== "") {
      setHelper(false);
      localStorage.setItem("gender", genderInputRef.current.value);

      const [email, firstname, lastname, gender] = inputCtx.userInputArray;
      alert(
        `Email : ${localStorage.getItem(
          "email"
        )}\n Firstname : ${localStorage.getItem(
          "firstname"
        )}\n Lastname : ${localStorage.getItem(
          "lastname"
        )}\n Gender : ${localStorage.getItem("gender")}`
      );
      localStorage.clear();
      window.location.reload(history.push("/"));
    } else {
      setHelper(true);
    }
  }

  function previousHandler(event) {
    event.preventDefault();
    history.push("/lastname");
    inputCtx.genderInsideCircleFn(false);
  }

  return (
    <div>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Gender</label>
          <input type="text" id="email" required ref={genderInputRef} />
          {helper ? content : ""}
        </div>
      </form>
      <div className={classes.actions}>
        <button className={classes.button} onClick={previousHandler}>
          Previous
        </button>

        <button className={classes.button} onClick={genderHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Gender;
