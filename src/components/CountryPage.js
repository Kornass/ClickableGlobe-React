import React from "react";
import { useParams } from "react-router-dom";

function CountryPage() {
  let { country } = useParams();
  return <div>CountryPage</div>;
}

export default CountryPage;
