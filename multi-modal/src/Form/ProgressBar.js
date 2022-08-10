import classes from "./Email.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import InputContext from "./store/input-context";
import { useContext } from "react";

function ProgressBar() {
  const history = useHistory();

  const inputCtx = useContext(InputContext);

  return (
    <section>
      <div className={classes.progressSection}>
        <progress value={inputCtx.progressValue} max="100"></progress>
        <div className={classes.progressCircle}>
          <ul>
            <li>
              <div className={classes.insideCircle}></div>
            </li>

            <li>
              <div
                className={
                  classes[inputCtx.firstNameInsideCircle ? "insideCircle" : ""]
                }
              ></div>
            </li>
            <li>
              <div
                className={
                  classes[inputCtx.lastNameInsideCircle ? "insideCircle" : ""]
                }
              ></div>
            </li>
            <li>
              <div
                className={
                  classes[inputCtx.genderInsideCircle ? "insideCircle" : ""]
                }
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
