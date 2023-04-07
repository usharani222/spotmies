"use client";
import React from "react";
import "./client_logos.css";


function ClientLogos() {
  return (
    <div className="client-logos-container">
      <div className="client-logos">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="client-logo"
            onMouseEnter={(e) => {
              e.currentTarget.parentElement.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.parentElement.style.animationPlayState =
                "running";
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogos;
