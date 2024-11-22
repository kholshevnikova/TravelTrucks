import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import css from "./CamperDetail.module.css";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/slice";

export default function CamperDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) =>
    state.campers.campers.find((camper) => camper.id === id)
  );
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading camper details: {error}</div>;
  }

  if (!camper || camper.length === 0) {
    return <div>Camper not found</div>;
  }

  return (
    <section className={css.camperDetailSection}>
      <div className={css.camperDetailContainer}>
        <div className={css.camperDetail}>
          <h1 className={css.camperTitle}>{camper.name}</h1>
          <div className={css.carDetailsContainer}>
            <span>⭐️</span>
            <p className={css.carReviewsText}>
              {camper.rating} ({camper.reviewsCount} Reviews)
            </p>
            <div className={css.locationContainer}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={css.locationSvg}
              >
                <path
                  d="M15.817 0.112823C15.8743 0.159759 15.9204 0.218822 15.952 0.285748C15.9837 0.352674 16 0.425792 16 0.499823V14.4998C15.9999 14.6154 15.9598 14.7273 15.8866 14.8167C15.8133 14.906 15.7113 14.9672 15.598 14.9898L10.598 15.9898C10.5333 16.0028 10.4667 16.0028 10.402 15.9898L5.5 15.0098L0.598 15.9898C0.525489 16.0043 0.450665 16.0025 0.378921 15.9846C0.307176 15.9667 0.240296 15.9331 0.183099 15.8863C0.125903 15.8394 0.0798134 15.7804 0.0481518 15.7136C0.0164902 15.6468 4.46527e-05 15.5738 0 15.4998L0 1.49982C6.9782e-05 1.38428 0.0401561 1.27232 0.113443 1.18299C0.186731 1.09366 0.288695 1.03247 0.402 1.00982L5.402 0.00982311C5.46669 -0.00310763 5.53331 -0.00310763 5.598 0.00982311L10.5 0.989823L15.402 0.00982311C15.4745 -0.00476108 15.5493 -0.00308756 15.6211 0.0147231C15.6928 0.0325338 15.7597 0.0660382 15.817 0.112823ZM10 1.90982L6 1.10982V14.0898L10 14.8898V1.90982ZM11 14.8898L15 14.0898V1.10982L11 1.90982V14.8898ZM5 14.0898V1.10982L1 1.90982V14.8898L5 14.0898Z"
                  fill="#101828"
                />
              </svg>
              <p className={css.cardDetailText}>{camper.location}</p>
            </div>
          </div>
          <p className={css.carPrice}>€{parseFloat(camper.price).toFixed(2)}</p>
          <ul className={css.gallery}>
            {camper.gallery && camper.gallery.length > 0 ? (
              camper.gallery.map((image, index) => (
                <li className={css.imageWrapper} key={index}>
                  <img
                    key={index}
                    src={image.original || image.thumb}
                    alt={`Gallery image ${index + 1}`}
                    className={css.galleryImage}
                  />
                </li>
              ))
            ) : (
              <p>No images available</p>
            )}
          </ul>
          <p className={css.camperText}>{camper.description}</p>
        </div>
      </div>
    </section>
  );
}
