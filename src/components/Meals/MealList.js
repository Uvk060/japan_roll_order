import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dragon roll",
    description:
      "Shrimp tempura and fresh cucumber roll , topped with fresh avocado, BBQ eel , crab meat, tobiko, garnished with fresh green scallion and roast sesame",
    price: 11.75,
  },
  {
    id: "m2",
    name: "Sunset California roll",
    description:
      "Shrimp tempura and fresh cucumber roll, topped with escolar, avocado and tobiko, garnished with baby bean sprou.",
    price: 14.75,
  },
  {
    id: "m3",
    name: "Cherry blossom",
    description:
      "Fatty Salmon and fresh avocado roll topped with fresh tuna, presented as Cherry Blossom with Ikura at the center.",
    price: 15.75,
  },
  {
    id: "m4",
    name: "Chef roll",
    description:
      "Lightly smeared Wagyu beef on top of fresh avocado, salmon and imitation crab meat roll, garnished with fresh green scallion and roast sesame",
    price: 23.95,
  },
  {
    id: "m5",
    name: "Golden tuna roll",
    description:
      "Deep-fried Spicy tuna roll topped with spicy mayo sauce and roast sesame.",
    price: 13.75,
  },
  {
    id: "m6",
    name: "Rock-n-Roll",
    description: "Smoked salmon , fresh avocado and cream cheese roll.",
    price: 9.75,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
