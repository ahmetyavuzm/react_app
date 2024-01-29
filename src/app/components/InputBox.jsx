"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const InputBox = ({
  className = "",
  type = "text",
  placeholder = "",
  validationRegex = undefined,
  onChange = () => {},
}) => {
  const [isFocused, setIsFocused] = React.useState(undefined);
  const [firstFocus, setFirstFocus] = React.useState(true);
  const [isValid, setIsValid] = React.useState(undefined);
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        setIsFocused(true);
      });

      inputRef.current.addEventListener("blur", () => {
        setIsFocused(false);
        setFirstFocus(false);
      });
    }
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    if (validationRegex) {
      setIsValid(validationRegex.test(e.target.value));
    }
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <div className="flex items-center relative w-full h-auto">
        <input
          ref={inputRef}
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          className={` ${
            isFocused === undefined ||
            firstFocus === true ||
            isValid === undefined
              ? "ring-darktext  focus:ring-primary-400"
              : isValid
              ? "ring-green-400"
              : "ring-red-400"
          } rounded-lg py-2 px-4 w-full bg-black ring-1 outline-none focus:`}
        />
        {isFocused !== undefined &&
        firstFocus === false &&
        isValid !== undefined ? (
          !isValid ? (
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="absolute right-4 text-red-400 "
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="absolute right-4 text-green-400"
            />
          )
        ) : null}
      </div>
    </div>
  );
};

export default InputBox;
