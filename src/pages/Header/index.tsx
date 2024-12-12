import imageCover from "../../assets/cover.png";
import { ImageCover } from "./styles";
import React from "react";


export function Header() {
  return <ImageCover src={imageCover} alt="" />;
}
