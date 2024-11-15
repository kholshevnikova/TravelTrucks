import { useState } from "react";
import css from "./FiltersList.module.css";

export default function FiltersList({ onFilterChange }) {
  const [filters, setFilters] = useState({
    location: "",
    form: "",
    features: [],
  });

  const handleInputChange = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleToggleEquipment = (item) => {
    setFilters((prev) => {
      const features = prev.features.includes(item)
        ? prev.features.filter((feature) => feature !== item)
        : [...prev.features, item];
      return { ...prev, features };
    });
  };

  const handleSetVehicleType = (type) => {
    setFilters((prev) => ({ ...prev, form: type }));
  };

  const handleSearch = () => {
    onFilterChange(filters);
  };

  return (
    <div className={css.filtersContainer}>
      <ul className={css.filterContainer}>
        <li>
          <p className={css.locationText}>Location</p>
          <div className={css.locationContainer}>
            <svg
              className={css.locationIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M19.7712 0.141029C19.8428 0.199699 19.9005 0.273527 19.94 0.357185C19.9796 0.440842 20.0001 0.53224 20 0.624779V18.1248C19.9999 18.2692 19.9498 18.4092 19.8582 18.5208C19.7666 18.6325 19.6391 18.709 19.4975 18.7373L13.2475 19.9873C13.1666 20.0034 13.0834 20.0034 13.0025 19.9873L6.875 18.7623L0.7475 19.9873C0.656861 20.0054 0.563332 20.0032 0.473651 19.9808C0.38397 19.9584 0.30037 19.9164 0.228874 19.8578C0.157378 19.7993 0.0997667 19.7255 0.0601897 19.642C0.0206127 19.5585 5.58159e-05 19.4672 0 19.3748L0 1.87478C8.72276e-05 1.73035 0.0501951 1.5904 0.141804 1.47874C0.233413 1.36708 0.360869 1.29059 0.5025 1.26228L6.7525 0.0122789C6.83337 -0.00388454 6.91663 -0.00388454 6.9975 0.0122789L13.125 1.23728L19.2525 0.0122789C19.3431 -0.00595135 19.4366 -0.00385945 19.5263 0.0184039C19.616 0.0406672 19.6997 0.0825478 19.7712 0.141029ZM12.5 2.38728L7.5 1.38728V17.6123L12.5 18.6123V2.38728ZM13.75 18.6123L18.75 17.6123V1.38728L13.75 2.38728V18.6123ZM6.25 17.6123V1.38728L1.25 2.38728V18.6123L6.25 17.6123Z"
                  fill="#6C717B"
                />
              </g>
              <defs>
                <clipPath id="clip0_12071_602">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              name="location"
              placeholder="City"
              value={filters.location}
              className={css.locationField}
              onChange={handleInputChange}
            />
          </div>
        </li>
        <li>
          <p className={css.filterText}>Filters</p>
          <div>
            <h2 className={css.vehicleText}>Vehicle equipment</h2>
            <hr className={css.line} />
            {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((item) => (
              <button
                key={item}
                onClick={() => handleToggleEquipment(item)}
                className={`${css.button} ${
                  filters.features.includes(item) ? css.activeButton : ""
                }`}
              >
                {item}
              </button>
            ))}
            <h2 className={css.vehicleText}>Vehicle type</h2>
            <hr className={css.line} />
            {["Van", "Fully integrated", "Alcove"].map((type) => (
              <button
                key={type}
                onClick={() => handleSetVehicleType(type)}
                className={`${css.button} ${
                  filters.form === type ? css.activeButton : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </li>
      </ul>
      <button onClick={handleSearch} className={css.searchButton}>
        Search
      </button>
    </div>
  );
}
