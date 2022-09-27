import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>JAPANESE FOOD in San Francisco</h2>
      <p>
        At Sacura Sushi, we bring you the contemporary fine dining ambiance,
        relaxing, quiet and wonderful experience.We pride ourselves on serving
        the most authentic and excellently prepared Japanese sushi.
      </p>
      <p>
        We hope your enjoy your time spent at Rocket Sushi as much as we love
        having you here.
      </p>
    </section>
  );
};

export default PromoText;
