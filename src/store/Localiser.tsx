import React, { Dispatch, SetStateAction } from "react";
import { deMessages, enMessages, frMessages, LANG } from "../lang";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const LocalizeContext = React.createContext<{
  setLang: Dispatch<SetStateAction<string>>;
  lang: string;
  messages: { [key: string]: string };
}>({
  setLang: () => {},
  lang: LANG[0],
  messages: enMessages,
});

export const LocalizeProvider = ({ children }: Props) => {
  const [lang, setLang] = React.useState<string>(LANG[0]);
  const [messages, setMessages] =
    React.useState<{ [key: string]: string }>(enMessages);

  const handleLangChange = (lang:string) => {
    switch (lang) {
      case LANG[0]: //en
        return setMessages(enMessages);
      case LANG[1]: //fr
        return setMessages(frMessages);
      case LANG[2]: //de
        return setMessages(deMessages);
    }
  };

  React.useEffect(() => {
    handleLangChange(lang);
  }, [lang]);

  return (
    <LocalizeContext.Provider
      value={{
        messages,
        setLang,
        lang
      }}
    >
      {children}
    </LocalizeContext.Provider>
  );
};
