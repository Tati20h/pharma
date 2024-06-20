import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../views/Home";
import { Result } from "../views/Result";
export const BaseRouter = () => {
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home name={name} setName={setName} />} />
        <Route
          path="/result/:id"
          element={<Result name={name} setName={setName} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
