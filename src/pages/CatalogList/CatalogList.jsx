import css from "./CatalogList.module.css";

// import { fetchCampers } from "../../redux/campers/operation";
import { BsWind, BsDiagram3 } from "react-icons/bs";

export default function CatalogList() {
  return (
    <section className={css.catalogSection}>
      <div className={css.catalogContainer}>
        <div className={css.locationContainer}>
          <label>
            <input
              className={css.locationInput}
              type="text"
              placeholder="Location"
              // onChange={handleChange}
              name="location"
              // value={filters.location}
            />
          </label>
        </div>
        <div className={css.equipmentContainer}>
          <h3 className={css.filterText}>Vehicle equipment</h3>
          <ul className={css.filterList}>
            <li className={css.filterListItem}>
              <BsWind className={css.icon} />
              <p className={css.filterListText}>AC</p>
            </li>
            <li className={css.filterListItem}>
              <BsDiagram3 className={css.icon} />
              <p className={css.filterListText}>Automatic</p>
            </li>

            <li className={css.filterListItem}>
              <p>Kitchen</p>
            </li>
            <li className={css.filterListItem}>
              <p>TV</p>
            </li>
            <li
              type="button"
              name="Bathroom"
              // onClick={filters.equipment.bathroom}
              // onChange={handleFilterChange}
              // className={css.filterListItem}
            >
              Bathroom
            </li>
          </ul>
        </div>
        <div className={css.typeContainer}>
          <h3 className={css.filterText}>Vehicle type</h3>
        </div>
        <button
          className={css.searchButton}
          // onClick={() => dispatch(fetchCampers(filters))}
        >
          Search
        </button>
      </div>
      <main>
        <ul className={css.carList}></ul>
      </main>
    </section>
  );
}
