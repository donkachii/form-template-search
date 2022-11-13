import React from "react";

const Select = ({ template }) => {
  //   const [selectedIndustry, setSelectedIndustry] = useState("");

  //   const filterByIndustry = (filteredData) => {
  //     // Avoid filter for empty string
  //     if (!selectedIndustry) {
  //       return filteredData;
  //     }

  //     const filteredIndustry = filteredData?.filter(
  //       (data) => data.industry.split(" ").indexOf(selectedIndustry) !== -1
  //     );
  //     return filteredIndustry;
  //   };

  return (
    <div className="select">
      <select>
        <option value="Default">All</option>
      </select>
    </div>
  );
};

export default Select;
