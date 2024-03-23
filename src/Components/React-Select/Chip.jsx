const Chip = ({ selectedCountry, remove }) => {
  return (
    <div className="chips-container">
      {selectedCountry.map((country) => (
        <div className="chip" key={country.value}>
          {country.label}
          <span className="close" onClick={()=>remove(country)}>&times;</span>
        </div>
      ))}
    </div>
  );
};
export default Chip;
