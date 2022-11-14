import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./select.css";

const Select = ({ type }) => {
  const template = useSelector((state) => state.template);

  const [selectedIndustry, setSelectedIndustry] = useState("");

  const filterByIndustry = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedIndustry) {
      return filteredData;
    }

    const filteredIndustry = template.templateItems?.filter(
      (data) => data.category.split(" ").indexOf(data) !== -1
    );
    return filteredIndustry;
  };

  console.log(filterByIndustry);

  return (
    <div className="select">
      <fieldset className="select_field">
        <legend>{type}</legend>
        <select>
          <option>All</option>
        </select>
      </fieldset>
    </div>
  );
};

export default Select;
