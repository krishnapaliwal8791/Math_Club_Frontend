import "./Ticker.css";

const stocks = [
  { name: "TMX", change: "+2.4%" },
  { name: "BULL", change: "+1.8%" },
  { name: "BEAR", change: "-0.9%" },
  { name: "LOGIC", change: "+3.1%" },
  { name: "RISK", change: "-1.2%" },
];

function Ticker() {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {stocks.concat(stocks).map((stock, index) => (
          <span
            key={index}
            className={stock.change.includes("-") ? "down" : "up"}
          >
            {stock.name} {stock.change}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;