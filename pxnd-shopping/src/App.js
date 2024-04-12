import React from 'react'
import { Routes, Route } from "react-router-dom";
import Main_pages from "./pages/user/Main_pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_pages />} />
      </Routes>
    </>
  );
}

export default App
