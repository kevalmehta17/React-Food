import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        console.log("Error")
      }
      const data = await response.json();
      setLoadedMeals(data);
      console.log("data", data);
      return data;
    }
    fetchMeals()
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/meals")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         setMeals(data);
  //       });
  //   }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
