import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryPage() {
  const navigate = useNavigate();
  let { country } = useParams();
  return (
    <div>
      <h1>Hello in {country}!</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default CountryPage;
