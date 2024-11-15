import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./CamperDetail.module.css";

export default function CamperDetail() {
  const { id } = useParams();
  const camper = useSelector((state) =>
    state.campers.campers.find((item) => item.id === id)
  );

  if (!camper) {
    return <div>Camper not found</div>;
  }

  return (
    <div className={css.camperDetail}>
      <h1>{camper.name}</h1>
      <div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img key={index} src={image.original} alt={camper.name} />
        ))}
      </div>
      <p>{camper.description}</p>
      <ul>
        {camper.equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Add booking form and reviews */}
    </div>
  );
}
