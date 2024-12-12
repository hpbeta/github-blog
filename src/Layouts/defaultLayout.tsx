import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header/index";
import React from "react";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
