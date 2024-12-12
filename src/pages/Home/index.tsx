import { Posts } from "../Posts/index";
import { Profile } from "../Profile/index";
import React from "react";

export function Home() {
  return (
    <>
      <Profile />
      <Posts />
    </>
  );
}
