import { useNavigate } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <main>
      <section className={css.homePageSection}>
        <div className={css.container}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
          <button onClick={handleClick} className={css.heroButton}>
            View Now
          </button>
        </div>
      </section>
    </main>
  );
}
