import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import FiltersList from "../../components/FiltersList/FiltersList";
import css from "./CatalogPage.module.css";
import { setFilters } from "../../redux/campers/slice";

export default function CatalogPage() {
  const dispatch = useDispatch();

  return (
    <div className={css.catalogPage}>
      <FiltersList
        onFilterChange={(newFilters) => dispatch(setFilters(newFilters))}
      />
      <CatalogList />
    </div>
  );
}
