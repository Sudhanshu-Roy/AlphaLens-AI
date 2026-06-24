// src/components/CompanySelector.jsx

function CompanySelector({
  selected,
  setSelected
}) {

  const companies = [
    { name: "NVIDIA", ticker: "NVDA" },
    { name: "Apple", ticker: "AAPL" },
    { name: "Microsoft", ticker: "MSFT" },
    { name: "Amazon", ticker: "AMZN" },
    { name: "Google", ticker: "GOOGL" },
    { name: "Meta", ticker: "META" },
    { name: "Tesla", ticker: "TSLA" }
  ];

  return (
    <select
      value={selected}
      onChange={(e) =>
        setSelected(e.target.value)
      }
      className="
      w-full
      p-4
      rounded-2xl
      border
      bg-white
      shadow-sm
      "
    >
      {companies.map((company) => (
        <option
          key={company.ticker}
          value={company.ticker}
        >
          {company.name}
        </option>
      ))}
    </select>
  );
}

export default CompanySelector;