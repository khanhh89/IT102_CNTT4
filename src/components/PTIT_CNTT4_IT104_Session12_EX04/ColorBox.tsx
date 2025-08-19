import React from "react";

const colors = ["red", "blue", "green"];

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {colors.map((color, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Box
          </div>
          <div
            style={{
              border: "1px solid pink",
              padding: "5px",
              borderRadius: "4px"
            }}
          >
            {color}
          </div>
        </div>
      ))}
    </div>
  );
}
