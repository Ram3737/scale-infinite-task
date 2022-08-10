import React, { useState, useEffect, useCallback } from "react";

const InputContext = React.createContext({
  userInput: {},
});

export const InputContextProvider = (props) => {
  let userInputArray = [];

  let [progressValue, setProgressValue] = useState(+30);
  let [firstNameInsideCircle, setFirstNameInsideCircle] = useState(false);
  let [lastNameInsideCircle, setLastNameInsideCircle] = useState(false);
  let [genderInsideCircle, setGenderInsideCircle] = useState(false);

  const progress = function (value) {
    setProgressValue(value);
  };

  const firstNameInsideCircleFn = function (value) {
    setFirstNameInsideCircle(value);
  };

  const lastNameInsideCircleFn = function (value) {
    setLastNameInsideCircle(value);
  };

  const genderInsideCircleFn = function (value) {
    setGenderInsideCircle(value);
  };

  const contextValue = {
    userInputArray: userInputArray,
    progress: progress,
    progressValue: progressValue,
    firstNameInsideCircleFn: firstNameInsideCircleFn,
    lastNameInsideCircleFn: lastNameInsideCircleFn,
    genderInsideCircleFn: genderInsideCircleFn,
    firstNameInsideCircle: firstNameInsideCircle,
    lastNameInsideCircle: lastNameInsideCircle,
    genderInsideCircle: genderInsideCircle,
  };

  return (
    <InputContext.Provider value={contextValue}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputContext;
