import React from "react";
import {LanguageContext} from "../contexts/LanguageContext";


const LanguageSwitchButton = () => {
    const {language, changeLanguage} = React.useContext(LanguageContext);
  const [isLangTR, setIsLangTR] = React.useState(language === "tr");
  
  const handleLangChange = () => {
    setIsLangTR(!isLangTR);
    changeLanguage(isLangTR? "en": "tr");
  };
  return (
    <button
      onClick={handleLangChange}
      className="flex items-center justify-center text-lg font-semibold"
    >
      <div className= {`${isLangTR? "bg-primary-500": "bg-secondary-500"} w-12 h-3 border border-white rounded-full relative flex items-center justify-center`}>
        <div
          className={`${
            isLangTR
              ? "-translate-x-4 bg-primary-700"
              : "translate-x-4 bg-secondary-700 "
          }  transform duration-500 border border-white  w-7 h-7 absolute rounded-full flex items-center justify-center `}
        >
          <span
            className={` ${
              isLangTR ? " rotate-0" : " rotate-180"
            } transform duration-500 text-xs text-center text-white font-extrabold`}
          >
            <p className={` ${isLangTR ? "block" : "hidden"} rotate-0`}>TR</p>
            <p className={` ${!isLangTR ? "block" : "hidden"} rotate-180`}>
              EN
            </p>
          </span>
        </div>


      </div>
    </button>
  );
};



export default LanguageSwitchButton;
