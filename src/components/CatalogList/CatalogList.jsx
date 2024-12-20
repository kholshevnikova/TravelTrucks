import { useEffect } from "react";
import css from "./CatalogList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers, addToFavorive } from "../../redux/campers/slice.js";
import { incrementPage } from "../../redux/campers/slice.js";
import { useNavigate } from "react-router-dom";
import { BsWind, BsCupHot, BsFuelPump, BsDiagram3 } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { DotLoader } from "react-spinners";

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export default function CatalogList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { campers, filters, loading, total, selectedCampers } = useSelector(
    (state) => state.campers
  );

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers({ ...filters, page: filters.page + 1 }));
  };

  const handleShowMore = (id) => {
    navigate(`/catalog/${id}`);
  };

  const handleSelectFavorite = (camperId) => {
    dispatch(addToFavorive(camperId));
  };

  if (loading) {
    return <DotLoader color="#d31f1f" className={css.loader} />;
  }
  if (!campers.length) {
    return (
      <div className={css.noCampers}>
        No campers found matching your request
      </div>
    );
  }

  return (
    <div>
      <section className={css.catalogSection}>
        <ul className={css.carList}>
          {campers.map((camper, index) => (
            <li key={`${camper.id}-${index}`} className={css.carItem}>
              <div className={css.carItemContainer}>
                <img
                  src={
                    camper.gallery?.[0]?.thumb || camper.gallery?.[0]?.original
                  }
                  alt={camper.name}
                  className={css.carImage}
                />
                <div className={css.carInfo}>
                  <div className={css.carTitleContainer}>
                    <h3 className={css.carText}>{camper.name}</h3>
                    <div className={css.priceContainer}>
                      <p className={css.carPrice}>
                        €{parseFloat(camper.price).toFixed(2)}
                      </p>
                      <BsSuitHeart
                        onClick={() => handleSelectFavorite(camper.id)}
                        className={css.addFavoriteIcon}
                        fill={
                          selectedCampers.includes(camper.id) ? "red" : "black"
                        }
                      />
                    </div>
                  </div>
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
                  <p className={css.carInfotext}>
                    {camper.description.slice(0, 60) + "..."}
                  </p>
                  <div className={css.badgesContainer}>
                    <ul className={css.badgesList}>
                      {camper.transmission && (
                        <li className={css.badgesItem}>
                          <BsDiagram3 className={css.icon} />
                          {capitalize(camper.transmission)}
                        </li>
                      )}
                      {camper.engine && (
                        <li className={css.badgesItem}>
                          <BsFuelPump className={css.icon} />
                          {capitalize(camper.engine)}
                        </li>
                      )}
                      {camper.kitchen && (
                        <li className={css.badgesItem}>
                          <BsCupHot className={css.icon} />
                          Kitchen
                        </li>
                      )}
                      {camper.AC && (
                        <li className={css.badgesItem}>
                          <BsWind className={css.icon} />
                          AC
                        </li>
                      )}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleShowMore(camper.id)}
                    className={css.showMoreButton}
                  >
                    Show more
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {filters.page * 4 < total && (
          <button onClick={handleLoadMore} className={css.loadMoreButton}>
            Load More
          </button>
        )}
      </section>
    </div>
  );
}
