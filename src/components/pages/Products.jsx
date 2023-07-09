import "../components/ProudProducts.css";
import CategoriesHeader from "../components/CategoriesHeader";
import { Outlet } from "react-router";

export default function Products() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

