import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../views/Home";
import { Result } from "../views/Result";
export const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};
