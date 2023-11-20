import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountry } from "@filteredSlice";
import { addItem, removeItem } from "@localcorsine";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Corsine } from "../Addons/Corsine";

export const Shop = (props) => {
  function animatedMe() {
    gsap.fromTo(
      "#lefthead",
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        transition: 0.2,
      }
    );
    gsap.fromTo(
      "#righthead",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        transition: 0.2,
      }
    );
  }

  useEffect(() => {
    animatedMe();
  }, []);

  const targetMarket = props.marketName;

  const dispatch = useDispatch();
  const shopitems = useSelector((state) => state.filtereditems.list);

  const corsineAdder = (items) => {
    dispatch(addItem(items));
  };

  const corsineRemove = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    dispatch(fetchCountry(targetMarket));
  }, [dispatch]);

  return (
    <section className=" text-gray-500 font-Catallina uppercase">
      <div className="container mx-auto">
        <div className="flex p-4 flex-wrap">
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={require("./img/Roman-Art-PNG-HD-Isolated.png")}
              alt="no-img"
              id="lefthead"
              className="w-2/4 md:w-3/4"
            />
          </div>
          <div
            id="righthead"
            className="flex flex-col items-center md:w-1/2 justify-center"
          >
            <div className="text-center w-2/4 md:w-2/3 ">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold text-yellow-500">
                WE HAVE COMPILED FOR YOU BEST WINES OF THE PLANET
              </h2>
              <p className="mt-4 text-xs md:text-sm lg:text-md">
                BUYING FROM US, YOU WILL ENJOY THE TASTE OF HIGH QUALITY AND
                GENUINE GRAPE BEVERAGE
              </p>
              <div className="mb-4 mt-4">
                <div className="flex justify-center">
                  <Corsine />
                </div>
              </div>
              <Link
                to={"/"}
                className="uppercase  text-purple-500 hover:text-purple-400"
              >
                - Back -
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 place-items-center p-4 sm:p-2">
            {Array.isArray(shopitems) && shopitems.length > 0 ? (
              shopitems.map((i) => (
                <div className="w-2/4 md:w-3/4" key={i._id}>
                  <img
                    src={require("./img/card.png")}
                    alt=""
                    className="rounded"
                  />
                  <div className="flex items-center flex-col mt-2 md:mt-4 text-center">
                    <div>
                      <p className="text-yellow-500 text-sm md:text-md font-bold">
                        {i.named}
                      </p>
                      <p className="text-xs md:text-sm text-center flex justify-center gap-4 mt-1">
                        <span>{i.litre} L,</span> <span>{i.country},</span>{" "}
                        <span>{i.alcohol}%</span>
                      </p>
                    </div>
                    <div className="text-sm md:text-md mt-3 flex justify-center w-full px-2 gap-4 items-center">
                      <p className=" text-white">{i.purchases} P</p>
                      <button
                        onClick={() => corsineAdder(i)}
                        className="text-white border border-white hover:text-gray-200 hover:bg-gray-100 hover:border-gray-50 hover:bg-opacity-20 px-3 py-1 rounded"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>No items...</>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
