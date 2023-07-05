import React, { useEffect, useState } from "react";
//Api
import { getData } from "../services/api";
//Components
import Loader from "./Loader";
import Coin from "./Coin";
const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getData();
      console.log(data);
      setCoins(data);
    };
    fetchApi();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search Coin"
        onChange={handleChange}
        value={search}
      />
      <div>
        {coins.length ? (
          filteredCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Landing;
