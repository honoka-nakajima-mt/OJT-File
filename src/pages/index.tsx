//import Image from "next/image";
//import { Inter } from "next/font/google";
//import { createRoot } from "react-dom/client";
//import "./styles.css"
//const inter = Inter({ subsets: ["latin"] });

import React, { StrictMode } from "react";
import Game from "./Game";

export default function Home() {
  return (
  <StrictMode>
    <Game />
</StrictMode>
  );
}
