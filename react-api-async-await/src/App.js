import "./styles.css";
import React, { useEffect, useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
// import Select from "./components/select";
import { doTranslate } from "./services/api";
import { defaultLanguage } from "./constants";
import Languages from "./components/languages";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [text, setText] = useState("Wake up, Neo! Matrix is already...");
  const language = defaultLanguage;// It is assign for pass the same value of defaultLanguage as "ja"
  const [translated, setTranslated] = useState("");

  const Dotranslation = async (input, lang) => {
    //do trnanslate using API is imported from servises/api.js
    const translated = await doTranslate(input, lang);
    setTranslated(translated);
  };

  const onChangeText = (e) => {
    const value = e.target.value;
    setText(value);
    Dotranslation(value, language);
  };
  // const onSelect = (value) => {
  //   setLanguage(value);
  //   Dotranslation(text, value);
  // };

  useEffect(() => {
    // initial load
    Dotranslation(text, language);
    console.log(text, language);
    // [] will execute 'one' time. but if remove [], it can use
  }, [text, language]);

  return (
    <div>
      <Field label="Enter English" onChange={onChangeText} value={text} />
      {/* <Select
      label="Select Language"
      text={languageMap[language]?.label}
      list={LANGUAGES}
      onChange={onSelect}
    /> */}
      <Languages />
      <hr />
      <Translate text={translated} language={language} />
    </div>
  );
}