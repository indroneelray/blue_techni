import React from "react";
import { LANG } from "../../lang";
import { LocalizeContext } from "../../store/Localiser";
import "./Header.css";

export default function Header() {

  const {lang, setLang} = React.useContext(LocalizeContext)

  return (
    <nav className="d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <img src="/assets/logo.png" alt="Bluestacks Logo" />
        <select className="form-control lang-select" value={lang} onChange={(e)=>setLang(e.target.value)}>
          {LANG.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
    </nav>
  );
}
