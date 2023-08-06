import React, { useState } from "react";

const Dropdown = () => {
  // State to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle the dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="border rounded-lg py-1">
      <select
        id="dropdown"
        className="rounded-lg p-[5px] text-center mx-[10px] w-56 font-poppins font-semibold  "
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="" className="hover:bg-[#00B3FF]">USD</option>
        <option value="option1" className="hover:bg-[#00B3FF]">INR</option>
        <option value="option2" className="hover:bg-[#00B3FF]">EURO</option>
        <option value="option3" className="hover:bg-[#00B3FF]">Dirham</option>
      </select>
    </div>
  );
};

export default Dropdown;
