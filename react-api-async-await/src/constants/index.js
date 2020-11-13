/** Constants for using api & doing select languages */ 

// To assign apiUrl & apiKey
const apiUrl =  "https://translation.googleapis.com/language/translate/v2";
const apiKey =  "AIzaSyBRrOoUb1h2iD46qFp_1ADDLEXysV9mlYFM";
export const url = `${apiUrl}?Key=${apiKey}`;

// To assign default value of Language in dropdown menu
export const defaultLanguage = "ja";

// To store languageMap as an object
export const  languageMap = {
  af: { label: "Afrikaans", value: "af" },
  ar: { label: "Arabic", value: "ar" },
  fr: { label: "French", value: "fr" },
  hi: { label: "Hindi", value: "hi" },
  ja: { label: "Japanese", value: "ja" },
  pt: { label: "Portuguese", value: "pt" },
  ru: { label: "Russian", value: "ru" },
  "zh-CN": { label: "Simplified Chinese", value: "zh-CN" },
  es: { label: "Spanish", value: "es" },
  sw: { label: "Swahili", value: "sw" },
  th: { label: "Thai", value: "th" }
};

export const LANGUAGES = Object.value(languageMap);
// ↓↓↓↓↓↓ reference of " Object.value()" ↓↓↓↓↓↓↓　
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values



