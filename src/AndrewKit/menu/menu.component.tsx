import { IMenu } from "./menu";
import React from "react";
import "./menu.css";

export default function Menu(props: IMenu) {
    return (
      <header className={`andrewkit-menu${props.darkMode ? '-dark' : ''}`} style={{
        ...props.customCSS
      }}>
        <div>{props.leftSide}</div>
        <div>{props.center}</div>
        <div>{props.rightSide}</div>
      </header>
    );
  }
  