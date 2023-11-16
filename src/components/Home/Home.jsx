import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { Categories } from "./Categories/Categories";

export const Home = () => {
  return (
    <section>
      <Header />
      <Categories />

      <Link className="absolute top-0 bg-red-400 text-white p-2" to="/admin">
        admin
      </Link>
    </section>
  );
};
