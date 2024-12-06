import { useSelector } from "react-redux";
import css from "./Features.module.css";
import {
  BsWind,
  BsCupHot,
  BsFuelPump,
  BsDiagram3,
  BsUiRadios,
} from "react-icons/bs";
import { LuRefrigerator, LuMicrowave } from "react-icons/lu";
import { IoWaterOutline } from "react-icons/io5";
import Form from "../Form/Form";

export default function Features() {
  const { campers } = useSelector((state) => state.campers);
  const camper = campers.length > 0 ? campers[0] : null;
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const formatVehicleType = (type) => {
    const typeMap = {
      panelTruck: "Panel truck",
      alcove: "Alcove",
      fullyIntegrated: "Fully integrated",
    };
    return typeMap[type] || type;
  };

  return (
    <div>
      <section className={css.featuresSection}>
        <div className={css.featuresContainer}>
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
              {camper.radio && (
                <li className={css.badgesItem}>
                  <BsUiRadios className={css.icon} />
                  Radio
                </li>
              )}
              {camper.refrigerator && (
                <li className={css.badgesItem}>
                  <LuRefrigerator className={css.icon} />
                  Refrigerator
                </li>
              )}
              {camper.microwave && (
                <li className={css.badgesItem}>
                  <LuMicrowave className={css.icon} />
                  Microwave
                </li>
              )}
              {camper.gas && (
                <li className={css.badgesItem}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={css.icon}
                  >
                    <path
                      d="M8 25.3334H13.3333M24 25.3454V25.3334M2.66667 8.00002C2.66667 3.58669 3.58667 2.66669 8 2.66669H24C28.4133 2.66669 29.3333 3.58669 29.3333 8.00002V24C29.3333 28.4134 28.4133 29.3334 24 29.3334H8C3.58667 29.3334 2.66667 28.4134 2.66667 24V8.00002Z"
                      stroke="#101828"
                    />
                    <path
                      d="M16 18.6667C18.9455 18.6667 21.3333 16.2789 21.3333 13.3333C21.3333 10.3878 18.9455 8 16 8C13.0545 8 10.6667 10.3878 10.6667 13.3333C10.6667 16.2789 13.0545 18.6667 16 18.6667Z"
                      stroke="#101828"
                    />
                    <path
                      d="M20.6667 13.3334H22.6667M16 18V20M11.3333 13.3334H9.33333M16 8.66669V6.66669"
                      stroke="#101828"
                    />
                  </svg>
                  Gas
                </li>
              )}
              {camper.water && (
                <li className={css.badgesItem}>
                  <IoWaterOutline className={css.icon} />
                  Water
                </li>
              )}
            </ul>
          </div>
          <h3 className={css.vehicleText}>Vehicle details</h3>
          <hr className={css.line} />
          <ul className={css.detailsList}>
            <li className={css.detailsContainer}>
              <p>Form</p>
              <p>{formatVehicleType(camper.form)}</p>
            </li>
            <li className={css.detailsContainer}>
              <p>Length</p>
              <p>{camper.length}</p>
            </li>
            <li className={css.detailsContainer}>
              <p>Width</p>
              <p>{camper.width}</p>
            </li>
            <li className={css.detailsContainer}>
              <p>Height</p>
              <p>{camper.height}</p>
            </li>
            <li className={css.detailsContainer}>
              <p>Tank</p>
              <p>{camper.tank}</p>
            </li>
            <li className={css.detailsContainer}>
              <p>Consumption</p>
              <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
        <Form />
      </section>
    </div>
  );
}
