import { useSelector } from "react-redux";
import css from "./Reviews.module.css";
import RatingYellow from "../../assets/RatingYellow.svg";
import RatingGray from "../../assets/RatingGray.svg";

export default function Reviews() {
  const { campers } = useSelector((state) => state.campers);
  const camper = campers.length > 0 ? campers[0] : null;

  if (!camper) {
    return <p>Loading...</p>;
  }
  const renderStars = (rating) => {
    const maxStars = 5;
    const stars = [];
    for (let index = 0; index < maxStars; index++) {
      if (index < rating) {
        stars.push(<img key={index} src={RatingYellow} />);
      } else {
        stars.push(<img key={index} src={RatingGray} />);
      }
    }
    return stars;
  };

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {camper.reviews && camper.reviews.length > 0 ? (
          camper.reviews.map((review, index) => (
            <li className={css.imageWrapper} key={index}>
              <div className={css.personContainer}>
                <div className={css.avatarIcon}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>

                <div className={css.nameWrapper}>
                  <p className={css.reviewText}>{review.reviewer_name}</p>
                  <div className={css.starsContainer}>
                    {renderStars(review.reviewer_rating)}
                  </div>
                </div>
              </div>

              <p className={css.reviewComment}>{review.comment}</p>
            </li>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </ul>
    </div>
  );
}
