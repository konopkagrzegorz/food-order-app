import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const loadedMeals = [];
    fetch('https://food-order-app-be632-default-rtdb.europe-west1.firebasedatabase.app/meals.json')
    .then(response => response.json())
    .then(data => {
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
    }).catch(error => {
      error.message = "Something went wrong";
      setError(error);

    });
    setMeals(loadedMeals);
    setIsLoading(false);
    console.log(loadedMeals);
  },[]);

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  if(error) {
    return <section>
    <p>{error.message}</p>
  </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;