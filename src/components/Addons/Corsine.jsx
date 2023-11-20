import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Corsine = () => {
  const corsine = useSelector((state) => state.corsine.corsine);
  return (
    <Link
      to="/corsine"
      className="uppercase flex flex-col items-center gap-2 justify-center cursor-pointer hover:scale-105 transition-all"
    >
      <img src={require("./img/corsine.png")} alt="no-img" className="w-12" />
      <p className="text-sm flex gap-2 text-gray-600">
        {Object.keys(corsine.items).length}
        <span className="text-yellow-500 text-xs">
          bottles <br />
          of wine
        </span>
      </p>
    </Link>
  );
};
