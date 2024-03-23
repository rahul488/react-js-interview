import { useEffect, useState } from "react";
import "./Select.css";
import { countryList } from "../../constants/constant";
import Chip from "./Chip";
import useDebounce from "../../hooks/useDebounce";
const MultiSelect = () => {
  const [country, setCountry] = useState(countryList);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [countrySet, setCountryset] = useState(new Set([]));
  const [searchVal, setSearchedVal] = useState("");
  const { debounceVal } = useDebounce(searchVal);

  useEffect(() => {
    if (debounceVal?.length) {
      const suggestedCountry = countryList.filter(
        (cnt) =>
          cnt.label.toLowerCase().startsWith(debounceVal.toLowerCase()) ||
          cnt.label.toLowerCase().includes(debounceVal.toLowerCase())
      );
      setCountry(suggestedCountry);
    }
  }, [debounceVal]);

  const handleSelect = (currCountry) => {
    let updatedCountry = [
      ...country.filter((country) => country.value !== currCountry.value),
    ];
    setSelectedCountry([...selectedCountry, currCountry]);
    setCountryset(new Set([...countrySet, currCountry.value]));
    setCountry(updatedCountry);
  };
  const removeSelectCountry = (removedCountry) => {
    const currentCountryList = selectedCountry.filter(
      (cnt) => cnt.value !== removedCountry.value
    );
    setSelectedCountry(currentCountryList);
    setCountryset(new Set( currentCountryList.map((list) => list.value)));
    setCountry((prev) => {
      prev.unshift(removedCountry);
      return prev;
    });
  };
  const handleChipremove = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value.length == 0 &&
      selectedCountry.length > 0
    ) {
      removeSelectCountry(selectedCountry[selectedCountry.length - 1]);
      setSearchedVal("");
    }
  };
  const handleOnchange = (e) => {
    if (e.target.value.length > 0) {
      setSearchedVal(e.target.value);
    } else {
      setSearchedVal("");
      setCountry((prv)=>countryList.filter((cntr)=>!countrySet.has(cntr.value)))
    }
  };
  console.log(countrySet,country,'ll')
  return (
    <div className="select-container">
      <div className="select-inner-container">
        <Chip selectedCountry={selectedCountry} remove={removeSelectCountry} />
        <input
          type="text"
          placeholder="Select Country"
          className="select-input"
          value={searchVal}
          onChange={handleOnchange}
          onKeyDown={handleChipremove}
        />
      </div>
      <div className="options-container">
        {country.map((country) => {
          return !countrySet.has(country.value) ? (
            <div
              className="option"
              key={country.value}
              onClick={() => handleSelect(country)}
            >
              <p>{country.label}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
export default MultiSelect;
