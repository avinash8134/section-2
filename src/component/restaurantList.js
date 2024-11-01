// RestaurantList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";


const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/listview/");
        setRestaurants(response.data);
        console.log(response.data);
      } catch (error) {
        setError("fetching error" + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="data">
      <h1>Restaurant List</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong>-Rating:{restaurant.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
