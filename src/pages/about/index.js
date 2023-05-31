import React from "react";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <Button label="Back to Home" onClick={() => navigate("/")} />
    </div>
  );
}
