import Card from "../card/card.component";
import { IModal } from "./modal";
import "./modal.css";
import React from "react";

export default function Modal(props: IModal) {
    return props.isOpen ? (
      <div className="andrewkit-modal">
        <Card
          customCSS={{
            zIndex: 10000,
            backgroundColor: 'white',
          }}
        >
          <button
            className="andrewkit-close-button"
            onClick={() => {
              if(props.onClose) props.onClose()
            }}
          >
            <i className="bi bi-x-circle-fill"></i>
          </button>
          <>{props.children}</>
        </Card>
      </div>
    ) : (
      <></>
    );
  }