import { useSelector, useDispatch } from "react-redux";
import { removeItem, removeAll } from "@localcorsine";
import { Link } from "react-router-dom";

export const Order = () => {
  const dispatch = useDispatch();
  const corsine = useSelector((state) => state.corsine.corsine);

  const corsineRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <section className="font-Catallina uppercase text-gray-500">
      <div className="container flex flex-col gap-4 justify-center items-center mx-auto md:h-screen py-8">
        <Link to={"/"} className="hover:text-gray-400 text-xs">
          BACK
        </Link>
        <div className="border md:border-2 border-white p-3 rounded flex flex-col gap-4 overflow-auto outline-none">
          {Object.keys(corsine.items).length > 0 ? (
            Object.keys(corsine.items).map((id) => {
              const tempItem = corsine.items[id].product;
              return (
                <div
                  className="flex gap-6 items-center justify-between"
                  key={tempItem._id}
                >
                  <img
                    src={require("./img/card.png")}
                    alt="noneimg"
                    className="w-12 md:w-16 lg:w-20"
                  />
                  <div>
                    <div className="flex flex-col gap-2">
                      <p className="text-yellow-500 text-sm md:text-md">
                        {tempItem.named}
                      </p>
                      <div className="flex justify-between text-xs">
                        <p>{tempItem.type}</p>
                        <p>{tempItem.litre}</p>
                        <p>{tempItem.alcohol}</p>
                      </div>
                      <div className="flex justify-center text-sm md:text-md">
                        <p>{tempItem.country}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1 text-sm md:text-md">
                    <p>{tempItem.purchases} P</p>
                    <p className="text-xs">{corsine.items[id].quales} шт.</p>
                  </div>
                  <button
                    onClick={() => corsineRemove(tempItem._id)}
                    className="border border-white rounded-full w-6 h-6 text-red-600 hover:text-red-400 transition-all text-center flex items-center justify-center"
                  >
                    <span className="text-xs hover:text-sm transition-all">
                      X
                    </span>
                  </button>
                </div>
              );
            })
          ) : (
            <>Корзина пуста</>
          )}
        </div>
        <button
          onClick={() => {
            alert("Заказ оформлен");
            dispatch(removeAll());
          }}
          className="text-xs hover:text-green-400"
        >
          knopka ok
        </button>
      </div>
    </section>
  );
};
