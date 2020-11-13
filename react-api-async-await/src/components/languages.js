/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { defaultLanguage, LANGUAGES, languageMap } from "../constants";

const Languages = ({ language = defaultLanguage, onLanguageChange }) => {
  const languageConfig = languageMap[language];
  console.log(languageConfig);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`)
  }
  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <React.Fragment>
      <label className="label">Select Language</label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  key={value}
                  href="#"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Languages;