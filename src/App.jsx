import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { checkFixLang, editTitle } from "./locales/lang";
import i18n from "./locales/i18n";
import Layout from "./layouts/Layout";

function App() {
  const lang = i18n.language;
  useEffect(() => {
    editTitle(lang);
    checkFixLang(lang);
  }, [lang]);

  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

export default App;
