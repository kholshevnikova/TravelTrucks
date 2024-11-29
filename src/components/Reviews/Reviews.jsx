import { useSelector } from "react-redux";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { campers } = useSelector((state) => state.campers);
  const camper = campers.length > 0 ? campers[0] : null;
  return <div className={css.reviewsContainer}></div>;
}
