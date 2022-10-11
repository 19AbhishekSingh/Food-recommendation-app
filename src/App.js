import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const Cuisine = {
    indian: [
      { food: "Kadhai Paneer", rating: "4.9/5" },
      { food: "Chhole Bhature", rating: "4.6/5" },
      { food: "Samosa", rating: "4.6/5" }
    ],
    Chinease: [
      { food: "Chicken Manchurian", rating: "4.1/5" },
      { food: "Manchow Soup", rating: "3.9/5" },
      { food: "Hakka Noodles", rating: "3.5/5" }
    ],
    Italian: [
      { food: "Pasta", rating: "4/5" },
      { food: "Pizza", rating: "4.1/5" },
      { food: "Spaghetti", rating: "3.5/5" }
    ]
  };

  var country = Object.keys(Cuisine);
  var [Dishes, setFood] = useState("indian");

  function Menu(item) {
    Dishes = item;
    setFood(Dishes);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>FOOD RECOMMENDATION</h1>

      <span>
        {country.map((item) => (
          <button
            key={item}
            style={{ cursor: "pointer" }}
            onClick={() => Menu(item)}
          >
            {item}
          </button>
        ))}
      </span>
      <hr></hr>
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "1" }}>
          {Cuisine[Dishes].map((item) => (
            <li className="listoffood" key={item.food}>
              <div>{item.food}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
