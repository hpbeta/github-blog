import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PostDetails } from "./pages/PostDetails";
import { DefaultLayout } from "./Layouts/defaultLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/postDetails/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
