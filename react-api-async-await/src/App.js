/* eslint-disable import/no-anonymous-default-export */
import './styles.css'
import React, { useState } from 'react';
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App(){
   const [ language , setLanguage ] = useState('ja');
   const [ text, setText ] = useState('Greetings');

   return(
     <div>
       <Field label="Enter English" onChange={setText} value={text} />
       <Languages language={language} onLanguageChange={setLanguage}/>
       <hr />
       <Translate text={text} language={language}/>
     </div>
   );
}